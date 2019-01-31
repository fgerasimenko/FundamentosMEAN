const PI = 3.141592;

console.log(global.PI);

global.obj = { message: "Em todo lugar"};

console.log(obj.message);
console.log(global.obj.message);
