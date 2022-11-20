import React from "react";

const Information = ({data}) => {
  const {name,img,discription,bgClass}= data

  return (
    <div className={`card lg:card-side bg-base-100 shadow-xl  text-white ${bgClass}`}>
      <figure className="px-10 pt-10">
        <img
          src={img}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-lg">{name}</h2>
        <p>{discription}</p>
        
      </div>
    </div>
  );
};

export default Information;
