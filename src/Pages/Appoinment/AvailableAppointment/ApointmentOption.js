import React from "react";

const ApointmentOption = ({ data, setTreatment ,}) => {
  const { name, slots } = data;
 
 
  return (
    <div className="card  bg-base-100 shadow-xl mt-5">
      <div className="card-body">
        <h2 className="font-bold text-lg text-center text-secondary">{name}</h2>
        <p className="text-center">{slots.length >0 ? slots[0]:'try to another day'}</p>
        <p className="text-center">{slots.length} {slots.length >0 ? 'spaces': 'space'} avialbale now</p>
        <div className="card-actions justify-center">
         
          <label onClick={()=>setTreatment(data)}
          htmlFor="booking-modal" className="btn btn-primary">Book click Now</label>
        </div>
      </div>
    </div>
  );
};

export default ApointmentOption;
