const products = require('../models/productschema')
const wishlist=require('../models/wishlistschema')

exports.addwishlist= async(req,res)=>{
    // get product details from request
    const {id,title,price,image}=req.body
    try{
        // check product is in wishlist
        const item=await wishlist.findOne({id})
        if(item){
            res.status(403).json("Item already Added")
        }
        else{
            const newproduct= new wishlist({
                id,title,price,image
            })
            // to store
            await newproduct.save()
            res.status(200).json("Item Added to your wishlist")
        }
    }
    catch(err){
        res.status(401).json(err)
    }
}

// get wishlist

exports.getwishlist= async(req,res)=>{
    try{
        const allproducts= await wishlist.find()
        res.status(200).json(allproducts)
    }
    catch(err){
        res.status(401).json(error)
    }
}

exports.removewishlist= async(req,res)=>{
    const {id}= req.params
    try{
        const removeitem = await wishlist.deleteOne({id})
        if(removeitem){
            // get all wishlist item after removing
            const allitems= await wishlist.find()
            res.status(200).json(allitems)
        }else{
            res.status(404).json("item not present")
        }
    }
    catch(err){
        res.status(401).json(error)
    }
}