var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function(err, files){
  for (var i = 0; i < files.length; i++) {
    var file = files[i];
    var ext  = '.'+process.argv[3];
    if(path.extname(file) == ext) {
      console.log(file);
    }
  };
});