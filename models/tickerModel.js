import mongoose from "mongoose";

const tickerSchema = mongoose.Schema({
  ticker: String,
  type: String,
  name: String,
  country: String,
  exchange: String,
  cik: String,
  industry: String,
  sharesOutstanding: Number,
  price: Number,
  marketCap: Number,
  constitutents: [String],
  sector: String,
  peers: [String],
  description: String,
  id: Number,
});

const tickerModel = mongoose.model("AllTicker", tickerSchema);

export default tickerModel;
