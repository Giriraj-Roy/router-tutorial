import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='container'>
            <div className='header'>
                React Router Tutorial
            </div>
            <div className='menu'>
                <ul >
                    <li><Link to='/'>Home Page</Link></li>
                    <li><Link to='/profile'>Profile Page</Link></li>
                    <li><Link to='/about'>About Page</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                </ul>
            </div>
        </div>
        
    )
}

export default Header
