import {useState} from "react";
import {useDispatch} from "react-redux";
import {v4} from "uuid";
import {getAllCrop, saveCrop} from "../reducers/CropSlice.ts";
import {Appdispatch} from "../store/Store.ts";

interface addCropModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AddCropModal : React.FC<addCropModalProps> = ({isOpen, onClose}) => {

    const [name, setName] = useState("");
    const [scientificName, setScientificName] = useState("");
    const [category, setCategory] = useState("");
    const [img, setImg] = useState("");
    const [season, setSeason] = useState("");
    const [fieldCode, setFieldCode] = useState("");
    const dispatch = useDispatch<Appdispatch>();
    if (!isOpen) return  null;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const code = `CID-${v4()}`;
        const crop = {
            code,
            name: name,
            scientificName: scientificName,
            category: category,
            img: img,
            season: season,
            fieldCode: fieldCode,
        }
        dispatch(saveCrop(crop));
        onClose();
        dispatch(getAllCrop())
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                <h1 className="text-xl font-bold mb-4">New Crop</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="modal-label">Name :</label>
                        <input type="text" className="modal-inputs"
                               required onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label className="modal-label">Scientific Name :</label>
                        <input type="text" className="modal-inputs"
                               required onChange={(e) => setScientificName(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label className="modal-label">Category :</label>
                        <input type="text" className="modal-inputs"
                               required onChange={(e) => setCategory(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label className="modal-label">Image :</label>
                        <input type="file" className="modal-inputs"
                               required onChange={(e) => setImg(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label className="modal-label">Season :</label>
                        <input type="text" className="modal-inputs"
                               required onChange={(e) => setSeason(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label className="modal-label">Field Code :</label>
                        <input type="text" className="modal-inputs"
                               required onChange={(e) => setFieldCode(e.target.value)}/>
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

export default AddCropModal;