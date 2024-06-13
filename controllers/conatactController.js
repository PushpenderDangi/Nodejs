const asyncHandler = require('express-async-handler')
const Contact = require('../models/contactModel')

const getContacts = asyncHandler(async(req,resp) => {
    const contacts = await Contact.find() 
    resp.status(200).json(contacts)
})

const createContact = asyncHandler(async(req,resp)=> {
    const {name, email, phone } = req.body
    if(!name || !email || !phone){
        resp.status(400);
        throw new Error("All fields are mandatory !")
    }
    const contact = await Contact.create({
        name,
        email,
        phone
    })
    resp.status(201).json({contact,"message" : "Create Contact"})
})

const getContact = asyncHandler(async(req,resp) => { 
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        resp.status(404)
        throw new Error("Contact not found")
    }
    // resp.status(200).json({message:`Get  contact for ${req.params.id}`})
    resp.status(200).json(contact)
})

const updateContact = asyncHandler(async(req,resp) => { 
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        resp.status(404);
        throw new Error("Contact not found")
    }
    const updateContact = await Contact.findByIdAndUpdate(
        req.params.id, // in which we want to update
        req.body,
        {new: true}
    );

    resp.status(200).json({ updateContact ,message:`Update contact for ${req.params.id}`})
})

const deleteContact = asyncHandler(async(req,resp)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        resp.status(404);
        throw new Error("Contact not found")
    }

    const deleteContact = await Contact.remove();
    resp.status(200).json({ contact ,message : `Delete contact for ${req.params.id}`})
})

module.exports = {getContacts, createContact, getContact, updateContact, deleteContact}