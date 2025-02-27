import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {Vehicle} from "../models/Vehicle.ts";
import {deleteVehicle, getAllVehicle, updateVehicle} from "../reducers/VehicleSlice.ts";
import {Appdispatch} from "../store/Store.ts";


interface UpdateVehicleModalProps {
    isOpen: boolean;
    onClose: () => void;
    selectedVehicle: Vehicle|null;
}

const UpdateVehicleModal: React.FC<UpdateVehicleModalProps> = ({isOpen, onClose, selectedVehicle}) => {
    const [code, setCode] = useState('');
    const [licensePlate, setLicensePlate] = useState('');
    const [category, setCategory] = useState('');
    const [fuelType, setFuelType] = useState('');
    const [vehicleStatus, setVehicleStatus] = useState('');
    const dispatch = useDispatch<Appdispatch>();

    useEffect(() => {
        if(selectedVehicle){
            setCode(selectedVehicle.code);
            setLicensePlate(selectedVehicle.licensePlate);
            setCategory(selectedVehicle.category);
            setFuelType(selectedVehicle.fuelType);
            setVehicleStatus(selectedVehicle.vehicleStatus);
        }
    }, [selectedVehicle]);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const vehicle = {
            code: code,
            licensePlate: licensePlate,
            category: category,
            fuelType: fuelType,
            vehicleStatus: vehicleStatus,
        }
        dispatch(updateVehicle(vehicle));
        onClose();
        dispatch(getAllVehicle())
    }

    const handleDelete = () => {
        if(selectedVehicle){
            dispatch(deleteVehicle(selectedVehicle.code));
        }
        onClose();
        dispatch(getAllVehicle())
    }
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                <h1 className="text-xl font-bold mb-4">Update Vehicle</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="modal-label">License Plate :</label>
                        <input type="text" value={licensePlate} className="modal-inputs" required
                               onChange={(e) => setLicensePlate(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label className="modal-label">Category :</label>
                        <input type="text" value={category} className="modal-inputs"
                               onChange={(e) => setCategory(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label className="modal-label">Fuel Type :</label>
                        <input type="text" value={fuelType} className="modal-inputs"
                               onChange={(e) => setFuelType(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label className="modal-label">Status</label>
                        <select className="modal-inputs" value={vehicleStatus}
                                onChange={(e) => setVehicleStatus(e.target.value)}>
                            <option defaultValue={"Select"}>Select</option>
                            <option value="AVAILABLE">Available</option>
                            <option value="NOT_AVAILABLE">Not_Available</option>
                        </select>
                    </div>
                    <div className="flex justify-end space-x-2">
                        <button type="submit" className="modal-button-update">Update</button>
                        <button type="button" className="modal-button-delete" onClick={handleDelete}>Delete</button>
                        <button type="button" className="modal-button-close" onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default UpdateVehicleModal;