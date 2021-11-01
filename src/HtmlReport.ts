import { IOutputTarget } from "./IOutputTarget";
import  fs  from 'fs';

export class HtmlReport implements IOutputTarget{
    print(report: string): void {
        const html = `
            <div>
                <h3>Analysis Output</h3>
                <div> ${report}</div>
            </div>

        `;
        console.log(html);
        fs.writeFileSync('report.html',html);
    }

}