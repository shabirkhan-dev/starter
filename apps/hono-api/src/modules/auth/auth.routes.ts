import { Hono } from "hono";
import type { AuthEnv } from "./jwt.middleware";
import { authenticateJWT } from "./jwt.middleware";
import { createAuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

const authService = new AuthService();
const authController = createAuthController(authService);

const auth = new Hono<{ Variables: AuthEnv }>();

auth.post("/register", (c) => authController.register(c));
auth.post("/login", (c) => authController.login(c));
auth.post("/verify/email", (c) => authController.verifyEmail(c));
auth.post("/password/forgot", (c) => authController.forgotPassword(c));
auth.post("/password/reset", (c) => authController.resetPassword(c));
auth.get("/refresh", (c) => authController.refreshToken(c));
auth.post("/logout", authenticateJWT, (c) => authController.logout(c));

export default auth;
