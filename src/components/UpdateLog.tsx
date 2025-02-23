import React, {useEffect, useState} from "react";
import {Log} from "../models/Log.ts";
import {useDispatch} from "react-redux";
import {deleteLog, updateLog} from "../reducers/LogSlice.ts";


interface UpdateLogModalProps {
    isOpen: boolean;
    onClose: () => void;
    selectedLog: Log|null;
}

const UpdateLogModal: React.FC<UpdateLogModalProps> = ({isOpen, onClose, selectedLog}) => {
    const [code, setCode] = useState('');
    const [details, setDetails] = useState('');
    const [date, setDate] = useState('');
    const [img, setImg] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        if(selectedLog){
            setCode(selectedLog.code);
            setDetails(selectedLog.details);
            setDate(selectedLog.date);
            setImg(selectedLog.img);
        }
    }, [selectedLog]);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const log = {
            code: code,
            details: details,
            date: date,
            img: img,
        }
        dispatch(updateLog(log));
        onClose();
    }

    const handleDelete = () => {
        if(selectedLog){
            dispatch(deleteLog(selectedLog));
        }
        onClose();
    }
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                <h1 className="text-xl font-bold mb-4">Update Log</h1>
                        {/*<button type="button" className="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>*/}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label id="logIdUpdate" className="form-label">EXXX</label>
                    </div>
                    <div className="mb-3">
                        <label className="modal-label">Log Details :</label>
                        <input type="text" value={details} className="modal-inputs"
                               onChange={(e) => setDetails(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label className="modal-label">Date :</label>
                        <input type="text" value={date} className="modal-inputs"
                               onChange={(e) => setDate(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label className="modal-label">Observed Img :</label>
                        <input type="file" className="modal-inputs"
                               required onChange={(e) => setImg(e.target.value)}/>
                    </div>

                    <div className="flex justify-end space-x-2">
                        <button type="submit" className="modal-button-update" id="btnUpdateLog">Update</button>
                        <button type="button" className="modal-button-delete" onClick={handleDelete}>Delete</button>
                        <button type="button" className="modal-button-close" onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>

    )
};

export default UpdateLogModal;