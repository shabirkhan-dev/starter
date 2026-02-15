# Hono API + Prisma. Used by docker-compose from repo root.
FROM oven/bun:1-alpine

WORKDIR /app

# Install deps and generate Prisma client
COPY package.json bun.lock* ./
RUN bun install
COPY prisma ./prisma
RUN bun run db:generate

COPY . .

EXPOSE 3000

ENV NODE_ENV=production
CMD ["bun", "run", "src/server.ts"]
