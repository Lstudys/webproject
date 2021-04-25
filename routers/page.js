const express=require('express');
const path=require('path');
const fs=require('fs');

const router=express.Router();

router.get('/index.html',(req,res)=>{
    let filepath=path.join(__dirname,'../file','html','index.html');
    let data=fs.readFileSync(filepath,'utf-8');
    res.send(data);
});

router.get('/login.html',(req,res)=>{
    let filepath=path.join(__dirname,'../file','html','login.html');
    let data=fs.readFileSync(filepath,'utf-8');
    res.send(data);
});

module.exports=router;

