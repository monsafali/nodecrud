import express from "express";
import { createQuiz, deleteQuiz, getQuiz, updateQuiz } from "../controllers/quiz.controller.js";

const router = express.Router();

router.get("/", getQuiz);
router.post("/", createQuiz);
router.put("/:id",updateQuiz);
router.delete("/:id", deleteQuiz);

export default router;
