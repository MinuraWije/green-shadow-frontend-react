export class Log {
    code:string;
    details:string;
    date:string;
    observedImg:string;

    constructor(code:string,details:string,date:string,observedImg:string) {
        this.code = code;
        this.details = details;
        this.date = date;
        this.observedImg = observedImg;
    }
}