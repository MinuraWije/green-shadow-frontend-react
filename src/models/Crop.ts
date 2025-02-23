export class Crop {
    code:string;
    name:string;
    scientificName:string;
    category:string;
    img:string;
    season:string;
    fieldCode:string;

    constructor(code:string,name:string,scientificName:string,category:string,img:string,season:string,fieldCode:string){
        this.code=code;
        this.name=name;
        this.scientificName=scientificName;
        this.category=category;
        this.img=img;
        this.season=season;
        this.fieldCode=fieldCode;
    }
}