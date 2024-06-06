const { Schema, model } = require("../config/db-connection");

const adopterSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false,
    unique: true,
  },
  phoneNum: {
    type: String,
    required: true,
    unique: true,
    min: 9,
  },
  address: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    min: 21,
    max: 100,
  },
  otherPets: [
    {
      petName: String,
      petType: String,
      color: String,
      age: Number,
    },
  ],
});

module.exports = model("Adopter", adopterSchema);
