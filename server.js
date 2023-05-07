// const express = require('express')

import express  from "express"
import dotenv from "dotenv"
//import mongoose from "mongoose"
import connectDB from "./database/conn.js"
// import route from "./route/route.js"
import route  from "./route/authRoute.js"
import jobRoute from "./route/jobRoute.js"
import cors from "cors" 
import errorMiddleware from "./middleware/errorMiddleware.js"



const app = express()

dotenv.config()

//middleware
app.use(express.json())
app.use(cors())
app.use(route)
app.use(jobRoute)
app.use(errorMiddleware)

//mongoconnection
connectDB()
const PORT = process.env.PORT || 3000



app.listen(PORT,()=>{
    console.log(`listening to PORT ${PORT}`)
})


