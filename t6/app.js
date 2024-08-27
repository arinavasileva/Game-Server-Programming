//IIFE - a function that does not have a name and closed with parantheses

var firstName = "Maija";

(function(lastName){

    var firstName = "Matti"; // Matti - onlu available inside the function
    console.log(firstName);
    console.log(lastName); // a parameter
}('Smith')); // () - the importhant part

console.log(firstName); // Maija