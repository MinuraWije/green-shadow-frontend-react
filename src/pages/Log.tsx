/*import {useSelector} from "react-redux";
import {useState} from "react";
import {Log} from "../models/Log.ts";
import AddLogModal from "../components/AddLog.tsx";
import UpdateLogModal from "../components/UpdateLog.tsx";

export function LogPage() {
    const [selectedLog, setSelectedLog] = useState<Log | null>(null);

    const [isAddModalOpen, setAddModalOpen] = useState<boolean>(false);
    const [isUpdateModalOpen, setUpdateModalOpen] = useState<boolean>(false);

    /!*const [searchText, setSearchText] = useState("");

    function handleSearch(){
        console.log(searchText);
    }*!/

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
                            {/!*<button className="btn btn-warning me-md-2" type="button" data-bs-toggle="modal"
                                    data-bs-target="#updateEquipmentModal" id="updateEquipmentbtn"
                                    onClick={openUpdateModal}>Update Equipment
                            </button>*!/}
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
}*/


import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import { Log } from "../models/Log.ts";
import AddLogModal from "../components/AddLog.tsx";
import UpdateLogModal from "../components/UpdateLog.tsx";
import {Appdispatch} from "../store/Store.ts";
import {getAllLog} from "../reducers/LogSlice.ts";

export function LogPage() {
    const [selectedLog, setSelectedLog] = useState<Log | null>(null);
    const [isAddModalOpen, setAddModalOpen] = useState<boolean>(false);
    const [isUpdateModalOpen, setUpdateModalOpen] = useState<boolean>(false);

    const dispatch = useDispatch<Appdispatch>();

    function openAddLogModal() {
        setAddModalOpen(true);
    }

    function openUpdateLogModal(log: Log) {
        setSelectedLog(log);
        setUpdateModalOpen(true);
    }

    const [searchText, setSearchText] = useState("");

    function handleSearch(){
        console.log(searchText);
    }

    useEffect(() => {
        dispatch(getAllLog())
    }, [dispatch]);

    const logs = useSelector((state) => state.log.logs);

    return (
        <div className="flex h-screen">

            {/*<div className="w-64 bg-green-700 h-screen"></div>*/}

            {/* Main Content (Full Height) */}
            <div className="flex-1 flex flex-col h-screen overflow-hidden">
                <div className="p-6 bg-white shadow-md flex-1 overflow-y-auto">
                    <h5 className="text-2xl font-bold mb-4 text-gray-800">Logs</h5>

                    {/* Actions Row */}
                    <div className="mb-6 flex justify-between items-center">
                        <button className="button-add-modal" onClick={openAddLogModal}>+ New Log</button>
                        <button className="button-update-modal" onClick={openUpdateLogModal}>Update Log</button>
                        <form className="flex space-x-2">
                            <input type="search" placeholder="Search Log" className="search-bar"/>
                            <button type="button" className="search-button">Search</button>
                        </form>
                    </div>

                    {/* Table Wrapper with Scrollable Content */}
                    <div className="overflow-auto flex-1">
                        <table className="table-design">
                            <thead className="thead-design">
                            <tr>
                                <th className="column-header">Code</th>
                                <th className="column-header">Details</th>
                                <th className="column-header">Date</th>
                                <th className="column-header">Observed Img</th>
                            </tr>
                            </thead>
                            {logs && (
                                <tbody>
                                {logs.map((log: Log) => {
                                    return (
                                        <tr key={log.code}
                                            className="hover:bg-gray-100 cursor-pointer border-b"
                                            onClick={() => openUpdateLogModal(log)}>
                                            <td className="table-data">{log.code}</td>
                                            <td className="table-data">{log.details}</td>
                                            <td className="table-data">{log.date}</td>
                                            <td className="table-data">
                                                {log.img ? (
                                                    <img
                                                        src={`data:image/jpeg;base64,${log.img}`}
                                                        alt="Observed"
                                                        className="w-36 h-36 object-cover rounded-lg"
                                                    />
                                                ) : (
                                                    "No Image"
                                                )}
                                            </td>
                                        </tr>
                                    );
                                }
                                //     (
                                //     <tr key={log.code}
                                //         className="hover:bg-gray-100 cursor-pointer border-b"
                                //         onClick={() => openUpdateLogModal(log)}>
                                //         <td className="table-data">{log.code}</td>
                                //         <td className="table-data">{log.details}</td>
                                //         <td className="table-data">{log.date}</td>
                                //         <td className="table-data">{log.img ? (
                                //             <img
                                //                 src={'data:image/jpeg;base64,${log.img}'}
                                //                 alt="Observed"
                                //                 className="w-36 h-36 object-cover rounded-lg"
                                //             />
                                //         ) : (
                                //             "No Image"
                                //         )}</td>
                                //     </tr>
                                // )
                                    )}
                                </tbody>
                            )}
                        </table>
                    </div>
                </div>

                {/* Modals */}
                <AddLogModal isOpen={isAddModalOpen} onClose={() => setAddModalOpen(false)} />
                <UpdateLogModal isOpen={isUpdateModalOpen} onClose={() => setUpdateModalOpen(false)}
                                selectedLog={selectedLog}/>
            </div>
        </div>
    );
}
