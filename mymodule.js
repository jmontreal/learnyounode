module.exports = function (dirPath, extension, callback) {
  var fs = require('fs');
  var path = require('path') 

  function readCallback (err, data) { 
    if (err) {
      callback(err, null);
      return;
    }

    var arr = data.toString().split(',');

    var ext = "." + extension;

    arr = arr.filter(function(val) {
      return path.extname(val) === ext ;
    });
    
    return callback(null, arr);
  } // def readCallback

  var buffer = fs.readdir(dirPath, readCallback); 
}