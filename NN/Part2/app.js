var express=require('express')
var todoController=require('./controllers/todoControllers');

var app=express()

//set template engine
app.set('view engine','ejs');

// static files
app.use('/assets',express.static('./public'));

//fire controllers
todoController(app)

//listen to port
app.listen(3000)
console.log('You are listening to port 3000');
