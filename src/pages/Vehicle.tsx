import {useNavigate} from "react-router";
import {useState} from "react";
import {Customer} from "../models/Customer.ts";
import {Modal} from "../components/Modal";
import {useDispatch} from "react-redux";
import vehicleSlice, {addVehicle, deleteVehicle, updateVehicle} from "../reducers/VehicleSlice.ts";

export function Vehicle() {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [licensePlate, setLicensePlate] = useState("");
    const [category, setCategory] = useState("");
    const [fuelType, setFuelType] = useState("");
    const [vehicleStatus, setVehicleStatus] = useState("");
    const [isAdding, setIsAdding] = useState(true); // Track the current action
    const [isUpdating, setIsUpdating] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    const handleAdd = () => {
        setIsAdding(true);
        setIsUpdating(false);
        setIsDeleting(false);
    };

    const handleUpdate = () => {
        setIsAdding(false);
        setIsUpdating(true);
        setIsDeleting(false);
    };

    const handleDelete = () => {
        setIsAdding(false);
        setIsUpdating(false);
        setIsDeleting(true);
    };
    const handleSubmit = () => {
        if (isAdding) {
            const newVehicle = new Vehicle(licensePlate, category, fuelType, vehicleStatus);
            dispatch(addVehicle(newVehicle));
        } else if (isUpdating) {
            const updatedVehicle = { licensePlate, category, fuelType, status };
            dispatch(updateVehicle(updatedVehicle));
        } else if (isDeleting) {
            const deletedVehicle = new Customer(licensePlate, category, fuelType, vehicleStatus);
            dispatch(deleteVehicle(deletedVehicle));
        }

        navigate('/');
    };

    return (
        <>
            <header><h2>Vehicle</h2></header>
            <br/>

            <Modal
                handleSubmit={handleSubmit}
                setLicensePlate={setLicensePlate}
                setCategory={setCategory}
                setFuelType={setFuelType}
                setStatus={setVehicleStatus}
            ></Modal>
            <button onClick={handleAdd}>Add Vehicle</button>
            <button onClick={handleUpdate}>Update Vehicle</button>
            <button onClick={handleDelete}>Delete Vehicle</button>
        </>
    );
}