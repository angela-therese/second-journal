import React from "react"
import { BrowserRouter, Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
       <BrowserRouter>
       <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Daily Journal</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/entries">Entries</Link>
            </li>
        </ul>
        </BrowserRouter>
    )
}
