const express=require('express');
const { Mongoose } = require('mongoose');
var router=express.Router();
 const mongoose=require('mongoose');
const Employee=mongoose.model('Employee');
router.get('/',(req,res)=>{
    res.render("employee/addoredit",{
        viewTitle:"Insert Employee"
    });
});
router.post('/',(req,res)=>{
    insertRecord(req,res);
})
function insertRecord(req,res){
    var employee=new Employee();
    employee.fullName=req.body.fulllName;
    employee.email=req.body.email;
    employee.mobile=req.body.mobile;
    employee.city=req.body.city;
    employee.save((err,doc) =>{
        if(!err)
        res.redirect('employee/list');
        else{
            console.log('error during record insretion:'+err);

        }
    });
}
router.get('/list',(req,res)=>{
    res.json('from list');
});
module.exports=router;