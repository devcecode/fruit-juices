import React from "react";

import { Link } from "react-router-dom";
import "./greet.css";
// import banner from "./images/banner.jpg";

const Greet = () => {
  return (
    <div className="greet">
      <div className="greet__container">
        <div className="back">
          <div className="back__container"></div>
        </div>
        <div className="banner">
          <img
            src="https://res.cloudinary.com/grohealth/image/upload/v1583836679/DCUK/Content/iStock-821583034.jpg"
            alt=""
            className="banner__img"
          />
          <div className="content__banner">
            <h2 className="title">Best Fruit Juices</h2>
            <p className="description">
              Parte de la dulzura de la vida está en alimentarse, de forma
              saludable aún mejor.
            </p>
            <Link
              to="/explore"
              onClick={() => {
                window.location.pathname = "/explore";
              }}
            >
              Ingresar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Greet;
