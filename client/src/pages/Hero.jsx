import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <div className="my-6 mb-20">
        <h1 className="primary-heading">Transform Your Imagination <br /> Into Stunning Art</h1>
        <p className="primary-para">
          Unleash the power of AI to create breathtaking images from your ideas.
          Whether you’re an artist, designer, or visionary, our app turns your
          imagination into reality in just a few clicks. Let your creativity
          soar like never before!
        </p>
        <Link to={'/create-post'}><button className="btn-primary">Start Creating Now</button></Link>
      </div>
    </div>
  );
};

export default Hero;
