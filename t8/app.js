var greet = require('./greet');

greet.greet();

var greet2 = require('./greet2').greet;
greet2();

var greet3 = require('./greet3');

greet3.greet();

greet3.greeting = "Tomorrow is Friday";

var greet3b = require('./greet3');
greet3b.greet();

var Greet4 = require('./greet4');

var grtr = new Greet4();

grtr.greet();

var grtr2 = new Greet4;
grtr2.greeting = "hi";
grtr2.greet();
grtr.greet();

var greet5 = require('./greet5').hellothere;
greet5();