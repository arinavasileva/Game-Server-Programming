// by value 
// primitive var those are not inside object

var personName = "Matti";
var firstName = personName;

personName = "Maija";

console.log(firstName);
console.log(personName);

//by reference

var myName = {

    firstName:'Mikko'

}

var person = myName;

myName.firstName = "Jarkko";

console.log(myName.firstName); //Jarkko
console.log(person.firstName); //Jarkko

