import { IAnalyzer } from "./IAnalyzer";
import { MatchData } from "./MatchData";
import { MatchResultEnum } from "./MatchResultEnum";

export class WinsAnalyser implements IAnalyzer {
    constructor(public team: string){}
    
    run(matches: MatchData[]): string {
    
        const homeTeamNameIndex =1;
        const awayTeamNameIndex = 2; 
        const teamFlagIndex  = 5; 
        
        let wins=0;
        for(let match of matches) {

            if (match[homeTeamNameIndex]===this.team && 
                match[teamFlagIndex]===MatchResultEnum.HomeWin) {
                    wins++;
            } else if( match[awayTeamNameIndex]===this.team &&
                match[teamFlagIndex]===MatchResultEnum.AwayWin){
                    wins++;
                }
        }

        return `Team ${this.team} won ${wins} games`; 
    }

}