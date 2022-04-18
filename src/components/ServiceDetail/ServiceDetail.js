import React from "react";
import { useParams } from "react-router-dom";
import Services from "../HomePage/Services/Services";
import './ServiceDetail.css'

const ServiceDetail = () => {
  const { serviceId, name, comment, price } = useParams();
  return (
    <div className="container">
      <h1 className="details-title">Service Details</h1>
      <div className="card">
        <h2>Service Id:{serviceId}</h2>
        {/* <Services></Services> */}
        

        {/* <h5>{name}</h5>

        <p>{price}</p>

        <p>{comment}</p> */}
      </div>
    </div>
  );
};

export default ServiceDetail;
