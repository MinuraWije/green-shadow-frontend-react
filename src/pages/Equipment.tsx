import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {addEquipment,updateEquipment,deleteEquipment} from "../reducers/EquipmentSlice.ts";

export default function Equipment() {
    const dispatch = useDispatch();
    const [selectedEquipment, setSelectedEquipment] = useState(null);

    const [isNewModalOpen, setIsNewModalOpen] = useState(false);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

    const equipments = useSelector((state) => state.equipments)
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        type: '',
        status: ''
    })

    const openNewModal = () => {
        setFormData({
            id: '',
            name: '',
            type: '',
            status: ''
        })
        setIsNewModalOpen(true);
        setIsUpdateModalOpen(false);
    }

    const openUpdateModal = () => {

        setIsUpdateModalOpen(true);
        setIsNewModalOpen(false);
    }

    const handleAddEquipment = () =>{
        //
    }
    const handleUpdateEquipment = () =>{
        //
    }
    const handleDeleteEquipment = () =>{
        //
    }

    const handleCloseNewModal= () =>{
        setIsNewModalOpen(false);
    }
    const handleCloseUpdateModal= () =>{
        setIsUpdateModalOpen(false);
    }

    return(
        <>
            <div className="container mt-5">
                <h5 className="card-header">Equipments</h5>
                <div className="card-body">

                    <div className="row mb-3">
                        <div className="col-md-6 text-start">
                            <button className="btn btn-success me-md-2" type="button"
                                     onClick={openNewModal}>New Equipment
                            </button>
                            {/*<button className="btn btn-warning me-md-2" type="button" data-bs-toggle="modal"
                                    data-bs-target="#updateEquipmentModal" id="updateEquipmentbtn"
                                    onClick={openUpdateModal}>Update Equipment
                            </button>*/}
                        </div>
                        <div className="col-md-6">
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search Equipment"
                                       aria-label="Search" id="searchBar"/>
                                <button className="btn btn-primary" type="button" id="equipmentSearchButton">Search
                                </button>
                            </form>
                            <ul id="suggestions"></ul>
                        </div>

                    </div>

                    <div className="modal fade" id="newEquipmentModal" aria-labelledby="exampleModalLabel"
                         aria-hidden="true"
                         show={isNewModalOpen}>
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header text-bg-success">
                                    <h1 className="modal-title fs-5" id="equipmentModal">New Equipment</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div className="mb-3">
                                        <label className="form-label">Equipment Name :</label>
                                        <input type="text" className="form-control" id="equipmentName"/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Type :</label>
                                        <input type="text" className="form-control" id="equipmentType"/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="equipmentStatus" className="form-label">Status</label>
                                        <select className="form-select" aria-label="Default select example"
                                                id="equipmentStatus">
                                            <option defaultValue={"Select"}>Select</option>
                                            <option value="AVAILABLE">Available</option>
                                            <option value="NOT_AVAILABLE">Not-Available</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-outline-success"
                                            id="btnAddEquipment" onClick={handleAddEquipment}>Add
                                    </button>
                                    <button type="button" className="btn btn-outline-danger" onClick={handleCloseNewModal}>Close</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*<div className="modal fade" id="updateEquipmentModal"
                         aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header text-bg-success">
                                    <h1 className="modal-title fs-5" id="updateEquipment">Update Equipment</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div className="mb-3">
                                        <label id="equipmentIdUpdate" className="form-label">EXXX</label>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Equipment Name :</label>
                                        <input type="text" className="form-control" id="equipmentNameUpdate"/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Type :</label>
                                        <input type="text" className="form-control" id="equipmentTypeUpdate"/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="equipmentStatusUpdate" className="form-label">Status</label>
                                        <select className="form-select" aria-label="Default select example"
                                                id="equipmentStatusUpdate">
                                            <option defaultValue={"Select"}>Select</option>
                                            <option value="AVAILABLE">Available</option>
                                            <option value="NOT_AVAILABLE">Not_Available</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-outline-primary"
                                            id="btnUpdateEquipment">Update
                                    </button>
                                    <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal"
                                            id="btnDeleteEquipment">Delete
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>*/}


                    <div className="row">
                        <div className="col">
                            <table className="table" id="equipment-table">
                                <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Type</th>
                                    <th scope="col">Status</th>
                                </tr>
                                </thead>
                                <tbody id="equipment-table-tbody">
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}