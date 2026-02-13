//! Axum API: PostgreSQL + auth (register, login, /auth/me).
use std::net::SocketAddr;

use tracing_subscriber::{layer::SubscriberExt, util::SubscriberInitExt, EnvFilter};

mod auth;
mod config;
mod db;
mod error;
mod handlers;
mod models;
mod routes;
mod schemas;
mod state;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error + Send + Sync>> {
    dotenvy::dotenv().ok();
    tracing_subscriber::registry()
        .with(EnvFilter::try_from_default_env().unwrap_or_else(|_| "info".into()))
        .with(tracing_subscriber::fmt::layer())
        .init();

    let config = config::Config::from_env();
    let pool = db::create_pool(&config).await?;
    db::run_migrations(&pool).await?;

    let state = state::AppState {
        pool,
        config: config.clone(),
    };
    let app = routes::api_router(state);
    let addr = SocketAddr::from(([0, 0, 0, 0], 8001));
    tracing::info!("listening on {}", addr);
    axum::serve(
        tokio::net::TcpListener::bind(addr).await?,
        app.into_make_service(),
    )
    .await?;
    Ok(())
}
