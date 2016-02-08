var printFiles = require('./6-module.js');

var callback = function(err, files){
  if(err) {
    console.log('an error has occured');
    return;
  }
  files.forEach(function(file){
      console.log(file);
  });
}

printFiles(process.argv[2],process.argv[3],callback);