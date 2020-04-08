let connection;

const setupInput = function (conn) {
  connection = conn;
  console.log("connection")
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput(stdin);
  return stdin;
}

const handleUserInput = function (stdin) {
  stdin.on('data', data => {
    if (data === '\u0077') {
      connection.write("Move: up");
    }
    if (data === '\u0061') {
      connection.write("Move: left");
    }
    if (data === '\u0073') {
      connection.write("Move: down");
    }
    if (data === '\u0064') {
      connection.write("Move: right");
    }
    if (data === '\u007A') {
      connection.write("Say: Trump2020");
    }
    if (data === '\u0078') {
      connection.write("Say: Larry the Duck");
    }
    if (data === '\u0063') {
      connection.write("Say: I love Larry");
    }
    if (data === '\u0076') {
      connection.write("Say: COVID-19 for Pres");
    }
    if (data === '\u0003') {
      process.exit();
    }
  });
}

module.exports = { setupInput }