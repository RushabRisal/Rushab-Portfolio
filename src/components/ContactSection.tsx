
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="container">
        <h2 className="section-title text-center">Contact Me</h2>
        <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto mb-16">
          Feel free to reach out for opportunities, collaborations, or just to say hello!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-4">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">rushabofficial@gmail.com</p>
              <Button variant="link" asChild className="mt-2">
                <a href="mailto:rushabofficial@gmail.com">Send Email</a>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-4">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-muted-foreground">+977 9860721460</p>
              <Button variant="link" asChild className="mt-2">
                <a href="tel:+9779860721460">Call Me</a>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground">Khumaltar, Satdobato</p>
              <p className="text-muted-foreground">Lalitpur, Nepal</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-6">Connect With Me</h3>
          <div className="flex justify-center space-x-6">
            <Button size="lg" variant="outline" className="rounded-full" asChild>
              <a href="https://github.com/RushabRisal" target="_blank" rel="noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full" asChild>
              <a href="https://www.linkedin.com/in/rushabofficials/" target="_blank" rel="noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
