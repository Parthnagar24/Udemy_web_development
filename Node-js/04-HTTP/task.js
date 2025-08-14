const http = require('node:http');
const fs = require('fs');  // Import fs module for logging

const server = http.createServer(function(req, res) {
    const method = req.method;
    const path = req.url;

    // Log the incoming request with timestamp, method, and path
    const log = `[${Date.now()} ${method} ${path}]\n`; 
    fs.appendFileSync('log.txt', log, 'utf-8');

    switch(method) {
        case 'GET': {
            switch(path) {
                case '/':
                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                    res.end("Hello from the server");
                    break;  // important to avoid falling through other cases
                
                case '/contact-us':
                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                    res.end("Gmail- gmail@.com & contact - 1236549877");
                    break;

                case '/tweet':
                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                    res.end("Tweet-1\nTweet2");
                    break;

                default:
                    res.writeHead(404, { 'Content-Type': 'text/plain' });
                    res.end("404 Not Found");
                    break;
            }
            break; // end of GET method handling
        }
        case 'POST': {
            switch(path) {
                case '/tweet':
                    res.writeHead(201, { 'Content-Type': 'text/plain' });
                    res.end('Your tweet was created');
                    break;

                default:
                    res.writeHead(404, { 'Content-Type': 'text/plain' });
                    res.end("404 Not Found");
                    break;
            }
            break; // end of POST method handling
        }
        default: {
            // If method is not handled (not GET or POST)
            res.writeHead(405, { 'Content-Type': 'text/plain' });
            res.end(`Method ${method} Not Allowed`);
        }
    }
});

server.listen(8000, () => {
    console.log('HTTP server is running on port 8000');
});
