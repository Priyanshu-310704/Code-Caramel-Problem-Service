import sanitizeMarkdownContent from "../utils/markdownSanitizer.js";
class ProblemService{
    constructor(ProblemRepository){
        this.ProblemRepository=ProblemRepository;

    }
    async createProblem(problemData){
        try{
            problemData.description=sanitizeMarkdownContent(problemData.description);
            
            console.log("Problem Data",problemData);
            
            const problem=await this.ProblemRepository.createProblem(problemData);

            console.log("Problem created",problem);
    
            return problem;
        }catch(error){
            console.log(error);
            throw error;
        }
    }
}
export default ProblemService