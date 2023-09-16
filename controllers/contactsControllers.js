const { getContactService } = require("../services/contactsServices");

const getAllContacts = async (req, res) => {
  const allContacts = await getContactService();
  res.json(allContacts);
};
module.exports = { getAllContacts };
