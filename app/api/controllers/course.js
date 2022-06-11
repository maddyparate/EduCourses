const CourseModel = require('../models/course')


const createCourse = (req,res,next) => {
    let {cid,cname,cdescription} = req.body
    CourseModel.create({
        cid,
        cname,
        cdescription
    }, (err,result) => {
        if(err)
            next(err)
        res.json({
            status:"Success",
            message:"Added Course Successfully",

        })
    })
}

const readAllCourses = (req,res,next) => {
    CourseModel.find({}, (err,result) => {
        if(err)
        next(err)
        res.json({
            status:"Success",
            message:"Successfully Retrieved all the course",
            data:{
                courses: result
            }
        })
    })
} 

const readCourseById = (req,res,next) => {
    CourseModel.findById(req.params.id, (err,result) => {
        if(err)
            next(err)
        res.json({
            status:"Success",
            message:"Successfully Retrieved course By ID",
            data:{
                course: result
            }
        })
    })
} 

const readCourseByField = (req,res,next) => {
    CourseModel.findById(req.params.name, (err,result) => {
        if(err)
            next(err)
        res.json({
            status:"Success",
            message:"Successfully Retrieved course By Field",
            data:{
                course: result
            }
        })
    })
} 

const deleteCourseById = (req,res,next) => {
    CourseModel.findByIdAndRemove(req.params.id,(err,result) => {
        if(err)
            next(err)
        res.json({
            status:"Success",
            message:"Successfully Deleted course By ID",
            data:{
                course: result
            }
        })
    })
} 


module.exports = {createCourse,readAllCourses,readCourseById,readCourseByField,deleteCourseById}