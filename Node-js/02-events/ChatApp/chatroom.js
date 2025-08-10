// Import EventEmitter from Node.js built-in 'events' module
const EventEmitter = require("events");

// Define ChatRoom class that extends EventEmitter
// This gives ChatRoom the ability to emit and listen to events
class ChatRoom extends EventEmitter {

    constructor() {
        super();  // Call EventEmitter constructor to initialize
        this.users = new Set();  // Store users in a Set (unique values)
    }

    // Method to add a user to the chat room
    join(user) {
        this.users.add(user);       // Add user to the Set
        this.emit('join', user);    // Emit 'join' event with the user
    }

    // Method to send message from a user
    sendMessage(user, message) {
        if(this.users.has(user)) {       // Check if user is in chat room
            this.emit('message', user, message);  // Emit 'message' event with user and message
        } else {
            console.log(`${user} is not in the chat room`);  // Warn if user is not in room
        }
    }

    // Method to remove a user from the chat room
    leave(user) {
        if(this.users.has(user)) {     // Check if user exists in the room
            this.users.delete(user);   // Remove user from the Set
            this.emit('leave', user);  // Emit 'leave' event with user
        } else {
            console.log(`${user} is not in the chat room`);  // Warn if user not present
        }
    }
}

// Export the ChatRoom class so it can be imported in other files
module.exports = ChatRoom;


/*How it works:
ChatRoom keeps track of users in a Set (to avoid duplicates).

When users join, the 'join' event fires with their username.

When users send a message, it fires 'message' event only if they are part of the chat.

When users leave, it fires 'leave' event.

If a user tries to send message or leave without joining, it logs a warning.
*/