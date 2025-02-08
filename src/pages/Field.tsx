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
        <>
            <div className="container mt-5">
                <h5 className="card-header">Fields</h5>
                <div className="card-body">

                    <div className="row mb-3">
                        <div className="col-md-6 text-start">

                            <button className="btn btn-success me-md-2" type="button"
                                    onClick={openAddFieldModal}>New Field
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
                                    <th>Location</th>
                                    <th>Size</th>
                                    <th>Image 1</th>
                                    <th>Image 2</th>
                                </tr>
                                </thead>

                                {fields && (
                                    <tbody>
                                    {
                                        fields.map((field: Field) => (
                                            <tr key={field.code} onClick={() => openUpdateFieldModal(field)}>
                                                <td>{field.name}</td>
                                                <td>{field.location}</td>
                                                <td>{field.size}</td>
                                                <td>{field.image1}</td>
                                                <td>{field.image2}</td>
                                            </tr>
                                        ))
                                    }
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
        </>
    )
}