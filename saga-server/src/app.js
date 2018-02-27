import express from 'express'

const app = express()

app.get('/', (req, res) => res.status(200).send('Hello world!'))

app.get('/users/:id', (req, res) => {
  if(req.params.id === '1') {
    res.status(200).send({id: 1, name: 'Will'})
  } else {
    res.status(404).send({error: 'Not found'})
  }
})

module.exports = app
