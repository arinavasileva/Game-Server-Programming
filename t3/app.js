var person = {

    fName:'Arina',
    lName:'Vasileva',

    greet:function(){

        console.log("Hello, " + this.fName + " " + this.lName);
    }
}

person.greet();
console.log(person.fName);
console.log(person['lName']);

function Person(firstName,lastName,pID) {

    this.fName = firstName;
    this.lName = lastName;
    this.personID = pID;

}

var katja = new Person('Katja', 'Smith', '12345678');
var mikka = new Person('Mikka', 'Smith','87654321');

console.log(katja.fName);


