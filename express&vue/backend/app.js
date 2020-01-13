const express = require('express');
const fs = require('fs');

const host = 'localhost';
const port = 7000;
const statusOK = 200;

const server = express();

server.get('/', (req, res) => {
  res.status = statusOK;
  res.header('Content-type', 'text/html; charset=utf-8;')
  const readStream = fs.createReadStream('../frontend/index.html', 'utf-8')
  readStream.pipe(res)
})

server.listen(port, host, () => {
  console.log(`Server listen on http://${host}:${port}`);
})
