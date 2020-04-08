const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function () {
  const conn = net.createConnection({
    host: '10.0.0.209',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log("Data: ", data);
  });

  return conn;
}

console.log('Connecting ...');
connect();
