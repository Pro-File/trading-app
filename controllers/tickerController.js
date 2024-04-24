import tickerModel from "../models/tickerModel.js";

export const getSearchedTicker = async (req, res) => {
  try {
    const { symbol } = req.query; // Get the symbol from the query string
    const tickers = await tickerModel.find({ ticker: symbol });

    if (tickers.length === 0) {
      console.log("No tickers found for the search query");
      return res.status(404).json({ message: "No tickers found" });
    }
    return res.status(200).json({
      total: tickers.length,
      data: tickers,
    });
  } catch (err) {
    console.error("Error finding tickers:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getAllTickers = async (req, res) => {
  try {
    const tickers = await tickerModel.find();
    return res.status(200).json({
      total: tickers.length,
      data: tickers,
    });
  } catch (err) {
    console.error("Error finding tickers:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
