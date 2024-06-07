const Adopter = require("../models/Adopter");

module.exports = {
  createAdopter,
};

async function createAdopter(req, res) {
  try {
    const adopter = new Adopter(req.body);

    await adopter.save();

    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
}
