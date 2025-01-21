export class Staff {
    id: string;
    name: string;
    role: string;
    designation: string;
    gender: string;
    joinedDate: string;
    email: string;
    dob: string;
    address: string;
    contactNumber: string;

    constructor(id:string,name: string, role: string, designation: string, gender: string, joinedDate: string, email: string, dob: string,address:string,contactNumber:string) {
        this.id = id;
        this.name = name;
        this.role = role;
        this.designation = designation;
        this.gender = gender;
        this.joinedDate = joinedDate;
        this.email = email;
        this.dob = dob;
        this.address = address;
        this.contactNumber = contactNumber;
    }
}