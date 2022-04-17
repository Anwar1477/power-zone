import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
            <nav className='color: red'>
                <Link to='/'>Home</Link>
                <Link to='/services'>Services</Link>
                <Link to='/about'>About</Link>
                <Link to='/blogs'>Blogs</Link>
                <Link to='/login'>Login</Link>

            </nav>
    );
};

export default Header;