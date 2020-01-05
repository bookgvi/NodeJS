const http = require('http')

http.createServer((request, response) => {
  response.end('Hello, world from NodeJS! ')
}).listen(8080, 'localhost')
