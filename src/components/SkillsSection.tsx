
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => {
  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300">
      <CardContent className="p-6 ">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span 
              key={index}
              className="bg-secondary text-black py-1 px-4 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "C/C++", "JavaScript"]
    },
    {
      title: "Tools and Technologies",
      skills: ["Git", "GitHub", "VSCode", "AWS Cloud Fundamentals"]
    },
    {
      title: "Frameworks and Libraries",
      skills: ["React", "Streamlit", "Anaconda", "spaCy", "Scikit-learn", "NLTK"]
    },
    {
      title: "Soft Skills",
      skills: ["Communication", "Problem Solving", "Teamwork", "Leadership"]
    }
  ];
  
  return (
    <section id="skills" className="bg-white py-20">
      <div className="container">
        <h2 className="section-title text-center">Skills & Expertise</h2>
        <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto mb-16">
          Here's an overview of my technical and soft skills.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory 
              key={index}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
        
        <Separator className="my-16" />
        
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Certifications</h3>
          <div className="max-w-2xl mx-auto">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-lg font-semibold">Pandas Fundamentals</h4>
                    <p className="text-sm text-muted-foreground">Kaggle</p>
                    <a 
                      href="https://www.kaggle.com/learn/certification/rushabrisal/pandas" 
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-primary underline mt-1 inline-block"
                    >
                      View Certificate
                    </a>
                  </div>
                  <span className="text-sm">Dec 2024</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
