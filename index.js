import express from 'express'
import cors from 'cors'

import alexaRoute from './routes/alexa.js'
import actionsRoute from './routes/actions.js'
import apiRoute from './routes/api.js'

const app = express()

//Always use Alexa endpoint before using body parsing to avoid request body params collision
app.use('/alexa', alexaRoute)

//Enabling url encoding and body parsing requests
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

//Google Actions end point
app.use('/google', actionsRoute)

//REST API to fetch data from Database
app.use('/api', apiRoute)

//Test endpoint
app.get('/', (req, res) => res.send("<h1>Hello Learning Matters!!</h1>"))
app.use(cors())

//process.env.PORT is set by default in the deployed setup
const PORT = process.env.PORT || 443

//Open the PORT and start the server
app.listen(PORT, () => console.log("Server started..."))
