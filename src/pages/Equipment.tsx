import {useSelector} from "react-redux";
import {useState} from "react";
import AddEquipmentModal from "../components/AddEquipment.tsx";
import UpdateEquipmentModal from "../components/UpdateEquipment.tsx";
import {Equipment} from "../models/Equipment.ts";

export function EquipmentPage() {
    const [selectedEquipment, setSelectedEquipment] = useState<Equipment | null>(null);

    const [isAddModalOpen, setAddModalOpen] = useState<boolean>(false);
    const [isUpdateModalOpen, setUpdateModalOpen] = useState<boolean>(false);

    const [searchText, setSearchText] = useState("");

    function handleSearch(){
        console.log(searchText);
    }

    function openAddEquipmentModal() {
        setAddModalOpen(true);
    }

    function openUpdateEquipmentModal(equipment: Equipment) {
        setSelectedEquipment(equipment);
        setUpdateModalOpen(true);
    }

    const equipments = useSelector((state) => state.equipment);


    return(
        <>
            <div className="container mt-5">
                <h5 className="card-header">Equipments</h5>
                <div className="card-body">

                    <div className="row mb-3">
                        <div className="col-md-6 text-start">

                            <button className="btn btn-success me-md-2" type="button"
                                    onClick={openAddEquipmentModal}>New Equipment
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


                    <div className="row">
                        <div className="col">
                            <table className="table" id="equipment-table">
                                <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Type</th>
                                    <th>Status</th>
                                </tr>
                                </thead>

                                {equipments && (
                                    <tbody>
                                    {
                                        equipments.map((equipment: Equipment) => (
                                            <tr key={equipment.id} onClick={() => openUpdateEquipmentModal(equipment)}>
                                                <td>{equipment.name}</td>
                                                <td>{equipment.type}</td>
                                                <td>{equipment.status}</td>
                                            </tr>
                                        ))
                                    }
                                    </tbody>
                                )}
                            </table>
                        </div>
                    </div>

                    <AddEquipmentModal isOpen={isAddModalOpen} onClose={() => setAddModalOpen(false)}/>
                    <UpdateEquipmentModal isOpen={isUpdateModalOpen} onClose={() => setUpdateModalOpen(false)}
                                          selectedEquipment={selectedEquipment}/>Update Equipment

                </div>
            </div>
        </>
    )
}