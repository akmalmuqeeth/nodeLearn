var fs = require('fs');
var path = require('path');


module.exports = function(dirName,ext,callback){
  fs.readdir(dirName, function(err, files){
    if(err) {
      callback(err);
    } else {
      var filteredFiles =  files.filter(function (file) {
      return path.extname(file) === ext;
    });  

      
      callback(null, filteredFiles);
    }
  
});
}