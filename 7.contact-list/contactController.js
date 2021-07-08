const contacts = require('./Contacts')

exports.getAllContacts = (req, res) => {
    res.json(contacts.getAllContacts())
}

exports.createContact = (req, res) => {
//   console.log(req.body); // req.body er modde user ja ja pataaabe shoob ekhanee thakbe! user onk doroner data patate pare amdr shudumatro dorkar name,email,title , tai egulake extract kore nissi 
    let { name, email, phone } = req.body;
    let contact = contacts.createContact({ name, email, phone });
    
    res.json(contact)
};

exports.getContactById = (req, res) => {
    let id = req.params.id;

    id = parseInt(id)
    let contact = contacts.getContactById(id)
    res.json(contact)
}


exports.updatedContact = (req, res) => {
    let { id } = req.params
    id = parseInt(id)

    let { name, email, phone } = req.body
    let contact = contacts.updateContactById(id,{
        name,email,phone
    })
    res.json(contact)
}

exports.deleteContact = (req, res) => {
    let { id } = req.params
    id = parseInt(id)

    let contact = contacts.deleteContactById(id)
    res.json(contact)
}