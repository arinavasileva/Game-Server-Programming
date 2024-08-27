function Greetr(){

    console.log("I want to eat!");
    this.greet = function(){

        console.log(this.greeting);
    }
}

module.exports = new Greetr();
