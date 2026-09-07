
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
             I’m a Software Engineer and .NET Developer with a passion for building reliable, scalable, and maintainable software. My journey in tech started with a curiosity about how digital solutions can solve real-world problems, which gradually grew into a deeper interest in backend development, system architecture, and building software that is designed to evolve.
            </p>
            <p className="text-lg leading-relaxed">
              I primarily work with C#, .NET 8, ASP.NET Core, Clean Architecture, CQRS, Entity Framework Core, and SQL Server. I enjoy designing clean APIs, structuring backend systems, and turning complex requirements into practical technical solutions. I also have experience building full-stack applications with React and working with technologies such as SignalR, Serilog, Cloudinary, allowing me to understand and work across the entire development lifecycle.
            </p>
            <p className="text-lg leading-relaxed">
            Beyond development, I value collaboration, continuous learning, and community involvement. I’ve also explored data science and machine learning, including co-authoring two published research papers, which has strengthened my analytical and problem-solving skills. I enjoy learning new technologies, sharing knowledge, and continuously finding better ways to build software.
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
