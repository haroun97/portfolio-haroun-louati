
import { Card, CardContent } from "@/components/ui/card";

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      "HTML/CSS",
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "Redux",
      "Next.js",
      "Tailwind CSS",
      "SCSS",
    ]
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express",
      "Python",
      "Django",
      "GraphQL",
      "RESTful APIs",
      "SQL",
      "NoSQL",
    ]
  },
  {
    title: "Tools & Technologies",
    skills: [
      "Git/GitHub",
      "Docker",
      "CI/CD",
      "AWS",
      "Firebase",
      "Testing (Jest, RTL)",
      "Webpack",
      "Figma",
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-white dark:bg-portfolio-blue-dark">
      <div className="container mx-auto">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
      </div>
    </section>
  );
};

export default Skills;
