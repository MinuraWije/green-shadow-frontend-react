import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {Crop} from "../models/Crop.ts";
import AddCropModal from "../components/AddCrop.tsx";
import UpdateCropModal from "../components/UpdateCrop.tsx";
import {Appdispatch} from "../store/Store.ts";
import {getAllCrop} from "../reducers/CropSlice.ts";

export function CropPage() {
    const [selectedCrop, setSelectedCrop] = useState<Crop | null>(null);

    const dispatch = useDispatch<Appdispatch>();
    const [isAddModalOpen, setAddModalOpen] = useState<boolean>(false);
    const [isUpdateModalOpen, setUpdateModalOpen] = useState<boolean>(false);

    const [searchText, setSearchText] = useState("");

    function handleSearch(){
        console.log(searchText);
    }

    useEffect(() => {
        dispatch(getAllCrop())
    },[dispatch])

    function openAddCropModal() {
        setAddModalOpen(true);
    }

    function openUpdateCropModal(crop: Crop) {
        setSelectedCrop(crop);
        setUpdateModalOpen(true);
    }

    const crops = useSelector((state) => state.crop.crops);


    return(
            <div className="flex h-screen">
                <div className="flex-1 flex flex-col h-screen overflow-hidden">
                    <div className="p-6 bg-white shadow-md flex-1 overflow-y-auto">
                        <h5 className="text-2xl font-bold mb-4 text-gray-800">Crops</h5>
                        <div className="mb-6 flex justify-between items-center">
                            <button className="button-add-modal" type="button" onClick={openAddCropModal}>+ New Crop</button>
                            <button className="button-update-modal" type="button" onClick={openUpdateCropModal}>Update Equipment</button>
                            <form className="flex space-x-2">
                                <input className="search-bar" type="search" placeholder="Search Log"/>
                                <button className="search-button" type="button">Search</button>
                            </form>
                        </div>

                        <div className="overflow-auto flex-1">
                            <table className="table-design">
                                <thead className="thead-design">
                                <tr>
                                    <th className="column-header">Code</th>
                                    <th className="column-header">Name</th>
                                    <th className="column-header">Scientific Name</th>
                                    <th className="column-header">Category</th>
                                    <th className="column-header">Image</th>
                                    <th className="column-header">Season</th>
                                    <th className="column-header">Field Code</th>
                                </tr>
                                </thead>
                                {crops && (
                                    <tbody>
                                    {crops.map((crop: Crop) => (
                                        <tr key={crop.code}
                                            className="hover:bg-gray-100 cursor-pointer border-b"
                                            onClick={() => openUpdateCropModal(crop)}>
                                            <td className="table-data">{crop.code}</td>
                                            <td className="table-data">{crop.name}</td>
                                            <td className="table-data">{crop.scientificName}</td>
                                            <td className="table-data">{crop.category}</td>
                                            <td className="table-data">{crop.img ? (
                                                <img
                                                    src={crop.img}
                                                    alt="Observed"
                                                    className="w-36 h-36 object-cover rounded-lg"
                                                />
                                            ) : (
                                                "No Image"
                                            )}</td>
                                            <td className="table-data">{crop.season}</td>
                                            <td className="table-data">{crop.fieldCode}</td>
                                        </tr>
                                    ))}
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

    )
}