var util = require('util');

var firstname = "Arina";
var lastname = "Vasileva";


var txt = 'Congratulate %s on her %dth birthday!';
var result = util.format(txt, 'Arina', 24); 

console.log(result);