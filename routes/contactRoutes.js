const express = require("express");
const router = express.Router()

router.route('/').get((req,resp) => {
    resp.json({"message": "Get all contacts"})
})

router.route('/').post((req,resp)=> {
    resp.status(200).json({"message" : "Create Contact"})
})

router.route('/:id').put((req,resp) => { 
    resp.status(200).json({message:`update contact for ${req.params.id}`})
})

router.route('/:id').delete((req,resp)=>{
    resp.status(200).json({message : `delete contact for ${req.params.id}`})
})


module.exports = router; 