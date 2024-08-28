var EventEmitter = require('events');
var util = require('util');

// lets create a new object so called constructor
//object has a feature greeting, not much else

function Greetr(){
    EventEmitter.call(this);
    this.greeting = "It is a tuesday, how about a lunch soon?";
}

// well thell greetr object, that its prototype's prototype will be the the prototype of the event emitter object 
// so greetr will get all the features what event emitter does
// greetr is an object we have created but it is also an event emitter
util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function(){
    console.log(this.greeting);
    this.emit('greet');
}

// lets create a new object using greetr constructor
// greetr1 has a proto of Greetr, and Greetr's proto is EventEmitter
var greetr1 = new Greetr();

// Lets create an event using event emitter

greetr1.on('greet', function(){

    console.log("This is a hello there");

});
// lets run greet function from the greetr1 objects prototype
greetr1.greet();