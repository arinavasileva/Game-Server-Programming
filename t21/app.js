function greet(callbackfunction){

    console.log("I love Mondays.Hey there!");

    var data = {
        fullName:"Arina Vasileva"
    }

    callbackfunction(data);

}

greet(function(newData){

    console.log("This is the callback function running");
    console.log(newData.fullName);
});

function someCallback(){

    console.log("a great callback");
}

greet(function(){

    console.log("another callback");
});
