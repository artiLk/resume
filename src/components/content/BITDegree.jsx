import React from "react";
import BIT from "../../assets/images/ransis-arcade.png";
import Dissertation from "../../assets/dissertation.pdf";

const BITDegree = () => {
  return (
    <div className="container-fluid dark_theme">
      <div className="container p-0">
        <div className="row m-0">
          <div className="col p-0" style={{ fontSize: 14 }}>
            <p className="sec_heading">BIT DEGREE FINAL YEAR PROJECT</p>
            <p className="title">
              Ecommerce Web Application (RESTful) - React js, Node js, Express
              and MongoDB (MERN Stack)
            </p>
            <p className="sub_title">Rans's Arcade - Rajagiriya</p>
            <p>
              The project that is being developing by using React js, node js,
              mongoDB, bootstrap, chart.js, data tables, node mailer etc. I have
              "A" grade for this projet.
            </p>
            <img
              src={BIT}
              alt="e-com web application"
              width="300"
              style={{ margin: "25px 0px" }}
            />
            <span className="demo_link">
              Result :{" "}
              <span style={{ color: "rgb(255, 255, 255)", fontWeight: 300 }}>
                "A" Grade
              </span>
            </span>
            <span className="demo_link">
              Demo :{" "}
              <a href="https://ransisarcade.herokuapp.com/" target="_blank">
                https://ransisarcade.herokuapp.com/
              </a>
            </span>
            {/* <span className="demo_link">
              Source Code :{" "}
              <a
                href="https://gitlab.com/chamaraMadhu/ransisarcade-mern"
                target="_blank"
              >
                https://gitlab.com/chamaraMadhu/ransisarcade-mern
              </a>
            </span> */}
            <span className="demo_link">
              Download :{" "}
              <a href={Dissertation} target="_blank">
                Dissertation
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BITDegree;
