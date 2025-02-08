import {useState} from "react";
import {useDispatch} from "react-redux";
import {v4} from "uuid";
import {addCrop} from "../reducers/CropSlice.ts";

interface addCropModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AddCropModal : React.FC<addCropModalProps> = ({isOpen, onClose}) => {

    const [name, setName] = useState("");
    const [scientificName, setScientificName] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");
    const [season, setSeason] = useState("");
    const [fieldCode, setFieldCode] = useState("");
    const dispatch = useDispatch();
    if (!isOpen) return  null;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const id = `CID-${v4()}`;
        const crop = {
            id,
            name: name,
            scientificName: scientificName,
            category: category,
            image: image,
            season: season,
            fieldCode: fieldCode,
        }
        dispatch(addCrop(crop));
        onClose();
    }

    return (
        <div className="modal fade" id="newLogModal" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header text-bg-success">
                        <h1 className="modal-title fs-5" id="logModal">New Crop</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label className="form-label">Name :</label>
                                    <input type="text" className="form-control" id="logDetails"
                                           required onChange={(e) => setName(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Scientific Name :</label>
                                    <input type="text" className="form-control" id="logDate"
                                           required onChange={(e) => setScientificName(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Category :</label>
                                    <input type="text" className="form-control" id="logDate"
                                           required onChange={(e) => setCategory(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Image :</label>
                                    <input type="file" className="form-control" id="logObservedImg"
                                           required onChange={(e) => setImage(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Season :</label>
                                    <input type="text" className="form-control" id="logDate"
                                           required onChange={(e) => setSeason(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Field Code :</label>
                                    <input type="text" className="form-control" id="logDate"
                                           required onChange={(e) => setFieldCode(e.target.value)}/>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-outline-success"
                                        id="btnAddLog">Add
                                </button>
                                <button type="button" className="btn btn-outline-danger"
                                        onClick={onClose}>Close
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default AddCropModal;