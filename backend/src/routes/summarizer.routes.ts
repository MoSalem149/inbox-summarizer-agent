import express from "express";
import { summarizerHandler } from "../controllers/summarizer.controller";

const router = express.Router();

router.post("/summarize", summarizerHandler);

export default router;
