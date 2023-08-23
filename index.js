const logEvents = require('./logEvents');

const EventEmitter = require('events');

class MyEmitter extends EventEmitter { };

//initialize object
const myEmitter = new MyEmitter();

//add listener for the log event
myEmitter.on('log', (msg) => logEvents(msg));

//emit the event to test it out
setTimeout(() => {
    myEmitter.emit('log', 'log emit emitted ');
}, 2000);
