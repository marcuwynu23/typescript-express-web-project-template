import express from "express";


const constantsRoute = express.Router();

// add routes here...
constantsRoute.get("/",(req:any,res:any)=>{
    res.json({
        message: "Hello"
    })

})

export default constantsRoute