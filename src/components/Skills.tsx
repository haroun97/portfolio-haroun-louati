
import { Card, CardContent } from "@/components/ui/card";

interface SkillCategory {
  title: string;
  skills: string[];
}

interface LanguageSkill {
  language: string;
  level: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: [
      "HTML/CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Electron",
      "Interactive Dashboards",
      "Data Visualization",
      "Tailwind CSS",
    ]
  },
  {
    title: "Backend & APIs",
    skills: [
      "Python",
      "Django",
      "Node.js",
      "C++",
      "RESTful APIs",
      "Stateless APIs",
      "IAM Security",
      "SQL",
    ]
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "AWS (EC2, S3, CloudFront)",
      "Azure DevOps Server",
      "CI/CD Pipelines",
      "Git/GitHub",
      "Docker",
      "Load Balancers",
    ]
  },
  {
    title: "Data & Machine Learning",
    skills: [
      "Machine Learning",
      "GIS (Geographic Information Systems)",
      "ETL Tools",
      "Data Processing",
      "Crop Boundary Detection",
      "Satellite Imagery Analysis",
    ]
  },
  {
    title: "Testing & Quality Assurance",
    skills: [
      "Pytest",
      "Software Testing",
      "Test Automation",
      "HP Quality Center",
      "Unit Testing",
      "Integration Testing",
    ]
  },
  {
    title: "Leadership & Management",
    skills: [
      "Team Leadership",
      "Project Management", 
      "Agile Scrum Methodologies",
      "Cross-functional Teams",
      "Technical Documentation",
      "Training & Mentoring",
    ]
  }
];

const languageSkills: LanguageSkill[] = [
  {
    language: "Arabic",
    level: "Native"
  },
  {
    language: "French",
    level: "Business Proficiency"
  },
  {
    language: "English",
    level: "Advanced"
  },
  {
    language: "German",
    level: "Basic to Intermediate"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-white dark:bg-portfolio-blue-dark">
      <div className="container mx-auto">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="overflow-hidden shadow-md">
              <div className="h-3 bg-gradient-to-r from-portfolio-blue-medium to-portfolio-orange-medium"></div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-portfolio-blue-dark dark:text-white">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex} 
                      className="bg-gray-100 dark:bg-portfolio-blue-medium/30 px-3 py-1 rounded-full text-sm text-portfolio-blue-dark dark:text-gray-200"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <h2 className="section-title">Language Skills</h2>
        
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-md">
            <div className="h-3 bg-gradient-to-r from-portfolio-orange-medium to-portfolio-blue-medium"></div>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {languageSkills.map((language, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-gray-50 dark:bg-portfolio-blue-medium/20 rounded-lg">
                    <span className="text-lg font-medium text-portfolio-blue-dark dark:text-white">
                      {language.language}
                    </span>
                    <span className="bg-portfolio-blue-medium text-white px-3 py-1 rounded-full text-sm font-medium">
                      {language.level}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
