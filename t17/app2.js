var util = require('util');

function Person(){

    this.firstName = "Matti";
    this.lastName = "Meikäläinen";

}

Person.prototype.greet = function(){

    console.log("Hello, " + this.firstName + " " + this.lastName);

}

function Policeman(){

    this.badgeNumber = "13579234"

}

util.inherits(Policeman, Person);

var officer = new Policeman();
officer.greet();