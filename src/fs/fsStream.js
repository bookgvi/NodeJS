const fs = require('fs')

const fname = 'stream.file'

const writeableStream = fs.createWriteStream(fname)
writeableStream.write('Hey! ');
writeableStream.write('This is NodeJS!\n');
writeableStream.end('The END...');

const readableStream = fs.createReadStream(fname, 'UTF-8')

readableStream.on('data', chunk => {
  console.log(chunk)
})
readableStream.on('pipe', chunk => {
  console.log('pipe...', chunk)
})

const cpFile = fs.createWriteStream(`${fname}.copy1`)

readableStream.pipe(cpFile)
