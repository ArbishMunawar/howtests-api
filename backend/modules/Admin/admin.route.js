import express from "express";
import { adminLogin, adminDashboard } from "./admin.controller.js";
import { adminAuth,verifyAdmin } from "./admin.auth.js";

const router = express.Router();

router.post("/login", adminLogin);
router.get("/verify", adminAuth, verifyAdmin);
router.get("/dashboard", adminAuth, adminDashboard);

// router.get("/dashboard", adminAuth, adminDashboard);

export default router;
