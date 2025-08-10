// Import buffer module (usually available globally, but explicit import is okay)
const { buffer } = require("buffer");

/* 
Buffer basics in Node.js: 
- Buffer is a global object to work with raw binary data.
- Useful when dealing with files, TCP streams, or other binary protocols.
*/

// Example: Allocating a buffer of size 4 bytes initialized with zeros
/*
const buf = Buffer.alloc(4);
console.log(buf[1]);  // Outputs 0 because buffer is zero-initialized
*/

// Example: Creating a buffer from a string (UTF-8 by default)
 /*
const buf = Buffer.from('Hello chai');
console.log(buf);            // Prints raw bytes (hex values)
console.log(buf.toString()); // Converts buffer back to string: "Hello chai"
*/

// Example: Allocating a buffer quickly but uninitialized (unsafe, may contain old data)
/*
const buftwo = Buffer.allocUnsafe(110);
console.log(buftwo);  // Contains random (uninitialized) data, faster allocation
*/

// Example: Writing a string into a zero-filled buffer
/*
const buf = Buffer.alloc(10);
buf.write('Hello');        // Writes 'Hello' into the buffer starting at byte 0
console.log(buf.toString());  // Outputs: 'Hello' plus trailing zeros (shown as empty chars)
*/

// Example: Partial string read from a buffer using start and end indices
/*
const buf = Buffer.from('Hello');
console.log(buf.toString('utf8', 0, 4));  // Outputs: "Hell" (bytes from 0 to 3)
*/

// Example: Modifying buffer content by changing individual bytes (buffers are mutable)
 /*
const buf = Buffer.from('game');
console.log(buf);  // Prints buffer content (hex)
buf[0] = 0x4A;     // Changes first byte from 'g' (0x67) to 'J' (0x4A)
console.log(buf);  // Shows updated buffer content
console.log(buf.toString());  // Outputs: 'Jame'
*/

// Merging two buffers using Buffer.concat()
const buf1 = Buffer.from("chai aur");
const buf2 = Buffer.from(" code");

// Concatenate buf1 and buf2 into a single buffer
const merged = Buffer.concat([buf1, buf2]);

console.log(merged.toString());  // Outputs: "chai aur code"
console.log(merged.length);       // Outputs total length in bytes: 13



/*
Key takeaways for Buffer:
Use Buffer.alloc(size) to create zero-filled buffers safely.

Use Buffer.allocUnsafe(size) for faster but uninitialized buffers (be careful!).

Buffer.from(string) creates a buffer from a string.

Buffers can be manipulated byte-by-byte since they are mutable.

Buffer.concat(arrayOfBuffers) merges multiple buffers into one.

.toString() converts buffer data back to a readable string (default UTF-8).
*/