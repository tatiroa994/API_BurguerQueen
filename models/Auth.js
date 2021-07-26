const { Schema, model } = require("mongoose");

const authSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: Number,
      required: true,
      trim: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const authModel = model("Auth", authSchema);

module.exports = { authModel };
