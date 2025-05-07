
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Github } from 'lucide-react';

const ProjectCard: React.FC<{
  title: string;
  description: string;
  details: string[];
  githubLink: string;
  demoLink?: string;
  index: number;
}> = ({ title, description, details, githubLink, demoLink, index }) => {
  return (
    <Card className="h-full overflow-hidden group hover:shadow-lg transition-all duration-300" 
      style={{ animationDelay: `${index * 0.1}s` }}>
      <CardHeader className="pb-4">
        <CardTitle className="text-xl md:text-2xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="space-y-2">
          {details.map((detail, idx) => (
            <li key={idx} className="flex items-start">
              <ArrowRight className="h-5 w-5 mr-2 shrink-0 text-primary" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 pt-4">
          <Button size="sm" variant="outline" asChild>
            <a href={githubLink} target="_blank" rel="noreferrer" className="inline-flex items-center">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
          {demoLink && (
            <Button size="sm" asChild>
              <a href={demoLink} target="_blank" rel="noreferrer" className="inline-flex items-center">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "Vegetable Market Analysis and Price Prediction",
      description: "A data science project for visualizing and predicting vegetable prices",
      details: [
        "Developed an interactive streamlit app where we can visualise the prize and predict future prize of the commodities",
        "During development, grasp prior knowledge of data preprocessing, analysis, extraction of features, build a model and deploy the model in streamlit."
      ],
      githubLink: "https://github.com/RushabRisal/DSML-project",
      demoLink: "https://github.com/RushabRisal/DSML-project"
    },
    {
      title: "Hult Prize at NCIT",
      description: "Technical support for organization's website",
      details: [
        "Handled the technical issues occurred throughout the event.",
        "Built a website for the organisation"
      ],
      githubLink: "https://hultprize.ncit.edu.np",
      demoLink: "https://hultprize.ncit.edu.np"
    },
    {
      title: "Nepal Open Source Klub (NOSK)",
      description: "Website development for Software Freedom Day",
      details: [
        "Built the website for Software Freedom Day organized by NOSK by coordinating with Technical Team.",
        "Collaborated with all the teams and assist them in their needs"
      ],
      githubLink: "https://sfd.nosk.org.np/",
      demoLink: "https://sfd.nosk.org.np/"
    }
  ];
  
  return (
    <section id="projects" className="bg-white py-20">
      <div className="container">
        <h2 className="section-title text-center">Projects</h2>
        <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto mb-16">
          Here are some of the projects I've worked on, showcasing my skills in web development, 
          data science, and collaborative work.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              details={project.details}
              githubLink={project.githubLink}
              demoLink={project.demoLink}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
