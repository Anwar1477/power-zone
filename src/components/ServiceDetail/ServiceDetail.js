import { getAuth } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import app from "../../FireBase/Firebase.init";
import Services from "../HomePage/Services/Services";
import './ServiceDetail.css'

const auth = getAuth(app);

const ServiceDetail = () => {
  const [user] = useAuthState(auth); 
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
