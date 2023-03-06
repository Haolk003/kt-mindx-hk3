const express = require("express");
const { connectToDb } = require("./db");
const dotenv = require("dotenv");
const inventoryRouter = require("./router/inventory.router");
const orderRouter = require("./router/order.router");
const userRouter = require("./router/user.router");
const bodyParser = require("body-parser");

dotenv.config();
const cors = require("cors");
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);
app.use("/api/inventories", inventoryRouter);

app.listen(3000, async () => {
  console.log("App is running at 3000");
  connectToDb();
});
