import React, {useEffect, useState} from "react";
import {Field} from "../models/Field.ts";
import {useDispatch} from "react-redux";
import {deleteField, updateField} from "../reducers/FieldSlice.ts";


interface UpdateFieldModalProps {
    isOpen: boolean;
    onClose: () => void;
    selectedField: Field|null;
}

const UpdateFieldModal: React.FC<UpdateFieldModalProps> = ({isOpen, onClose, selectedField}) => {
    const [code, setCode] = useState('');
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [size, setSize] = useState('');
    const [image1, setImage1] = useState('');
    const [image2, setImage2] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        if(selectedField){
            setCode(selectedField.code);
            setName(selectedField.name);
            setLocation(selectedField.location);
            setSize(selectedField.size);
            setImage1(selectedField.image1);
            setImage2(selectedField.image2);
        }
    }, [selectedField]);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const field = {
            code: code,
            name: name,
            location: location,
            size: size,
            image1: image1,
            image2: image2,
        }
        dispatch(updateField(field));
        onClose();
    }

    const handleDelete = () => {
        if(selectedField){
            dispatch(deleteField(selectedField));
        }
        onClose();
    }
    return (
        <div className="modal fade" id="updateLogModal"
             aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header text-bg-success">
                        <h1 className="modal-title fs-5" id="updateLog">Update Field</h1>
                        {/*<button type="button" className="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>*/}
                        <form onSubmit={handleSubmit}>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label id="logIdUpdate" className="form-label">FXXX</label>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Name :</label>
                                    <input type="text" className="form-control" id="logDetailsUpdate"
                                           onChange={(e) => setName(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Location :</label>
                                    <input type="text" className="form-control" id="logDateUpdate"
                                           onChange={(e) => setLocation(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Size :</label>
                                    <input type="text" className="form-control" id="logDateUpdate"
                                           onChange={(e) => setSize(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Image 1 :</label>
                                    <input type="file" className="form-control" id="logObservedImgUpdate"
                                           required onChange={(e) => setImage1(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Image 2:</label>
                                    <input type="file" className="form-control" id="logObservedImgUpdate"
                                           required onChange={(e) => setImage2(e.target.value)}/>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-outline-primary"
                                        id="btnUpdateLog">Update
                                </button>
                                <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal"
                                        id="btnDeleteLog" onClick={handleDelete}>Delete
                                </button>
                                <button type="button" className="mr-2" onClick={onClose}>Cancel</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default UpdateFieldModal;