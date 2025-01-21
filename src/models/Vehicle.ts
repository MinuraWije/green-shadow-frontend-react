export class Vehicle {
    code: string;
    licensePlate: string;
    category: string;
    fuelType: string;
    vehicleStatus: string;

    constructor(code: string,licensePlate: string, category: string, fuelType: string, vehicleStatus: string) {
        this.code = code;
        this.licensePlate = licensePlate;
        this.category = category;
        this.fuelType = fuelType;
        this.vehicleStatus = vehicleStatus;
    }
}