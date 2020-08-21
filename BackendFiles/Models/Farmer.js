const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Farmer Schema Model
const farmerSchema = new Schema(
  {
    name: String,
    email: String,
    password: String,
    phone: String,
    farmAddress: String,
    farmName: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Farmer", farmerSchema);
