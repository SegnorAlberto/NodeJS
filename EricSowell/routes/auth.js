const router=require('express').Router();
const User=require('../models/user');
const passport=require('passport');

router.get('/login',(req,res)=>{

    const flashMessages=res.locals.getMessages();

    console.log('flash',flashMessages);
    if(flashMessages.error){
        res.render('login',{
            showErrors:true,
            errors:flashMessages.error
        });
    }else{
        res.render('login');
    }

});

router.post('/login',passport.authenticate('local',{
    successRedirect:'/home',
    failureRedirect:'/login',
    failureFlash:true
}));
// router.post('/login',(req,res)=>{
//
//     User.authenticate(req.body.username,req.body.password,(err,user)=>{
//     if(err||user===false){
//         console.log('problem logging in',err);
//         res.redirect('/login');
//     }else{
//         console.log('successful login');
//         res.redirect('/home');
//     }
//     });
// });

router.get('/register',(req,res)=>{
    const flashMessages=res.locals.getMessages();
    console.log('flash',flashMessages);

    res.render('register');
});

router.post('/register',(req,res, next)=>{
    console.log('body',req.body);

    // req.checkBody('username','Username is required.').notEmpty();
    // req.checkBody('password','Password is required.').notEmpty();
    //
    // req.getValidationResult()
    //     .then(function(result){
    //         console.log('error is empty',result.isEmpty());
    //         if(result.isEmpty()===false){
    //             result.array().forEach((error)=>{
    //                 req.flash('error',error.msg);
    //             })
    //             res.redirect('/register');
    //         }else{
    //             //good
    //         }
    //     });


    const user=new User({username: req.body.username,
        password:req.body.password});
        user.save((err)=>{
            if(err){
                console.log('There was an error saving the user.',err);
            }
            next();
            //res.redirect('/home');
        });
},passport.authenticate('local',{
    successRedirect:'/home'
}));

router.get('/logout',(req,res)=>{
    req.logout();
    res.redirect('/login');
});


module.exports=router;
