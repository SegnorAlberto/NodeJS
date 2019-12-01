const router=require('express').Router();
const User=require('../model/User');

router.post('/register',async (req,res)=>{
    // res.send('Register');
    const user=new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password

    });
    try{
        const SavedUser=await user.save();
        res.send(SavedUSer);
    }catch(err){
        res.status(400).send(err);
    }
});

// router.post('/login')
module.exports=router;
