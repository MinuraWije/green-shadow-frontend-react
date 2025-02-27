import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {Staff} from "../models/Staff.ts";
import AddStaffModal from "../components/AddStaff.tsx";
import UpdateStaffModal from "../components/UpdateStaff.tsx";
import {Appdispatch} from "../store/Store.ts";
import {getAllStaff} from "../reducers/StaffSlice.ts";

export function StaffPage() {
    const [selectedStaff, setSelectedStaff] = useState<Staff | null>(null);

    const dispatch = useDispatch<Appdispatch>();

    const [isAddModalOpen, setAddModalOpen] = useState<boolean>(false);
    const [isUpdateModalOpen, setUpdateModalOpen] = useState<boolean>(false);

    const [searchText, setSearchText] = useState("");

    function handleSearch(){
        console.log(searchText);
    }

    useEffect(() => {
        dispatch(getAllStaff())
    },[dispatch])

    function openAddStaffModal() {
        setAddModalOpen(true);
    }

    function openUpdateStaffModal(staff: Staff) {
        setSelectedStaff(staff);
        setUpdateModalOpen(true);
    }

    const staffs = useSelector((state) => state.staff.staffs);


    return(
            <div className="flex h-screen">
                <div className="flex-1 flex flex-col h-screen overflow-hidden">
                    <div className="p-6 bg-white shadow-md flex-1 overflow-y-auto">
                        <h5 className="text-2xl font-bold mb-4 text-gray-800">Staff</h5>

                        <div className="mb-6 flex justify-between items-center">
                            <button className="button-add-modal" onClick={openAddStaffModal}>+ New Staff</button>
                            <button className="button-update-modal" onClick={openUpdateStaffModal}>Update Staff</button>
                            <form className="flex space-x-2">
                                <input className="search-bar" type="search" placeholder="Search Staff"/>
                                <button className="search-button" type="button">Search</button>
                            </form>
                        </div>

                        <div className="overflow-auto flex-1">
                            <table className="table-design">
                                <thead className="thead-design">
                                <tr>
                                    <th className="column-header">Id</th>
                                    <th className="column-header">Name</th>
                                    <th className="column-header">Role</th>
                                    <th className="column-header">Designation</th>
                                    <th className="column-header">Gender</th>
                                    <th className="column-header">Joined Date</th>
                                    <th className="column-header">Email</th>
                                    <th className="column-header">Dob</th>
                                    <th className="column-header">Address</th>
                                    <th className="column-header">Contact Number</th>
                                </tr>
                                </thead>

                                {staffs && (
                                    <tbody>
                                    {staffs.map((staff: Staff) => (
                                            <tr key={staff.id}
                                                className="hover:bg-gray-100 cursor-pointer border-b"
                                                 onClick={() => openUpdateStaffModal(staff)}>
                                                <td className="table-data">{staff.id}</td>
                                                <td className="table-data">{staff.name}</td>
                                                <td className="table-data">{staff.role}</td>
                                                <td className="table-data">{staff.designation}</td>
                                                <td className="table-data">{staff.gender}</td>
                                                <td className="table-data">{staff.joinedDate}</td>
                                                <td className="table-data">{staff.email}</td>
                                                <td className="table-data">{staff.dob}</td>
                                                <td className="table-data">{staff.address}</td>
                                                <td className="table-data">{staff.contactNumber}</td>
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
    )
}