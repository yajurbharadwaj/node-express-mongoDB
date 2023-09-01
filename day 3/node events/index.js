const logEvents = require('./logevents');

const EventEmitter = require('events');

class MyEmitter extends EventEmitter { };

//initialize the object

const myEmitter = new MyEmitter();

//add listener to the log event
myEmitter.on('log', (msg) => logEvents(msg));

setTimeout(() => {
    //event emit
    myEmitter.emit('log', 'log event emitted!');

}, 2000)