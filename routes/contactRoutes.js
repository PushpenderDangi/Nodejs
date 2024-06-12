const express = require("express");
const router = express.Router()
import { getContacts, createContact, updateContact, getContact, deleteContact } from "../controllers/conatactController";

router.route('/').get(getContacts)

router.route('/').post(createContact)

router.route('/:id').get(updateContact)

router.route('/:id').put(getContact)

router.route('/:id').delete(deleteContact)


module.exports = router; 