import express from 'express';
import user from '../utlis/userdata.js'

const getUser=(req,res)=>{
    res.send(user)
}
const addUser=(req,res)=>{
    const data=req.body;
    
    res.send(data)
    user.push(data)
}
const putUser=(req,res)=>{
    const data=req.body;
    const id=req.params.id;
    user[id]=data;
    res.send(user)
}
const deleteUser=(req,res)=>{
    const data= user.find((u)=>u.id==req.params.id)
    const index=user.indexOf(data)
    user.splice(index,1)
    res.send(user)
 
}
export {getUser,addUser,putUser,deleteUser};