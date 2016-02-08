var http = require('http');
var fs = require('fs');

var http = require('http')
var server = http.createServer(function (req, res) {
  //--this line was in the official solution
  //res.writeHead(200, { 'content-type': 'text/plain' })

  var readStream = fs.createReadStream(process.argv[3]);
  readStream.pipe(res);
})
server.listen(process.argv[2]);