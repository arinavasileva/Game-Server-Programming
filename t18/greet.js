'use strict'
var EventEmitter = require('events');

// lets create a new object so called constructor
//object has a feature greeting, not much else

class Greetr extends EventEmitter{

    contructor(){
        super();
        this.greeting = "It is a tuesday, how about a lunch soon?";
    }

    greet(){
        console.log(this.greeting);
        this.emit('greet');
    }
}
