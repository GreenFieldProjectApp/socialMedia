import React from "react";
import { Link } from "react-router-dom";
// import Register from './register'
const FirstLook = () => {
  return (
    <div>
      <div className="hero">
        <video
          autoPlay
          loop
          muted
          playsInline
          src="video/background1.mp4"
          className="back-video"
        ></video>
        <div className="content">
          <h1>WELCOME</h1>
          <Link to="/register">
            <button href="#">SIGN UP</button>
          </Link>
          <Link to="/login">
            <button href="#">SIGN IN</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default FirstLook;