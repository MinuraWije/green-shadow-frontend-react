import React, {useEffect, useState} from "react";
import {Field} from "../models/Field.ts";
import {useDispatch} from "react-redux";
import {deleteField, getAllField, updateField} from "../reducers/FieldSlice.ts";
import {Appdispatch} from "../store/Store.ts";


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
    const [img, setImg] = useState('');
    const dispatch = useDispatch<Appdispatch>();

    useEffect(() => {
        if(selectedField){
            setCode(selectedField.code);
            setName(selectedField.name);
            setLocation(selectedField.location);
            setSize(selectedField.size);
            setImg(selectedField.img);
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
            img: img,
        }
        dispatch(updateField(field));
        onClose();
        dispatch(getAllField());
    }

    const handleDelete = () => {
        if(selectedField){
            dispatch(deleteField(selectedField.code));
        }
        onClose();
        dispatch(getAllField())
    }
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                <h1 className="text-xl font-bold mb-4">Update Field</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="modal-label">Name :</label>
                        <input type="text" value={name} className="modal-inputs"
                               onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label className="modal-label">Location :</label>
                        <input type="text" value={location} className="modal-inputs"
                               onChange={(e) => setLocation(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label className="modal-label">Size :</label>
                        <input type="text" value={size} className="modal-inputs"
                               onChange={(e) => setSize(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label className="modal-label">Image :</label>
                        <input type="file" className="modal-inputs"
                               required onChange={(e) => setImg(e.target.value)}/>
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

export default UpdateFieldModal;