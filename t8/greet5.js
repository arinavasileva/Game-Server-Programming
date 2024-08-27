var greeting = "I like pizza";

function greet(){

    console.log(greeting);
}

function hellothere(){

    console.log("Hey there");

}

module.exports.greet = greet;       // Exporting functions individually
module.exports.hellothere = hellothere;

/*module.exports = {

    greet: greet,
    hellothere: hellothere
}*/