const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const Person = require('./models/person')

const errorHandler = (error, request, response, next) => {
  console.error(error.message)
  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).send({ error: error.message })
  }
  next(error)
}

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

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

app.get('/api/persons/:id', (request, response, next) => {
  const id = request.params.id
  Person
    .findById(id)
    .then(person => {
      if (person) {
        response.json(person)
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))
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

app.post('/api/persons', (request, response, next) => {
  const personData = request.body

  const newPerson = new Person({
    name: personData.name,
    number: personData.number
  })
  newPerson
    .save()
    .then(person => {
      response.json(person)
    })
    .catch(error => next(error))
})

app.put('/api/persons/:id', (request, response, next) => {
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

  const newPerson = {
    name: personData.name,
    number: personData.number
  }

  console.log(newPerson)

  Person
    .findByIdAndUpdate(request.params.id, newPerson, { runValidators: true, new: true })
    .then(newPerson => {
      response.json(newPerson)
    })
    .catch(error => next(error))
})

app.use(unknownEndpoint)
app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
