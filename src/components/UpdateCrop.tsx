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
    const [img, setImg] = useState('');
    const [season, setSeason] = useState('');
    const [fieldCode, setFieldCode] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        if(selectedCrop){
            setCode(selectedCrop.code);
            setName(selectedCrop.name);
            setScientificName(selectedCrop.scientificName);
            setCategory(selectedCrop.category);
            setImg(selectedCrop.img);
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
            img: img,
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
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                <h1 className="text-xl font-bold mb-4">Update Crop</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="modal-label">Name :</label>
                        <input type="text" value={name} className="modal-inputs"
                               onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label className="modal-label">Scientific Name :</label>
                        <input type="text" value={scientificName} className="modal-inputs"
                               onChange={(e) => setScientificName(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label className="modal-label">Category :</label>
                        <input type="text" value={category} className="modal-inputs"
                               onChange={(e) => setCategory(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label className="modal-label">Image :</label>
                        <input type="file" className="modal-inputs"
                               required onChange={(e) => setImg(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label className="modal-label">Season :</label>
                        <input type="text" value={season} className="modal-inputs"
                               onChange={(e) => setSeason(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label className="modal-label">Field Code :</label>
                        <input type="text" value={fieldCode} className="modal-inputs"
                               onChange={(e) => setFieldCode(e.target.value)}/>
                    </div>
                    <div className="flex justify-end space-x-2">
                        <button type="submit" className="modal-button-update">Update</button>
                        <button type="button" className="modal-button-delete" onClick={handleDelete}>Delete</button>
                        <button type="button" className="modal-button-close" onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default UpdateCropModal;