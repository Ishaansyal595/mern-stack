import React from "react";

const Rating = ({ value, text }) => {
  return (
    <div className="rating">
      {[...Array(5)].map((_, i) => (
        <span key={i}>
          <i
            className={
              value >= i + 1
                ? "fa-solid fa-star"
                : value >= i + 0.5
                ? "fa-solid fa-star-half-stroke"
                : "fa-regular fa-star"
            }
          ></i>
        </span>
      ))}
      <span>{text}</span>
    </div>
  );
};

export default Rating;
