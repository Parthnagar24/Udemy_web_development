// Import the built-in 'events' module from Node.js
const EventEmitter = require("events");

// Create an instance of EventEmitter
// This object will allow us to register event listeners and emit events
const eventEmitter = new EventEmitter();

// Register an event listener for the 'greet' event using .on()
// This listener runs every time the 'greet' event is emitted
eventEmitter.on('greet', (username) => {
    // This callback receives 'username' as argument from the emit call
    console.log(`Hello ${username} & welcome to events in Node.js`);
});

// Register another listener for the same 'greet' event
// Multiple listeners can be registered for the same event
eventEmitter.on('greet', (username) => {
    console.log(`Hola ${username} & welcome to events in Node.js`);
});

// Register a listener for 'pushnotify' event that runs only once
// .once() ensures the listener is removed automatically after first call
eventEmitter.once('pushnotify', () => {
    console.log(`This event will run only once`);
});

// Emit the 'greet' event with the argument "parth"
// Both 'greet' listeners will run, each receiving "parth"
eventEmitter.emit('greet', "parth");

// Emit 'greet' again with argument "chai"
// Both listeners run again
eventEmitter.emit('greet', 'chai');

// Emit the 'pushnotify' event the first time
// The listener runs and then is removed automatically
eventEmitter.emit('pushnotify');

// Emit 'pushnotify' again - listener does NOT run this time
eventEmitter.emit('pushnotify'); // no output here

// Emit 'greet' again with "chai"
eventEmitter.emit('greet', 'chai');

// Demonstrate adding and removing a listener manually
const myListener = () => console.log("I am a test listener");

// Register 'test' event listener
eventEmitter.on('test', myListener);

// Emit 'test' event - listener runs
eventEmitter.emit("test");

// Remove the 'test' event listener using removeListener
eventEmitter.removeListener("test", myListener);

// Emit 'test' event again - listener has been removed, so no output
eventEmitter.emit("test");

// Show all listeners currently registered for the 'greet' event
// It returns an array of functions registered as listeners
console.log(eventEmitter.listeners("greet"));



/*
What happens in this code:
Two listeners are registered for 'greet'. Every time you emit 'greet', both print a greeting.

The 'pushnotify' event listener runs only once due to .once().

The 'test' event listener is added, triggered, then removed, demonstrating manual listener management.

Finally, the .listeners() method shows all active listeners for 'greet'.

*/

/*
Hello parth & welcome to events in Node.js
Hola parth & welcome to events in Node.js
Hello chai & welcome to events in Node.js
Hola chai & welcome to events in Node.js
This event will run only once
Hello chai & welcome to events in Node.js
Hola chai & welcome to events in Node.js
I am a test listener
[]

*/
