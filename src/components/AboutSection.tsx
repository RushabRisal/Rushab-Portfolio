
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Code, Users } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="bg-secondary py-20">
      <div className="container">
        <h2 className="section-title text-center mb-16">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              I'm a Software Engineering student at Nepal College of Information Technology with a passion for building 
              interactive web applications and exploring data science. My journey in tech started with curiosity about 
              how digital solutions can solve real-world problems.
            </p>
            <p className="text-lg leading-relaxed">
              During my studies and projects, I've developed strong technical skills in Python, JavaScript, and various 
              frameworks like React and Streamlit. I enjoy working on data-driven applications that provide valuable insights
              and enhance user experiences.
            </p>
            <p className="text-lg leading-relaxed">
              Beyond coding, I value collaboration and community involvement. My experience with organizations like 
              Nepal Open Source Klub has taught me the importance of teamwork and effective communication in 
              software development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4 text-primary">
                  <Code size={36} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Development</h3>
                <p className="text-muted-foreground">
                  Building interactive web applications and data-driven solutions using modern technologies.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white hover:shadow-lg transition-shadow sm:mt-12">
              <CardContent className="p-6">
                <div className="mb-4 text-primary">
                  <BookOpen size={36} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Learning</h3>
                <p className="text-muted-foreground">
                  Constantly expanding my knowledge in software engineering and data science.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white hover:shadow-lg transition-shadow col-span-1 sm:col-span-2">
              <CardContent className="p-6">
                <div className="mb-4 text-primary">
                  <Users size={36} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
                <p className="text-muted-foreground">
                  Working with teams to build solutions that make a difference, focusing on effective communication and shared success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
