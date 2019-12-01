var express=require('express');

var app=express();

    app.set('view engine','ejs');
    app.use('/assets',express.static('assets'));


app.get('/',function(req,res){
    res.render('partials/index');
});

app.get('/contact',function(req,res){
    // res.render('partials/contact');
    res.render('partials/contact');
});

app.get('/profile/:name',function(req,res){
    // res.send('You requested to see a profile with the name of '+ req.params.name);
    var data={age:45, job:'Albert',hobbies:['eating','fighting','fishing']};
    res.render('profile',{person: req.params.name, data:data});
});
app.listen(3000);
