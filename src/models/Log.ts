export class Log {
    code:string;
    details:string;
    date:string;
    img:string;

    constructor(code:string,details:string,date:string,img:string) {
        this.code = code;
        this.details = details;
        this.date = date;
        this.img = img;
    }
}