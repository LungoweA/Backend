import express from 'express'
import logger from 'morgan'
import { router } from './route/index.js'
import { errorHandler } from '../middleware/errorHandler.js'


export const app = express()

// Use the morgan logger
app.use(logger('dev', { immediate: true }))

//POSTMAN
app.use(express.json())

app.use('/hello', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/hello', (req, res) => {
  const json = {
    "message": "Hello World!",
    "date": new Date()
  }
  res.json(json)
})

app.use('/', router)

// 404 handler
app.use(errorHandler.notFoundDefault)

// Global error handler
app.use(errorHandler.errorDefault)

// Use the public folder for static resources
app.use(express.static('public'))







