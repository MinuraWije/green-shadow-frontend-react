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
    const [observedImg, setObservedImg] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        if(selectedLog){
            setCode(selectedLog.code);
            setDetails(selectedLog.details);
            setDate(selectedLog.date);
            setObservedImg(selectedLog.observedImg);
        }
    }, [selectedLog]);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const log = {
            code: code,
            details: details,
            date: date,
            observedImg: observedImg,
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
        <div className="modal fade" id="updateLogModal"
             aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header text-bg-success">
                        <h1 className="modal-title fs-5" id="updateLog">Update Log</h1>
                        {/*<button type="button" className="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>*/}
                        <form onSubmit={handleSubmit}>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label id="logIdUpdate" className="form-label">EXXX</label>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Log Details :</label>
                                    <input type="text" className="form-control" id="logDetailsUpdate"
                                           onChange={(e) => setDetails(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Date :</label>
                                    <input type="text" className="form-control" id="logDateUpdate"
                                           onChange={(e) => setDate(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Observed Img :</label>
                                    <input type="file" className="form-control" id="logObservedImgUpdate"
                                           required onChange={(e) => setObservedImg(e.target.value)}/>
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

export default UpdateLogModal;