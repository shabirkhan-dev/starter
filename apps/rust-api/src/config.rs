//! App settings from environment.
use std::time::Duration;

#[derive(Clone)]
pub struct Config {
	pub database_url: String,
	pub secret_key: String,
	pub access_token_expire: Duration,
}

impl Config {
	pub fn from_env() -> Self {
		dotenvy::dotenv().ok();
		let database_url = std::env::var("DATABASE_URL").unwrap_or_else(|_| {
			"postgresql://user:password@localhost:5432/starter".to_string()
		});
		let secret_key = std::env::var("SECRET_KEY")
			.unwrap_or_else(|_| "change-me-in-production-min-32-chars".to_string());
		let minutes: i64 = std::env::var("ACCESS_TOKEN_EXPIRE_MINUTES")
			.ok()
			.and_then(|s| s.parse().ok())
			.unwrap_or(30);
		Config {
			database_url,
			secret_key,
			access_token_expire: Duration::from_secs(minutes as u64 * 60),
		}
	}
}
