
import { Code, Cpu } from "lucide-react";

interface RobotArmOverviewProps {
  hardwareTechnologies: string[];
  softwareTechnologies: string[];
}

const RobotArmOverview = ({ hardwareTechnologies, softwareTechnologies }: RobotArmOverviewProps) => {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center dark:text-white">Project Overview</h2>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-lg dark:text-gray-300">
            Development of an Autonomous Robot Arm for people with reduced mobility, leveraging 
            machine learning and computer vision technologies. The project aims to provide 
            assistance to those who need help manipulating objects in their environment.
          </p>
          
          <div className="my-12 flex flex-col md:flex-row gap-8">
            <div className="flex-1 bg-blue-50 dark:bg-portfolio-blue-medium/30 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 dark:text-white">
                <Cpu className="text-portfolio-orange-medium" /> 
                Hardware Components
              </h3>
              <ul className="space-y-2 dark:text-gray-300">
                {hardwareTechnologies.map((tech, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-portfolio-orange-medium">•</span> {tech}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex-1 bg-blue-50 dark:bg-portfolio-blue-medium/30 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 dark:text-white">
                <Code className="text-portfolio-orange-medium" /> 
                Software Technologies
              </h3>
              <ul className="space-y-2 dark:text-gray-300">
                {softwareTechnologies.map((tech, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-portfolio-orange-medium">•</span> {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RobotArmOverview;
