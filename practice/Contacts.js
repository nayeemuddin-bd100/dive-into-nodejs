class Contacts {
  constructor() {
    this.contacts = [];
  }

  getAllContacts() {
    return this.contacts;
  }

  createContact(contact) {
    contact.id = this.contacts.length + 1;
    this.contacts.push(contact);

    return contact;
  }
  getContactById(id) {
    let contact = this.contacts.find((contact) => contact.id === id);
    return contact;
  }

  updateContact(id, updatedContact) {
    let ind = this.contacts.findIndex((contact) => contact.id === id)

    this.contacts[ind].name = updatedContact.name || this.contacts[ind].name
    this.contacts[ind].phone = updatedContact.phone || this.contacts[ind].phone
    this.contacts[ind].email = updatedContact.email || this.contacts[ind].email

    return this.contacts[ind];
  }

  deleteContactById(id) {
    // let index = this.contacts.findIndex((contact) => contact.id === id);

    // let deleteObj = this.contacts[index];

    // this.contacts = this.contacts.filter((contact) => contact.id !== id);

    // return deleteObj;
      
      let contacts = this.contacts.filter((contact) => contact.id !== id)
      this.contacts = contacts

      return this.contacts;
  }
}

module.exports = new Contacts()