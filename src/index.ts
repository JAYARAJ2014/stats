import { ConsoleReport } from './ConsoleReport';
import { CsvFileReader } from './CsvFileReader';
import { HtmlReport } from './HtmlReport';
import { MatchDataReader } from './MatchDataReader';
import { Summary } from './Summary';
import { WinsAnalyser } from './WinsAnalyser';

const matchReader = new MatchDataReader(new CsvFileReader( 'football.csv'));
matchReader.load();
let teamName ='Man United';

const summary = new Summary(
    new WinsAnalyser(teamName),
    new ConsoleReport()
    );

summary.buildAndPrintReports(matchReader.matches);

const htmlSummary = new Summary(
    new WinsAnalyser(teamName),
    new HtmlReport()
    );
htmlSummary.buildAndPrintReports(matchReader.matches);
