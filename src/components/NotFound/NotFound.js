import React from 'react';
import './NotFound.css'
import notFound from './../../Images/NotFound/404.jpg'

const NotFound = () => {
    return (
        <div className='container'>
            <img className='w-100' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;