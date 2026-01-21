import express, { urlencoded } from "express";
import dotenv from 'dotenv'

dotenv.config()
const port=process.env.PORT || 3000;

import apiRouter from "./routes/index.js";
import { BaseError } from "./errors/base.error.js";
import errorHandler from "./utils/errorHandler.js";
const app=express()

app.use(express.json())
app.use(urlencoded({extended:true}))
app.use('/api',apiRouter)

app.get('/ping',(req,res)=>{
    res.json({message: 'Problem service is alive'})
})

app.use(errorHandler)

app.listen(port,()=>{
    console.log(`Server Started at ${port}`);
    
    // throw new BaseError("Some error",404,{errorMessage:"Something"})
})