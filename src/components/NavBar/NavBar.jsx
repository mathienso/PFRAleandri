import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <header>
            <Link to={"/"}>
                <h1>SneakyDrops</h1>
            </Link>
            <nav>
                <ul>
                    <li>
                        <NavLink className="navLink" to={"/sneakers"}>Sneakers</NavLink>
                    </li>
                    <li>
                        <NavLink className="navLink" to={"/cordones"}>Cordones</NavLink>
                    </li>
                    <li>
                        <NavLink className="navLink" to={"/limpieza"}>Limpieza</NavLink>
                    </li>
                </ul>
            </nav>
            <CartWidget/>
        </header>
    );
};

export default NavBar;
