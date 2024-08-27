function greet(){

    console.log("Welcome to the course!");
}

greet();

function logGreeting(fn){

    fn();
}

logGreeting(greet);

var greetMe = function() {
    
    console.log("Yesss!");

}

greetMe();

logGreeting(greetMe);

