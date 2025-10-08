import express from 'express';
import {getUser,addUser,putUser,deleteUser} from '../controller/usercontroller.js'

const router=express.Router();
router.get('/show',getUser);
router.post('/add',addUser);
router.put('/update/:id',putUser);
router.delete('/delete/:id',deleteUser);



export default router;


