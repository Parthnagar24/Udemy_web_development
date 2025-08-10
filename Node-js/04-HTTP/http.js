// Import the built-in 'http' module in Node.js
// 'node:http' is the modern import path (works like 'http' in older versions)
const http = require('node:http')

// Create an HTTP server
// The function (req, res) will run every time a request is received
const server = http.createServer(function(req, res) {
    
    // Log to the terminal whenever the server gets a request
    console.log("I got an incoming request");

    // Send the HTTP response header with status code 200 (OK)
    // You can also specify Content-Type here if needed
    res.writeHead(200);

    // End the response and send text back to the client
    res.end(`Thanks for visiting the server`);
});

// Make the server listen for requests on port 8000
// The callback function runs once the server starts successfully
server.listen(8000, function() {
    console.log(`Http server is up and running on port 8000`);
});
