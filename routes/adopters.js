const { Router } = require("express");
const usersCtrl = require("../controllers/adopters.js");

const router = Router();

router.post("/", usersCtrl.createUser);

module.exports = router;
