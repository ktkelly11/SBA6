const { Router } = require("express");
const catsCtrl = require("../controllers/cats.js");

const router = Router();

router.post("/", catsCtrl.createCat);

router.get("/", catsCtrl.getCats);

router.put("/:id", catsCtrl.updateCat);

router.delete("/:id", catsCtrl.deleteCat);

module.exports = router;
