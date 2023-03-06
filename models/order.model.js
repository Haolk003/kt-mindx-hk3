const mongoose = require("mongoose");
const ordersModel = new mongoose.Schema(
  {
    item: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Order", ordersModel);
