import {useState} from "react";
import {useDispatch} from "react-redux";
import {v4} from "uuid";
import {addField} from "../reducers/FieldSlice.ts";

interface addFieldModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AddFieldModal : React.FC<addFieldModalProps> = ({isOpen, onClose}) => {

    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [size, setSize] = useState("");
    const [image1, setImage1] = useState("");
    const [image2, setImage2] = useState("");
    const dispatch = useDispatch();
    if (!isOpen) return  null;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const id = `FID-${v4()}`;
        const field = {
            id,
            name: name,
            location: location,
            size: size,
            image1: image1,
            image2: image2,
        }
        dispatch(addField(field));
        onClose();
    }

    return (
        <div className="modal fade" id="newLogModal" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header text-bg-success">
                        <h1 className="modal-title fs-5" id="logModal">New Field</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label className="form-label">Name :</label>
                                    <input type="text" className="form-control" id="logDetails"
                                           required onChange={(e) => setName(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Location :</label>
                                    <input type="text" className="form-control" id="logDate"
                                           required onChange={(e) => setLocation(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Size :</label>
                                    <input type="text" className="form-control" id="logDate"
                                           required onChange={(e) => setSize(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Image 1 :</label>
                                    <input type="file" className="form-control" id="logObservedImg"
                                           required onChange={(e) => setImage1(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Image 2 :</label>
                                    <input type="file" className="form-control" id="logObservedImg"
                                           required onChange={(e) => setImage2(e.target.value)}/>
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

export default AddFieldModal;