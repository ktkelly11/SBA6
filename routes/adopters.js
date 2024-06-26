const { Router } = require("express");
const adoptersCtrl = require("../controllers/adopters.js");

const router = Router();

router.post("/", adoptersCtrl.createAdopter);

router.get("/", adoptersCtrl.getAdopters);

router.put("/:id", adoptersCtrl.updateAdopter);

router.delete("/:id", adoptersCtrl.deleteAdopter);

module.exports = router;
