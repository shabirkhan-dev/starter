# Rust API (Axum + SQLx). Used by docker-compose.
# Multi-stage: build then minimal runtime.
FROM rust:1.83-bookworm AS builder

WORKDIR /app

# Copy manifests and source
COPY Cargo.toml Cargo.lock* ./
COPY src ./src
COPY migrations ./migrations

# Build: pass DATABASE_URL at build time (postgres must be reachable), or commit .sqlx and set SQLX_OFFLINE=true
ARG DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}
RUN cargo build --release

# Runtime stage
FROM debian:bookworm-slim

RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates \
    libssl3 \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY --from=builder /app/target/release/starter-rust-api /app/server

EXPOSE 8001

ENV RUST_LOG=info
CMD ["/app/server"]
