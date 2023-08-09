import React from "react";
import "./Socialsbar.scss";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { DiGithubFull } from "react-icons/di";
import { line } from "../../../assets";
// import {Link} from "react-dom"
 
const Socialsbar = () => {
  return (
    <>
      <div className="sidebar-container-left">
        <div className="sidebar-container-left-content">
          {/* <Link to="https://github.com/M-Zeeshan6886">
           
          </Link> */}
          <a href="https://github.com/M-Zeeshan6886 " target="_blank">
          <DiGithubFull className="git" />
          </a>
          <a href="https://www.linkedin.com/in/zeeshan-zafar-b61262200/" target="_blank">
          <FaLinkedin className="linkedin" />
          </a>
          <a href="https://twitter.com/home" target="_blank">
          <FaTwitter className="twiter" />
          </a>

          <img src={line} alt="Line" className="line" />
        </div>
      </div>
      <div className="sidebar-container-right">
        <div className="sidebar-container-right-content">
          <p>MZeeshan.com</p>
          <img src={line} alt="Line" className="line" />
        </div>
      </div>
    </>
  );
};

export default Socialsbar;
