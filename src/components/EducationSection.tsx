
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  period: string;
  gpa?: string;
}

const EducationSection: React.FC = () => {
  const education: EducationItem[] = [
    {
      institution: "Nepal College of Information Technology",
      degree: "Bachelor",
      field: "Software Engineering",
      period: "2022(Fall) - present"
    },
    {
      institution: "Prasadi Academy",
      degree: "High School",
      field: "Science",
      period: "2020 - 2022",
      gpa: "3.62"
    }
  ];
  
  return (
    <section id="education" className="bg-secondary py-20">
      <div className="container">
        <h2 className="section-title text-center">Education</h2>
        <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto mb-16">
          My academic journey in software engineering and computer science.
        </p>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 sm:left-1/2 transform sm:translate-x-[-50%] w-0.5 h-full bg-primary/20"></div>
            
            {/* Education items */}
            <div className="space-y-12">
              {education.map((item, index) => (
                <div key={index} className={`relative flex ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-0 sm:left-1/2 transform sm:translate-x-[-50%] w-4 h-4 rounded-full bg-primary border-4 border-white"></div>
                  
                  {/* Content */}
                  <div className={`ml-6 sm:ml-0 ${index % 2 === 0 ? 'sm:mr-10 sm:text-right sm:self-end' : 'sm:ml-10'} sm:w-[calc(50%-2rem)]`}>
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold">{item.institution}</h3>
                        <p className="text-sm text-muted-foreground">
                          {item.degree} in {item.field}
                        </p>
                        <div className="flex items-center justify-between sm:flex-row-reverse mt-2">
                          <span className="text-sm bg-white px-3 py-1 rounded-full">{item.period}</span>
                          {item.gpa && (
                            <span className="text-sm">GPA: {item.gpa}</span>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
