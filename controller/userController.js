// const User= require('./../model/userModel');

// exports.createUser=async(req,res)=>{
     
//     try{
//         const user= new User(req.body);
//          await user.save();

//          res.status(200).json({
//             data:{
//                 message:"Succesfully created User",
//                 user:user
//             }
//          })

//     }
//     catch(err){
//        res.status(500 || statusCode).json({
//         data:{
//             message:err.message,
//         }
//        })
//     }
    


// }

// exports.getAllUsers=async(req,res)=>{
//     try{
      
//         const user= await User.find();
        
//         res.status(200).json({
//             data:{
//                 message:"Successfully get All user",
//                 result:user.length,
//                 user:user
//             }
//         })
         
//     }
//     catch(err){
//         res.status(500 || statusCode).json({
//             data:{
//                 message:err.message
//             }
//         })
//     }
// }


// exports.getUser=async(req,res)=>{
//     try{
//         const {id}=req.body;
//         const user= await User.findById(id);

//         res.status(200).json({
//             data:{
//                 message:"get User",
//                 result:user.length,
//                 user:user
//             }
//         })
//     }

//     catch(err){
//         res.status(500 ||statusCode).json({
//             data:{
//                 message:err.message
//             }
//         })
//     }
// }

// exports.updateUser=async(req,res)=>{
//     try{
//         const {id}=req.paramas;
      
//         const user= User.findByIdAndUpdate({
//             name:req.body.name,
//             email:req.body.email,
//             password:req.body.password,
//             role:req.body.role,
//             profile:req.body.profile
//         },{new:true})

//           await user.save();

//           res.status(200).json({
//             data:{
//                 message:"successfully updated",
//                 user:user
//             }
//           })
        
//     }
//     catch(err){
       
//         res.status(500 ||statusCode).json({
//             data:{
//                 message:err.message
//             }
//         })
//     }
// }


// exports.deleteUser=async(req,res)=>{
//     try{
//       const {id}=req.body;
      
//       const deleteUser= await User.findByIdAndDelete(id);
        
//       res.status(200).json({
//          data:{
//             message:"Successfully Deleted",
//             user:deleteUser
//          }
//       })

//     }
//     catch(err){

//         res.status(500|| statusCode).json({
//             data:{

//                 message:err.message
//             }
//         })
//     }
// }
// userController.js

const express = require('express');
const router = express.Router();
const userService = require('./userService'); // Import userService module

// Route to create a new user
router.post('/users', async (req, res) => {
    try {
        // Call userService function to create a new user
        const newUser = await userService.createUser(req.body);
        res.status(201).json(newUser); // Send response with newly created user
    } catch (error) {
        res.status(500).json({ message: error.message }); // Handle error
    }
});

// Route to get user by ID
router.get('/users/:userId', async (req, res) => {
    try {
        // Call userService function to fetch user by ID
        const user = await userService.getUserById(req.params.userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user); // Send response with user data
    } catch (error) {
        res.status(500).json({ message: error.message }); // Handle error
    }
});

// Route to update user
router.put('/users/:userId', async (req, res) => {
    try {
        // Call userService function to update user
        const updatedUser = await userService.updateUser(req.params.userId, req.body);
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(updatedUser); // Send response with updated user data
    } catch (error) {
        res.status(500).json({ message: error.message }); // Handle error
    }
});

// Route to delete user
router.delete('/users/:userId', async (req, res) => {
    try {
        // Call userService function to delete user
        const result = await userService.deleteUser(req.params.userId);
        res.json(result); // Send response with deletion result
    } catch (error) {
        res.status(500).json({ message: error.message }); // Handle error
    }
});

module.exports = router;
