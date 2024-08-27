function Greetr() {

    console.log("This has been a long day...");

    this.greet = function(){

        console.log(this.greeting);
    }
}

module.exports = new Greetr();