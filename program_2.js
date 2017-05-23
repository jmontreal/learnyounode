var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]);

var arr = buffer.toString().split('\n');

console.log(arr.length - 1);