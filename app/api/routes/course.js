const express = require('express')
const router = express.Router()
const CourseController = require('../controllers/course')

router.post('/create',CourseController.createCourse)
router.get('/getAllCourses',CourseController.readAllCourses)
router.get('/getCourseById/:id',CourseController.readCourseById)
router.get('/getCourseByField/:field',CourseController.readCourseByField)
router.delete('/deleteCourseById/:id',CourseController.deleteCourseById)

module.exports = router