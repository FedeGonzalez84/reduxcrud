import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <nav className="navbar  navbar-dark bg-primary justify-content-between d-flex">
                <h1>
                    <Link to={'/'} className="text-light">CRUD - React, REST API & Axios</Link>    
                </h1>

                <Link to={'/productos/nuevo'} className="btn btn-danger nuevo-post">Agregar Producto</Link>
            </nav>
        );
    }
}

export default Header;