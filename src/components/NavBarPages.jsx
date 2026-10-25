import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Navbar } from "./Navbar";


export function NavBarPages(props) {
    const { isAuthenticated, dispatch } = props;
    if (!isAuthenticated) return <Navigate to="/login" replace />;
    return (
        <div className="app-shell">
            <Navbar dispatch={dispatch} />
            <main className="app-content">
                <Outlet />
            </main>
        </div>
    );
}
