var buf = new Buffer.from('Hello','utf8');

console.log(buf);
console.log(buf.toString());
console.log(buf.toJSON());
console.log(buf[2]);

buf.write("Pa",2);
console.log(buf.toString());