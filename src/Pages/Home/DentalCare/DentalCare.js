import React from "react";
import treatment from '../../../assets/images/treatment.png';

const DentalCare = () => {
  return (
    <div className="hero mt-8">
      <div className="lg:w-4/5 mx-auto hero-content flex-col lg:flex-row">
        <img
          src={treatment}
          className=" rounded-lg shadow-2xl w-fullh-[400px] lg:h-[550px]" alt=""
        />
        <div className='lg:ml-32'>
          <h1 className="text-4xl font-bold text-accent">Exceptional Dental Care, on Your Terms</h1>
          <p className="py-6">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
          </p>
          <button className="btn text-white bg-gradient-to-r from-primary to-secondary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default DentalCare;
