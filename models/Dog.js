const { Schema, model } = require("../config/db-connection");

const dogSchema = Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  dogBreed: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  vacinated: {
    type: Boolean,
    required: true,
  },
  referenceNum: {
    type: Number,
    required: true,
  },
});

module.exports = model("Dog", dogSchema);
