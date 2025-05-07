
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ExperienceItem {
  title: string;
  organization: string;
  location: string;
  period?: string;
  description: string[];
  link?: string;
}

const ExperienceCard: React.FC<ExperienceItem & { index: number }> = ({
  title,
  organization,
  location,
  period,
  description,
  link,
  index
}) => {
  return (
    <Card className="overflow-hidden relative hover:shadow-lg transition-all duration-300"
      style={{ animationDelay: `${index * 0.1}s` }}>
      {/* Side accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
      
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
            <div className="text-sm text-muted-foreground">
              <a 
                href={link} 
                target="_blank" 
                rel="noreferrer"
                className="font-medium hover:underline"
              >
                {organization}
              </a>
              {location && <span> • {location}</span>}
            </div>
          </div>
          {period && (
            <span className="text-sm bg-secondary py-1 px-3 rounded-full">
              {period}
            </span>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {description.map((item, idx) => (
            <li key={idx} className="text-sm flex">
              <span className="mr-2">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

const ExperienceSection: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Technical Member",
      organization: "Hult Prize at NCIT",
      location: "NCIT, Balkumari",
      description: [
        "Handled the technical issues occurred throughout the event.",
        "Build a website for the organisation"
      ],
      link: "https://hultprize.ncit.edu.np"
    },
    {
      title: "Volunteer",
      organization: "Nepal Open Source Klub (NOSK)",
      location: "NCIT, Balkumari",
      description: [
        "Built the website for Software Freedom Day organized by NOSK by coordinating with Technical Team.",
        "Collaborated with all the teams and assist them in their needs"
      ],
      link: "https://sfd.nosk.org.np/"
    }
  ];
  
  return (
    <section id="experience" className="bg-secondary py-20">
      <div className="container">
        <h2 className="section-title text-center">Experience & Volunteering</h2>
        <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto mb-16">
          I've had the opportunity to work with various organizations, 
          contributing my technical skills and collaborating with amazing teams.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <ExperienceCard 
              key={index}
              {...experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
