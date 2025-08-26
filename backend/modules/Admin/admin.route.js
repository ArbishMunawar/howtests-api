import express from "express";
import { adminLogin, adminDashboard } from "./admin.controller.js";
import { adminAuth } from "./admin.auth.js";

const router = express.Router();

router.post("/login", adminLogin);
router.get("/dashboard", adminAuth, adminDashboard);

export default router;
