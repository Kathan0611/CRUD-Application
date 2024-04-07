const User =require('./../model/userModel');


exports.signup=async(req,res)=>{
    try{

     const {name,email,password}=req.body;
      if(!name || !email || !password){
          res.status(204).json({
            data:{
                message:"Please required filled"
            }
          })
      }
      else if(email && password){
        res.status(200).json({
            data:{
                message:"Registered Successfully",
            }
        })
      }

    }
    catch(err){
        console.log(err.message);
    }
}

exports.login=async(req,res)=>{
    try
    {
       const {email,password}=req.body;

        if(!email || !password){
             
            res.status(204).json({
                data:{
                    message:"User not found"
                }
            })
        }
        if(email && password){

              const user=await User.find({email:email});

              const token=jwt.sign(email,process.env.secret_key)

              res.status(200).json({
                data:{
                   message:"successfully loggeding",
                   token:token,
                   user:user
                }
              })
        }

    }
    catch(err){
        res.status(400 || statusCode).json({
            data:{
                err:err.message
            }
        })
    }
}