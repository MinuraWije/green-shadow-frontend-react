import {useState} from "react";
import {useDispatch} from "react-redux";
import {v4} from "uuid";
import {getAllLog, saveLog} from "../reducers/LogSlice.ts";
import {Appdispatch} from "../store/Store.ts";

interface addLogModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AddLogModal : React.FC<addLogModalProps> = ({isOpen, onClose}) => {

    const [details, setDetails] = useState("");
    const [date, setDate] = useState("");
    const [img, setImg] = useState("");
    const dispatch = useDispatch<Appdispatch>();
    if (!isOpen) return  null;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const code = `LID-${v4()}`;
        const log = {
            code,
            details: details,
            date: date,
            img: img,
        }
        dispatch(saveLog(log));
        onClose();
        dispatch(getAllLog())
    }
    function  handleOnChange (event) {
        const file = event.target.files?.[0]
        if (file) {
            setImg(file)
        }
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                <h1 className="text-xl font-bold mb-4">New Log</h1>
                <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="modal-label">Details :</label>
                            <input type="text" className="modal-inputs"
                                   required onChange={(e) => setDetails(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label className="modal-label">Date :</label>
                            <input type="text" className="modal-inputs"
                                   required onChange={(e) => setDate(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label className="modal-label">Observed Img :</label>
                            <input type="file" className="modal-inputs"
                                   required onChange={handleOnChange}/>
                        </div>
                        <div className="flex justify-end space-x-2">
                            <button type="submit" className="modal-button-add" id="btnAddLog">Add</button>
                            <button type="button" className="modal-button-close" onClick={onClose}>Close</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default AddLogModal;