import {useState} from "react";
import {useDispatch} from "react-redux";
import {v4} from "uuid";
import {addVehicle} from "../reducers/VehicleSlice.ts";

interface addVehicleModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AddVehicleModal : React.FC<addVehicleModalProps> = ({isOpen, onClose}) => {

    const [licensePlate, setLicensePlate] = useState("");
    const [category, setCategory] = useState("");
    const [fuelType, setFuelType] = useState("");
    const [vehicleStatus, setVehicleStatus] = useState("");
    const dispatch = useDispatch();
    if (!isOpen) return  null;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const id = `VID-${v4()}`;
        const vehicle = {
            id,
            licensePlate: licensePlate,
            category: category,
            fuelType: fuelType,
            vehicleStatus: vehicleStatus,
        }
        dispatch(addVehicle(vehicle));
        onClose();
    }

    return (
        <div className="modal fade" id="newVehicleModal" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header text-bg-success">
                        <h1 className="modal-title fs-5" id="vehicleModal">New Vehicle</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label className="form-label">License Plate :</label>
                                    <input type="text" className="form-control" id="vehicleLicensePlate"
                                           required onChange={(e) => setLicensePlate(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Category :</label>
                                    <input type="text" className="form-control" id="vehicleCategory"
                                           required onChange={(e) => setCategory(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Fuel Type :</label>
                                    <input type="text" className="form-control" id="vehicleFuelType"
                                           required onChange={(e) => setFuelType(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="vehicleStatus" className="form-label">Status</label>
                                    <select className="form-select" aria-label="Default select example"
                                            id="vehicleStatus" required onChange={(e) => setVehicleStatus(e.target.value)}>
                                        <option defaultValue={"Select"}>Select</option>
                                        <option value="AVAILABLE">Available</option>
                                        <option value="NOT_AVAILABLE">Not-Available</option>
                                    </select>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-outline-success"
                                        id="btnAddVehicle">Add
                                </button>
                                <button type="button" className="btn btn-outline-danger"
                                        onClick={onClose}>Close
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default AddVehicleModal;