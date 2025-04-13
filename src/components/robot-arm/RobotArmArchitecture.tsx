
import { Card, CardContent } from "@/components/ui/card";
import { Activity, Code, Cpu } from "lucide-react";

const RobotArmArchitecture = () => {
  return (
    <section className="py-16 px-6 bg-gray-50 dark:bg-portfolio-blue-dark/50">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center dark:text-white">System Architecture</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="shadow-lg border-t-4 border-portfolio-blue-light">
            <CardContent className="pt-6">
              <div className="mb-4 flex justify-center">
                <div className="bg-portfolio-blue-light/20 p-4 rounded-full">
                  <Cpu size={32} className="text-portfolio-blue-light" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-4 dark:text-white">Hardware System</h3>
              <p className="text-gray-600 dark:text-gray-300">
                The physical components including Arduino-controlled stepper motors, 3D printed mechanical parts, and CNC shield for precision movement.
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg border-t-4 border-portfolio-orange-medium">
            <CardContent className="pt-6">
              <div className="mb-4 flex justify-center">
                <div className="bg-portfolio-orange-medium/20 p-4 rounded-full">
                  <Activity size={32} className="text-portfolio-orange-medium" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-4 dark:text-white">Vision System</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Computer vision algorithms using OpenCV and Haarcascade classifiers to detect objects and determine optimal grasping positions.
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg border-t-4 border-portfolio-blue-medium">
            <CardContent className="pt-6">
              <div className="mb-4 flex justify-center">
                <div className="bg-portfolio-blue-medium/20 p-4 rounded-full">
                  <Code size={32} className="text-portfolio-blue-medium" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-4 dark:text-white">Control Logic</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Efficient motion control algorithms developed in C programming to interpret commands and coordinate the stepper motors.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default RobotArmArchitecture;
