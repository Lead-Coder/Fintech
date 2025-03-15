const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    item: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
  },
    { timestamps: true }
);

const Stock = mongoose.model('stock', UserSchema);
module.exports = Stock;