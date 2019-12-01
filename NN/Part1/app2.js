// normal function statement
var count=require ('./count');

function callFunction(fun){
  fun();
}



function sayHi(){
  console.log('Hi');
}


//function expression
var sayBye=function(){
  console.log('bye');
};
// callFunction(sayBye);

console.log(count.stuff(['Albert','Boyer','Buzyn']));
console.log(count.adder(10,34));
console.log(count.adder(count.pi,5));
