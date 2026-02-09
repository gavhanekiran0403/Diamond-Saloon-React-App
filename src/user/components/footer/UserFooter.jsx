import React from "react";
import "./UserFooter.css";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const UserFooter = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT SECTION */}
        <div className="footer-left">
          <p>💬 Chat With Sales</p>
          <p>📞 +91 88888 88888</p>
          <p>✉️ support@diamondsaloon.com</p>
        </div>

        {/* SERVICES */}
        <div className="footer-column">
          <h4>Services</h4>
          <ul>
            <li>Hair Styling</li>
            <li>Beard Grooming</li>
            <li>Facial & Cleanup</li>
            <li>Massage</li>
            <li>Bridal Package</li>
            <li>Premium Spa</li>
          </ul>
        </div>

        {/* COMPANY */}
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Customer Stories</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* RESOURCES */}
        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li>Blog</li>
            <li>Gallery</li>
            <li>Offers</li>
            <li>FAQs</li>
            <li>Reviews</li>
          </ul>
        </div>

        {/* SOCIAL ICONS */}
        <div className="footer-social">
          <FaFacebookF />
          <FaLinkedinIn />
          <FaTwitter />
          <FaInstagram />
          <FaYoutube />
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Diamond Saloon. All Rights Reserved.
      </div>
    </footer>
  );
};

export default UserFooter;