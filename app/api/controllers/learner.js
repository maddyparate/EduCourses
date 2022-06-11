const LearnerModel = require('../models/learner')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const create = (req,res,next) => {
    const {name,email,password} = req.body

    LearnerModel.create({
        name,
        email,
        password
    }, (err,result) => {
        if(err)
        next(err)
        else
        res.status(200).json({
            status: "Success",
            message: "Learner Added Succesfully",
            data: result
        })
    })
}

const login = (req,res,next) =>{
    LearnerModel.findOne({email:req.body.email}, (err,result) => {
        if(err){
            next(err)
            console.log("invalid user")
        }
        else{
            if(bcrypt.compare(req.body.password,result.password)){
                const token = jwt.sign({id:result._id},req.app.get('secretKey'), {expiresIn: '2h'})
                res.json({
                    status: "Success",
                    message: "Succesfully Logged in",
                    data: {
                        user: result,
                        token: token
                    }
                })
            }
        }
    })
}

module.exports = {create,login}