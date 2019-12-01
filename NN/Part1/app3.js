
var events=require('events');
var util = require('util');
var myEmitter=new events.EventEmitter();

myEmitter.on('someEvent',function(mssg){
  console.log(mssg);
});

 var Person=function(name){
   this.name=name;
 };

 util.inherits(Person,events.EventEmitter);

 var james=new Person('james');
 var mary=new Person('Mary');
 var beatrice=new Person('beatrice');

 var people=[james,mary,beatrice];

people.forEach(function(person){
  person.on('speak',function(mssg){
    console.log(person.name+ ' said: '+ mssg);
  });
});
james.emit('speak','Hello I am James');
mary.emit('speak','I am Mary, like Mary the mother of Christ');
beatrice.emit('speak','I just want to fight; I am hungry');
