'use strict'

var EventEmitter = require('./greet');
// lets create a new object using greetr constructor
// greetr1 has a proto of Greetr, and Greetr's proto is EventEmitter
var greetr1 = new Greetr();

// Lets create an event using event emitter

greetr1.on('greetevent', function(){

    console.log("This is a hello there");

});
// lets run greet function from the greetr1 objects prototype
greetr1.greet();

