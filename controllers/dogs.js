const Dog = require("../models/Dog");

module.exports = {
  createDog,
  getDogs,
  updateDog,
  deleteDog,
};

async function createDog(req, res) {
  try {
    const dogs = new Dog(req.body);

    await dogs.save();

    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function getDogs(req, res) {
  try {
    const dogs = await Dog.find({});

    res.status(200).json(dogs);
  } catch (err) {
    res.status(400).send(err);
  }
}

async function updateDog(req, res) {
  try {
    const updatedDog = await Dog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json(updatedDog);
  } catch (err) {
    res.status(400).send(err);
  }
}

async function deleteDog(req, res) {
  try {
    await Dog.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Successfully Deleted the Dog",
    });
  } catch (err) {
    res.status(400).send(err);
  }
}
