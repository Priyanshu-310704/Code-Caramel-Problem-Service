import logger from "../config/logger.config.js";
import notFound from "../errors/notFound.error.js";
import Problem from "../models/problem.model.js";

class ProblemRepository{
    async createProblem(problemData){
        try{
            const problem = await Problem.create({
                title: problemData.title,
                description: problemData.description,
                testCases: (problemData.testCases) ? problemData.testCases : []
            })
            return problem
        }catch(error){
            console.log(error);
            throw error;
            
        }
    }
    async getAllProblems(){
        try{
            const problems=await Problem.find();
            return problems;
        }catch(error){
            console.log(error);
            throw error;
            
        }
    }
    async getProblem(id){
        try{
            const problem=await Problem.findById(id);
            if(!problem)throw new notFound("problem",id);
            return problem;
        }catch(error){
            console.log(error);
            throw error;
            
        }
    }
    async deleteProblem(id){
        try{
            const deleteProblem=await Problem.findByIdAndDelete(id);
            if(deleteProblem===null)throw new notFound("problem",id);
            return deleteProblem;
        }catch(error){
            logger.error(`Problem with id: ${id} not found in db`);
            throw error;
        }
    }
    async updateProblem(id,problemData){
        try{
            const updatedProblem=await Problem.findByIdAndUpdate(id,problemData,{   
                new: true,          // return updated doc
                runValidators: true // validate schema
            });
            if(!updatedProblem)throw new notFound("problem",id);
            console.log(updatedProblem);
            return updatedProblem;
        }catch(error){
            throw error;
        }
    }
}
export default ProblemRepository