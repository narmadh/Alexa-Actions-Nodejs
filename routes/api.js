//Express router to handle common API calls
//This route can be made to a flly fledged REST API for the common functions
//But it is a matter of architecture preference

import express from 'express'

import apiHandler from '../controller/api/api.js'

const router = express.Router()

router.post('/', apiHandler)

export default router