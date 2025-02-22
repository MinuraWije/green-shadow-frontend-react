import React, {useEffect, useState} from "react";
import {Equipment} from "../models/Equipment.ts";
import {useDispatch} from "react-redux";
import {deleteEquipment, updateEquipment} from "../reducers/EquipmentSlice.ts";


interface UpdateEquipmentModalProps {
    isOpen: boolean;
    onClose: () => void;
    selectedEquipment: Equipment|null;
}

const UpdateEquipmentModal: React.FC<UpdateEquipmentModalProps> = ({isOpen, onClose, selectedEquipment}) => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [status, setStatus] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        if(selectedEquipment){
            setId(selectedEquipment.id);
            setName(selectedEquipment.name);
            setType(selectedEquipment.type);
            setStatus(selectedEquipment.status);
        }
    }, [selectedEquipment]);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const equipment = {
            id,
            name,
            type,
            status,
        }
        dispatch(updateEquipment(equipment));
        onClose();
    }

    const handleDelete = () => {
        if(selectedEquipment){
            dispatch(deleteEquipment(selectedEquipment));
        }
        onClose();
    }
    return (
        /*<div className="modal fade" id="updateEquipmentModal"
             aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header text-bg-success">
                        <h1 className="modal-title fs-5" id="updateEquipment">Update Equipment</h1>
                        {/!*<button type="button" className="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>*!/}
                        <form onSubmit={handleSubmit}>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label id="equipmentIdUpdate" className="form-label">EXXX</label>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Equipment Name :</label>
                                    <input type="text" className="form-control" id="equipmentNameUpdate"
                                    onChange={(e) => setName(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Type :</label>
                                    <input type="text" className="form-control" id="equipmentTypeUpdate"
                                    onChange={(e) => setType(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="equipmentStatusUpdate" className="form-label">Status</label>
                                    <select className="form-select" aria-label="Default select example"
                                            id="equipmentStatusUpdate" onChange={(e) => setStatus(e.target.value)}>
                                        <option defaultValue={"Select"}>Select</option>
                                        <option value="AVAILABLE">Available</option>
                                        <option value="NOT_AVAILABLE">Not_Available</option>
                                    </select>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-outline-primary"
                                        id="btnUpdateEquipment">Update
                                </button>
                                <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal"
                                        id="btnDeleteEquipment" onClick={handleDelete}>Delete
                                </button>
                                <button type="button" className="mr-2" onClick={onClose}>Cancel</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>*/
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                <h2 className="text-xl font-bold mb-4">Update Equipment</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="modal-label">Equipment Name:</label>
                        <input type="text" className="modal-inputs" required/>
                    </div>
                    <div className="mb-3">
                        <label className="modal-label">Type:</label>
                        <input type="text" className="modal-inputs" required/>
                    </div>
                    <div className="mb-3">
                        <label className="modal-label">Status:</label>
                        <select className="modal-inputs">
                            <option>Select</option>
                            <option value="AVAILABLE">Available</option>
                            <option value="NOT_AVAILABLE">Not Available</option>
                        </select>
                    </div>
                    <div className="flex justify-end space-x-2">
                        <button type="submit" className="modal-button-update">Update</button>
                        <button type="button" className="modal-button-delete" onClick={handleDelete}>Delete</button>
                        <button type="button" className="modal-button-close" onClick={onClose}>Close</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default UpdateEquipmentModal;