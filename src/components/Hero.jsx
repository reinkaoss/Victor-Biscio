import React from 'react';
import { Mail, FileText } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden hero-gradient">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-3xl">
          <div className="text-[#00ff9d] text-lg mb-5 font-mono">Hi, I'm</div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-100 mb-6">
            Victor Biscio
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-400 mb-8">
            Digital Operations Manager
          </h2>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            Experienced executive in digital operations with a track record of working in agile digital environments and in the events and technology services sectors. language proficiency in Portuguese and English. <br />
            Other skills involve proficiency with Adobe Premiere Pro, basic Python reading and writing abilities, and programming knowledge in HTML5, CSS3, Javascript, JQuery, Bootstrap, Node.js, Handelbars, ReactJS, and JavaScript. Strong hardware troubleshooting professional experience. Currently learning and working with Digital integration technologies, including Zapier, Make.com (Integromat), and Google App Scripts, Process automation with Python 3 (focused on automation libraries such as Selenium, Playwright, and Webdriver). 
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="primary-btn">
              <FileText className="mr-2 h-5 w-5" />
              View Projects
            </a>
            <a href="#contact" className="secondary-btn">
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-bl from-[#00ff9d]/20 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;