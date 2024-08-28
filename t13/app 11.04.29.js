var person = {
    firstName: "AnythingforFirstName",
    lastName: "SomethingforLastName",
    greet: function(){
        return this.firstName + ' ' + this.lastName;
    }
}

// lets create using object.create a new empty object called matti
// mattis prototybe will be the person object.

var matti = Object.create(person);
matti.firstName = "Matti";
matti.lastName = "Meikäläinen"

console.log(matti);
console.log(matti.greet());
console.log(matti.__proto__.firstName);

var maija = Object.create(matti);
maija.firstName = "Maija";
maija.lastName = "Mehiläinen";
console.log(maija);
console.log(maija.greet());
console.log(maija.firstName);
console.log(matti);