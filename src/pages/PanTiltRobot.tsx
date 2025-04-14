import { ArrowLeftIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const PanTiltRobot = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-900 to-blue-900 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center">
            <img 
              src="/lovable-uploads/025885b2-7c7b-453f-a374-1214fc8015fb.png" 
              alt="Pan-Tilt Robot" 
              className="w-32 h-32 object-contain mb-6 bg-white/10 p-4 rounded-xl"
            />
            <h1 className="text-4xl font-bold text-white mb-4">Pan-Tilt-Head Robot</h1>
            <p className="text-xl text-teal-100 max-w-3xl">
              A camera system with pan-tilt mechanism for object and face detection and tracking using computer vision.
            </p>
            <div className="flex gap-4 mt-8">
              <Button asChild variant="secondary">
                <Link to="/" className="flex items-center gap-2">
                  <ArrowLeftIcon size={16} />
                  Back to Home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Project Overview</h2>
            <p className="text-lg mb-8">
              The Pan-Tilt-Head Robot is a computer vision project that combines hardware and software to create a system capable of detecting and tracking objects and faces. The robot uses a camera mounted on a pan-tilt mechanism, allowing it to move horizontally and vertically to follow detected targets.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Hardware Components</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Arduino Uno microcontroller</li>
                    <li>2 servo motors (pan and tilt)</li>
                    <li>USB webcam</li>
                    <li>3D printed mounting brackets</li>
                    <li>Power supply unit</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Software Technologies</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Python for computer vision processing</li>
                    <li>OpenCV for image processing and object detection</li>
                    <li>Haar Cascade classifiers for face detection</li>
                    <li>Arduino programming for servo control</li>
                    <li>Serial communication between Python and Arduino</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-xl mb-4">Face Detection</h3>
                    <p>
                      Utilizes Haar Cascade classifiers to detect human faces in the camera feed with high accuracy.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-xl mb-4">Object Tracking</h3>
                    <p>
                      Follows detected objects by calculating their position and adjusting the servo motors accordingly.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-xl mb-4">Real-time Processing</h3>
                    <p>
                      Processes video feed in real-time to provide smooth tracking and responsive movement.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Technical Implementation</h2>
              <p className="text-lg mb-6">
                The system works by capturing video from the webcam and processing it using OpenCV. When a face or object is detected, the system calculates its position relative to the center of the frame. This positional data is then sent to the Arduino via serial communication, which adjusts the servo motors to center the target in the frame.
              </p>
              
              <div className="bg-slate-100 dark:bg-slate-700 p-6 rounded-lg mb-8">
                <h3 className="font-semibold text-xl mb-4">Detection Algorithm</h3>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Capture frame from webcam</li>
                  <li>Convert to grayscale for processing</li>
                  <li>Apply Haar Cascade classifier to detect faces</li>
                  <li>Calculate position of detected face relative to center</li>
                  <li>Determine required servo movement</li>
                  <li>Send movement commands to Arduino</li>
                  <li>Adjust servo positions</li>
                </ol>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Challenges Overcome</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Minimizing latency between detection and movement</li>
                      <li>Implementing smooth servo movement to avoid jerky tracking</li>
                      <li>Optimizing detection algorithms for real-time performance</li>
                      <li>Calibrating the system for accurate tracking</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Future Enhancements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Implementing deep learning models for improved detection</li>
                      <li>Adding object recognition capabilities</li>
                      <li>Developing a mobile app for remote control</li>
                      <li>Integrating with home automation systems</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Skills Demonstrated</h2>
              <div className="flex flex-wrap gap-3">
                <Badge className="text-sm py-1 px-3">Computer Vision</Badge>
                <Badge className="text-sm py-1 px-3">Python</Badge>
                <Badge className="text-sm py-1 px-3">OpenCV</Badge>
                <Badge className="text-sm py-1 px-3">Arduino</Badge>
                <Badge className="text-sm py-1 px-3">Embedded Systems</Badge>
                <Badge className="text-sm py-1 px-3">Serial Communication</Badge>
                <Badge className="text-sm py-1 px-3">3D Design</Badge>
                <Badge className="text-sm py-1 px-3">Real-time Processing</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PanTiltRobot;
