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
        const code = `VID-${v4()}`;
        const vehicle = {
            code,
            licensePlate,
            category,
            fuelType,
            vehicleStatus,
        }
        dispatch(addVehicle(vehicle));
        onClose();
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                <h2 className="text-xl font-bold mb-4">New Vehicle</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="modal-label">License Plate :</label>
                        <input type="text" className="modal-inputs"
                               required onChange={(e) => setLicensePlate(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label className="modal-label">Category :</label>
                        <input type="text" className="modal-inputs"
                               required onChange={(e) => setCategory(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label className="modal-label">Fuel Type :</label>
                        <input type="text" className="modal-inputs"
                               required onChange={(e) => setFuelType(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label className="modal-label">Status</label>
                        <select className="modal-inputs"
                                required onChange={(e) => setVehicleStatus(e.target.value)}>
                            <option defaultValue={"Select"}>Select</option>
                            <option value="AVAILABLE">Available</option>
                            <option value="NOT_AVAILABLE">Not-Available</option>
                        </select>
                    </div>
                    <div className="flex justify-end space-x-2">
                        <button type="submit" className="modal-button-add">Add</button>
                        <button type="button" className="modal-button-close" onClick={onClose}>Close</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default AddVehicleModal;