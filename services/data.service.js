const db=require('./db');
const showTodos=()=>{
   
    return db.User.find({})
    .then(todos=>{
     if(!todos){
         return {
           statusCode:422,
           status:false,
           message:"No data found"
       }
     }
     else{
        
      return {
         statusCode:200,
         status:true,
         message:todos
     }
     }
    })
    }
    module.exports={
        showTodos

    }