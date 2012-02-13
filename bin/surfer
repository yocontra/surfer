#!/usr/bin/env node

var http = require('http');
var ping = require('ping');

var options = {
  host: '192.168.100.1',
  path: '/reset.htm'
};
var routine = function () {
    console.log("Checking connection");
    ping.sys.probe('google.com', function (isAlive) {
      if (!isAlive) {
        console.log("Restarting modem...");
        http.get(options, function () {
          setTimeout(function () {
            console.log("Modem restarted");
            routine();
          }, 15000); //Modem takes 10 seconds to restart - 15 to be safe
        });
      } else {
        setTimeout(routine, 10000); //Check status every 5 seconds
      }
    });
  }

try {
  routine();
} catch (err) {
  routine();
}