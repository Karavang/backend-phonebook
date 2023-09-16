const { Schema, model } = require("mongoose");

const schema = new Schema({
  name: { type: String, reqired: [true, "put your name"] },
  number: { type: String, reqired: [true, "put your number"] },
});
const Contact = model("contact", schema);

module.exports = Contact;
