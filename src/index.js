import express, { urlencoded } from "express";
import { port } from "./config/server.config.js";
import apiRouter from "./routes/index.js";
import { BaseError } from "./errors/base.error.js";
import errorHandler from "./utils/errorHandler.js";
import connectToDB from "./config/db.config.js";
import mongoose from "mongoose";
const app=express()

app.use(express.json())
app.use(urlencoded({extended:true}))
app.use('/api',apiRouter)

app.get('/ping',(req,res)=>{
    res.json({message: 'Problem service is alive'})
})

app.use(errorHandler)

app.listen(port,async()=>{
    console.log(`Server Started at ${port}`);
    await connectToDB()
    await console.log("Successfully connected to DB")
    // throw new BaseError("Some error",404,{errorMessage:"Something"})
})