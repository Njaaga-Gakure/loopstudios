import logo from "../assets/logo.svg";
import { navLinks } from "../utils";
import { socialLinks } from "../utils";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer--center content--center">
        <div className="footer__nav">
          <img src={logo} alt="loopstudios" className="footer__logo" />
          <ul className="footer__links">
            {navLinks.map(({ id, link }) => {
              return (
                <li key={id} className="footer__link">
                  <a href="#">{link}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="footer__social">
          <ul className="social__links">
            {socialLinks.map(({ id, icon }) => {
              return (
                <li key={id} className="social__link">
                  <a href="#">{icon}</a>
                </li>
              );
            })}
          </ul>
          <p className="footer__fine-print text_small">
            &copy; {new Date().getFullYear()} Loopstudios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
