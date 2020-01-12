const Emitter = require('events')
const emitter = new Emitter()

function User () {}
const eventName = 'greet'
User.prototype = Object.create(new Emitter(), {
  constructor: {
    value: User,
    enumerable: false
  }
})
User.prototype.sayHi = function (data) {
  this.emit(eventName, data)
}

const user = new User()
user.on(eventName, data => {
  console.log(data)
})

user.sayHi('Hello, world')
