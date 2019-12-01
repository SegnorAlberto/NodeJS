
const express=require('express');
const mustacheExpress=require('mustache-express');
const bodyParser=require('body-parser');
const mongoose =require('mongoose');
const session = require('express-session');
const passport=require('passport');
const flash =require('express-flash-messages');
// const expressValidator=require('express-validator');
const { check, validationResult } = require('express-validator');


mongoose.connect('mongodb://localhost/passportfun', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.Promise=global.Promise;


const app=express();
var router = express.Router();

//static file
app.use(express.static('public'));

app.use(session({
    secret:'doualabonamoussadicampmbopi',
    resave:false,
    saveUnitialized:false
}));

//passport
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
require('./passportconfig').configure(passport);


//Handling post bodies
app.use(bodyParser.urlencoded({extended:false}));
// app.use(expressValidator());
//mustache
const mustache=mustacheExpress();
mustache.cache=null;
app.engine('mustache',mustache);
app.set('view engine','mustache');


app.use(require('./routes/general'));
app.use(require('./routes/auth'));

app.listen(3000,function(){
    console.log('Listening on port 3000');
});
