const Invenrory = require("../models/inventories.model");
const addInventory = async (req, res) => {
  try {
    const user = await Invenrory.create(req.body);
    res.status(200).json(user);
  } catch (err) {
    res.status(200).json(err);
  }
};
const updateInventory = async (req, res, next) => {
  const { id } = req.params;
  try {
    if (req.body.instock >= 100) {
      return res.status(500).json("only products that have less than 100");
    }
    const updateProduct = await Invenrory.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updateProduct);
  } catch (err) {
    res.status(500).json(err);
  }
};
const getAllInventory = async (req, res) => {
  try {
    const inventories = await Invenrory.find();
    res.status(200).json(inventories);
  } catch (err) {
    res.status(500).json(err);
  }
};
module.exports = { addInventory, updateInventory, getAllInventory };
