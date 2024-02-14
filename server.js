// @ts-check

var express = require('express');
var requestIp = require('request-ip');
var app = express();
var os = require('os');

app.get('/', function(req, res){
  res.send("Hostname : " + os.hostname())
  console.log("client IP: " +requestIp.getClientIp(req));
})

app.listen(3000, function(){
  console.log("Express server started at port 3000");
});

