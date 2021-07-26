const { Schema, model } = require("mongoose");

const itemProductSchema = new Schema({
  name:{
    type: String,
      required: true,
      trim: true,
  },
  options:{
    type: Array,
      required: true,
      trim: true,
  },
  price:{
    type: Number,
      required: true,
      trim: true,
  },
  quantity:{
    type: Number,
      required: true,
      trim: true,
  },
})

const ordersSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
      trim: true,
    },
    client: {
      type: String,
      required: true,
      trim: true,
    },
    products: {
      type: [itemProductSchema],
      required: true,
      trim: true,
    },
    status: {
      type: Number,
      required: true,
      trim: true,
    },
    table: {
      type: Number,
      required: true,
      trim: true,
    },
    "total-order": {
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

const ordersModel = model("Orders", ordersSchema);

module.exports = { ordersModel };