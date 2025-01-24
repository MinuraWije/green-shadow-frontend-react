import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {Vehicle} from "../models/Vehicle.ts";
import {deleteVehicle, updateVehicle} from "../reducers/VehicleSlice.ts";


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
    const dispatch = useDispatch();

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
    }

    const handleDelete = () => {
        if(selectedVehicle){
            dispatch(deleteVehicle(selectedVehicle));
        }
        onClose();
    }
    return (
        <div className="modal fade" id="updateVehicleModal"
             aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header text-bg-success">
                        <h1 className="modal-title fs-5" id="updateVehicle">Update Vehicle</h1>
                        {/*<button type="button" className="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>*/}
                        <form onSubmit={handleSubmit}>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label id="vehicleCodeUpdate" className="form-label">EXXX</label>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">License Plate :</label>
                                    <input type="text" className="form-control" id="vehicleLicensePlateUpdate"
                                           onChange={(e) => setLicensePlate(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Category :</label>
                                    <input type="text" className="form-control" id="vehicleCategoryUpdate"
                                           onChange={(e) => setCategory(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Fuel Type :</label>
                                    <input type="text" className="form-control" id="vehicleFuelTypeUpdate"
                                           onChange={(e) => setFuelType(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="vehicleStatusUpdate" className="form-label">Status</label>
                                    <select className="form-select" aria-label="Default select example"
                                            id="vehicleStatusUpdate" onChange={(e) => setVehicleStatus(e.target.value)}>
                                        <option defaultValue={"Select"}>Select</option>
                                        <option value="AVAILABLE">Available</option>
                                        <option value="NOT_AVAILABLE">Not_Available</option>
                                    </select>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-outline-primary"
                                        id="btnUpdateVehicle">Update
                                </button>
                                <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal"
                                        id="btnDeleteVehicle" onClick={handleDelete}>Delete
                                </button>
                                <button type="button" className="mr-2" onClick={onClose}>Cancel</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default UpdateVehicleModal;