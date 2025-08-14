const express = require('express')
const { log, error } = require('node:console') // imported but not really used here

const fs =require('fs')
const app = express()
const PORT = 8000

// In-memory database of books
const books = [
    { id: 1, title: 'Book 1', author: "Author 1" },
    { id: 2, title: 'Book 2', author: "Author 2" },
]

// Middleware to parse JSON bodies in requests
app.use(express.json())

app.use(function(req,re,next){
    const log =`[${Date.now()} ${req.method} ${req.url  }]`
    fs.appendFileSync('log.txt', log,'utf-8')
})

app.use(function(req,re,next){
    console.log(`I am middleware A`);
    next()    
})

app.use(function(req,re,next){
    console.log(`I am middleware B`);
    next()    
})
// Route: Get all books
app.get('/books', (req, res) => {
    res.setHeader('x-piy', 'parth-nagar') // Custom header example
    res.json(books) // Respond with books array in JSON
})

// Route: Get single book by id
app.get('/books/:id', (req, res) => {
    const id = parseInt(req.params.id)

    if (isNaN(id)) {
        // If id param is not a number, return 400 error
        return res.status(400).json({ error: `Invalid id ${req.params.id}` })
    }

    const book = books.find(e => e.id === id)

    if (!book) {
        // If no book found with given id, return 404 error
        return res.status(404).json({ error: `Book with id ${id} not found` })
    }

    // Return found book
    return res.json(book)
})

// Route: Add new book (POST)
app.post('/books', (req, res) => {
    const { title, author } = req.body

    // Validate title
    if (!title || title.trim() === '') {
        return res.status(400).json({ error: 'Title is required' })
    }

    // Validate author
    if (!author || author.trim() === '') {
        return res.status(400).json({ error: 'Author is required' })
    }

    // Generate new ID (max existing id + 1)
    const id = books.length > 0 ? books[books.length - 1].id + 1 : 1

    // Create new book object
    const book = { id, title, author }

    // Add to books array
    books.push(book)

    // Respond with created book and 201 status
    return res.status(201).json(book)
})

// Route: Delete a book by id
app.delete('/books/:id', (req, res) => {
    const id = parseInt(req.params.id)

    if (isNaN(id)) {
        return res.status(400).json({ error: `Invalid id ${req.params.id}` })
    }

    // Find index of book to delete
    const indexToDelete = books.findIndex(e => e.id === id)

    if (indexToDelete < 0) {
        return res.status(404).json({ error: `Book with id ${id} not found` })
    }

    // Remove book from array (splice mutates original array)
    books.splice(indexToDelete, 1)

    // Respond with success message
    return res.status(200).json({ message: 'Book deleted successfully' })
})

// Start the server and listen on PORT
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
