//! JWT and password helpers.
use chrono::{Duration, Utc};
use jsonwebtoken::{decode, encode, DecodingKey, EncodingKey, Header, Validation};
use serde::{Deserialize, Serialize};

use crate::config::Config;

#[derive(Debug, Serialize, Deserialize)]
pub struct Claims {
	pub sub: String,
	pub exp: i64,
	pub iat: i64,
}

pub fn hash_password(password: &str) -> Result<String, bcrypt::BcryptError> {
	bcrypt::hash(password, bcrypt::DEFAULT_COST)
}

pub fn verify_password(plain: &str, hashed: &str) -> Result<bool, bcrypt::BcryptError> {
	bcrypt::verify(plain, hashed)
}

pub fn create_access_token(user_id: i32, config: &Config) -> Result<String, jsonwebtoken::errors::Error> {
	let now = Utc::now();
	let exp = now + Duration::seconds(config.access_token_expire.as_secs() as i64);
	let claims = Claims {
		sub: user_id.to_string(),
		exp: exp.timestamp(),
		iat: now.timestamp(),
	};
	encode(
		&Header::default(),
		&claims,
		&EncodingKey::from_secret(config.secret_key.as_bytes()),
	)
}

pub fn decode_access_token(token: &str, config: &Config) -> Result<Claims, jsonwebtoken::errors::Error> {
	decode::<Claims>(
		token,
		&DecodingKey::from_secret(config.secret_key.as_bytes()),
		&Validation::default(),
	)
	.map(|data| data.claims)
}
