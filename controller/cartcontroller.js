const cart= require('../models/cartschema')

exports.addtocart= async (req,res)=>{
    // get product details
    const {id,title,image,price,quantity} = req.body

    try{
        const product= await cart.findOne({id})
        if(product){
            // product is in cart
            // increment product quantity
            product.quantity+=1
            // update total
            product.total=product.price * product.quantity

            product.save()

            res.status(200).json('items added to your cart...')
        }
        else{
            // product not in cart
            // add product in cart
            const newproduct= new cart({id,title,price,image,quantity,total:price})
            // save new product
            await newproduct.save()
            res.status(200).json('item added to your cart...')
        }
    }
    catch(err){
        res.status(401).json(err)
    }
    
}

exports.getcart= async (req,res)=>{
    try{
        const allitems=await cart.find()
        res.status(200).json(allitems)
    }
    catch(err){
        res.status(403).json(error)
    }
   
}

exports.deletecartitem=async (req,res)=>{
    const {id}= req.params
    try{
        const removeitem=await cart.deleteOne({id})
        if(removeitem){
            const allitem= await cart.find()
            res.status(200).json(allitem)
        }
        else{
            res.status(404).json('Item not present')
        }
    }
    catch(err){
        res.status(402).json(error)
    }
}

exports.emptycart=async (req,res)=>{
    try{
        const items=await cart.deleteMany({})
        res.status(200).json("Your cart is empty Now")
    }
    catch(err){
        res.status(403).json(error)
    }
}

exports.incrementcount= async (req,res)=>{
    const {id}=req.params
    try{
        const product= await cart.findOne({id})
        if(product){
            // update quantity and grandtotal
            product.quantity+=1
            product.total= product.price*product.quantity
            await product.save()
            // get all cart collection item after updating the particular item count
            const allitem= await cart.find()
            res.status(200).json(allitem)
        }
        else{
            res.status(404).json("Product not in your cart")
        }
    }
    catch(err){
        res.status(403).json(error)
    }
}

exports.decrementcount= async (req,res)=>{
    const {id}=req.params
    try{
        const product= await cart.findOne({id})
        if(product){
            // update quantity and grandtotal
            product.quantity-=1
            if(product.quantity==0){
                // remove product from cart
               const allitem= await cart.deleteOne({id})
               res.status(200).json(allitem)
            }
            else{
                product.total= product.price*product.quantity
                await product.save()
                // get all cart collection item after updating the particular item count
                const allitem= await cart.find()
                res.status(200).json(allitem)
            }
            
        }
        else{
            res.status(404).json("Product not in your cart")
        }
    }
    catch(err){
        res.status(403).json(error)
    }
}

