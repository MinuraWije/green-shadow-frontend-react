import {useState} from "react";
import {useDispatch} from "react-redux";
import {v4} from "uuid";
import {addStaff} from "../reducers/StaffSlice.ts";

interface addStaffModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AddStaffModal : React.FC<addStaffModalProps> = ({isOpen, onClose}) => {

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
    if (!isOpen) return  null;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const id = `SID-${v4()}`;
        const staff = {
            id,
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
        dispatch(addStaff(staff));
        onClose();
    }

    return (
        <div className="modal fade" id="newStaffModal" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header text-bg-success">
                        <h1 className="modal-title fs-5" id="staffModal">New Staff</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label className="form-label">Name :</label>
                                    <input type="text" className="form-control" id="logDetails"
                                           required onChange={(e) => setName(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Role :</label>
                                    <input type="text" className="form-control" id="logDate"
                                           required onChange={(e) => setRole(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Designation :</label>
                                    <input type="text" className="form-control" id="logDate"
                                           required onChange={(e) => setDesignation(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Gender :</label>
                                    <input type="text" className="form-control" id="logDate"
                                           required onChange={(e) => setGender(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Joined Date :</label>
                                    <input type="text" className="form-control" id="logDate"
                                           required onChange={(e) => setJoinedDate(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email :</label>
                                    <input type="text" className="form-control" id="logDate"
                                           required onChange={(e) => setEmail(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Dob :</label>
                                    <input type="text" className="form-control" id="logDate"
                                           required onChange={(e) => setDob(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Address :</label>
                                    <input type="text" className="form-control" id="logDate"
                                           required onChange={(e) => setAddress(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Contact Number :</label>
                                    <input type="text" className="form-control" id="logDate"
                                           required onChange={(e) => setContactNumber(e.target.value)}/>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-outline-success"
                                        id="btnAddLog">Add
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

export default AddStaffModal;