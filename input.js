const { UP, LEFT, DOWN, RIGHT } = require('./constants.js');

let connection;

const msg = "Say: ";
const hello = "Hello there!";
const stay = "Stay a while...";
const listen = "...and listen!";

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', key => {
    handleUserInput(key);
  });
  return stdin;
};

let func;

const handleUserInput = (key) => {
  const stdout = process.stdout;
  const interval = function(key) {
    func = setInterval(() => {
      connection.write(key);
    }, 100);
  };
 
  if (key === 'w') {
    clearInterval(func);
    interval(UP);
  }
  if (key === 'a') {
    clearInterval(func);
    interval(LEFT);
  }
  if (key === 's') {
    clearInterval(func);
    interval(DOWN);
  }
  if (key === 'd') {
    clearInterval(func);
    interval(RIGHT);
  }
  if (key === "h") {
    connection.write(msg + hello);
  }
  if (key === "j") {
    connection.write(msg + stay);
  }
  if (key === 'k') {
    connection.write(msg + listen);
  }
};
module.exports = setupInput;