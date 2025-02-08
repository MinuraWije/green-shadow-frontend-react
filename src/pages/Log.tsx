import {useSelector} from "react-redux";
import {useState} from "react";
import {Log} from "../models/Log.ts";
import AddLogModal from "../components/AddLog.tsx";
import UpdateLogModal from "../components/UpdateLog.tsx";

export function LogPage() {
    const [selectedLog, setSelectedLog] = useState<Log | null>(null);

    const [isAddModalOpen, setAddModalOpen] = useState<boolean>(false);
    const [isUpdateModalOpen, setUpdateModalOpen] = useState<boolean>(false);

    const [searchText, setSearchText] = useState("");

    function handleSearch(){
        console.log(searchText);
    }

    function openAddLogModal() {
        setAddModalOpen(true);
    }

    function openUpdateLogModal(log: Log) {
        setSelectedLog(log);
        setUpdateModalOpen(true);
    }

    const logs = useSelector((state) => state.log);


    return(
        <>
            <div className="container mt-5">
                <h5 className="card-header">Logs</h5>
                <div className="card-body">

                    <div className="row mb-3">
                        <div className="col-md-6 text-start">

                            <button className="btn btn-success me-md-2" type="button"
                                    onClick={openAddLogModal}>New Log
                            </button>
                            {/*<button className="btn btn-warning me-md-2" type="button" data-bs-toggle="modal"
                                    data-bs-target="#updateEquipmentModal" id="updateEquipmentbtn"
                                    onClick={openUpdateModal}>Update Equipment
                            </button>*/}
                        </div>
                        <div className="col-md-6">
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search Log"
                                       aria-label="Search" id="searchBar"/>
                                <button className="btn btn-primary" type="button" id="logSearchButton">Search
                                </button>
                            </form>
                            <ul id="suggestions"></ul>
                        </div>

                    </div>


                    <div className="row">
                        <div className="col">
                            <table className="table" id="log-table">
                                <thead>
                                <tr>
                                    <th>Code</th>
                                    <th>Details</th>
                                    <th>Date</th>
                                    <th>Observed Img</th>
                                </tr>
                                </thead>

                                {logs && (
                                    <tbody>
                                    {
                                        logs.map((log: Log) => (
                                            <tr key={log.code} onClick={() => openUpdateLogModal(log)}>
                                                <td>{log.details}</td>
                                                <td>{log.date}</td>
                                                <td>{log.observedImg}</td>
                                            </tr>
                                        ))
                                    }
                                    </tbody>
                                )}
                            </table>
                        </div>
                    </div>

                    <AddLogModal isOpen={isAddModalOpen} onClose={() => setAddModalOpen(false)}/>
                    <UpdateLogModal isOpen={isUpdateModalOpen} onClose={() => setUpdateModalOpen(false)}
                                          selectedLog={selectedLog}/>

                </div>
            </div>
        </>
    )
}