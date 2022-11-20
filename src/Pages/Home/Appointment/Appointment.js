import React from "react";
import bgImg from "../../../assets/images/appointment.png";
import img from "../../../assets/images/doctor.png";
import PrimaryButton from "../../../components/Button/PrimaryButton";

const Appointment = () => {
  return (
    <div
      className="hero mt-20 p-0"
      style={{
        background: `url(${bgImg})`,
      }}
    >
      <div className=" lg:w-4/5 p-0 px-4 mx-auto hero-content flex-col lg:flex-row">
        <img
          src={img}
          className="-mt-28  hidden lg:block rounded-lg shadow-2xl w-fullh-[400px] lg:h-[550px]"
          alt=""
        />
        <div className="lg:ml-32">
          <div>
            <h3 className="font-bold text-primary text-xl">Appointment</h3>
          </div>
          <h2 className="text-4xl text-white  font-bold ">
            Make an appointment Today
          </h2>
          <p className="text-white py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <PrimaryButton>Appionment</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
