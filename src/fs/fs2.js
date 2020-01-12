const fs = require('fs')

const res = fs.readFileSync('./hello.text', 'utf-8')
console.log('Синхронная функция для чтения из файла:\n', res)

fs.readFile('./hello12.text', 'utf-8', (err, content) => {
  if (err) throw(err.message)
  console.log('Асинхронная функция для чтения из файла: \n', content)
})
