import {useState} from "react";
import {useDispatch} from "react-redux";
import {addEquipment} from "../reducers/EquipmentSlice.ts";
import {v4} from "uuid";

interface addEquipmentModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AddEquipmentModal : React.FC<addEquipmentModalProps> = ({isOpen, onClose}) => {

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [status, setStatus] = useState("");
    const dispatch = useDispatch();
    if (!isOpen) return  null;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const id = `EID-${v4()}`;
        const equipment = {
            id,
            name,
            type,
            status,
        }
        dispatch(addEquipment(equipment));
        onClose();
    }

    return (
        /*<div className="modal fade" id="newEquipmentModal" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header text-bg-success">
                        <h1 className="modal-title fs-5" id="equipmentModal">New Equipment</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label className="form-label">Equipment Name :</label>
                                    <input type="text" className="form-control" id="equipmentName"
                                    required onChange={(e) => setName(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Type :</label>
                                    <input type="text" className="form-control" id="equipmentType"
                                    required onChange={(e) => setType(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="equipmentStatus" className="form-label">Status</label>
                                    <select className="form-select" aria-label="Default select example"
                                            id="equipmentStatus" required onChange={(e) => setStatus(e.target.value)}>
                                        <option defaultValue={"Select"}>Select</option>
                                        <option value="AVAILABLE">Available</option>
                                        <option value="NOT_AVAILABLE">Not-Available</option>
                                    </select>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-outline-success"
                                        id="btnAddEquipment">Add
                                </button>
                                <button type="button" className="btn btn-outline-danger"
                                        onClick={onClose}>Close
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>*/
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                <h2 className="text-xl font-bold mb-4">New Equipment</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="modal-label">Equipment Name:</label>
                        <input type="text" className="modal-inputs" required
                        onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label className="modal-label">Type:</label>
                        <input type="text" className="modal-inputs" required
                        onChange={(e) => setType(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label className="modal-label">Status:</label>
                        <select className="modal-inputs"
                        onChange={(e) => setStatus(e.target.value)}>
                            <option>Select</option>
                            <option value="AVAILABLE">Available</option>
                            <option value="NOT_AVAILABLE">Not Available</option>
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

export default AddEquipmentModal;