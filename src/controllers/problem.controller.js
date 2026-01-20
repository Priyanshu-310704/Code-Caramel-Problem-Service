import BadRequest from "../errors/badrequest.error.js"
import NotImplemented from "../errors/notimplemented.error.js"

const addProblem=(req,res,next)=>{
    try{
        throw new NotImplemented('addProblem')
    }catch(error){
        next(error)
    }
}
const getProblem=(req,res,next)=>{
    try{
        throw new BadRequest('Problem Name',{missing:["id"]})
    }catch(error){
        next(error)
    }
}
const getProblems=(req,res)=>{

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