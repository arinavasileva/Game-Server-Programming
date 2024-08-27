function Person(fName,lName){

    this.firstName = fName;
    this.lastName = lName;
}

Person.prototype.greet = function(){

    console.log("Hey you!");

}

var arina = new Person('Arina','Vasileva');

arina.greet();

var mary = new Person('Mary','Snith');

mary.greet();

console.log(arina.__proto__);
console.log(arina.__proto__ === mary.__proto__);

// both share same prototypes





