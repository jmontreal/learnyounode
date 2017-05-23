var fs = require('fs');
var path = require('path') 

function readCallback (err, data) { 
  if (err) {
    console.log("Error!");
    return;
  }
  
  var arr = data.toString().split(',');
  
  var ext = "." + process.argv[3];
  
  arr = arr.filter(function(val) {
    return path.extname(val) === ext ;
  });
  
  arr.map(function(val) {
    console.log(val);  
  });
}

var buffer = fs.readdir(process.argv[2], readCallback);
