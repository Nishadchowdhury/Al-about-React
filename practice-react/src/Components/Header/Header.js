import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <nav>
            <img src={logo} alt="" />
            <div>
                <a >Shop</a>
                <a >Orders</a>
                <a >Inventory</a>
                <a >About</a>
            </div>
        </nav>
    );
};

export default Header;