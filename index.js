// automatically load env
const dotenv = require('dotenv')

dotenv.config({ path: './.env' })

// import express
const express= require('express')
// import cors
const cors=require('cors')
const router= require('./routes/router')
// import connection file
require('./db/connection')
const server= express()
// to store port
const PORT=3000 || process.env.PORT
// create server app




server.use(cors())
server.use(express.json())
server.use(router)


// run app
server.listen(PORT,()=>{
    console.log(`ecart server started at port ${PORT}`);
})
