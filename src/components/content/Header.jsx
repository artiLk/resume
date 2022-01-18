import React from "react";
import Pic from "../../assets/images/pic.jpg";
import QR from "../../assets/images/qrcode.png";

const Header = () => {
  return (
    <div className="container-fluid bgDark text-white">
      <div className="container about-me-sec">
        <div className="row">
          <div className="col">
            <img src={Pic} alt="profile picture" className="profile-pic" />
            <p className="name">Chamara Madhushanka</p>
            <p className="designation">
              Software Engineer / Full-Stack Developer
            </p>
            <p className="designation">
              Founder of{" "}
              <a
                href="https://www.arti.lk/?page=1"
                target="_blank"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Arti.lk
              </a>
            </p>
            <p className="qual-under-name">
              Bachelor Of Information Technology (BIT) 2nd Class (UCSC), BSc.
              Accounting (Sp) 2nd Class (USJP), Dip in IT - BSC(UK), Certificate
              in IT - BSC(UK), Dip in Banking and Finance (IBSL), Certificate in
              Banking and Finance (IBSL), CAB-II (ICASL), aat passed finalist
              (aatSL)
            </p>
            <p className="text-center font-weight-light mb-0">
              06th of Nov 1993
            </p>
            <p className="text-center font-weight-light mb-0">933110443V</p>
            <p className="text-center font-weight-light mb-5">Single</p>

            <div className="contact-div">
              <i className="far fa-envelope"></i>
              <p>nlc.madhushanka@gmail.com</p>
            </div>
            <div className="contact-div">
              <i className="fas fa-map-marker-alt"></i>
              <p>No.77/A, Buthgamuwa Road,</p>
              <p>Kalapaluwawa, Rajagiriya,</p>
              <p>Colombo, Sri Lanka.</p>
            </div>
            <div className="contact-div">
              <i className="fas fa-phone fa-rotate-90"></i>
              <p>(+94) 710 193 314</p>
              <p>(+94) 112 792 120</p>
            </div>
            <div className="contact-div">
              <i className="fab fa-linkedin-in"></i>
              <a href="https://www.linkedin.com/in/chamara-madhushanka-62982ab2/">
                https://www.linkedin.com/in/chamara-madhushanka-62982ab2/
              </a>
            </div>

            <img src={QR} alt="qr" className="qr-code" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
