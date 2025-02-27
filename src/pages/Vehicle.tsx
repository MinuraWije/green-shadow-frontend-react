import {useSelector,useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {Vehicle} from "../models/Vehicle.ts";
import AddVehicleModal from "../components/AddVehicle.tsx";
import UpdateVehicleModal from "../components/UpdateVehicle.tsx";
import {Appdispatch} from "../store/Store.ts";
import {getAllVehicle} from "../reducers/VehicleSlice.ts";

export function VehiclePage() {
    const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

    const dispatch = useDispatch<Appdispatch>();
    const [isAddModalOpen, setAddModalOpen] = useState<boolean>(false);
    const [isUpdateModalOpen, setUpdateModalOpen] = useState<boolean>(false);

    const [searchText, setSearchText] = useState("");

    function handleSearch(){
        console.log(searchText);
    }

    useEffect(() => {
        dispatch(getAllVehicle());
    }, [dispatch]);

    function openAddVehicleModal() {
        setAddModalOpen(true);
    }

    function openUpdateVehicleModal(vehicle: Vehicle) {
        setSelectedVehicle(vehicle);
        setUpdateModalOpen(true);
    }

    const vehicles = useSelector((state) => state.vehicle.vehicles);


    return(
            <div className="flex h-screen">
                <div className="flex-1 flex flex-col h-screen overflow-hidden">
                    <div className="p-6 bg-white shadow-md flex-1 overflow-y-auto">
                        <h5 className="text-2xl font-bold mb-4 text-gray-800">Vehicles</h5>

                        <div className="mb-6 flex justify-between items-center">
                            <button className="button-add-modal" onClick={openAddVehicleModal}>+ New Vehicle</button>
                            <button className="button-update-modal" onClick={openUpdateVehicleModal}>Update Vehicle</button>
                            <form className="flex space-x-2">
                                <input className="search-bar" type="search" placeholder="Search Vehicle"/>
                                <button className="search-button" type="button">Search</button>
                            </form>
                        </div>

                        <div className="overflow-auto flex-1">
                            <table className="table-design">
                                <thead className="thead-design">
                                <tr>
                                    <th className="column-header">Code</th>
                                    <th className="column-header">License Plate</th>
                                    <th className="column-header">Category</th>
                                    <th className="column-header">Fuel Type</th>
                                    <th className="column-header">Status</th>
                                </tr>
                                </thead>

                                {vehicles && (
                                    <tbody>
                                    {vehicles.map((vehicle: Vehicle) => (
                                            <tr key={vehicle.code}
                                                className="hover:bg-gray-100 cursor-pointer border-b"
                                                onClick={() => openUpdateVehicleModal(vehicle)}>
                                                <td className="table-data">{vehicle.code}</td>
                                                <td className="table-data">{vehicle.licensePlate}</td>
                                                <td className="table-data">{vehicle.category}</td>
                                                <td className="table-data">{vehicle.fuelType}</td>
                                                <td className="table-data">{vehicle.vehicleStatus}</td>
                                            </tr>
                                        ))
                                    }
                                    </tbody>
                                )}
                            </table>
                        </div>
                    </div>

                    <AddVehicleModal isOpen={isAddModalOpen} onClose={() => setAddModalOpen(false)}/>
                    <UpdateVehicleModal isOpen={isUpdateModalOpen} onClose={() => setUpdateModalOpen(false)}
                                            selectedVehicle={selectedVehicle}/>

                </div>
            </div>
    )
}