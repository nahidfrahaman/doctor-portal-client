import React from "react";
import { DayPicker } from "react-day-picker";
import img from "../../../assets/images/chair.png";

const AppointmentBanner = ({selectedDate,setSelectedDate}) => {
  
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse justify-evenly">
        <img src={img} className="rounded-lg shadow-2xl lg:w-1/2 " alt="" />
        <div className="mr">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
          ></DayPicker>
          
        </div>
      </div>
      <div>
  
  </div>
    </div>
  );
};

export default AppointmentBanner;
