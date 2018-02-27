import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()

app.use(
  cors({
    allowedOrigins: ['localhost:3001']
  })
)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// NOTE: You should NEVER actually send a password to a server in plaintext, this is purely for demo purposes
app.post('/users', (req, res) => {
  const { email, password } = req.body
  if(email === 'wvmitchell@gmail.com' && password === 'password') {
    res.status(200).send({id: 0, email})
  } else {
    res.status(404).send({error: 'Not authorized'})
  }
})

module.exports = app
