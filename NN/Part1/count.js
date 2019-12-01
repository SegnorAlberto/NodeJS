
var stuff=function(arr){
// module.exports.stuff=function(arr){
  return 'There are '+ arr.length +' elments in this array';
};
// counter(['Albert','Boyer','Buzyn']);
// console.log(counter(['Albert','Boyer','Buzyn']));
var adder=function(a,b){
// module.exports.adder=function(a,b){
  return `The sum of the two numbers is ${a+b}`;
};

var pi=3.142;
// module.exports.pi=3.142;

// module.exports.stuff=stuff;
// module.exports.adder=adder;
// module.exports.pi=pi;
module.exports={
  stuff:stuff,
  adder: adder,
  pi: pi
};
