import React from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <header>
            <h1>SneakyDrops</h1>
            <nav>
                <ul>
                    <li>Sneakers</li>
                    <li>Cordones</li>
                    <li>Limpieza</li>
                </ul>
            </nav>
            <CartWidget/>
        </header>
    );
};

export default NavBar;
