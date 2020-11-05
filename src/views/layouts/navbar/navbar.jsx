import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import  './navbar.scss';
import logo from '../../../assets/images/logo/logo.svg';

const NavItem = ({ to, label }) => {

    return <li className="nav-item">
            <NavLink exact={true} className="nav-link" to={to}>
                    {label}
                </NavLink>
            </li>

};

class Navbar extends Component{

    render() {

        return (
            
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <NavLink exact className="navbar-brand" to="/">
                    <img src={logo} alt="Site Logo" title="site Logo" />
                </NavLink>
                <button className="navbar-toggler" data-target="#my-nav" data-toggle="collapse" aria-controls="my-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    <span className="navbar-toggler-icon"></span>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="my-nav" className="collapse navbar-collapse">
                    <ul className="navbar-nav mx-auto">
                        <NavItem to="/" label="Home" />
                        <NavItem to="/about" label="About Us" />
                        <NavItem to="/courses" label="Courses" />
                        <NavItem to="/contact" label="Contact Us" />
                        <NavItem to="/login" label="Login" />
                        <NavItem to="/register" label="Register" />
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;