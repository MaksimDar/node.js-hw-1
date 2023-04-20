const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "getAll":
      const data = await contacts.listContacts();
      console.log(data);

      break;
    case "getByOneId":
      const oneContact = await contacts.getContactById(id);
      console.log(oneContact);
      break;

    case "removeContact":
      break;
    case "addContact":
      const addedContact = await contacts.addContact({ name, email, phone });
      console.log(addedContact);
      break;
    default:
      break;
  }
};
// invokeAction({ action: "getAll" });
// invokeAction({ action: "getByOneId", id: "vza2RIzNGIwutCVCs4mCL" });
invokeAction({
  action: "addContact",
  name: "Mykola",
  email: "mykola1977bm@gmail.com",
  phone: "+380964556787",
});
