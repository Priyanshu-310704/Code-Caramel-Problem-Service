import sanitizeMarkdownContent from "../utils/markdownSanitizer.js";
class ProblemService {
  constructor(ProblemRepository) {
    this.ProblemRepository = ProblemRepository;
  }
  async createProblem(problemData) {
    problemData.description = sanitizeMarkdownContent(problemData.description);

    console.log("Problem Data", problemData);

    const problem = await this.ProblemRepository.createProblem(problemData);

    console.log("Problem created", problem);

    return problem;
  }
  async getAllProblems() {
    const problems = await this.ProblemRepository.getAllProblems();
    return problems;
  }
}
export default ProblemService;
