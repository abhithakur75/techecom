import { FaFirefoxBrowser, FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className="social">
        <div className="address">
          <a href="#">
            <FaLocationDot /> Noida, Uttar Pradesh
          </a>
          <a href="mailto:abhisheksingh07535@gmail.com">
            <FaMailBulk /> abhisheksingh07535@gmail.com
          </a>
        </div>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/abhishek-singh75/">
            <FaLinkedin /> LinkedIn - Abhishek Singh
          </a>
          <a href="https://github.com/abhithakur75">
            <FaGithub /> Github - Abhishek Singh
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
