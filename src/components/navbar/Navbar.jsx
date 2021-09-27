import React from 'react';
import {NavLink} from "react-router-dom";
import n from './navbar.module.css'


const Navbar = () => {
    return (
        <div className={n.nav}>
            <NavLink to='/news' > News </NavLink>
            <NavLink to='/posts' > Profile </NavLink>
            <NavLink to='/'> Home </NavLink>

        </div>
    );
};

export default Navbar;