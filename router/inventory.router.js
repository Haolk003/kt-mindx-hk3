const express = require("express");
const {
  addInventory,
  updateInventory,
  getAllInventory,
} = require("../controllers/inventory.controller");
const router = express.Router();
router.post("/", addInventory);
router.put("/update/:id", updateInventory);
router.get("/getAll", getAllInventory);
module.exports = router;
