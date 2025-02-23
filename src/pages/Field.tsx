import {useSelector} from "react-redux";
import {useState} from "react";
import {Field} from "../models/Field.ts";
import AddFieldModal from "../components/AddField.tsx";
import UpdateFieldModal from "../components/UpdateField.tsx";


export function FieldPage() {
    const [selectedField, setSelectedField] = useState<Field | null>(null);

    const [isAddModalOpen, setAddModalOpen] = useState<boolean>(false);
    const [isUpdateModalOpen, setUpdateModalOpen] = useState<boolean>(false);

    const [searchText, setSearchText] = useState("");

    function handleSearch(){
        console.log(searchText);
    }

    function openAddFieldModal() {
        setAddModalOpen(true);
    }

    function openUpdateFieldModal(field: Field) {
        setSelectedField(field);
        setUpdateModalOpen(true);
    }

    const fields = useSelector((state) => state.field);


    return(
            <div className="flex h-screen">
                <div className="flex-1 flex flex-col h-screen overflow-hidden">
                    <div className="p-6 bg-white shadow-md flex-1 overflow-y-auto">
                        <h5 className="text-2xl font-bold mb-4 text-gray-800">Fields</h5>
                            <div className="mb-6 flex justify-between items-center">
                                <button className="button-add-modal" onClick={openAddFieldModal}>+ New Field</button>
                                <button className="button-update-modal" onClick={openUpdateFieldModal}>Update Field</button>
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
                                        <th className="column-header">Location</th>
                                        <th className="column-header">Size</th>
                                        <th className="column-header">Image</th>
                                    </tr>
                                    </thead>

                                    {fields && (
                                        <tbody>
                                        {fields.map((field: Field) => (
                                            <tr key={field.code}
                                                className="hover:bg-gray-100 cursor-pointer border-b"
                                                onClick={() => openUpdateFieldModal(field)}>
                                                <td className="table-data">{field.code}</td>
                                                <td className="table-data">{field.name}</td>
                                                <td className="table-data">{field.location}</td>
                                                <td className="table-data">{field.size}</td>
                                                <td className="table-data">{field.img ? (
                                                    <img
                                                        src={field.img}
                                                        alt="Observed"
                                                        className="w-36 h-36 object-cover rounded-lg"
                                                    />
                                                ) : (
                                                    "No Image"
                                                )}</td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    )}
                                </table>
                            </div>
                        </div>

                        <AddFieldModal isOpen={isAddModalOpen} onClose={() => setAddModalOpen(false)}/>
                        <UpdateFieldModal isOpen={isUpdateModalOpen} onClose={() => setUpdateModalOpen(false)}
                                      selectedField={selectedField}/>
                </div>
            </div>
    )
}