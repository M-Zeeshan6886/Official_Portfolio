import React, { useState } from "react";
import {
  adeelBuxImg,
  signatureImg,
  adminImg,
  bostomImg,
  RugPortfolio,
  AIPortfolio,
  eliteImg,
  caddiePortfolio,
  periortfolio,
} from "../../../assets";

function BuiltItemContainer() {
  const [image, setImage] = useState(adeelBuxImg);

  const changeImage = (fileName) => {
    switch (fileName) {
      case "adeel-bux.png":
        setImage(adeelBuxImg);
        break;
      case "RugbazaarPortfolio":
        setImage(RugPortfolio);
        break;
      case "caddiePortfolio":
        setImage(caddiePortfolio);
        break;
      case "AIPortfolio":
        setImage(AIPortfolio);
        break;
      case "periPortfolio":
        setImage(periortfolio);
        break;
      case "elite.png":
        setImage(eliteImg);
        break;
      case "Signature1.png":
        setImage(signatureImg);
        break;
      case "adminpanel.png":
        setImage(adminImg);
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
          <button onClick={() => changeImage("RugbazaarPortfolio")}>
            02 RUG BAZAAR
          </button>
          <button onClick={() => changeImage("caddiePortfolio")}>
            03 SAND CADDIE
          </button>
          <button onClick={() => changeImage("AIPortfolio")}>
            04 AI CHATBOT
          </button>
          <button onClick={() => changeImage("periPortfolio")}>
            05 PERI STUDIOS SITE
          </button>
          <button onClick={() => changeImage("Signature1.png")}>
            06 SIGNATURE WEBSITE
          </button>
          <button onClick={() => changeImage("adminpanel.png")}>
            07 ADMIN PANEL
          </button>
          <button onClick={() => changeImage("bostom.png")}>08 BOSTOM</button>
          <button onClick={() => changeImage("elite.png")}>
            09 ELITE OFFICIAL SITE
          </button>
        </div>
        <div className="builtItem-container-content-right">
          <img src={image} alt="Project preview" className="image" />
        </div>
      </div>
    </div>
  );
}

export default BuiltItemContainer;
