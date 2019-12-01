var express=require('express');
var bodyParser=require('body-parser');
var app=express();
var urlencodedParser=bodyParser.urlencoded({extended: false})

    app.set('view engine','ejs');
    app.use('/assets',express.static('assets'));


app.get('/',function(req,res){
    // console.log(req.query)
    res.render('partials/index');
});

app.get('/contact',function(req,res){
    // console.log(req.query)
    res.render('partials/contact',{qs:req.query});
});


app.post('/contact',urlencodedParser,function(req,res){
    console.log(req.body)
    res.render('contact-success',{data:req.body});
});
app.get('/profile/:name',function(req,res){
    // res.send('You requested to see a profile with the name of '+ req.params.name);
    var data={age:45, job:'Albert',hobbies:['eating','fighting','fishing']};
    res.render('profile',{person: req.params.name, data:data});
});
app.listen(3000);
