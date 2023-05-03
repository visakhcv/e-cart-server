const express= require('express')
const productcontroller = require('../controller/productcontroller')
const wishlistcontroller = require('../controller/wishlistcontroller')
const cartcontroller= require('../controller/cartcontroller')

const router= new express.Router()


router.get('/products/allproducts',productcontroller.getallproducts)
router.get('/products/view-product/:id',productcontroller.viewproduct)
router.post('/wishlist/add-product',wishlistcontroller.addwishlist)
router.get('/wishlist/get-items',wishlistcontroller.getwishlist)
router.delete('/wishlist/remove-wishlist-item/:id',wishlistcontroller.removewishlist)
router.post('/cart/addtocart',cartcontroller.addtocart)
router.get('/cart/cartitems',cartcontroller.getcart)
router.delete('/cart/deletecartitem/:id',cartcontroller.deletecartitem)
router.delete('/cart/emptycart',cartcontroller.emptycart)
router.get('/cart/incrementitem/:id',cartcontroller.incrementcount)
router.get('/cart/decrementitem/:id',cartcontroller.decrementcount)
module.exports= router