const express = require("express");
const { getAllContacts } = require("../controllers/contactsControllers");
const router = express.Router();

router.get("/", getAllContacts);

router.post("/");

router.delete("/:contactId");

router.put("/:contactId");

module.exports = router;
