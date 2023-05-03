const mongoose=require('mongoose')

const wishlistschema= new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    }

})

// create model to store wishlist
const wishlist= new mongoose.model("wishlist",wishlistschema)

module.exports=wishlist