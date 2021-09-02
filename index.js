const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const Person = require('./models/person')

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('build'))
morgan.token('body', (req, res) => {
  if (req.method === 'POST') {
    return JSON.stringify(req.body)
  }
})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

app.get('/api/persons', (request, response) => {
  Person
    .find({})
    .then(persons => {
      response.json(persons)
    })
})

app.get('/api/persons/:id', (request, response) => {
  const id = request.params.id
  Person
    .findById(id)
    .then(person => {
      response.json(person)
    })
    .catch(result => {
      response.status(404).end()
    })
})

app.delete('/api/persons/:id', (request, response) => {
  Person
    .findByIdAndDelete(request.params.id)
    .then(result => {
      response.status(204).end()
    })
})

app.get('/info', (request, response) => {
  Person
    .find({})
    .then(persons => {
      response.send(`<p>Phonebook has info for ${persons.length} people</p>
                      <p>${new Date()}</p>`)
    })
})

app.post('/api/persons', (request, response) => {
  const personData = request.body

  if (!personData.name) {
    return response.status(400).json({
      error: 'name is missing'
    })
  } else if (!personData.number) {
    return response.status(400).json({
      error: 'number is missing'
    })
  }

  const newPerson = new Person({
    name: personData.name,
    number: personData.number
  })
  newPerson
    .save()
    .then(person => {
      response.json(person)
    })
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
