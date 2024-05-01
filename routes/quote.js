import express from "express";
import {
  getAllQuotes,
  getAllTickerQuotes,
  getSpecificTickerQuotes,
} from "../controllers/quoteController.js";

const router = express.Router();

router.get("/", getAllQuotes);
router.get("/:ticker", getAllTickerQuotes);
router.get("/ticker/:ticker", getSpecificTickerQuotes);

export default router;
