import React from "react";
import "./Loading.css";

const LoadingComponent = () => {
  return (
    <>
      <div className="wrapper">
        <div className="spinner">
          <div className="bounce1"></div>
          <div className="bounce2"></div>
          <div className="bounce3"></div>
        </div><br/>
      </div>
      <h1>Loading Phones...</h1>
    </>
  );
};

export default LoadingComponent;
