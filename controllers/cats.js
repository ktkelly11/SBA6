const Cat = require("../models/Cat");

module.exports = {
  createCat,
  getCats,
  updateCat,
  deleteCat,
};

async function createCat(req, res) {
  try {
    const cats = new Cat(req.body);

    await cats.save();

    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function getCats(req, res) {
  try {
    const cats = await Cat.find({});

    res.status(200).json(cats);
  } catch (err) {
    res.status(400).send(err);
  }
}

async function updateCat(req, res) {
  try {
    const updatedCat = await Cat.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json(updatedCat);
  } catch (err) {
    res.status(400).send(err);
  }
}

async function deleteCat(req, res) {
  try {
    await Cat.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Successfully Deleted the Cat",
    });
  } catch (err) {
    res.status(400).send(err);
  }
}
