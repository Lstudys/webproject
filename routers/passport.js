const express=require('express');
const router=express.Router();


router.post('/login.html',(req,res)=>{
    console.log(req.body);
    res.redirect('/index.html');
})

module.exports=router;