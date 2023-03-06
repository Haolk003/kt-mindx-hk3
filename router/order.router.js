const express = require("express");
const { addOrder, getsOrder } = require("../controllers/order.controller");
const { authMiddleware } = require("../middlewares/authMiddleware");
const router = express.Router();
router.post("/", authMiddleware, addOrder);
router.get("/getAll", authMiddleware, getsOrder);
module.exports = router;
