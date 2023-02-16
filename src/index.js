const express = require("express");
const registerApi = require("./register");
const loginApi = require("./login");
const logoutApi = require("./logout");
const router = express.Router();

router.use(registerApi);
router.use(loginApi);
router.use(logoutApi);
module.exports = router;
