import {useState} from "react";
import {useDispatch} from "react-redux";
import {v4} from "uuid";
import {getAllField, saveField} from "../reducers/FieldSlice.ts";
import {Appdispatch} from "../store/Store.ts";

interface addFieldModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AddFieldModal : React.FC<addFieldModalProps> = ({isOpen, onClose}) => {

    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [size, setSize] = useState("");
    const [img, setImg] = useState("");
    const dispatch = useDispatch<Appdispatch>();
    if (!isOpen) return  null;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const code = `FID-${v4()}`;
        const field = {
            code,
            name: name,
            location: location,
            size: size,
            img: img,
        }
        dispatch(saveField(field));
        onClose();
        dispatch(getAllField())
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                <h2 className="text-xl font-bold mb-4">New Field</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="modal-label">Name :</label>
                        <input type="text" className="modal-inputs"
                               required onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label className="modal-label">Location :</label>
                        <input type="text" className="modal-inputs"
                               required onChange={(e) => setLocation(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label className="modal-label">Size :</label>
                        <input type="text" className="modal-inputs"
                               required onChange={(e) => setSize(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label className="modal-label">Image :</label>
                        <input type="file" className="modal-inputs"
                               required onChange={(e) => setImg(e.target.value)}/>
                    </div>
                    <div className="flex justify-end space-x-2">
                        <button type="submit" className="modal-button-add">Add</button>
                        <button type="button" className="modal-button-close" onClick={onClose}>Close</button>
                    </div>
                </form>
            </div>

        </div>
    )
};

export default AddFieldModal;