import { Link } from "react-router-dom";
import { actionTypes } from "../utils/action";

export function Navbar(props) {
    const { dispatch } = props;

    return (
        <header className="topbar">
            <Link className="brand" to="/">
                <span className="brand-mark">M</span>
                <span>Metricly</span>
            </Link>
            <nav className="navigation" aria-label="Main navigation">
                <Link to="/">Overview</Link>
                <Link to="/add-product">Add product</Link>
            </nav>
            <button className="logout-button" type="button" onClick={() => dispatch({ type: actionTypes.LOGGED_OUT })}>Log out</button>
        </header>
    );
}
