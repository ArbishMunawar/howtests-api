import express from "express";
import {createFaq, getAllFaq} from "./faqs.controller.js";

const router = express.Router();

router.post("/",createFaq);
router.get("/",getAllFaq);

export default router;
