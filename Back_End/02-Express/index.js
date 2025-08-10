import 'dotenv/config'
import express from 'express'
import logger from './logger.js'
import morgan from 'morgan'

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

// Define Morgan format for logging
const morganFormat = ':method :url :status :response-time ms'

// Morgan middleware for logging
app.use(morgan(morganFormat, {
  stream: {
    write: (message) => {
      const logObject = {
        method: message.split(' ')[0],
        url: message.split(' ')[1],
        status: message.split(' ')[2],
        responseTime: message.split(' ')[3],
      }
      logger.info(JSON.stringify(logObject)) // Fixed typo 'infor' to 'info'
    }
  }
}))

let teaData = []
let nextId = 1

// Add a new tea
app.post('/teas', (req, res) => {
  const { name, price } = req.body
  const newTea = { id: nextId++, name, price }
  teaData.push(newTea)
  res.status(201).send(newTea)
})

// Get all teas
app.get('/teas', (req, res) => {
  res.status(200).send(teaData)
})

// Get a tea by id
app.get('/teas/:id', (req, res) => {
  const tea = teaData.find(t => t.id === parseInt(req.params.id))
  if (!tea) {
    return res.status(404).send('Tea not found')
  }
  res.status(202).send(tea) // Corrected response to send the tea found
})

// Update tea by id
app.put('/teas/:id', (req, res) => {
  const tea = teaData.find(t => t.id === parseInt(req.params.id))
  if (!tea) {
    return res.status(404).send('Tea not found')
  }
  const { name, price } = req.body
  tea.name = name
  tea.price = price
  res.status(200).send(tea) // Fixed status code handling
})

// Delete tea by id
app.delete('/teas/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const index = teaData.findIndex(t => t.id === id)

  if (index === -1) {
    return res.status(404).send('Tea not found')
  }

  teaData.splice(index, 1)
  return res.status(204).send() // Correct response status
})

app.listen(port, () => {
  console.log(`Server is running at : ${port}..`)
})
