var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet', function(){
    console.log("Hello there everyone");
});

emtr.on('greet', function(){
    console.log("how ya doing");
});

emtr.on('greet', function(){
    console.log("Another hellothree=DD");
});

emtr.on('alertgreet', function(){
    console.log("Come here now!!");
});

emtr.on('alertgreet', function(){
    console.log("This is urgent!!");
});

emtr.emit('greet');
emtr.emit('alertgreet');