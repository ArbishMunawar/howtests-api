import express from "express";
import { loginUser, registerUser } from "./user.controller.js";
// import userAuth from './userAuth.middleware.js'
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;
