const { Schema, model } = require("mongoose");

const itemProductSchema = new Schema({
  _id:{
    type: String,
    required: true,
    trim: true,
  },
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

const tablesSchema = new Schema(
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

const tablesModel = model("Tables", ordersSchema);

module.exports = { tablesModel };