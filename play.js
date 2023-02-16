const net = require("net");
const connect = require("./client");
const setupInput = require('./client')

console.log("Connecting ...");
connect();
setupInput();

