import React from "react";

const Review = ({ data }) => {
  const { authorName, img, discirption,location } = data;
  

  return (
    <div className="card  shadow-xl">
      <div className="card-body">
        <p className="text-black">{discirption}</p>
      </div>
      <div className="avatar flex p-4">
        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={img} alt="" />
        </div>
        <div className="ml-4">
        <p>{authorName}</p>
        <p>from: {location}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
