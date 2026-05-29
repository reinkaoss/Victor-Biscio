import React, { useState } from 'react';
import { Send, Mail, MapPin, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Portfolio enquiry from ${formData.name}`);
    const body = encodeURIComponent(`${formData.message}\n\n— ${formData.name} (${formData.email})`);
    window.location.href = `mailto:victorbiscio1@hotmail.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 8000);
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Get In Touch</h2>
          <p>Have a project in mind or want to collaborate? Feel free to reach out!</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            
            <div className="contact-details">
              <div className="contact-item">
                <Mail className="contact-icon" />
                <div>
                  <h4>Email</h4>
                  <a href="mailto:victorbiscio1@hotmail.com">victorbiscio1@hotmail.com</a>
                </div>
              </div>
              
              <div className="contact-item">
                <MapPin className="contact-icon" />
                <div>
                  <h4>Location</h4>
                  <p>London, United Kingdom</p>
                </div>
              </div>
              
              <div className="contact-item">
                <Linkedin className="contact-icon" />
                <div>
                  <h4>LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/victor-biscio-160621167/" target="_blank" rel="noopener noreferrer">
                    View Profile
                  </a>
                </div>
              </div>
            </div>
            
            <div className="availability">
              <h4>Available for:</h4>
              <ul>
                <li>Digital Operations Roles</li>
                <li>Process Automation Projects</li>
                <li>Technology Consulting</li>
                <li>Front-End Development Roles</li>
              </ul>
            </div>
          </div>
          
          <div className="contact-form">
            <h3>Send Me a Message</h3>
            
            {submitted ? (
              <div className="success-message">
                <p>
                  Your email client should have opened with the message ready &mdash; just hit send.
                  If it didn't, email me directly at victorbiscio1@hotmail.com.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-btn">
                  <span className="btn-content">
                    <Send size={18} />
                    Send Message
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-0 w-1/3 h-1/2 bg-accent/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/3 bg-accent/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Contact;