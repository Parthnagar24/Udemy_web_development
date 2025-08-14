// Import Node.js built-in HTTP module to create the server
const http = require('node:http');

// Create an HTTP server that listens to incoming requests
const server = http.createServer(function(req, res) {
    // Log the time when a request arrives (for debugging)
    console.log(`Incoming request at [${Date.now()}]`);
    
    // Log the URL path requested by the client (e.g., '/', '/about')
    console.log(req.url);

    // Use switch to handle different URL routes
    
        switch (req.url) {
    case '/':
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        return res.end('Homepage');

    case '/contact':
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        return res.end('Contact');

    case '/about':
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        return res.end('I am a software engineer');

    case '/favicon.ico':
        res.writeHead(204); // No Content
        return res.end();

    default:
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        return res.end("You're lost");
}

});

// Start the server and listen on port 8000
// When the server starts, log a message to the console
server.listen(8000, () => console.log(`Server is running on port: 8000`));
