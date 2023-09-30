const express = require("express");
const router = express.Router();
const { signup } = require("../controllers/usersControllers");
const validateBody = require("../middlewares/validateBody");
const { singupSchema } = require("../schemas/usersSchemas");

router.post("/signup", validateBody(singupSchema), signup);
router.post("/login");
router.post("/logout");
router.get("/current");

module.exports = router;
