//! HTTP handlers.
use axum::{
	extract::{State, TypedHeader},
	headers::{authorization::Bearer, Authorization},
	http::StatusCode,
	Json,
};
use sqlx::PgPool;

use crate::auth::{create_access_token, decode_access_token, hash_password, verify_password};
use crate::config::Config;
use crate::error::ApiError;
use crate::models::User;
use crate::schemas::{LoginRequest, RegisterRequest, TokenResponse, UserResponse};
use crate::state::AppState;

pub async fn register(
	State(state): State<AppState>,
	Json(payload): Json<RegisterRequest>,
) -> Result<Json<UserResponse>, ApiError> {
	if payload.password.len() < 8 {
		return Err(ApiError::BadRequest("Password must be at least 8 characters".to_string()));
	}
	let existing = sqlx::query_scalar::<_, i32>("SELECT id FROM users WHERE email = $1")
		.bind(&payload.email)
		.fetch_optional(&state.pool)
		.await
		.map_err(|e| ApiError::Internal(e.to_string()))?;
	if existing.is_some() {
		return Err(ApiError::BadRequest("Email already registered".to_string()));
	}
	let existing = sqlx::query_scalar::<_, i32>("SELECT id FROM users WHERE username = $1")
		.bind(&payload.username)
		.fetch_optional(&state.pool)
		.await
		.map_err(|e| ApiError::Internal(e.to_string()))?;
	if existing.is_some() {
		return Err(ApiError::BadRequest("Username already taken".to_string()));
	}
	let hashed = hash_password(&payload.password).map_err(|e| ApiError::Internal(e.to_string()))?;
	let row: (i32,) = sqlx::query_as(
		"INSERT INTO users (email, username, hashed_password) VALUES ($1, $2, $3) RETURNING id",
	)
	.bind(&payload.email)
	.bind(&payload.username)
	.bind(&hashed)
	.fetch_one(&state.pool)
	.await
	.map_err(|e| ApiError::Internal(e.to_string()))?;
	let user = User {
		id: row.0,
		email: payload.email,
		username: payload.username,
		hashed_password: String::new(),
		is_active: true,
	};
	Ok(Json(UserResponse {
		id: user.id,
		email: user.email,
		username: user.username,
		is_active: user.is_active,
	}))
}

pub async fn login(
	State(state): State<AppState>,
	Json(payload): Json<LoginRequest>,
) -> Result<Json<TokenResponse>, ApiError> {
	let user: Option<User> = sqlx::query_as(
		"SELECT id, email, username, hashed_password, is_active FROM users WHERE email = $1",
	)
	.bind(&payload.email)
	.fetch_optional(&state.pool)
	.await
	.map_err(|e| ApiError::Internal(e.to_string()))?;
	let user = user.ok_or_else(|| ApiError::Unauthorized("Invalid email or password".to_string()))?;
	if !verify_password(&payload.password, &user.hashed_password)
		.map_err(|e| ApiError::Internal(e.to_string()))?
	{
		return Err(ApiError::Unauthorized("Invalid email or password".to_string()));
	}
	if !user.is_active {
		return Err(ApiError::Forbidden("User inactive".to_string()));
	}
	let token = create_access_token(user.id, &state.config)
		.map_err(|e| ApiError::Internal(e.to_string()))?;
	Ok(Json(TokenResponse::new(token)))
}

pub async fn me(
	State(state): State<AppState>,
	TypedHeader(auth): TypedHeader<Authorization<Bearer>>,
) -> Result<Json<UserResponse>, ApiError> {
	let claims = decode_access_token(auth.token(), &state.config)
		.map_err(|_| ApiError::Unauthorized("Invalid or expired token".to_string()))?;
	let user_id: i32 = claims
		.sub
		.parse()
		.map_err(|_| ApiError::Unauthorized("Invalid token".to_string()))?;
	let user: Option<User> = sqlx::query_as(
		"SELECT id, email, username, hashed_password, is_active FROM users WHERE id = $1",
	)
	.bind(user_id)
	.fetch_optional(&state.pool)
	.await
	.map_err(|e| ApiError::Internal(e.to_string()))?;
	let user = user.ok_or_else(|| ApiError::NotFound("User not found".to_string()))?;
	if !user.is_active {
		return Err(ApiError::Forbidden("User inactive".to_string()));
	}
	Ok(Json(UserResponse {
		id: user.id,
		email: user.email,
		username: user.username,
		is_active: user.is_active,
	}))
}

pub async fn health() -> Json<serde_json::Value> {
	Json(serde_json::json!({ "status": "ok" }))
}
