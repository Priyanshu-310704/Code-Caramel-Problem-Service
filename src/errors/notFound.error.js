import { BaseError } from "./base.error.js";
import { StatusCodes } from "http-status-codes";
class notFound extends BaseError{
    constructor(resourceName,resourceValue){
        super("notFound",StatusCodes.NOT_FOUND,`The requested ${resourceName} with value ${resourceValue} not found`,{
            resourceName,resourceValue
        })
    }
}
export default notFound;