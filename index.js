const express=require('express');
const passportRouter=require('./routers/passport');
const pageRouter=require('./routers/page');
const check=require('./utils/index');

const app=express();




app.use(express.urlencoded());
app.use(express.json());
app.use(express.static('file'));
app.use(passportRouter);
app.use(check,pageRouter);//check是钩子（hook）函数



app.listen(3000,()=>{
    console.log('express is running');
})