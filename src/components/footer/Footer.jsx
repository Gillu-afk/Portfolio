import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer section">
      <div className="footer__container container">
        <h1 className="footer__title"> Portfolio</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#work" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#services" className="footer__link">
              Services
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="tel:+917530076393"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
          >
            <i className="bx bx-phone"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/rahul-g-afk/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://github.com/Gillu-afk"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>
        <span className="footer__copy">
          &#169; Sheik Shah Shuaib. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
