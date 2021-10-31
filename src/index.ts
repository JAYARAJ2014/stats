import { MatchDataReader } from './MatchDataReader';
import { MatchResult } from './MatchResult';

const reader = new MatchDataReader( 'football.csv');
reader.read();

console.log(reader.fileName);
console.log(reader.data);

let wins = 0;
let teamName ='Man United';
const homeTeamNameIndex =1;
const awayTeamNameIndex = 2; 
const teamFlagIndex  = 5; 


 
for(let match of reader.data) {

    if (match[homeTeamNameIndex]===teamName && 
        match[teamFlagIndex]===MatchResult.HomeWin) {
            wins++;
    } else if( match[awayTeamNameIndex]===teamName &&
        match[teamFlagIndex]===MatchResult.AwayWin){
            wins++;
        }
}
console.log(`Team "${teamName}" won ${wins} games`);