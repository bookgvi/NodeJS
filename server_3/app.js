const express = require('express');
const fs = require('fs');

const host = 'localhost';
const port = '7000';
const statusOK = 200;
const status404 = 404;
const statusServerError = 500;

const server = express();

server.use(express.static(`${__dirname}/assets`))

server.use((req, res, next) => {
  const now = new Date();
  const fileLog = `log/${now.getFullYear()}-${now.getUTCMonth() + 1}-${now.getDate()}.log`;
  const stringLog = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}.${now.getMilliseconds()} - ${req.method} "${req.url}" ${res.statusCode} ${req.get('user-agent')}`;
  fs.appendFile(fileLog, `${stringLog}\n`, () => {
  })
  next()
})

server.get('/', (req, res) => {
  res.send('Hello, NodeJS!')
})

server.use((req, res, next) => {
  res.statusCode = status404;
  res.header('Content-Type', 'text/html; charset=utf-8;');
  const readStream = fs.createReadStream('error404.html', 'utf-8');
  readStream.pipe(res);
})

server.use((err, req, res, next) => {
  res.statusCode = statusServerError;
  const now = new Date();
  const fileLog = `log/${now.getFullYear()}-${now.getUTCMonth() + 1}-${now.getDate()}.log`;
  fs.appendFile(fileLog, `\t${err}\n`, () => {})
  // res.send('Server Error (500)');
  next();
})

server.listen(port, host, () => {
  console.log(`Server listen on http://${host}:${port}`)
})
