import { BaseError } from "./base.error.js";
import { StatusCodes } from "http-status-codes";
class BadRequest extends BaseError{
    constructor(propertyName,details){
        super("badRequest",StatusCodes.BAD_REQUEST,`invalid structure for ${propertyName} provided`,details)
    }
}
export default BadRequest