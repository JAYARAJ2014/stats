import fs from 'fs';
import { IDataReader } from './IDataReader';

export  class CsvFileReader implements IDataReader {
    data: string[][]=[];

    constructor (public fileName: string){}

    read():void {
        this.data = fs
        .readFileSync(this.fileName,{
                    encoding: 'utf-8'
                })
        .split('\n')
        .map((row:string): string[] => {
           return row.split(',');
        }
        );
    }
}