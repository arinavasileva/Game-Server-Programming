var Emitter = require('events');


var eventConfig = require('./config').events; // well take all event names from the module 
var emtr = new Emitter();

emtr.on(eventConfig.GREET, function(){
    console.log("Hello there everyone");
});

emtr.on(eventConfig.GREET, function(){
    console.log("how ya doing");
});

emtr.on(eventConfig.GREET, function(){
    console.log("Another hellothree=DD");
});

emtr.on(eventConfig.ALERTGREET, function(){
    console.log("Come here now!!");
});

emtr.on(eventConfig.ALERTGREET, function(){
    console.log("This is urgent!!");
});

emtr.emit(eventConfig.GREET);
emtr.emit(eventConfig.ALERTGREET);