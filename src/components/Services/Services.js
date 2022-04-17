import React from 'react';
import useService from '../../hook/hook';
import './Services.css'

const Services = () => {
    let [services, setServices] = useService();
    let { name, id, price, comment, picture } = services;
    return (
        <div>
            <h1 style={{textAlign:'center',color:'tomato'}}>Our Services</h1>
            <hr className='w-50 mx-auto' />
            <div className='reviews-container-area'>
                {
                    services.map(review => <div key={review.id} className='per-review'>
                        <div className='review-container'>
                            <div>
                                <img src={review.picture} alt="" />
                            </div>
                            <div>
                                <h2>{review.name}</h2>
                                <p style={{fontSize:'20px',color:'black', fontWeight:'bold'}}> <span className='comment'>{review.comment}</span> </p>
                                <p className='ratting'><span style={{fontSize:'20px',color:'black', fontWeight:'bold'}}>price:-</span> {review.price} </p> 
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Services;