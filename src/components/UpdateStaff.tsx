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
        <div className="modal fade" id="updateLogModal"
             aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header text-bg-success">
                        <h1 className="modal-title fs-5" id="updateLog">Update Staff</h1>
                        {/*<button type="button" className="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>*/}
                        <form onSubmit={handleSubmit}>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label id="logIdUpdate" className="form-label">SXXX</label>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Name :</label>
                                    <input type="text" className="form-control" id="logDetailsUpdate"
                                           onChange={(e) => setName(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Role :</label>
                                    <input type="text" className="form-control" id="logDateUpdate"
                                           onChange={(e) => setRole(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Designation :</label>
                                    <input type="text" className="form-control" id="logObservedImgUpdate"
                                           required onChange={(e) => setDesignation(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Gender :</label>
                                    <input type="text" className="form-control" id="logObservedImgUpdate"
                                           required onChange={(e) => setGender(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Joined Date :</label>
                                    <input type="text" className="form-control" id="logObservedImgUpdate"
                                           required onChange={(e) => setJoinedDate(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email :</label>
                                    <input type="text" className="form-control" id="logObservedImgUpdate"
                                           required onChange={(e) => setEmail(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Dob :</label>
                                    <input type="text" className="form-control" id="logObservedImgUpdate"
                                           required onChange={(e) => setDob(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Address :</label>
                                    <input type="text" className="form-control" id="logObservedImgUpdate"
                                           required onChange={(e) => setAddress(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Contact Number :</label>
                                    <input type="text" className="form-control" id="logObservedImgUpdate"
                                           required onChange={(e) => setContactNumber(e.target.value)}/>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-outline-primary"
                                        id="btnUpdateLog">Update
                                </button>
                                <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal"
                                        id="btnDeleteLog" onClick={handleDelete}>Delete
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

export default UpdateStaffModal;