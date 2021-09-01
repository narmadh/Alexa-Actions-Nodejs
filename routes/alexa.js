//Express router to post requests in "/alexa" endpoint which has all alexa handlers

import express from 'express'

import alexaHandler from '../controller/alexa/alexa.js'

const router = express.Router()

router.post('/', alexaHandler.getRequestHandlers())

export default router