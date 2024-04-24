import mongoose from "mongoose";

const quoteSchema = mongoose.Schema({
  ticker: String,
  open: Number,
  close: Number,
  high: Number,
  low: Number,
  marketCap: Number,
  volume: Number,
  change: Number,
  priceChange: Number,
  gap: Number,
  gapPercent: Number,
  averageVolume: Number,
  yearHigh: Number,
  yearLow: Number,
  sharesOutstanding: Number,
  previousClose: Number,
  lastUpdate: Date,
});

const quoteModel = mongoose.model("Quote", quoteSchema);

export default quoteModel;
