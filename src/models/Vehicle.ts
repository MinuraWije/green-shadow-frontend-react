export class Vehicle {
    licensePlate: string;
    category: string;
    fuelType: string;
    vehicleStatus: string;

    constructor(licensePlate: string, category: string, fuelType: string, vehicleStatus: string) {
        this.licensePlate = licensePlate;
        this.category = category;
        this.fuelType = fuelType;
        this.vehicleStatus = vehicleStatus;
    }
}