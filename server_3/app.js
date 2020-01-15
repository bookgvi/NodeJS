const app = require('express');

const host = 'localhost';
const port = '7000';
const statusOK = 200;

const server = app();
server.get('/', (req, res) => {
  res.statusCode = statusOK;
  // res.header('Content-Type', 'text/html; charset=utf-8;');
  res.header('Content-type', 'text/html')
  res.send('Hello, NodeJS');
})

server.listen(port, host, () => {
  console.log(`Server listen on http://${host}:${port}`)
})
