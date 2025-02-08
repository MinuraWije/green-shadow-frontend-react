import React, {useEffect, useState} from "react";
import {Crop} from "../models/Crop.ts";
import {useDispatch} from "react-redux";
import {deleteCrop, updateCrop} from "../reducers/CropSlice.ts";


interface UpdateCropModalProps {
    isOpen: boolean;
    onClose: () => void;
    selectedCrop: Crop|null;
}

const UpdateCropModal: React.FC<UpdateCropModalProps> = ({isOpen, onClose, selectedCrop}) => {
    const [code, setCode] = useState('');
    const [name, setName] = useState('');
    const [scientificName, setScientificName] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
    const [season, setSeason] = useState('');
    const [fieldCode, setFieldCode] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        if(selectedCrop){
            setCode(selectedCrop.code);
            setName(selectedCrop.name);
            setScientificName(selectedCrop.scientificName);
            setCategory(selectedCrop.category);
            setImage(selectedCrop.image);
            setSeason(selectedCrop.season);
            setFieldCode(selectedCrop.fieldCode);
        }
    }, [selectedCrop]);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const crop = {
            code: code,
            name: name,
            scientificName: scientificName,
            category: category,
            image: image,
            season: season,
            fieldCode: fieldCode,
        }
        dispatch(updateCrop(crop));
        onClose();
    }

    const handleDelete = () => {
        if(selectedCrop){
            dispatch(deleteCrop(selectedCrop));
        }
        onClose();
    }
    return (
        <div className="modal fade" id="updateLogModal"
             aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header text-bg-success">
                        <h1 className="modal-title fs-5" id="updateLog">Update Crop</h1>
                        {/*<button type="button" className="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>*/}
                        <form onSubmit={handleSubmit}>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label id="logIdUpdate" className="form-label">CXXX</label>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Name :</label>
                                    <input type="text" className="form-control" id="logDetailsUpdate"
                                           onChange={(e) => setName(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Scientific Name :</label>
                                    <input type="text" className="form-control" id="logDateUpdate"
                                           onChange={(e) => setScientificName(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Category :</label>
                                    <input type="text" className="form-control" id="logDateUpdate"
                                           onChange={(e) => setCategory(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Image :</label>
                                    <input type="file" className="form-control" id="logObservedImgUpdate"
                                           required onChange={(e) => setImage(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Season :</label>
                                    <input type="text" className="form-control" id="logDateUpdate"
                                           onChange={(e) => setSeason(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Field Code :</label>
                                    <input type="text" className="form-control" id="logDateUpdate"
                                           onChange={(e) => setFieldCode(e.target.value)}/>
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

export default UpdateCropModal;