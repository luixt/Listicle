import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import eventData from '../data/events.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json(eventData)
})

router.get('/:eventId', (req, res) => {
  // event.html lives under server/public/scripts/event.html in this project
  // send the correct file path so requests to /events/:id return the page
  res.status(200).sendFile(path.resolve(__dirname, '../public/scripts/event.html'))
})

export default router
