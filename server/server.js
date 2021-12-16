require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const {SERVER_PORT} = process.env



const {
   createUser, userLogin
} = require('./controller.js')

app.use(express.json())
app.use(cors())

app.post('/api/users', createUser)
app.post('/api/login', userLogin)

app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))

