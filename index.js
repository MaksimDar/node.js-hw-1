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
      const removedContact = await contacts.removeContact(id);
      console.log(removedContact);
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
// invokeAction({
//   action: "addContact",
//   name: "Nykolai",
//   email: "nykola@ukr.com",
//   phone: "+887 445 78 98",
// });
invokeAction({ action: "removeContact", id: "KD0ifSPmtxABXr1gM5fYL" });
