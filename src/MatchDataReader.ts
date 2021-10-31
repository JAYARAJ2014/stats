import { DataReader } from "./DataReader";
import { MatchResult } from "./MatchResult";
import { stringToDate } from "./utils";

//tuple
type MatchData =[Date, string, string, number, number, MatchResult, string];

export class MatchDataReader   {

    matches: MatchData[]=[];
    constructor (public reader: DataReader){

    }
    load():void {
        this.reader.read();
       this.matches= this.reader.data.map((row:string[]) :MatchData =>{
            return [
                stringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5] as MatchResult, //type assertion
                row[6]
            ];
        }
        );
    }

}