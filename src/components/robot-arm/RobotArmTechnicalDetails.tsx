
import { Database, Hammer } from "lucide-react";

const RobotArmTechnicalDetails = () => {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center dark:text-white">Technical Implementation</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2 dark:text-white">
              <Hammer className="text-portfolio-orange-medium" /> Hardware Design
            </h3>
            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <span className="bg-portfolio-blue-light/20 p-1 rounded-full mt-1">
                  <div className="w-2 h-2 bg-portfolio-blue-light rounded-full"></div>
                </span>
                <span><strong>Stepper Motors:</strong> Precise movement control for the robot arm joints</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-portfolio-blue-light/20 p-1 rounded-full mt-1">
                  <div className="w-2 h-2 bg-portfolio-blue-light rounded-full"></div>
                </span>
                <span><strong>Arduino Uno:</strong> Central controller for the system's operations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-portfolio-blue-light/20 p-1 rounded-full mt-1">
                  <div className="w-2 h-2 bg-portfolio-blue-light rounded-full"></div>
                </span>
                <span><strong>CNC Shield:</strong> A4988 drivers for controlling multiple stepper motors</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-portfolio-blue-light/20 p-1 rounded-full mt-1">
                  <div className="w-2 h-2 bg-portfolio-blue-light rounded-full"></div>
                </span>
                <span><strong>3D Printing:</strong> Custom parts for the mechanical structure</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2 dark:text-white">
              <Database className="text-portfolio-orange-medium" /> Software Implementation
            </h3>
            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <span className="bg-portfolio-blue-light/20 p-1 rounded-full mt-1">
                  <div className="w-2 h-2 bg-portfolio-blue-light rounded-full"></div>
                </span>
                <span><strong>Python:</strong> Main programming language for computer vision processing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-portfolio-blue-light/20 p-1 rounded-full mt-1">
                  <div className="w-2 h-2 bg-portfolio-blue-light rounded-full"></div>
                </span>
                <span><strong>OpenCV:</strong> Computer vision library for object detection and tracking</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-portfolio-blue-light/20 p-1 rounded-full mt-1">
                  <div className="w-2 h-2 bg-portfolio-blue-light rounded-full"></div>
                </span>
                <span><strong>Haarcascade Classifier:</strong> For object detection algorithms</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-portfolio-blue-light/20 p-1 rounded-full mt-1">
                  <div className="w-2 h-2 bg-portfolio-blue-light rounded-full"></div>
                </span>
                <span><strong>C Programming:</strong> For efficient motion control algorithms</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RobotArmTechnicalDetails;
