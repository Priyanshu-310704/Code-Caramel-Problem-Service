import express, { urlencoded } from "express";
import dotenv from 'dotenv'

dotenv.config()
const port=process.env.PORT || 3000;

const app=express()

app.use(express.json())
app.use(urlencoded({extended:true}))


app.get('/ping',(req,res)=>{
    res.json({message: 'Problem service is alive'})
})

app.listen(port,()=>{
    console.log(`Server Started at ${port}`);
    
})