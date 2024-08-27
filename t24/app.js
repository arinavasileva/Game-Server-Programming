var fs = require('fs');
var zlib = require('zlib');

var readable = fs.createReadStream(__dirname+'/somedata.txt', {encoding: 'utf8',
    highWaterMark:16*1024
});

//create writable stream

var writable = fs.createWriteStream(__dirname+'/copiedSomeData.txt');

var compressed = fr.createWriteStream(__dirname+'/zippedFile.gz');

readable.pipe(writable);

var gzip = zlib.createGzip();

//we use this when working with pipes

readable.pipe(gzip).pipe(compressed);
