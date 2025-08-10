// Import EventEmitter class from Node.js events module
const EventEmitter = require("events");

// Create a new EventEmitter instance
const eventEmitter = new EventEmitter();

// Register a listener for the special 'error' event
// 'error' events are treated specially in Node.js
// If no listener is registered for 'error', the process crashes
eventEmitter.on('error', (err) => {
    // err is an Error object passed when emitting 'error'
    // Log the error message to console with console.error
    console.error(`Error Occurred : ${err.message}`);
});

// Emit the 'error' event manually
// Pass a new Error object with message "Something went wrong"
eventEmitter.emit('error', new Error("Something went wrong"));


/*
Key points about 'error' event:
Node.js expects an 'error' event listener on EventEmitters.

If you emit 'error' without a listener, Node.js will throw and crash.

Always handle 'error' events to avoid unexpected crashes.

The event listener receives an Error object which you can log or handle accordingly. */