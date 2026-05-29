import React from 'react';
import { Mail, FileText } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden hero-gradient">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-3xl animate-fade-up">
          <div className="text-accent text-lg mb-5 font-mono">Hi, I'm</div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Victor Biscio
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-600 dark:text-gray-400 mb-8">
            Digital Operations Manager
          </h2>
          <div className="text-gray-600 dark:text-gray-400 text-lg mb-10 leading-relaxed space-y-4">
            <p>
              Experienced digital operations executive with a track record in agile environments across the
              events and technology-services sectors. I work at the intersection of operations and engineering &mdash;
              turning manual workflows into reliable automation.
            </p>
            <p>
              I build process automations in Python (Selenium, Playwright, WebDriver) and connect systems with
              Zapier, Make.com, and Google Apps Script. Comfortable across the front-end stack (HTML5, CSS3,
              JavaScript, jQuery, Bootstrap, React, Node.js), with hands-on hardware-troubleshooting experience.
              Fluent in Portuguese and English.
            </p>
          </div>

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
        <div className="absolute inset-0 bg-gradient-to-bl from-accent/20 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;