import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    let { name, id, price, comment, picture } = service;
    const navigate = useNavigate();

    const handleBookingDetails =(id) =>{
        navigate(`/services/${id} ${name} ${price} ${comment}`)

    }
    return (
        <div className='card p-2'>
            <img src={picture} style={{width:'300px'}} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p>{comment}</p>
            <button onClick={()=>handleBookingDetails(id,name,price,comment)} className='bg-primary text-white'>Booking {name}</button>
        </div>
    );
};

export default Service;