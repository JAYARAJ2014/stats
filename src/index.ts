import { CsvFileReader } from './CsvFileReader';
import { MatchDataReader } from './MatchDataReader';
import { MatchResult } from './MatchResult';

const reader = new CsvFileReader( 'football.csv');
const matchReader = new MatchDataReader(reader);
matchReader.load();

let wins = 0;
let teamName ='Man United';
const homeTeamNameIndex =1;
const awayTeamNameIndex = 2; 
const teamFlagIndex  = 5; 

for(let match of matchReader.matches) {

    if (match[homeTeamNameIndex]===teamName && 
        match[teamFlagIndex]===MatchResult.HomeWin) {
            wins++;
    } else if( match[awayTeamNameIndex]===teamName &&
        match[teamFlagIndex]===MatchResult.AwayWin){
            wins++;
        }
}
console.log(`Team "${teamName}" won ${wins} games`);