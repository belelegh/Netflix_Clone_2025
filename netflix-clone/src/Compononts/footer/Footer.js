import React from "react";
import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
const Footer = () => {
  return (
    <div className="footer-outer-container">
      <div className="footer-inner-container">
        <div className="footer-iccons">
          <FacebookIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
        <div className="footer-data">
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Investir Relations</li>
              <li>Legal Notice</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <lii>Corporate Information</lii>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>Privacy</li>
              <lii>Contact Us</lii>
            </ul>
          </div>
        </div>
        <div className="service-code">
          <p>Service Code</p>
        </div>
        <div className="copy-write">&copy; 1997-2025 Netflix, Inc</div>
      </div>
    </div>
  );
};

export default Footer;
