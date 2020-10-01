var express=require("express");
var bodyparser=require("body-parser");

var owner=require("../model/owner_model");
var login=require("../model/login_model");
var restaurant=require("../model/restaurant_model");

const router=express.Router();
router.use(bodyparser.urlencoded({extended:true}));

router.post('/addowner',function(req,res){
    var o=new owner();
    var status="Pending";
    o.owner_name=req.body.ownername;
    o.owner_phno=req.body.ownerphno;
    o.owner_email=req.body.owneremail;
    o.owner_pswd=req.body.ownerpswd;
    o.owner_licenseno=req.body.ownerlicenseno;
    o.rest_id=null;
    o.owner_status=status;
    o.save((err)=>{
        if(err) throw err;
        else
        res.send({msg:"Registered Succesfully..."})
    })
})

router.post('/newuser',function(req,res){
    var l=new login();
    var profile="new";
    l.username=req.body.username;
    l.pswd=req.body.pswd;
    l.phno=req.body.phno;
    l.email=req.body.email;
    l.city=req.body.city;
    l.role=req.body.role;
    l.profile=profile;
    l.save((err)=>{
        if(err) throw err;
        else
        res.send({msg:"Sign in Succesfull..."})
    })
})

module.exports=router;