//! Request/response DTOs.
use serde::{Deserialize, Serialize};

#[derive(Debug, Deserialize)]
pub struct RegisterRequest {
	pub email: String,
	pub username: String,
	pub password: String,
}

#[derive(Debug, Deserialize)]
pub struct LoginRequest {
	pub email: String,
	pub password: String,
}

#[derive(Debug, Serialize)]
pub struct UserResponse {
	pub id: i32,
	pub email: String,
	pub username: String,
	pub is_active: bool,
}

#[derive(Debug, Serialize)]
pub struct TokenResponse {
	pub access_token: String,
	#[serde(skip_serializing_if = "Option::is_none")]
	pub token_type: Option<String>,
}

impl TokenResponse {
	pub fn new(access_token: String) -> Self {
		Self {
			access_token,
			token_type: Some("bearer".to_string()),
		}
	}
}
