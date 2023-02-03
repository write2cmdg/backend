require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = process.env.PORT
const workoutsRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')

//MIDDLEWARE
app.use(express.json())//checks for json data in the req to send data to the db
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//Routes
app.use('/api/workouts', workoutsRoutes)
app.use('/api/user', userRoutes)

//connect to db
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_URI)
.then(() => { 
    
    app.listen(PORT, () => {
        console.log(`Connected to db & listening on port ${PORT}`)
    })
})
.catch(

    (error) => {
    console.log(`Mongoose connection error (server file): ${error}`)
    }
)
    
    
    
    
    