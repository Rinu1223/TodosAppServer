const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/TodosApp',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    })

 const User=   mongoose.model('User',{
   order:Number,
   title:String
   })


 module.exports={
User
 }

