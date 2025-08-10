// Import the built-in EventEmitter class from Node.js
const EventEmitter = require("events");

// Define a Chat class that extends EventEmitter
// This means Chat inherits all event handling capabilities such as 'on', 'emit', and 'once'
class Chat extends EventEmitter {

    // Custom method to send a message
    sendMessage(msg){
        // Log the message that is being sent
        console.log(`Message sent : ${msg}`);
        
        // Emit an event called 'messageReceived'
        // Pass the 'msg' as data to listeners of this event
        this.emit('messageReceived', msg);
    }
}

// Create an instance of Chat class
// This instance has both custom methods and EventEmitter methods
const chat = new Chat();

// Register a listener for the 'messageReceived' event
// When this event is emitted, the callback receives the message and logs it
chat.on("messageReceived", (msg) => {
    console.log(`New Message: ${msg}`);
});

// Trigger the event by calling sendMessage method
// This sends the message and emits the 'messageReceived' event internally
chat.sendMessage("Hello Parth");


/*
What happens when you run this code?
chat.sendMessage("Hello Parth") is called.

Inside sendMessage, it logs: Message sent : Hello Parth.

Then it emits 'messageReceived' event with the message "Hello Parth".

The registered listener for 'messageReceived' triggers and logs: New Message: Hello Parth.

*/