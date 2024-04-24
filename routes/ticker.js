import express from "express";
import {
  getAllTickers,
  getSearchedTicker,
} from "../controllers/tickerController.js";

const router = express.Router();

router.get("/", getAllTickers);
router.get("/search", getSearchedTicker);

export default router;
