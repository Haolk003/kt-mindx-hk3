const orderModel = require("../models/order.model.js");
const addOrder = async (req, res) => {
  try {
    const user = await orderModel.create(req.body);

    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
};
const getsOrder = async (req, res) => {
  try {
    const agg = [
      {
        $unwind: {
          path: "$item",
        },
      },
      {
        $lookup: {
          from: "inventories",
          localField: "item",
          foreignField: "sku",
          as: "product",
        },
      },
    ];
    const orders = await orderModel.aggregate(agg).exec();
    res.status(200).json(orders);
  } catch (err) {
    console.log(err);
  }
};
module.exports = { addOrder, getsOrder };
