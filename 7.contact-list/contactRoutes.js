const router = require('express').Router()
const {
  getAllContacts,
  createContact,
  getContactById,
  deleteContact,
  updatedContact,
} = require("./contactController");


router.get('/',getAllContacts)
router.post('/',createContact)
router.get("/:id", getContactById);
router.put("/:id", updatedContact);
router.delete('/:id',deleteContact)



module.exports = router