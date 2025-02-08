import {useState} from "react";
import {useDispatch} from "react-redux";
import {v4} from "uuid";
import {addLog} from "../reducers/LogSlice.ts";

interface addLogModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AddLogModal : React.FC<addLogModalProps> = ({isOpen, onClose}) => {

    const [details, setDetails] = useState("");
    const [date, setDate] = useState("");
    const [observedImg, setObservedImg] = useState("");
    const dispatch = useDispatch();
    if (!isOpen) return  null;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const id = `LID-${v4()}`;
        const log = {
            id,
            details: details,
            date: date,
            observedImg: observedImg,
        }
        dispatch(addLog(log));
        onClose();
    }

    return (
        <div className="modal fade" id="newLogModal" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header text-bg-success">
                        <h1 className="modal-title fs-5" id="logModal">New Log</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label className="form-label">Details :</label>
                                    <input type="text" className="form-control" id="logDetails"
                                           required onChange={(e) => setDetails(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Date :</label>
                                    <input type="text" className="form-control" id="logDate"
                                           required onChange={(e) => setDate(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Observed Img :</label>
                                    <input type="file" className="form-control" id="logObservedImg"
                                           required onChange={(e) => setObservedImg(e.target.value)}/>
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

export default AddLogModal;