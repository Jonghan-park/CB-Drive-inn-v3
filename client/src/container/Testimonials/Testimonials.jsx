import React from "react";
import "./Testimonials.css";
import reviews from "../../data/testimonials";
import Rating from "../Rating/Rating";

const Testimonials = () => {
  return (
    <div className="whole-tesimonial-container">
      <div className="title">
        <h1>Testimonials</h1>
        <div className="underline" />
      </div>

      <div className="testimonials">
        {reviews.map((testimonial) => {
          const { id, name, stars, review, img } = testimonial;
          return (
            <div className="testimonial" key={id}>
              <img src={img} alt={name} />
              <h3 className="name">{name}</h3>
              <Rating className="stars" stars={stars} />
              {/* <div className="stars">{stars}</div> */}
              <p>{review}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
