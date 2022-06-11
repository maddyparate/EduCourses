const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
require("dotenv").config();

const app = express()
const LearnerRoute = require('./app/api/routes/learner')
const CourseRoute = require('./app/api/routes/course')

const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://madhaoweb:Maddy123@cluster0.gllq4.mongodb.net/?retryWrites=true&w=majority"
app.set('secretKey','abcgdkgbs')

const LearnerValidation =  (req,res,next) => {

    jwt.verify(req.headers['token'],req.app.get('secretKey'),
    (err,decoded) => {
        if(err){
            res.json({
                message:err
            })
        }
        next()
    })
}

app.use(logger('dev'))
app.use(bodyParser.json())
app.use('/learner',LearnerRoute)
app.use('/course',LearnerValidation,CourseRoute)

app.get('/', (req,res) => {
    res.json({
        "APP": "JWT Based API Course Application",
        "message": "Successfully Running the Application"
    })
})

app.post('/c', (req,res) => {
    res.json({
        "APP": "JWT Based API Course Application",
        "message": "Successfully Running the Application"
    })
})



mongoose.connect(mongoURI)
.then(() => {
    console.log("Successfully Connected to the Database")
})
.catch((err) => {
    console.log(err)
})

app.listen(process.env.PORT || 5000,() => {
    console.log("Successfully Running on the PORT: 5000")
})