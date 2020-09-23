const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/EmployeeDB',{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    if (!err){ console.log('MongoDB connection succedded')}
    else { console.log('error in DBconnection:'+err)}
});
require('./employe.model');