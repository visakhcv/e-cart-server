// define mongo db connection
const mongoose=require('mongoose')

const db= process.env.MONGO_URI

mongoose.connect(db,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log('database connected');
}).catch((err)=>{
    console.log(err);
})