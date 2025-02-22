import {useSelector} from "react-redux";
import {useState} from "react";
import {Crop} from "../models/Crop.ts";
import AddCropModal from "../components/AddCrop.tsx";
import UpdateCropModal from "../components/UpdateCrop.tsx";

export function CropPage() {
    const [selectedCrop, setSelectedCrop] = useState<Crop | null>(null);

    const [isAddModalOpen, setAddModalOpen] = useState<boolean>(false);
    const [isUpdateModalOpen, setUpdateModalOpen] = useState<boolean>(false);

    /*const [searchText, setSearchText] = useState("");

    function handleSearch(){
        console.log(searchText);
    }*/

    function openAddCropModal() {
        setAddModalOpen(true);
    }

    function openUpdateCropModal(crop: Crop) {
        setSelectedCrop(crop);
        setUpdateModalOpen(true);
    }

    const crops = useSelector((state) => state.crop);


    return(
        <>
            <div className="container mt-5">
                <h5 className="card-header">Crops</h5>
                <div className="card-body">

                    <div className="row mb-3">
                        <div className="col-md-6 text-start">

                            <button className="btn btn-success me-md-2" type="button"
                                    onClick={openAddCropModal}>New Crop
                            </button>
                            {/*<button className="btn btn-warning me-md-2" type="button" data-bs-toggle="modal"
                                    data-bs-target="#updateEquipmentModal" id="updateEquipmentbtn"
                                    onClick={openUpdateModal}>Update Equipment
                            </button>*/}
                        </div>
                        <div className="col-md-6">
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search Log"
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
                                    <th>Code</th>
                                    <th>Name</th>
                                    <th>Scientific Name</th>
                                    <th>Category</th>
                                    <th>Image</th>
                                    <th>Season</th>
                                    <th>Field Code</th>
                                </tr>
                                </thead>

                                {crops && (
                                    <tbody>
                                    {
                                        crops.map((crop: Crop) => (
                                            <tr key={crop.code} onClick={() => openUpdateCropModal(crop)}>
                                                <td>{crop.name}</td>
                                                <td>{crop.scientificName}</td>
                                                <td>{crop.category}</td>
                                                <td>{crop.image}</td>
                                                <td>{crop.season}</td>
                                                <td>{crop.fieldCode}</td>
                                            </tr>
                                        ))
                                    }
                                    </tbody>
                                )}
                            </table>
                        </div>
                    </div>

                    <AddCropModal isOpen={isAddModalOpen} onClose={() => setAddModalOpen(false)}/>
                    <UpdateCropModal isOpen={isUpdateModalOpen} onClose={() => setUpdateModalOpen(false)}
                                    selectedCrop={selectedCrop}/>

                </div>
            </div>
        </>
    )
}