const someFunc = (data, callBack) => {
  const val = Math.random() * (10 - 1) + 1
  const isErr = val > 6 ? new Error('This is error...') : null
  setTimeout(() => {
    callBack(isErr, data)
  }, 0)
}

someFunc('This is random... no Errors...', (err, data) => {
  if (err) throw err.message
  console.log(data)
})

console.log('Finished...')
