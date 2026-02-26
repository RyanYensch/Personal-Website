import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="app">
            {/* Add the navbar and stuff */}

            <main className="container main">
                <Outlet />
            </main>
        </div>
    );
}