import React from "react";
import quote from "../../../assets/icons/quote.svg";
import Reviews from "./Reviews";

const Testimonals = () => {
  return (
    <div className="mt-12">
      <div className="flex justify-between">
        <div>
          <h3 className="font-bold text-primary text-xl">Testimonal</h3>
          <h2 className="text-4xl ">Make an appointment Today</h2>
        </div>
        <div>
          <img src={quote} alt="" className="w-24 lg:w-48" />
        </div>
      </div>
      <div>
       <Reviews></Reviews>
      </div>
    </div>
  );
};

export default Testimonals;
