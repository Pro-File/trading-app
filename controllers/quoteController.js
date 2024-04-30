import quoteModel from "../models/quoteModel.js";
import tickerModel from "../models/tickerModel.js";

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
    let response = [];
    const { ticker } = req.params; // Get the symbol from the query string
    const queriedTicker = await tickerModel.findOne({ ticker: ticker });
    console.log("Total Constitutents: ", queriedTicker.constitutents.length);

    if (queriedTicker.constitutents.length > 0) {
      response = await quoteModel.find({
        ticker: { $in: queriedTicker.constitutents },
      });
    } else {
      response = await quoteModel.find({ ticker: ticker });
    }

    if (response.length === 0) {
      console.log("No quotes found for the search query");
      return res.status(404).json({ message: "No quotes found" });
    }
    return res.status(200).json({
      total: response.length,
      data: response,
    });
  } catch (err) {
    console.error("Error finding quotes:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
