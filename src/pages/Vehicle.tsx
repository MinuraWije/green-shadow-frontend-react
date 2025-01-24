import {useSelector} from "react-redux";
import {useState} from "react";
import {Vehicle} from "../models/Vehicle.ts";
import AddVehicleModal from "../components/AddVehicle.tsx";
import UpdateVehicleModal from "../components/UpdateVehicle.tsx";

export function VehiclePage() {
    const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

    const [isAddModalOpen, setAddModalOpen] = useState<boolean>(false);
    const [isUpdateModalOpen, setUpdateModalOpen] = useState<boolean>(false);

    const [searchText, setSearchText] = useState("");

    function handleSearch(){
        console.log(searchText);
    }

    function openAddVehicleModal() {
        setAddModalOpen(true);
    }

    function openUpdateVehicleModal(vehicle: Vehicle) {
        setSelectedVehicle(vehicle);
        setUpdateModalOpen(true);
    }

    const vehicles = useSelector((state) => state.vehicle);


    return(
        <>
            <div className="container mt-5">
                <h5 className="card-header">Vehicles</h5>
                <div className="card-body">

                    <div className="row mb-3">
                        <div className="col-md-6 text-start">

                            <button className="btn btn-success me-md-2" type="button"
                                    onClick={openAddVehicleModal}>New Vehicle
                            </button>
                            {/*<button className="btn btn-warning me-md-2" type="button" data-bs-toggle="modal"
                                    data-bs-target="#updateEquipmentModal" id="updateEquipmentbtn"
                                    onClick={openUpdateModal}>Update Equipment
                            </button>*/}
                        </div>
                        <div className="col-md-6">
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search Vehicle"
                                       aria-label="Search" id="searchBar"/>
                                <button className="btn btn-primary" type="button" id="vehicleSearchButton">Search
                                </button>
                            </form>
                            <ul id="suggestions"></ul>
                        </div>

                    </div>


                    <div className="row">
                        <div className="col">
                            <table className="table" id="vehicle-table">
                                <thead>
                                <tr>
                                    <th>Code</th>
                                    <th>License Plate</th>
                                    <th>Category</th>
                                    <th>Fuel Type</th>
                                    <th>Status</th>
                                </tr>
                                </thead>

                                {vehicles && (
                                    <tbody>
                                    {
                                        vehicles.map((vehicle: Vehicle) => (
                                            <tr key={vehicle.code} onClick={() => openUpdateVehicleModal(vehicle)}>
                                                <td>{vehicle.licensePlate}</td>
                                                <td>{vehicle.category}</td>
                                                <td>{vehicle.fuelType}</td>
                                                <td>{vehicle.vehicleStatus}</td>
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
        </>
    )
}