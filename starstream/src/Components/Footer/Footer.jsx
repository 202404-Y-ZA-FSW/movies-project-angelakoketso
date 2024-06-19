import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h3>About Us</h3>
            <ul>
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Our Team</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>Help Center</h3>
            <ul>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>Account</h3>
            <ul>
              <li><a href="#">Sign In</a></li>
              <li><a href="#">Create Account</a></li>
              <li><a href="#">Account Settings</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>Social Media</h3>
            <ul>
              <li><a href="#"><i className="fa fa-facebook"></i> Facebook</a></li>
              <li><a href="#"><i className="fa fa-twitter"></i> Twitter</a></li>
              <li><a href="#"><i className="fa fa-instagram"></i> Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="credits">
        <p>Developed by:</p>
        <ul>
          <li>
            <p>Angela King - 
              <a href="https://github.com/angelaking" target="_blank" rel="noopener noreferrer">GitHub</a> | 
              <a href="https://www.linkedin.com/in/angelaking" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </p>
          </li>
          <li>
            <p>Koketso Lepulana - 
              <a href="https://github.com/koketsol" target="_blank" rel="noopener noreferrer">GitHub</a> | 
              <a href="https://www.linkedin.com/in/koketsol" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </p>
          </li>
          <li>
          </li>
        </ul>
      </div>
      <div className="copyright">
        <p>&copy; 2024 StarStream. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;