var time=0;

setTimeout(function(){
  console.log('3s seconds have passed');
},3000)

var timer=setInterval(function(){
  time +=2;
  console.log(time+'every seconds');
  if(time>5){
    clearInterval(timer);
  }
}, 2000)

console.log(__dirname);
console.log(__filename);
