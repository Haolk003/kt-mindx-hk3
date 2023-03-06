const mongoose = require("mongoose");
const db = {};
const connectToDb = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect("mongodb://127.0.0.1/ktmindx3");

    console.log("Mongodb is connect");
  } catch (err) {
    console.log(err);
  }
};
module.exports = { connectToDb, db };
// module.export = { connectToDb, db };
