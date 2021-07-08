const contacts = require('./Contacts')

exports.getAllContacts = (req, res) => {
    res.json(contacts.getAllContacts())
}

exports.createContact = (req, res) => {
    const { name, phone, email } = req.body
    const contact = contacts.createContact({ name, phone, email });
    
    res.json(contact)
}

exports.getContactById = (req, res) => {
    let id = (+ req.params.id)
    const contact = contacts.getContactById(id)
    res.json(contact)
}

exports.deleteContact = (req, res) => {
    let id = (+ req.params.id)
    const contact = contacts.deleteContactById(id)
    res.json(contact)

}

exports.updateContact = (req, res) => {
    let id = (+ req.params.id)
    const { name, phone, email} = req.body

    const contact = contacts.updateContact(id, {
        name,email,phone
    })

    res.json(contact)
}