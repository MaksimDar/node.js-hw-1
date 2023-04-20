const fs = require("fs/promises");
const path = require("path");
// const { nanoid } = require("nanoid");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "db", "contacts.json");

const readFile = async () => {
  const contacts = await fs.readFile(contactsPath);
  return JSON.parse(contacts);
};

const writeFile = async () => {
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
};

async function listContacts() {
  return readFile();
}

async function getContactById(contactId) {
  const contacts = await listContacts();
  const result = contacts.find((item) => item.id === contactId);
  return result || null;
}

async function removeContact(contactId) {}

async function addContact({ name, email, phone }) {
  const contacts = await listContacts();
  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };
  contacts.push(newContact);
  writeFile();
  return newContact;
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
