import React from "react";
import "./disease.css";
const Disease = (props) => {

  
  return (
    <div className="container">
      <div className="disease-container">
        <div className="disease">
          <div className="row">
            <div className="col-lg-6">
              <div className="content-disease">
                <h3 className="heading-disease">{props.title}</h3>
                <p className="para-about">
                  {props.description}
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <img src={props.img} className="img-disease" alt="error" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disease;
