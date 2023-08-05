import React from 'react';
import './footer.css';
import Social from '../home/Social';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="social-icons">
          {/* Add your social media icons here */}
          {/* For example, you can use Font Awesome icons */}

          <a href="#" className="icon"><i className="fab fa-linkedin"></i></a>
          <a href="#" className="icon"><i className="fab fa-github"></i></a>
          <a href="#" className="icon"><i className="fab fa-instagram"></i></a>
          <a href="#" className="icon"><i className="fab fa-twitter"></i></a>
          {/* Add more social media icons as needed */}
        </div>
          </div>
    </footer>
  );
};

export default Footer;
