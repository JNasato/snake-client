const { IP, PORT } = require('./constants');
const net = require('net');

//  * Establishes connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  //sends data when connected
  conn.on('connect', () => {
    console.log("Successfully connected to snek server");
    conn.write(`Name: ${NAME}`);

  });

  //returns data from server
  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
}

module.exports = { connect };