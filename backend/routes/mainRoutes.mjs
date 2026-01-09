import express from "express";
import { getMainBackend } from "../controllers/mainControllers.mjs";

const router = express.Router();
router.get("/", getMainBackend);

export default router;
