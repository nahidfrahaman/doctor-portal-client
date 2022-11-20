import React from "react";
import bgImg from '../../../assets/images/appointment.png';

const Contactus = () => {
   
  return (
    <div className="hero min-h-max mt-12"
    style={{ 
        backgroundImage: `url(${bgImg})` 
      }}>
    <div className="w-full lg:w-1/2 p-8">
        <div>
        <h3 className="font-bold text-primary text-2xl text-center">Contact us</h3>
        <p className="text-3xl lg:text-4xl text-center text-white">Stay connected with us</p>
        </div>
      
    <div className=" ">
        <div className="flex flex-col">
          <div className="form-control mt-8 ">
           <input type="text" placeholder="email" className="input input-bordered w-3/4  h-12 mx-auto" />
          </div>
          <div className="form-control">
            
            <input type="text" placeholder="Subjects" className="input input-bordered w-3/4 mt-5 h-12 mx-auto" />
          </div>
          <div className=" w-3/4 mx-auto mt-6">
          <textarea className="w-full textarea textarea-bordered h-24" placeholder="Text area"></textarea>
          </div>
          <div className="form-control mt-6 w-3/4 mx-auto">
            <button className="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Contactus;
