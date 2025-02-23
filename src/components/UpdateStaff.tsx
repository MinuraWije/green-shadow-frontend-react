import React, {useEffect, useState} from "react";
import {Staff} from "../models/Staff.ts";
import {useDispatch} from "react-redux";
import {deleteStaff, updateStaff} from "../reducers/StaffSlice.ts";


interface UpdateStaffModalProps {
    isOpen: boolean;
    onClose: () => void;
    selectedStaff: Staff|null;
}

const UpdateStaffModal: React.FC<UpdateStaffModalProps> = ({isOpen, onClose, selectedStaff}) => {
    const [id, setId] = useState('');
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [designation, setDesignation] = useState("");
    const [gender, setGender] = useState("");
    const [joinedDate, setJoinedDate] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setDob] = useState("");
    const [address, setAddress] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        if(selectedStaff){
            setId(selectedStaff.id);
            setName(selectedStaff.name);
            setRole(selectedStaff.role);
            setDesignation(selectedStaff.designation);
            setGender(selectedStaff.gender);
            setJoinedDate(selectedStaff.joinedDate);
            setEmail(selectedStaff.email);
            setDob(selectedStaff.dob);
            setAddress(selectedStaff.address);
            setContactNumber(selectedStaff.contactNumber);
        }
    }, [selectedStaff]);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const staff = {
            id: id,
            name: name,
            role: role,
            designation: designation,
            gender: gender,
            joinedDate: joinedDate,
            email: email,
            dob: dob,
            address: address,
            contactNumber: contactNumber,
        }
        dispatch(updateStaff(staff));
        onClose();
    }

    const handleDelete = () => {
        if(selectedStaff){
            dispatch(deleteStaff(selectedStaff));
        }
        onClose();
    }
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                <h2 className="text-xl font-bold mb-4">Update Staff</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="modal-label">Name :</label>
                        <input type="text" value={name} className="modal-inputs" id="logDetailsUpdate"
                               onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label className="modal-label">Role :</label>
                        <input type="text" value={role} className="modal-inputs" id="logDateUpdate"
                               onChange={(e) => setRole(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label className="modal-label">Designation :</label>
                        <input type="text" value={designation} className="modal-inputs" id="logObservedImgUpdate"
                               required onChange={(e) => setDesignation(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label className="modal-label">Gender :</label>
                        <input type="text" value={gender} className="modal-inputs" id="logObservedImgUpdate"
                               required onChange={(e) => setGender(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label className="modal-label">Joined Date :</label>
                        <input type="text" value={joinedDate} className="modal-inputs" id="logObservedImgUpdate"
                               required onChange={(e) => setJoinedDate(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label className="modal-label">Email :</label>
                        <input type="text" value={email} className="modal-inputs" id="logObservedImgUpdate"
                               required onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label className="modal-label">Dob :</label>
                        <input type="text" value={dob} className="modal-inputs" id="logObservedImgUpdate"
                               required onChange={(e) => setDob(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label className="modal-label">Address :</label>
                        <input type="text" value={address} className="modal-inputs" id="logObservedImgUpdate"
                               required onChange={(e) => setAddress(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label className="modal-label">Contact Number :</label>
                        <input type="text" value={contactNumber} className="modal-inputs" id="logObservedImgUpdate"
                               required onChange={(e) => setContactNumber(e.target.value)}/>
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

export default UpdateStaffModal;