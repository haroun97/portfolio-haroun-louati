
import { Images } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const RobotArmGallery = () => {
  return (
    <section className="py-16 px-6 bg-gray-50 dark:bg-portfolio-blue-dark/70">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center dark:text-white">
          <span className="flex items-center justify-center gap-2">
            <Images className="text-portfolio-orange-medium" />
            Project Gallery
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Robot Arm Solution */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center dark:text-white">The Robot Arm</h3>
            <Card className="overflow-hidden h-full">
              <AspectRatio ratio={16 / 9}>
                <img 
                  src="/lovable-uploads/833ab8c3-1109-4160-9975-984c336d6563.png" 
                  alt="SALAH Robot Arm" 
                  className="w-full h-full object-contain"
                />
              </AspectRatio>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  "SALAH" - Named after my father who believed in me and invested in this project
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Vision System */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center dark:text-white">Computer Vision System</h3>
            <Card className="overflow-hidden h-full">
              <AspectRatio ratio={16 / 9}>
                <img 
                  src="/lovable-uploads/e15743c8-6243-42ee-8e4e-51003d35a896.png"
                  alt="Computer Vision Face Detection"
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  The vision system uses OpenCV and Haarcascade classifiers to detect and track objects in real-time.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RobotArmGallery;
