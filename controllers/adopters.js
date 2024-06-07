const Adopter = require("../models/Adopter");

module.exports = {
  createAdopter,
  getAdopters,
  updateAdopter,
  deleteAdopter,
};

async function createAdopter(req, res) {
  try {
    const adopters = new Adopter(req.body);

    await adopters.save();

    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function getAdopters(req, res) {
  try {
    const adopters = await Adopter.find({});

    res.status(200).json(adopters);
  } catch (err) {
    res.status(400).send(err);
  }
}

async function updateAdopter(req, res) {
  try {
    const updatedAdopter = await Adopter.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(updatedAdopter);
  } catch (err) {
    res.status(400).send(err);
  }
}

async function deleteAdopter(req, res) {
  try {
    await Adopter.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Successfully Deleted the Adopter",
    });
  } catch (err) {
    res.status(400).send(err);
  }
}
