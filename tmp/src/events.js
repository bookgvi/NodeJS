const Events = require('tmp/src/events');

const Event = function() {}
Event.prototype = Object.create(new Events(), {
  constructor: {
    value: Event,
    enumerable: false
  }
})
let eventName = 'greeting'
Event.prototype.sayHi = function (val) {
  return this.emit(eventName, val)
}

const user = new Event()

user.on(eventName, function (val) {
  console.log('From event to U:', val, this)
})

console.dir(user)
user.sayHi('QQQ')

/*
*
* Checked some case
* */
eventName = 'request'
const newEvent = new Events ()

newEvent.on(eventName, function (request) {
  request.approved = true
})
newEvent.on(eventName, function (request) {
  console.log(request)
})

newEvent.emit(eventName, { a: 1 })
