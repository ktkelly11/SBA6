const { Schema, model } = require("../config/db-connection");

const catSchema = Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  catBreed: {
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

module.exports = model("Cat", catSchema);
