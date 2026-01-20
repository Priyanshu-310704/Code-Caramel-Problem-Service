import { BaseError } from "./base.error.js";
import { StatusCodes } from "http-status-codes";
class InternalServerError extends BaseError{
    constructor(details){
        super("Internal-Server-Error",StatusCodes.INTERNAL_SERVER_ERROR,"Something Went Wrong",details)
    }
}
export default InternalServerError