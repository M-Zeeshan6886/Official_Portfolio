import React, { useState } from "react";
import {adeelBuxImg,jugaHealthImg,signatureImg,adminImg,bostomImg} from '../../../assets';


function BuiltItemContainer() {
  const [image, setImage] = useState(adeelBuxImg);

  const changeImage = (fileName) => {
    switch (fileName) {
      case "adeel-bux.png":
        setImage(adeelBuxImg);
        break;
      case "elite.png":
        setImage(jugaHealthImg);
        break;
      case "Signature1.png":
        setImage(signatureImg);
        break;
      case "adminpanel.png":
        setImage( adminImg);
        break;
      case "bostom.png":
        setImage(bostomImg);
        break;
      default:
        setImage(adeelBuxImg);
        break;
    }
  };

  return (
    <div className="builtItem-container">
      <div className="builtItem-container-content">
        <div className="builtItem-container-content-left">
          <button onClick={() => changeImage("adeel-bux.png")}>
            01 ADEEL BUX
          </button>
          <button onClick={() => changeImage("elite.png")}>
            02 ELITE OFFICIAL SITE
          </button>
          <button onClick={() => changeImage("Signature1.png")}>
            03 SIGNATURE WEBSITE
          </button>
          <button onClick={() => changeImage("adminpanel.png")}>
            04 ADMIN PANEL
          </button>
          <button onClick={() => changeImage("bostom.png")}>05 BOSTOM</button>
        </div>
        <div className="builtItem-container-content-right">
          <img src={image} alt="Project preview" className="image" />
        </div>
      </div>
    </div>
  );
}

export default BuiltItemContainer;
