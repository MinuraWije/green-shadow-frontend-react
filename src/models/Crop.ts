export class Crop {
    code:string;
    name:string;
    scientificName:string;
    category:string;
    image:string;
    season:string;
    fieldCode:string;

    constructor(code:string,name:string,scientificName:string,category:string,image:string,season:string,fieldCode:string){
        this.code=code;
        this.name=name;
        this.scientificName=scientificName;
        this.category=category;
        this.image=image;
        this.season=season;
        this.fieldCode=fieldCode;
    }
}