const check=(req,res,next)=>{
    console.log('this is hook');
    next();
}

module.exports=check;