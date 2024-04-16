import { NavLink } from "react-router-dom";
import { useState } from 'react'

function Header() {

    return (
        <header>
            <ul className="header-ul">
                <li><NavLink to={"/"} >Home</NavLink></li>
                <li><NavLink to={"list-de-projets"}>Projets</NavLink></li>
            </ul>
        </header>
    )
}
export default Header;