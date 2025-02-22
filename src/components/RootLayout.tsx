import {Navigation} from "./Navigation.tsx";
import {Outlet} from "react-router";

export function RootLayout() {
    return(
        <>
            <div className="flex h-screen">
                <Navigation></Navigation>
                <div className="flex-1 p-6 bg-white overflow-hidden">
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    );
}