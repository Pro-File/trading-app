import express from "express";
import {
  getAllQuotes,
  getAllTickerQuotes,
} from "../controllers/quoteController.js";

const router = express.Router();

router.get("/", getAllQuotes);
router.get("/:ticker", getAllTickerQuotes);

export default router;
