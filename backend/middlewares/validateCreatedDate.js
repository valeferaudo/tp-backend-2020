//Validate that the date entered is greater than now

const { request } = require("express");


const validateCreatedDate =  (req = request ,res,next) => {
    
    const dateBody = Date.parse(req.body.date)
    const now =  (Date.now()- process.env.UTC_ARG)    

    if(now>=dateBody){
        return res.status(400).json({
            ok:false,
            msg:'The appointment`s date is wrong. Please verify the UTC date'
        })
    }
    next();
        
    
}

module.exports = {validateCreatedDate};