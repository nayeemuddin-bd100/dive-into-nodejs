const router = require('express').Router()
const {
  getAllContacts,
  createContact,
  getContactById,
  deleteContact,
  updateContact,
} = require("./contactController");

router.get('/' , getAllContacts) // for all data
router.post("/", createContact); // for create data
router.get("/:id", getContactById); // for single data
router.delete("/:id", deleteContact);
router.put("/:id", updateContact);

module.exports = router