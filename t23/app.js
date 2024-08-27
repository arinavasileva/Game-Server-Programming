var fs = require('fs');

var readable = fs.createReadStream(__dirname+'/somedata.txt', {encoding: 'utf8',
    highWaterMark:16*1024
});

//create writable stream

var writable = fs.createWriteStream(__dirname+'/copiedSomeData.txt');

//use readable stream to read and store to writable stream 

readable.on('data', function(chunk){

    console.log(chunk.length);

    //write the data to write stream 
    writable.write(chunk);
});