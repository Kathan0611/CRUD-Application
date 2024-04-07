const express=require('express')
const app=express();
const connect =require('./config/db');

PORT=process.env.PORT;

connect().then(()=>app.listen(PORT,()=>{
 console.log('server successfully connected')
}))


