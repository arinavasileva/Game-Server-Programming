var buffer = new ArrayBuffer(8); //64 bits - 64 values

var view = new Int32Array(buffer);

view[0] = 832;
view[1] = 293832;
view[2] = 45; // will not fit to a buffer
console.log(view);

