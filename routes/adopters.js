const { Router } = require("express");
const adoptersCtrl = require("../controllers/adopters.js");

const router = Router();

router.post("/", adoptersCtrl.createAdopter);

module.exports = router;
