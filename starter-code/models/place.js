const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  type: {
    type: String,
    enum: ["coofe shop", "bookstore"]
  }
},
  {
    timestamps: true
  });

const Place = mongoose.model("Place", userSchema);
module.exports = Place;
