const mongoose = require('mongoose')

const CourseSchema = new mongoose.Schema({
    cid:{
        type:String,
        required: true
    },
    cname:{
        type:String,
        required: true
    },
    cdescription:{
        type:String,
        required: true
    }
})

module.exports = mongoose.model('course',CourseSchema)