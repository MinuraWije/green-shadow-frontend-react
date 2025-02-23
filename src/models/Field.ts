export class Field {
    code:string;
    name:string;
    location:string;
    size:string;
    img:string;

    constructor(code:string,name:string,location:string,size:string,img:string) {
        this.code = code;
        this.name = name;
        this.location = location;
        this.size = size;
        this.img = img;
    }
}