var http = require('http')
    var bl = require('bl')
    

    var getData = function(url, order, callback){
     http.get(url, function (response) {
        response.pipe(bl(function (err, data) {
          if (err)
            return console.error(err)
          data = data.toString('ascii');

          callback( order, data);
        }))
      });
    }

var queue = [];

   
    var printerCb = function(order, data){
        queue.push({order : order , data : data});
        if(queue.length ==3) {
          queue.sort(function(a, b) {
              return a.order - b.order;
          });
          for (var i = 0; i < queue.length; i++) {
            console.log(queue[i].data);
          };

        }
    }

    getData(process.argv[2], 0,printerCb);
    getData(process.argv[3], 1, printerCb);
    getData(process.argv[4], 2, printerCb);
    //getData(process.argv[4], printerCb);

    /*
    //official solution

    var http = require('http')
    var bl = require('bl')
    var results = []
    var count = 0

    function printResults () {
      for (var i = 0; i < 3; i++)
        console.log(results[i])
    }

    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err)
            return console.error(err)

          results[index] = data.toString()
          count++

          if (count == 3) // yay! we are the last one!
            printResults()
        }))
      })
    }

    for (var i = 0; i < 3; i++)
      httpGet(i)

    */