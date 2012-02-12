var http = require('http');
var ping = require('ping');

var options = {
  host: '192.168.100.1',
  path: '/reset.htm'
};
var routine = function (){
  ping.sys.probe('google.com', function(isAlive){
    if (!isAlive){
      console.log("Restarting modem...");
      http.get(options);
    }
  });
  setTimeout(routine, 15000);
}

routine();