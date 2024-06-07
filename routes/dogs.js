const { Router } = require("express");
const dogsCtrl = require("../controllers/dogs.js");

const router = Router();

router.post("/", dogsCtrl.createDog);

router.get("/", dogsCtrl.getDogs);

router.put("/:id", dogsCtrl.updateDog);

router.delete("/:id", dogsCtrl.deleteDog);

module.exports = router;
