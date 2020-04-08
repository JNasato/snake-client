const { connect } = require('./client');

console.log('Connecting ...');
connect();

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput(stdin);
  return stdin;
}

const handleUserInput = function (stdin) {
  stdin.on('data', data => {
    if (data === '\u0003') {
      process.exit();
    }
  });
}

setupInput();