import React from "react";
import Painting1 from "../../assets/images/three-elephants.jpg";
import Painting2 from "../../assets/images/black-girl.jpg";
import Painting3 from "../../assets/images/girl-with-pot.jpg";
import Painting4 from "../../assets/images/colorful-elephant.jpg";

const Paintings = () => {
  return (
    <div className="container-fluid light_theme">
      <div className="container p-0">
        <div className="row m-0">
          <div className="col p-0">
            <p className="sec_heading">HOBBIES</p>
          </div>
        </div>
        <div className="row m-0">
          <div className="col p-0">
            <p className="title" style={{ fontWeight: 400 }}>
              These are some acrylic painting on canvas done by me.
            </p>
            <img src={Painting1} alt="painting 1" className="paintings_div" />
            <img src={Painting2} alt="painting 1" className="paintings_div" />
            <img src={Painting3} alt="painting 1" className="paintings_div" />
            <img src={Painting4} alt="painting 1" className="paintings_div" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paintings;
