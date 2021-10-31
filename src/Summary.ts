import { IAnalyzer } from "./IAnalyzer";
import { IOutputTarget } from "./IOutputTarget";
import { MatchData } from "./MatchData";

export class Summary{

    constructor(
        public analyzer: IAnalyzer, 
        public target: IOutputTarget){}

    buildAndPrintReports(matches: MatchData[]):void {
        const report = this.analyzer.run(matches);
        this.target.print(report);
    }
}