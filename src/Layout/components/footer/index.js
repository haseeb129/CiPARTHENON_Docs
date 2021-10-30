import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import {
  FaFacebook,
  FaTwitter,
  FaGooglePlus,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div className="footer-dv">
        <div className="footer-left">
          <div className="back-guide">
            <IoArrowBackCircleOutline
              style={{ marginRight: "5px", fontSize: "18px" }}
            />
            Return to ciPARTHENON.com
          </div>
        </div>
        <div className="footer-right">
          <div className="right-contnt">
            <a href="http://www.facebook.com/ClicDataBI">
              <FaFacebook className="facebook-icn" />
            </a>
            <a href="http://twitter.com/ClicData">
              <FaTwitter className="twitter-icn" />
            </a>
            <a href="http://www.google.com/+Clicdata">
              <FaGooglePlus className="google-icn" />
            </a>
            <a href="http://www.linkedin.com/company/clicdata">
              <FaLinkedin className="linkedin-icn" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
