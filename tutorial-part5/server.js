const http = require("http");
const path = require("path");
const fs = require("fs");
const fsPromises = require("fs").promises;

const logEvents = require("./logEvents");
const eventEmitter = require("events");
class Emitter extends eventEmitter {}
// initialize object
const myEmitter = new Emitter();

const PORT = process.env.PORT || 3500;

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
});

// this should be at the end of the server file
server.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});

// add a listener for the log event
// myEmitter.on('log', (msg) => logEvents(msg));

// myEmitter.emit('log', 'Log event emitted');
