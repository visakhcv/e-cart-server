const products= require('../models/productschema')



exports.getallproducts= async (req,res) =>{

    try{
        const allproducts= await products.find()
        res.status(200).json(allproducts)
    }
    catch(err){
        res.status(401).json(error)
    }
}

// view product

exports.viewproduct=async (req,res)=>{
    // get product id from req
    const id = req.params.id

    try{
        const product=await products.findOne({
            id
        })
        if(product){
            res.status(200).json(product)
        }
        else{
            res.status(404).json("product not available")
        }
    }
    catch(err){
        res.status(401).json(error)
    }
}


