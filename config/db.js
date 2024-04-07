const mongoose= require('mongoose');

async function connect(){

   await mongoose.connect('mongodb://127.0.0.1:27017/CRUD')

   console.log('connected database successfully');
}

module.exports=connect;