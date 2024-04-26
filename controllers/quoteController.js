import quoteModel from "../models/quoteModel.js";

export const getAllQuotes = async (req, res) => {
  try {
    const quotes = await quoteModel.find();
    return res.status(200).json({
      total: quotes.length,
      data: quotes,
    });
  } catch (err) {
    console.error("Error finding quotes:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getAllTickerQuotes = async (req, res) => {
  try {
    const { ticker } = req.params; // Get the symbol from the query string
    const quotes = await quoteModel.find({ ticker: ticker });

    if (quotes.length === 0) {
      console.log("No quotes found for the search query");
      return res.status(404).json({ message: "No quotes found" });
    }
    return res.status(200).json({
      total: quotes.length,
      data: quotes,
    });
  } catch (err) {
    console.error("Error finding quotes:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
