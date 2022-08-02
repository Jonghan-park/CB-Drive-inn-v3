import React from "react";
import "./Rating.css";

const Rating = ({ stars }) => {
  return (
    <div className="rating">
      <span>
        <i
          className={
            stars >= 1
              ? "fas fa-star"
              : stars >= 0.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            stars >= 2
              ? "fas fa-star"
              : stars >= 1.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            stars >= 3
              ? "fas fa-star"
              : stars >= 2.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            stars >= 4
              ? "fas fa-star"
              : stars >= 3.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            stars >= 5
              ? "fas fa-star"
              : stars >= 4.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
    </div>
  );
};

export default Rating;
