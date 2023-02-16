
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
const handleUserInput = function () {
  process.stdin.on('data', (key) => {
    process.stdout.write('.');
  });
};
module.exports = setupInput;