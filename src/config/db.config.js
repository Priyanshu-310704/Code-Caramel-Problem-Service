import mongoose from "mongoose";
import { ATLAS_DB_URL, NODE_ENV } from "./server.config.js";
const connectToDB=async()=>{
    try{
        if(NODE_ENV=="development"){
            await mongoose.connect(ATLAS_DB_URL)
        }
    }catch(err){
        console.log("Error connecting to DB server")
        console.log(err)
    }
}
export default connectToDB