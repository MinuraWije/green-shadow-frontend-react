import './App.css'
import{RouterProvider, createBrowserRouter} from "react-router";
import {RootLayout} from "./components/RootLayout.tsx";
import {Dashboard} from "./pages/Dashboard.tsx";
import {Vehicle} from "./pages/Vehicle.tsx";
import React from "react";
import {UpdateCustomer} from "./pages/UpdateCustomer.tsx";
import {DeleteCustomer} from "./pages/DeleteCustomer.tsx";
import Equipment from "./pages/Equipment.tsx";

function App() {
    const routes = createBrowserRouter([
        {
            path: '',
            element : <RootLayout/>,
            children : [
                { path : '', element : <Dashboard/>},
                //{ path : '/vehicle', element : <Vehicle/>},
                { path : '/equipment', element : <Equipment/>},
                { path : '/delete', element : <DeleteCustomer/>},
                { path : '/update', element : <UpdateCustomer/>}
            ]
        },
    ])

  return (
    <>
        <RouterProvider router={routes}/>
    </>
  )
}

export default App
