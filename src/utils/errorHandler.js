import { StatusCodes } from "http-status-codes";
import { BaseError } from "../errors/base.error.js";
const errorHandler=(err,req,res,next)=>{
    if(err instanceof BaseError){
        res.status(err.statusCode).json({
            success:false,
            message:err.message,
            error:err.details,
            data:{}
        })
    }
    else{
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            message:"Something went wrong",
            error:err,
            data:{}
        })
    }
}
export default errorHandler