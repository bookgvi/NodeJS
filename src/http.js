const http = require('http')

http.createServer((request, response) => {
  response.end('Hello, NodeJS! ')
}).listen(8080, 'localhost', 'Starting on port: 8080')
