const express = require('express');
const fs = require('fs');

const host = 'localhost';
const port = 7000;
const statusOK = 200;
const statusNotFound = 404;

const server = express();
/*
* Middleware для задания статических ресурсов
* Всегда отдается текущая дериктория (__dirname)
* например, используется на странице error404.html (sad.svg)
* */
server.use(express.static(`${__dirname}/assets`))

/*
* Middleware для логирования запросов
* */
server.use((req, res, next) => {
  const now = new Date();
  const dataLog = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}.${now.getMilliseconds()} - ${req.method} "${req.url}" ${req.get('user-agent')}`
  const fileName = `${now.getFullYear()}${now.getMonth() + 1}${now.getDate()}.log`
  fs.appendFile(fileName, `${dataLog}\n`, () => {})
  next();
})
server.get('/', (req, res) => {
  res.statusCode = statusOK;
  res.header('Content-type', 'text/html; charset=utf-8;')
  const readStream = fs.createReadStream('../frontend/index.html', 'utf-8')
  readStream.pipe(res)
})
/*
* Middleware для всех маршрутов, не описанных явно
* Возвращается 404 status
* Должен находится в самом конце
* */
server.use((req, res, next) => {
  res.statusCode = statusNotFound;
  res.header('Content-type', 'text/html; charset=utf-8;')
  const readStream = fs.createReadStream('../frontend/error404.html', 'utf-8');
  readStream.pipe(res);
})

server.listen(port, host, () => {
  console.log(`Server listen on http://${host}:${port}`);
})
