var fs = require('fs'); //fs - file system

var greet = fs.readFileSync(__dirname+ '/greet.txt','utf8');

console.log(greet);

console.log("------------another read--------------");

var greet2 = fs.readFile(__dirname+'/greet.txt','utf8',

    //callback goes here:it is an error first callback 

    function(err,data){

        if(err){

            console.log("SOME ERROR!!")
        
        }else{

            console.log(data);
        }


    }

);

console.log("ready");

