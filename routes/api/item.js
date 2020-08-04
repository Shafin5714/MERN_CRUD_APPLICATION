const express = require('express')
const router = express.Router()
const Item = require('../../models/Item')

// Add item
router.post('/addItem',async(req,res)=>{
    try{
        const {name} = req.body
 
        const newItem = new Item({
            name:name
        })
        const items =await newItem.save()
        res.json(items)
    }catch(err){
        console.error(err.message)
        res.status(500).send('Server Error')
    }
   
})

// Get all item
router.get('/items',async(req,res)=>{
    try{
        const allItem = await Item.find().sort({name:-1})
        res.json(allItem)

    }catch(err){
        console.log(err.message);
        res.status(500).send('Server Error')
    }
})

// Update Item
router.post('/item/:id',async(req,res)=>{
    try{
        const id = req.params.id
        const item = await Item.findOneAndUpdate({_id:id},{$set:{name:req.body.name}},{new:true})
        const allItem = await Item.find().sort({name:-1})
        res.json(allItem)
    }catch(err){
        console.log(err.message);
        res.status(500).send('Server Error')
    }
})
// Delete Item
router.delete('/item/:id',async(req,res)=>{
    try{
        const id = req.params.id
         await Item.findOneAndDelete({_id:id})
         const item =await Item.find()
        res.json(item)
    }catch(err){
        console.log(err.message);
        res.status(500).send('Server Error')
    }
})
module.exports = router