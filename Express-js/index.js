// Import the express module
const express = require('express')

// Import log from node:console (not used here, you can remove if unnecessary)
const { log } = require('node:console')

// Create an Express application instance
const app = express()

// Define a GET route handler for the root URL '/'
app.get('/', function(req, res) {
    // Send the response 'Homepage' and end the request
    res.end('Homepage')
})

// Define a GET route handler for '/contact-us' URL
app.get('/contact-us', function(req, res) {
    // Send a response with contact info and end the request
    res.end('you can contact me via email')
})

// Define a GET route handler for '/tweets' URL
app.get('/tweets', (req, res) => {
    // Send a response indicating a tweet was published
    res.end('Tweet published')
})

// Define a POST route handler for '/tweets' URL
app.post('/tweets', (req, res) => {
    // Set the HTTP response status code to 201 (Created)
    // NOTE: There's a small bug here: `res.status(201).res.end(...)` should be `res.status(201).end(...)`
    res.status(201).end('Tweet created')
})

// Start the server and listen on port 8000
app.listen(8000, () => {
    console.log(`Server is running on port 8000`);
})


/*
express() creates an app object to define routes and handle requests.

app.get(path, handler) handles GET requests on a specific path.

app.post(path, handler) handles POST requests on a specific path.

res.end() sends the response back to the client and closes the connection.

res.status(code) sets the HTTP status code for the response.

app.listen(port, callback) starts the server on the given port.
*/