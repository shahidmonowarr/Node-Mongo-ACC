// exploring the events module

const events = require('events');
const eventEmitter = new events.EventEmitter();

// Create an event handler:
const ramadanCole = () => {
    console.log('Ramadan is going on ...');
    }

// Assign the event handler to an event:
eventEmitter.on('ramadan', ramadanCole);

// Fire the 'ramadan' event:
eventEmitter.emit('ramadan');