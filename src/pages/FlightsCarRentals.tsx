import { Plane, Car, Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const FlightsCarRentals = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-800 to-purple-700 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Plane size={48} className="text-white" />
              <Car size={48} className="text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Flights & Car Rentals Booking Application</h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              A comprehensive booking system for travel agencies
            </p>
            <div className="flex gap-4 mt-8">
              <Button asChild variant="secondary">
                <Link to="/" className="flex items-center gap-2">
                  Back to Home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
              <p className="text-lg mb-6">
                Developed a comprehensive booking application for a travel agency, allowing customers to book flights and rent cars.
                This project was completed as part of my coursework at Ecole Supérieure Privée d'Ingénierie et de Technologies (ESPRIT)
                from October to November 2019.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <Card className="bg-slate-50 dark:bg-slate-900">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <span className="p-2 rounded-full bg-blue-100 dark:bg-blue-900">
                        <Code size={18} className="text-blue-600" />
                      </span>
                      Duration
                    </h3>
                    <p>Oct 2019 – Nov 2019</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-slate-50 dark:bg-slate-900">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <span className="p-2 rounded-full bg-blue-100 dark:bg-blue-900">
                        <Code size={18} className="text-blue-600" />
                      </span>
                      Organization
                    </h3>
                    <p>ESPRIT</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-slate-50 dark:bg-slate-900">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <span className="p-2 rounded-full bg-blue-100 dark:bg-blue-900">
                        <Code size={18} className="text-blue-600" />
                      </span>
                      Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge>C Programming</Badge>
                      <Badge>Glade Interface Designer</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Application Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-xl mb-4 text-center">Customer Part</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Book flights</li>
                      <li>Rent cars</li>
                      <li>Pay bills</li>
                      <li>Submit claims</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-xl mb-4 text-center">Agent Part</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Add flights</li>
                      <li>Modify flights</li>
                      <li>Delete flights</li>
                      <li>Manage car rentals</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-xl mb-4 text-center">Administrator Part</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Manage claims</li>
                      <li>Manage agent lists</li>
                      <li>Process bills</li>
                      <li>System oversight</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Skills Used</h2>
              <div className="flex flex-wrap gap-3">
                <Badge className="text-sm py-1 px-3">Problem Solving</Badge>
                <Badge className="text-sm py-1 px-3">Software Development</Badge>
                <Badge className="text-sm py-1 px-3">C Programming</Badge>
                <Badge className="text-sm py-1 px-3">UI Design</Badge>
                <Badge className="text-sm py-1 px-3">System Architecture</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FlightsCarRentals;
