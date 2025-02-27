import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import AddEquipmentModal from "../components/AddEquipment.tsx";
import UpdateEquipmentModal from "../components/UpdateEquipment.tsx";
import {Equipment} from "../models/Equipment.ts";
import {Appdispatch} from "../store/Store.ts";
import {getAllEquipment} from "../reducers/EquipmentSlice.ts";

export function EquipmentPage() {
    const [selectedEquipment, setSelectedEquipment] = useState<Equipment | null>(null);

    const dispatch = useDispatch<Appdispatch>();

    const [isAddModalOpen, setAddModalOpen] = useState<boolean>(false);
    const [isUpdateModalOpen, setUpdateModalOpen] = useState<boolean>(false);

    const [searchText, setSearchText] = useState("");

    function handleSearch(){
        console.log(searchText);
    }

    useEffect(() => {
        dispatch(getAllEquipment());
    }, [dispatch]);

    function openAddEquipmentModal() {
        setAddModalOpen(true);
    }

    function openUpdateEquipmentModal(equipment: Equipment) {
        setSelectedEquipment(equipment);
        setUpdateModalOpen(true);
    }

    const equipments = useSelector((state) => state.equipment.equipments);


    return(
            <div className="flex h-screen">
                <div className="flex-1 flex flex-col h-screen overflow-hidden">
                    <div className="p-6 bg-white shadow-md flex-1 overflow-y-auto">
                        <h5 className="text-2xl font-bold mb-4 text-gray-800">Equipments</h5>

                        <div className="mb-6 flex justify-between items-center">
                            <button className="button-add-modal" onClick={openAddEquipmentModal}>+ New Equipment</button>
                            <button className="button-update-modal" onClick={openUpdateEquipmentModal}>Update Equipment</button>
                            <form className="flex space-x-2">
                                <input className="search-bar" type="search" placeholder="Search Equipment"/>
                                <button className="search-button" type="button" id="equipmentSearchButton">Search</button>
                            </form>
                        </div>

                        <div className="overflow-auto flex-1">
                            <table className="table-design">
                                <thead className="thead-design">
                                <tr>
                                    <th className="column-header">ID</th>
                                    <th className="column-header">Name</th>
                                    <th className="column-header">Type</th>
                                    <th className="column-header">Status</th>
                                </tr>
                                </thead>

                                {equipments && (
                                    <tbody>
                                    {equipments.map((equipment: Equipment) => (
                                            <tr key={equipment.id}
                                                className="hover:bg-gray-100 cursor-pointer border-b"
                                                onClick={() => openUpdateEquipmentModal(equipment)}>
                                                <td className="table-data">{equipment.id}</td>
                                                <td className="table-data">{equipment.name}</td>
                                                <td className="table-data">{equipment.type}</td>
                                                <td className="table-data">{equipment.status}</td>
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
                                          selectedEquipment={selectedEquipment}/>
                </div>
            </div>
    )
}