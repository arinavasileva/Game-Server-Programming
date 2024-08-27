function Greetr(){

    this.greeting = "It is the best Thursday of this week";

    this.greet = function(){

        console.log(this.greeting);
    }
}
module.exports = new Greetr();