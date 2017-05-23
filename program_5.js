var mymodule = require('./mymodule_5');

mymodule(process.argv[2], process.argv[3], function(error, data) {
  if (error) {
    console.log(error);
    return;
  }

  data.forEach(function(entry) {
    console.log(entry);
  });
  }
);


               