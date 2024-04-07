const express=require('express')
const UserController=require('./../controller/userController')
const router=express.Router();

router.post('/createUser',UserController.createUser);
router.get('/getAllUser',UserController.getAllUsers);
router.get('/getUser',UserController.getUser);
router.patch('/UpadatUser',UserController.updateUser);
router.delete('/deleteUser',UserController.deleteUser);

module.exports=router;