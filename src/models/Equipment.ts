export class Equipment {
    id: number;
    name: string;
    type: string;
    status: string;

    constructor(id: number,name: string, type: string, status: string) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.status = status;
    }
}