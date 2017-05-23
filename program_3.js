var fs = require('fs');

function readCallback (err, data) { 
  if (err) {
    console.log("Error!");
    return;
  }
  
  var arr = data.toString().split('\n');
  console.log(arr.length - 1);
}

var buffer = fs.readFile(process.argv[2], readCallback);

