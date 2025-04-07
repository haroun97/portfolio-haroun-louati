
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const RobotArm = () => {
  const hardwareTechnologies = ["Arduino Uno", "Stepper Motors", "CNC Shield A4988", "3D Printing"];
  const softwareTechnologies = ["Python", "OpenCV", "Visual Studio", "C Programming", "Haarcascade Classifier"];
  const skills = ["Embedded Systems", "Problem Solving", "Embedded Software", "Software Development", "Mechanical Design"];

  return (
    <main className="container mx-auto py-12 px-4">
      <div className="flex flex-col gap-8">
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Autonomous Robot Arm</h1>
          <p className="text-xl text-muted-foreground">
            Based on Machine Learning and Computer Vision
          </p>
        </div>
        
        {/* Main Image */}
        <div className="max-w-3xl mx-auto w-full">
          <AspectRatio ratio={4/3} className="bg-muted rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/833ab8c3-1109-4160-9975-984c336d6563.png"
              alt="SALAH Robot Arm"
              className="object-cover w-full h-full"
            />
          </AspectRatio>
          <div className="mt-2 text-center text-sm text-muted-foreground italic">
            "SALAH" - Named after my father who believed in me and invested in this project
          </div>
        </div>

        {/* Project Overview */}
        <Card className="max-w-4xl mx-auto">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <p className="text-lg mb-4">
              Development of an Autonomous Robot Arm for people with reduced mobility, leveraging 
              machine learning and computer vision technologies. The project aims to provide 
              assistance to those who need help manipulating objects in their environment.
            </p>
            
            <Separator className="my-6" />

            <div className="grid md:grid-cols-2 gap-8">
              {/* Hardware */}
              <div>
                <h3 className="text-xl font-medium mb-4 flex items-center">
                  <span className="text-blue-500 mr-2">🔵</span> Hardware Components
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  {hardwareTechnologies.map((tech, index) => (
                    <li key={index} className="text-gray-700 dark:text-gray-300">{tech}</li>
                  ))}
                </ul>
              </div>

              {/* Software */}
              <div>
                <h3 className="text-xl font-medium mb-4 flex items-center">
                  <span className="text-blue-500 mr-2">🔵</span> Software Technologies
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  {softwareTechnologies.map((tech, index) => (
                    <li key={index} className="text-gray-700 dark:text-gray-300">{tech}</li>
                  ))}
                </ul>
              </div>
            </div>

            <Separator className="my-6" />
            
            {/* Skills */}
            <div>
              <h3 className="text-xl font-medium mb-4">Skills Applied</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="bg-portfolio-blue-lightest/30 text-portfolio-blue-dark dark:text-portfolio-blue-lightest dark:bg-portfolio-blue-medium/30">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technical Details */}
        <Card className="max-w-4xl mx-auto">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Technical Implementation</h2>
            <p className="text-lg mb-6">
              The robot arm, named "SALAH", integrates computer vision to identify objects and 
              machine learning algorithms to determine optimal grasping positions and movements.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium mb-3">Computer Vision System</h3>
                <p>
                  Using OpenCV and Haarcascade classifiers, the system can detect and track objects 
                  in real-time. The vision system provides spatial coordinates to the arm's control system.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-3">Control System</h3>
                <p>
                  Arduino-based control logic interprets commands and coordinates the stepper motors
                  using A4988 drivers. C programming was used to develop efficient motion control algorithms.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* User Interface and Control */}
        <Card className="max-w-4xl mx-auto">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">User Interface and Control</h2>
            <p className="mb-4">
              The robot arm can be controlled via multiple interfaces, including game controllers 
              like the PlayStation controller shown in the image, as well as through autonomous 
              operation guided by the computer vision system.
            </p>
            
            <h3 className="text-xl font-medium mb-3">Usage for People with Reduced Mobility</h3>
            <p>
              The system is designed to be easily operated through simple controls, making it 
              accessible for individuals with limited mobility. Voice commands and simplified 
              controller inputs allow users to direct the arm to perform everyday tasks.
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default RobotArm;
