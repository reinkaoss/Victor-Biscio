import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Victor Biscio</h3>
            <p>Digital Operations Executive specializing in process automation and technology integration.</p>
            <div className="social-links">
              <a 
                href="https://www.linkedin.com/in/victor-biscio-160621167/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github />
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Contact</h3>
            <ul>
              <li>London, United Kingdom</li>
              <li>victorbiscio1@hotmail.com</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© {currentYear} Victor Biscio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;