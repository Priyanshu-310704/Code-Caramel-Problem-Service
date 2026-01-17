const addProblem=(req,res)=>{
    return res.status(501).json({message:"Not Implemented"})
}
const getProblem=(req,res)=>{

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