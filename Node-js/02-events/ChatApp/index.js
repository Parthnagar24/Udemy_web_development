// Import the ChatRoom class from your chatroom.js file
const ChatRoom = require('./chatroom.js');

// Create a new instance of ChatRoom
const chat = new ChatRoom();

// Register event listener for when a user joins the chat room
chat.on('join', (user) => {
    console.log(`${user} has joined the chat room`);
});

// Register event listener for when a user sends a message
chat.on('message', (user, message) => {
    console.log(`${user} : ${message}`);
});

// Register event listener for when a user leaves the chat room
chat.on('leave', (user) => {
    console.log(`${user} has left`);
});

// Simulate users joining the chat room
chat.join('Alice');  // Emits 'join' event with 'Alice'
chat.join('Bob');    // Emits 'join' event with 'Bob'

// Simulate sending messages
// **Note:** Your sendMessage method expects the user as the first argument and message as second.
// Your calls below send only one string argument, so it will be interpreted as the user parameter, message will be undefined.
// Correct calls should be: chat.sendMessage('Alice', 'hey Alice, Hello to everyone');
chat.sendMessage('hey Alice, Hello to everyone');  // Incorrect usage: user = whole string, message = undefined
chat.sendMessage('hey Bob, Hello to everyone');    // Same as above

// Simulate a user leaving the chat room
chat.leave('Alice');  // Emits 'leave' event with 'Alice'

// Attempt to send a message from 'Alice' after she left the chat
chat.sendMessage("Alice", "this message won't be sent");  // This will print warning because Alice is not in chat room

// Bob leaves the chat room
chat.leave("Bob");  // Emits 'leave' event with 'Bob'



/*
Important note about your sendMessage calls:
Your sendMessage method requires two arguments: user and message.

Your current calls like chat.sendMessage('hey Alice, Hello to everyone') pass only one string, so it is treated as user and message becomes undefined.

To send a proper message from a user, call it like this:


chat.sendMessage('Alice', 'hey Alice, Hello to everyone');
chat.sendMessage('Bob', 'hey Bob, Hello to everyone');
*/