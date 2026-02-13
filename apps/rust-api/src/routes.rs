//! Route mounting.
use axum::{
    routing::{get, post},
    Router,
};

use crate::handlers::{health, login, me, register};
use crate::state::AppState;

pub fn api_router(state: AppState) -> Router {
    Router::new()
        .route("/health", get(health))
        .route("/auth/register", post(register))
        .route("/auth/login", post(login))
        .route("/auth/me", get(me))
        .with_state(state)
}
