const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Consumer Schema Model
const consumerSchema = new Schema(
  {
    name: String,
    email: String,
    password: String,
    phone: String,
    address: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Consumer", consumerSchema);
