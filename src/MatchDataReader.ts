import { IDataReader } from "./IDataReader";
import { MatchData } from "./MatchData";
import { MatchResultEnum } from "./MatchResultEnum";
import { stringToDate } from "./utils";

export class MatchDataReader   {

    matches: MatchData[]=[];
    constructor (public reader: IDataReader){

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
                row[5] as MatchResultEnum, //type assertion
                row[6]
            ];
        }
        );
    }

}