import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export default function Layout() {
    return (
        <div className="app">
            {/* Add the navbar and stuff */}
            <Navbar />

            <main className="page">
                <Outlet />
            </main>
        </div>
    );
}