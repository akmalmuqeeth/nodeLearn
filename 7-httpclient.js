var http = require('http');
var util = require('util');

http.get(process.argv[2], function(res) {
  //console.log(util.inspect(res, {showHidden: false, depth: null}));
  //console.log("Got response: " + res);

  res.on('data', function(chunk){
     console.log(""+chunk); 
  });


}).on('error', function(e) {
  console.log("Got error : " + e.message);
});

/*
//official solution
var http = require('http')

    http.get(process.argv[2], function (response) {
      response.setEncoding('utf8')
      response.on('data', console.log)
      response.on('error', console.error)
    })
*/