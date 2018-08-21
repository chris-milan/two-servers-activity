
var http = require("http");

var PORT1 = 7000;
var PORT2 = 7500;

function handleRequest1(request, response) {
  response.end("You rock!");
}

var server = http.createServer(handleRequest1);
server.listen(PORT1, function() {
  console.log("Server listening on: http://localhost:" + PORT1);
});

function handleRequest2(request, response) {
  response.end("You do NOT rock!");
}

var server = http.createServer(handleRequest2);
server.listen(PORT2, function() {
  console.log("Server listening on: http://localhost:" + PORT2);
});

