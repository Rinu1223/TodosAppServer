const express=require('express'); //import express
const app=express();
const dataservice=require('./services/data.service');
app.use(express.json());
app.listen(3000,()=>{
  console.log("server started....");
})
const cors=require('cors'); //import cors
app.use(cors({
  origin:'http://localhost:4200', 
  credentials:true  
}))
const session=require('express-session');//import session
app.use(session({
  secret:'cookie_secret',
  resave : false,
  saveUninitialized: false
}));

app.post('/showTodos',(req,res)=>{
   dataservice.showTodos()
.then(result=>{
  res.status(result.statusCode).json(result)
})
});