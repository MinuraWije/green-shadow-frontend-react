export class Field {
    code:string;
    name:string;
    location:string;
    size:string;
    image1:string;
    image2:string;

    constructor(code:string,name:string,location:string,size:string,image1:string,image2:string) {
        this.code = code;
        this.name = name;
        this.location = location;
        this.size = size;
        this.image1 = image1;
        this.image2 = image2;
    }
}