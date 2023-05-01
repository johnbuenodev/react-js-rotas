import { BrowserRouter, NavLink, Route } from "react-router-dom";

import About from "./views/About";
import Galeria from "./views/Galeria";
import Home from "./views/Home";
import Lista from "./views/Lista";
import './index.css';

function RoutesCustom() {
    return(
        <div className="nav-link-routes">
         <NavLink to="/" className="nav-link-item">App</NavLink>
         <NavLink to="/home" className="nav-link-item">Home</NavLink>
         <NavLink to="/galery" className="nav-link-item">Galeria</NavLink>
         <NavLink to="/about" className="nav-link-item">Sobre</NavLink>
         <NavLink to="/list" className="nav-link-item">Lista</NavLink>
        </div>
    )
}

export default RoutesCustom;