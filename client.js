const net = require("net");
const { IP, PORT } = require("./constants");
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });
  conn.on("connect", (connect) => {
    console.log("connection is successfully established: ", connect);
  });
  conn.write("Name: NIM");
  setTimeout(() => {
  //   conn.write("Move: up");
  }, 500)
  // setInterval(() => {
  //   conn.write("Move: left")
  // }, 1000)
  // setTimeout(() => {
  //   conn.write("Move: down");
  // }, 3000)
  // setTimeout(() => {
  //   conn.write("Move: right");
  // }, 4000)
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};



module.exports = connect;