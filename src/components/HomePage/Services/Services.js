import React, { useEffect, useState } from 'react';
import './Services.css'
import Service from '../../HomePage/Service/Service';

const Services = () => {

    const [services, setServices]=useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res =>res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div className='container '>
            <h1 className='service-title'>Our Services</h1>
            <hr className='line mx-auto'/>
         <div className="services-container">
         {
                services.map(service => <Service
                key={service.id}
                service={service}
                >

                </Service>)
            }
         </div>
        </div>
    );
};

export default Services;

// const Services = () => {
//     let [services, setServices] = useService();
//     // let { name, id, price, comment, picture } = services;
//     return (
//         <div>
//             <h2>Services: {services.length}</h2>
//             {
//                 services.map(service =><Service 
//                     key={service.id}
//                 >

//                 </Service>)
//             }
//             {/* <h1 style={{textAlign:'center',color:'tomato'}}>Our Services</h1>
//             <hr className='w-50 mx-auto' />
//             <div className='reviews-container-area'>
//                 {
//                     services.map(review => <div key={review.id} className='per-review'>
//                         <div className='review-container'>
//                             <div>
//                                 <img src={review.picture} alt="" />
//                             </div>
//                             <div>
//                                 <h2>{review.name}</h2>
//                                 <p style={{fontSize:'20px',color:'black', fontWeight:'bold'}}> <span className='comment'>{review.comment}</span> </p>
//                                 <p className='ratting'><span style={{fontSize:'20px',color:'black', fontWeight:'bold'}}>price:-</span> {review.price} </p> 
//                             </div>
//                         </div>
//                     </div>)
//                 }
//             </div> */}
//         </div>
//     );
// };

// export default Services;

