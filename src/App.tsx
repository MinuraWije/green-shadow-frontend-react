import './App.css'
import{RouterProvider, createBrowserRouter} from "react-router";
import {RootLayout} from "./components/RootLayout.tsx";
import {Dashboard} from "./pages/Dashboard.tsx";
import {VehiclePage} from "./pages/Vehicle.tsx";
import {EquipmentPage} from "./pages/Equipment.tsx";
import {LogPage} from "./pages/Log.tsx";
import {StaffPage} from "./pages/Staff.tsx";
import {FieldPage} from "./pages/Field.tsx";
import {CropPage} from "./pages/Crop.tsx";

function App() {
    const routes = createBrowserRouter([
        {
            path: '',
            element : <RootLayout/>,
            children : [
                { path : '', element : <Dashboard/>},
                { path : '/vehicle', element : <VehiclePage/>},
                { path : '/equipment', element : <EquipmentPage/>},
                { path : '/log', element : <LogPage/>},
                { path : '/staff', element : <StaffPage/>},
                { path : '/field', element : <FieldPage/>},
                { path : '/crop', element : <CropPage/>},
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
