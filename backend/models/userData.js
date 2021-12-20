const mongoose = require("mongoose");

const userDataSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const UserData = mongoose.model("UserData", userDataSchema);
module.exports = UserData;
