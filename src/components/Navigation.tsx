/*import {Link} from "react-router";

export function Navigation() {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <Link to='/'>Dashboard</Link>
                        <Link to='/vehicle'>Vehicle</Link>
                        <Link to='/equipment'>Equipment</Link>
                        <Link to='/log'>Log</Link>
                        <Link to='/staff'>Staff</Link>
                        <Link to='/field'>Field</Link>
                        <Link to='/crop'>Crop</Link>
                    </ul>
                </nav>
            </header>
        </>
    )
}*/
import { Link } from "react-router-dom";
import "../assets/Navigation.css"

export function Navigation() {
    return (
        <div className="flex">
            <aside className="w-64 bg-green-700 text-green-200 font-medium">
                <nav className="px-4 py-12">
                    <ul className=" space-y-5">
                        <li>
                            <Link to="" className="links">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="vehicle" className="links">Vehicle</Link>
                        </li>
                        <li>
                            <Link to="equipment" className="links">Equipment</Link>
                        </li>
                        <li>
                            <Link to="log" className="links" relative="path">Log</Link>
                        </li>
                        <li>
                            <Link to="staff" className="links">Staff</Link>
                        </li>
                        <li>
                            <Link to="field" className="links">Field</Link>
                        </li>
                        <li>
                            <Link to="crop" className="links">Crop</Link>
                        </li>
                    </ul>
                </nav>
            </aside>

            {/*<main className="flex-1 p-10">
                <h1 className="text-3xl font-bold">Main Content Area</h1>
                <p>This is where your main content will go.</p>
            </main>*/}
        </div>
    );
}
