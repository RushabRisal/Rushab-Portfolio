
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Rushab Risal</h3>
            <p className="text-sm text-white/80">
              Software Engineering student passionate about web development and data science.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm text-white/80 hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#projects" className="text-sm text-white/80 hover:text-white transition-colors">Projects</a>
              </li>
              <li>
                <a href="#skills" className="text-sm text-white/80 hover:text-white transition-colors">Skills</a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-white/80 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-sm text-white/80 mb-2">Khumaltar, Satdobato</p>
            <p className="text-sm text-white/80 mb-2">rushabofficial@gmail.com</p>
            <p className="text-sm text-white/80">+977 9860721460</p>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-6 text-center text-sm text-white/60">
          <p>&copy; {currentYear} Rushab Risal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
