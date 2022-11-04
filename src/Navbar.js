import React from "react"
import {NavLink } from "react-router-dom"

const Nav = () => {
    return (


    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
        <NavLink className="navbar-brand" href="#">Home</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
            <NavLink className="nav-link" to="/productos">Productos</NavLink>
            <NavLink className="nav-link" to="/productos/remeras">Cat2</NavLink>
            <NavLink className="nav-link" to="/carrito">Carrito</NavLink>
        </div>
        </div>
    </div>
    </nav>
        

    )
}

export default Nav


/*

        <nav className="nav">
            <NavLink className="nav__link link" to="/productos">productos</NavLink>
            <NavLink className="nav__link link" to="/productos/remeras">remeras</NavLink>
            <NavLink className="nav__link link" to="/productos/camperas">camperas</NavLink>
            <NavLink className="nav__link link" to="/carrito">carrito</NavLink>
        </nav>

*/