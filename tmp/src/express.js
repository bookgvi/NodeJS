const express = require('express');

const app = express();

app.get('/', (request, response) => {
  response.end('QQQ')
});

app.listen(3000)
