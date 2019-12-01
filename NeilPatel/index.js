const express=require('express');
const app=express();
const port=3000;
const path=require('path');
const bodyParser=require('body-parser');
// const FormData = require('form-data');
const {check,validationResult}=require('express-validator');
const fetch=require('node-fetch');


let urlencoded=bodyParser.urlencoded({extended:false});

app.use(express.static(__dirname+ '/public'));
app.use(urlencoded);

app.get('/',(request,response)=>{
    response.sendFile(path.join(__dirname +'/index.html'));
    });

app.post('/formData',[
    check('name')
    .not().isEmpty().withMessage('Name cannot be empty')
    .isLength({
        min:3
    }).withMessage('name has to be at least 3 characters')
    .isAlpha().withMessage('Name cannot contain numbers or special characters'),

    check('email','Email is not valid')
    .isEmail(),
    check('phone1')
    .not().isEmpty().withMessage('Phone Number cannot be empty')
    .isInt().withMessage('Phone number must contain digits only')
    .isLength({
        min:3,
        max:3
    }).withMessage('The area code must be 3 digits'),
    check('phone2')
    .not().isEmpty().withMessage('Phone Number cannot be empty')
    .isInt().withMessage('Phone number must contain digits only')
    .isLength({
        min:3,
        max:3
    }).withMessage('The area code must be 3 digits'),
    check('phone3')
    .not().isEmpty().withMessage('Phone Number cannot be empty')
    .isInt().withMessage('Phone number must contain digits only')
    .isLength({
        min:4,
        max:4
    }).withMessage('The area code must be 3 digits'),
    check('zipCode')
    .not().isEmpty()
    .isInt()
    .isPostalCode('US').withMessage('not a valid US zip code')


    ],(request,response)=>{
    const errors=validationResult(request);
    if(!errors.isEmpty()){
        return response.status(422).json({
            errors:errors.array()
        });
    }
    response.status(202).json({
        success:'OK'
    })
});

app.listen(port,()=>console.log('server running'));
