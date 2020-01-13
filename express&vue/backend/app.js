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
