function Greetr(){

    this.greeting = "I love weekednd";
    this.greet = function() {

        console.log(this.greeting);
    }
}

module.exports = Greetr; // this exports the class/function not an instance