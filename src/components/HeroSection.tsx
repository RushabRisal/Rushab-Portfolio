
import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-white">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="h-full w-full bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Text content */}
          <div className="md:col-span-8 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight">
              Hello, I'm <br />
              <span className="text-primary">Rushab Risal</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Software Engineering student with a passion for web development, data science, 
              and open-source collaboration.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <a href="#projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
            <div className="flex items-center space-x-4 pt-4">
              <a 
                href="https://github.com/RushabRisal" 
                target="_blank" 
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/Rushab-Risal" 
                target="_blank" 
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a 
                href="mailto:rushabofficial@gmail.com" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
          
          {/* Image */}
          <div className="md:col-span-4 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-8 border-secondary shadow-lg">
              <img 
                src="/lovable-uploads/rushab.jpg" 
                alt="Rushab Risal" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Scroll Down</span>
        <div className="w-5 h-10 border-2 border-muted-foreground rounded-full flex items-center justify-center">
          <div className="w-1 h-2 bg-muted-foreground rounded-full animate-[bounce_1.5s_infinite]"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
