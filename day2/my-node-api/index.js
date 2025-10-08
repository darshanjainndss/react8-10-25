
import express from "express"
import url from "url"
import path from "path"
import crypto from "crypto"
import fs from "fs"

const app= express()
app.listen(3000,(req,res)=>{
    
    console.log("server is running at 3000")
    
    
})
app.get("/",(req,res)=>{
    res.send(` hello from server ${req.query.name}`)
   
})

const newurl=new URL('http://localhost:3000?name=abc')
console.log('host',newurl.host)


const hash=crypto.createHash('sha256').update('abc').digest('hex')
console.log('hash',hash)

// fs.writeFile('abc.txt','hello world aisoiasoiansoiaia',(err)=>{
//     if(err) throw err;
//     console.log('file created')
// })
const read=fs.createReadStream('abc.txt','utf-8')
read.on('data',(chunk)=>{
    console.log('chunk',chunk)
})
read.on('end',()=>{
    console.log('file ended')
})