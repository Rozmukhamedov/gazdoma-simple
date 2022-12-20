import "./style.css";
import React from "react";
import Image1 from "../../assets/images/mobilies/image1.svg";
import Image2 from "../../assets/images/mobilies/image2.svg";
import Image3 from "../../assets/images/mobilies/image3.svg";
import Image4 from "../../assets/images/mobilies/image4.svg";
import Image5 from "../../assets/images/mobilies/image5.svg";
import Image6 from "../../assets/images/mobilies/image6.svg";

function Mobiles() {
  return (
    <div className="mobiles">
      <h1>Схема платформы</h1>
      <div className="mobiles__flex">
        <div className="mobiles__flex-1">
          <img src={Image1} alt="" />
          <img src={Image2} alt="" />
          <img src={Image3} alt="" />
        </div>
        <div className="mobiles__flex-2">
          <img src={Image4} alt="" />
          <img src={Image5} alt="" />
          <img src={Image6} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Mobiles;
