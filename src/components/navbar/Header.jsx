import React from 'react';
import {NavLink} from "react-router-dom";


const Header = () => {
    return (
        <div className='auth-enter'>
               <NavLink to='/auth'> войти </NavLink>
        </div>
    );
};

export default Header;