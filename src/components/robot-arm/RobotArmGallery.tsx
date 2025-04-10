
import { Images } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const RobotArmGallery = () => {
  const galleryImages = [
    {
      src: "/lovable-uploads/833ab8c3-1109-4160-9975-984c336d6563.png",
      alt: "SALAH Robot Arm",
      title: "The Robot Arm",
      description: '"SALAH" - Named after my father who believed in me and invested in this project'
    },
    {
      src: "/lovable-uploads/e15743c8-6243-42ee-8e4e-51003d35a896.png",
      alt: "Computer Vision Face Detection",
      title: "Computer Vision System",
      description: "The vision system uses OpenCV and Haarcascade classifiers to detect and track objects in real-time."
    }
  ];

  return (
    <section className="py-16 px-6 bg-gray-50 dark:bg-portfolio-blue-dark/70">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center dark:text-white">
          <span className="flex items-center justify-center gap-2">
            <Images className="text-portfolio-orange-medium" />
            Project Gallery
          </span>
        </h2>
        
        {/* Desktop View - Simple image display */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {galleryImages.map((image, index) => (
            <div key={index}>
              <h3 className="text-2xl font-semibold mb-6 text-center dark:text-white">{image.title}</h3>
              <AspectRatio ratio={16 / 9}>
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-contain rounded-lg shadow-md"
                />
              </AspectRatio>
              <div className="mt-4">
                <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile View with Carousel */}
        <div className="md:hidden mb-16">
          <Carousel className="w-full">
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <h3 className="text-2xl font-semibold mb-6 text-center dark:text-white">{image.title}</h3>
                    <AspectRatio ratio={16 / 9}>
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="w-full h-full object-contain rounded-lg shadow-md"
                      />
                    </AspectRatio>
                    <div className="mt-4">
                      <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-4">
              <CarouselPrevious className="relative static transform-none translate-y-0 left-0" />
              <CarouselNext className="relative static transform-none translate-y-0 right-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default RobotArmGallery;
