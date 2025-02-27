import {useState} from "react";
import {useDispatch} from "react-redux";
import {v4} from "uuid";
import {getAllStaff, saveStaff} from "../reducers/StaffSlice.ts";
import {Appdispatch} from "../store/Store.ts";

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
    const dispatch = useDispatch<Appdispatch>();
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
        dispatch(saveStaff(staff));
        onClose();
        dispatch(getAllStaff());
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                <h2 className="text-xl font-bold mb-4">New Staff</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="modal-label">Name :</label>
                        <input type="text" className="modal-inputs"
                               required onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label className="modal-label">Role :</label>
                        <input type="text" className="modal-inputs"
                               required onChange={(e) => setRole(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label className="modal-label">Designation :</label>
                        <input type="text" className="modal-inputs"
                               required onChange={(e) => setDesignation(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label className="modal-label">Gender :</label>
                        <input type="text" className="modal-inputs"
                               required onChange={(e) => setGender(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label className="modal-label">Joined Date :</label>
                        <input type="text" className="modal-inputs"
                               required onChange={(e) => setJoinedDate(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label className="modal-label">Email :</label>
                        <input type="text" className="modal-inputs"
                               required onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label className="modal-label">Dob :</label>
                        <input type="text" className="modal-inputs"
                               required onChange={(e) => setDob(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label className="modal-label">Address :</label>
                        <input type="text" className="modal-inputs"
                               required onChange={(e) => setAddress(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label className="modal-label">Contact Number :</label>
                        <input type="text" className="modal-inputs" id="logDate"
                               required onChange={(e) => setContactNumber(e.target.value)}/>
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

export default AddStaffModal;