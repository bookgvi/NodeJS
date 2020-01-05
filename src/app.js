const len = 5
let arg = []

arg = Array.apply(null, { length: len }).map((item, index) => process.argv[index])

arg.forEach((item, index) => {
  console.log(`Argument arg${index} = ${arg[index]}`)
})
