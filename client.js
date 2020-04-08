const net = require('net');
const stdin = process.stdin;

//  * Establishes connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '50.64.116.162',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  //sends data when connected
  conn.on('connect', () => {
    console.log("Successfully connected to snek server");
    conn.write("Name: JER");
    // setInterval(() => {
    //   // conn.write("Move: up");
    // }, 50);

  });

  //returns data from server
  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
}

module.exports = { connect };