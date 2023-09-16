const Contact = require("../db/models/contactModel");

const getContactService = async () => {
  const contacts = await Contact.find();
  return contacts;
};
module.exports = { getContactService };
