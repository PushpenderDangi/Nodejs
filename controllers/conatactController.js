const asyncHandler = require('express-async-handler')

const getContacts = asyncHandler(async(req,resp) => {
    resp.json({"message": "Get all contacts"})
})

const createContact = asyncHandler(async(req,resp)=> {
    const {name, email, phone } = req.body
    if(!name || !email || !phone){
        resp.status(400);
        throw new Error("All fields are mandatory !")
    }
    resp.status(201).json({"message" : "Create Contact"})
})

const getContact = asyncHandler(async(req,resp) => { 
    resp.status(200).json({message:`Get  contact for ${req.params.id}`})
})

const updateContact = asyncHandler(async(req,resp) => { 
    resp.status(200).json({message:`Update contact for ${req.params.id}`})
})

const deleteContact = asyncHandler(async(req,resp)=>{
    resp.status(200).json({message : `Delete contact for ${req.params.id}`})
})

module.exports = {getContacts, createContact, getContact, updateContact, deleteContact}