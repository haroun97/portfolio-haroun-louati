import { ArrowLeftIcon, Lightbulb, Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const ChandelierProject = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-800 to-amber-600 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center">
            <Lightbulb size={64} className="text-amber-200 mb-6" />
            <h1 className="text-4xl font-bold text-white mb-4">Smart Recycled Chandelier</h1>
            <p className="text-xl text-amber-100 max-w-3xl">
              A chandelier created from recycled materials featuring smartphone-controlled RGB LED lighting via Bluetooth.
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

      {/* Project Details */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
              <p className="text-lg mb-6">
                The goal of this project was to create a chandelier using recycled materials while incorporating a smart control 
                system for RGB LED lights. The chandelier was crafted from wood, used lamps, motorcycle gear, and rope, 
                demonstrating how discarded items can be transformed into functional art.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <Card className="bg-slate-50 dark:bg-slate-900">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <span className="p-2 rounded-full bg-purple-100 dark:bg-purple-900">
                        <Recycle size={18} className="text-purple-600" />
                      </span>
                      Materials Used
                    </h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Reclaimed wood</li>
                      <li>Used lamps</li>
                      <li>Motorcycle gear parts</li>
                      <li>Repurposed rope</li>
                      <li>RGB LED light strips</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-slate-50 dark:bg-slate-900">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <span className="p-2 rounded-full bg-purple-100 dark:bg-purple-900">
                        <Smartphone size={18} className="text-purple-600" />
                      </span>
                      Control System
                    </h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Arduino Uno board</li>
                      <li>Bluetooth HC05 module</li>
                      <li>Color LED controller smartphone app</li>
                      <li>Custom wiring system</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Project Implementation</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Hardware Setup</h3>
                  <p className="mb-4">
                    The project integrated an Arduino Uno with a Bluetooth HC05 module to enable wireless 
                    communication with a smartphone. RGB LED strips were carefully mounted within the chandelier 
                    structure and connected to the Arduino's output pins through appropriate drivers to handle 
                    the current requirements.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Software Development</h3>
                  <p className="mb-4">
                    Arduino code was developed to receive commands via Bluetooth and control the RGB values 
                    of the LED strips. The system was programmed to understand the protocol used by the 
                    smartphone app, allowing for seamless color changes, brightness adjustment, and special 
                    lighting effects.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Mobile Integration</h3>
                  <p>
                    A Color LED Controller application was used on the smartphone to send commands to the chandelier. 
                    This allowed for intuitive color selection, preset patterns, and custom animation sequences, 
                    transforming the recycled chandelier into a modern smart lighting fixture.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                <Badge className="text-sm py-1 px-3">Arduino Uno</Badge>
                <Badge className="text-sm py-1 px-3">Bluetooth HC05 module</Badge>
                <Badge className="text-sm py-1 px-3">Color LED Controller Application</Badge>
                <Badge className="text-sm py-1 px-3">C Programming</Badge>
                <Badge className="text-sm py-1 px-3">Embedded Systems</Badge>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Skills Applied</h2>
              <div className="flex flex-wrap gap-3">
                <Badge className="text-sm py-1 px-3">Embedded Systems</Badge>
                <Badge className="text-sm py-1 px-3">Problem Solving</Badge>
                <Badge className="text-sm py-1 px-3">Embedded Software</Badge>
                <Badge className="text-sm py-1 px-3">C Programming</Badge>
                <Badge className="text-sm py-1 px-3">Software Development</Badge>
                <Badge className="text-sm py-1 px-3">Sustainable Design</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ChandelierProject;
