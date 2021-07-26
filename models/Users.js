const { Schema, model } = require("mongoose");


const rolSchema = new Schema({
  role: {
    type: String,
    required: true,
    trim: true,
  },
  admin: {
    type: Boolean,
    required: true,
    trim: true,
  },
})

const usersSchema = new Schema(
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
    name: {
      type: String,
      required: true,
      trim: true,
    },
    roles: {
      type: usersSchema,
      required: true,
      trim: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const usersModel = model("Auth", usersSchema);

module.exports = { usersModel };