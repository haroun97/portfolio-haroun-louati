
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface RobotArmSkillsProps {
  skills: string[];
}

const RobotArmSkills = ({ skills }: RobotArmSkillsProps) => {
  return (
    <section className="py-16 px-6 bg-gray-50 dark:bg-portfolio-blue-dark/50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center dark:text-white">Skills Applied</h2>
        
        <Card className="shadow-lg">
          <CardContent className="pt-6">
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="text-base py-2 px-4 bg-portfolio-blue-lightest/30 text-portfolio-blue-dark dark:text-portfolio-blue-lightest dark:bg-portfolio-blue-medium/30">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <div className="mt-12">
          <Card className="shadow-lg">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4 dark:text-white">Usage for People with Reduced Mobility</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The system is designed to be easily operated through simple controls, making it 
                accessible for individuals with limited mobility. Voice commands and simplified 
                controller inputs allow users to direct the arm to perform everyday tasks.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                The robot arm can be controlled via multiple interfaces, including game controllers 
                like the PlayStation controller shown in the image, as well as through autonomous 
                operation guided by the computer vision system.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default RobotArmSkills;
