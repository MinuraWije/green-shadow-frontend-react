import {useSelector} from "react-redux";
import {useState} from "react";
import {Staff} from "../models/Staff.ts";
import AddStaffModal from "../components/AddStaff.tsx";
import UpdateStaffModal from "../components/UpdateStaff.tsx";

export function StaffPage() {
    const [selectedStaff, setSelectedStaff] = useState<Staff | null>(null);

    const [isAddModalOpen, setAddModalOpen] = useState<boolean>(false);
    const [isUpdateModalOpen, setUpdateModalOpen] = useState<boolean>(false);

    const [searchText, setSearchText] = useState("");

    function handleSearch(){
        console.log(searchText);
    }

    function openAddStaffModal() {
        setAddModalOpen(true);
    }

    function openUpdateStaffModal(staff: Staff) {
        setSelectedStaff(staff);
        setUpdateModalOpen(true);
    }

    const staffs = useSelector((state) => state.staff);


    return(
        <>
            <div className="container mt-5">
                <h5 className="card-header">Staff</h5>
                <div className="card-body">

                    <div className="row mb-3">
                        <div className="col-md-6 text-start">

                            <button className="btn btn-success me-md-2" type="button"
                                    onClick={openAddStaffModal}>New Staff
                            </button>
                            {/*<button className="btn btn-warning me-md-2" type="button" data-bs-toggle="modal"
                                    data-bs-target="#updateEquipmentModal" id="updateEquipmentbtn"
                                    onClick={openUpdateModal}>Update Equipment
                            </button>*/}
                        </div>
                        <div className="col-md-6">
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search Staff"
                                       aria-label="Search" id="searchBar"/>
                                <button className="btn btn-primary" type="button" id="logSearchButton">Search
                                </button>
                            </form>
                            <ul id="suggestions"></ul>
                        </div>

                    </div>


                    <div className="row">
                        <div className="col">
                            <table className="table" id="log-table">
                                <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Role</th>
                                    <th>Designation</th>
                                    <th>Gender</th>
                                    <th>Joined Date</th>
                                    <th>Email</th>
                                    <th>Dob</th>
                                    <th>Address</th>
                                    <th>Contact Number</th>
                                </tr>
                                </thead>

                                {staffs && (
                                    <tbody>
                                    {
                                        staffs.map((staff: Staff) => (
                                            <tr key={staff.id} onClick={() => openUpdateStaffModal(staff)}>
                                                <td>{staff.name}</td>
                                                <td>{staff.role}</td>
                                                <td>{staff.designation}</td>
                                                <td>{staff.gender}</td>
                                                <td>{staff.joinedDate}</td>
                                                <td>{staff.email}</td>
                                                <td>{staff.dob}</td>
                                                <td>{staff.address}</td>
                                                <td>{staff.contactNumber}</td>
                                            </tr>
                                        ))
                                    }
                                    </tbody>
                                )}
                            </table>
                        </div>
                    </div>

                    <AddStaffModal isOpen={isAddModalOpen} onClose={() => setAddModalOpen(false)}/>
                    <UpdateStaffModal isOpen={isUpdateModalOpen} onClose={() => setUpdateModalOpen(false)}
                                    selectedStaff={selectedStaff}/>

                </div>
            </div>
        </>
    )
}