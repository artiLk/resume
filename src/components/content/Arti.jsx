import React from "react";
import HomeImage from "../../assets/images/arti.png";
import ModalImage from "../../assets/images/modal.jpg";
import loginImage from "../../assets/images/login.png";

const Arti = () => {
  return (
    <div className="container-fluid yellow_theme">
      <div className="container p-0">
        <div className="row m-0">
          <div className="col p-0" style={{ fontSize: 14 }}>
            <p className="sec_heading">My Own Product - Arti.lk</p>
            <a
              href="https://www.arti.lk/"
              target="_black"
              className="text-dark"
            >
              https://www.arti.lk/
            </a>
            <p className="title">
              Arti.lk is the art and craft focusing web application made by me
              for advertising paintings(සිතුවම්), drawings(චිත්‍ර),
              sculptures(මූර්ති), carvings(කැටයම්), etc. Advertise & market your
              Sri Lankan Artistic Creations via Arti.lk at free of charge. This
              is a great platform to all Artists to expand their businesses to
              the next level by capturing the un-touched customers beyond the
              boundaries. Benefits are;
            </p>

            <ul className="mt-3">
              <li>100% free</li>
              <li>You can post unlimited ads</li>
              <li>24/7 access</li>
              <li>Expand your business</li>
              <li>Capturing the un-touched customers</li>
              <li>Utmost priority for data security</li>
            </ul>

            <p>
              Arti.lk was developed by using React js, node js, Express,
              mongoDB, mongoose, bootstrap, some components of material UI, node
              mailer etc. Further, react app deployed by netlify and node app
              deployed in digital ocean.
            </p>
            <div className="arti-images-div">
              <img src={HomeImage} alt="arti home" className="arti-images" />
              <img src={ModalImage} alt="arti modal" className="arti-images" />
              <img src={loginImage} alt="arti login" className="arti-images" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arti;
