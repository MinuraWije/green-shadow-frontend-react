export class Equipment {
    id: string;
    name: string;
    type: string;
    status: string;

    constructor(id: string,name: string, type: string, status: string) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.status = status;
    }
}