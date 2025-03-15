const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    loyaltyPoints: {
      type: Number,
      required: true,
    },
  },
    { timestamps: true }
);

const Loyalty = mongoose.model('loyalties', UserSchema);
module.exports = Loyalty;