const express = require("express");
const router = express.Router();
const {
  signup,
  login,
  logout,
  getCurrent,
} = require("../controllers/usersControllers");
const validateBody = require("../middlewares/validateBody");
const authenticate = require("../middlewares/authenticate");
const { singupSchema, loginSchema } = require("../schemas/usersSchemas");

router.post("/signup", validateBody(singupSchema), signup);
router.post("/login", validateBody(loginSchema), login);
router.post("/logout", authenticate, logout);
router.get("/current", authenticate, getCurrent);

module.exports = router;
