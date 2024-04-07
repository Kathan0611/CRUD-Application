const multer= require('multer');
const path=require('path');
const multer= multer.diskStorage({

    destination:(req,file,cb)=>{
            console.log(file,"dir")
            cb(null,path.join(__dirname,'../public/img'),function(err,success)
          {
              if(err){
               throw err
              }
            })
          }
    ,
    filename:(req,file,cb)=>{
            const name=`tour-${Date.now()}-${file.originalname}`;
            cb(null,name,function(err,success)
            {
              if(err){
                throw err
              }
            })
          }
})


const upload =multer({storage:multerStorage})

