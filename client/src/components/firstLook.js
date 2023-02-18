import React from "react";
import {  Link } from "react-router-dom";
// import Register from './register'

const FirstLook = () => {




  return (
    
      <div>
        <div className="wrapper">
          <div className="logo">
            {/* <img src='https://images.pexels.com/photos/69432/pexels-photo-69432.jpeg?auto=compress&cs=tinysrgb&w=600'/> */}
          </div>
          <button className="redirect"></button>
        </div>
        <div className="slogan">
          <h1>
            WELCOME
            <br />
            <span>BLOGS</span>{" "}
          </h1>
          <Link to="/register"><button className="button1">Login</button></Link>
        </div>
        <div className="container">
          <div className="shape"></div>
        </div>
      </div>
    
    
  );
};

export default FirstLook;
