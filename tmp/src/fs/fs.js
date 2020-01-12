const fs = require('tmp/src/fs/fs')

let textFromNewFile;
fs.readFile('hello.text', 'utf-8',(err, data) => {
  if (err) throw err.message
  fs.writeFile('hello1.text', data, (err) => {
    if (err) throw err.message
    console.log('From cb writeFile')
    fs.readFile('hello1.text', 'utf-8', (err, data) => {
      if (err) throw err.message
      textFromNewFile = data
      console.log(textFromNewFile)
    })
  })
  console.log('From cb readFile: ', data)
})

console.log('text from file: ', textFromNewFile)
