const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: "50541"
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