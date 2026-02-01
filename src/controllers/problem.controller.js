import BadRequest from "../errors/badrequest.error.js"
import NotImplemented from "../errors/notimplemented.error.js"
import ProblemService from "../services/problem.service.js"
import ProblemRepository from "../repositories/problem.repository.js"
import { StatusCodes } from "http-status-codes"
import notFound from "../errors/notFound.error.js"

const problemService=new ProblemService(new ProblemRepository())
const addProblem=async(req,res,next)=>{
    try{
        console.log("incomig request body",req.body);
        
        const newProblem=await problemService.createProblem(req.body);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: 'Successfully created a new problem',
            error: {},
            data: newProblem
        })
    }catch(error){
        next(error)
    }
}
const getProblem=async(req,res,next)=>{
    try{
        const problem=await problemService.getProblem(req.params.id);
        
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'successfully fetched a problem',
            error: {},
            data: problem
        })

    }catch(error){
        next(error)
    }
}
const getProblems=async(req,res)=>{
    try{
        const response=await problemService.getAllProblems();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully fetched all Problems',
            error: {},
            data: response
        })
    }catch(error){
        next(error)
    }
}
const deleteProblem=(req,res)=>{

}
const updateProblem=(req,res)=>{

}
const pingController=(req,res)=>{
    return res.json({message:"ping Problem Controller is up!"})
}

export default{
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingController
}