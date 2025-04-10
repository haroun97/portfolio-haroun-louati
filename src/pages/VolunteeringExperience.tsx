
import { HandHeart, School, Users, Building } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface VolunteerExperience {
  id: string;
  role: string;
  organization: string;
  duration: string;
  field: string;
  responsibilities: string[];
  icon: JSX.Element;
  logo?: string;
}

const volunteerExperiences: VolunteerExperience[] = [
  {
    id: "ieee-training",
    role: "Training Manager",
    organization: "IEEE ESPRIT Student Branch",
    duration: "Aug 2021 – Present (3 years 9 months)",
    field: "Science and Technology",
    responsibilities: [
      "Leading training sessions for students on various technical topics.",
      "Leading and organising training for SOS village."
    ],
    icon: <School className="h-8 w-8 text-blue-500" />,
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 100'%3E%3Crect width='200' height='100' fill='%230056B3'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial, sans-serif' font-size='30' font-weight='bold' fill='white' text-anchor='middle' dominant-baseline='middle'%3EIEEE%3C/text%3E%3C/svg%3E"
  },
  {
    id: "ieee-robotics",
    role: "Robotics Instructor",
    organization: "IEEE ESPRIT Student Branch",
    duration: "Feb 2021 – Present (4 years 3 months)",
    field: "Education",
    responsibilities: [
      "Teaching robotics principles and practices to students of varying levels.",
      "Organizing workshops and providing hands-on training in robotics technology."
    ],
    icon: <School className="h-8 w-8 text-green-500" />,
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 100'%3E%3Crect width='200' height='100' fill='%230056B3'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial, sans-serif' font-size='30' font-weight='bold' fill='white' text-anchor='middle' dominant-baseline='middle'%3EIEEE%3C/text%3E%3C/svg%3E"
  },
  {
    id: "gyl-robotics",
    role: "Robotics Instructor for Kids (Volunteer for Quality Education)",
    organization: "Global Young Leaders Organization",
    duration: "Aug 2020 (1 month)",
    field: "ALHAZEN BIN AL-HAYTHAM Olympiad for Science and Mathematics (First Edition)",
    responsibilities: [
      "Organized and led Micro:Bit robotics workshops for children.",
      "Introduction to Micro:Bit",
      "Working with LED Matrix",
      "Understanding button functions",
      "Teaching basic coding concepts using the Microsoft MakeCode block editor."
    ],
    icon: <School className="h-8 w-8 text-purple-500" />,
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 100'%3E%3Crect width='200' height='100' fill='%23228B22'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial, sans-serif' font-size='12' font-weight='bold' fill='white' text-anchor='middle' dominant-baseline='middle'%3EGlobal Young Leaders%3C/text%3E%3C/svg%3E"
  },
  {
    id: "jci-member",
    role: "Member",
    organization: "JCI Aousja",
    duration: "Jan 2018 – Dec 2018 (1 year)",
    field: "Event Organization",
    responsibilities: [
      "Assisted in organizing community-building events and initiatives."
    ],
    icon: <Users className="h-8 w-8 text-orange-500" />,
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 100'%3E%3Crect width='200' height='100' fill='%23B22222'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial, sans-serif' font-size='24' font-weight='bold' fill='white' text-anchor='middle' dominant-baseline='middle'%3EJCI%3C/text%3E%3C/svg%3E"
  }
];

const VolunteeringExperience = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-700 to-green-500 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center">
            <HandHeart size={64} className="text-white mb-4" />
            <h1 className="text-4xl font-bold text-white mb-4">Volunteering Experience</h1>
            <p className="text-xl text-green-100 max-w-3xl">
              Giving back to the community through education and social initiatives
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

      {/* Volunteering Experiences Section */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {volunteerExperiences.map((exp) => (
              <Card key={exp.id} className="hover:shadow-lg transition-shadow flex flex-col h-full">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full">
                    {exp.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl">{exp.role}</CardTitle>
                    <CardDescription className="text-md">
                      {exp.organization} • {exp.duration}
                    </CardDescription>
                  </div>
                </CardHeader>
                
                {exp.logo && (
                  <div className="px-6 py-2">
                    <div className="h-14 bg-white dark:bg-slate-700 rounded border dark:border-slate-600 flex items-center justify-center p-2">
                      <img 
                        src={exp.logo} 
                        alt={`${exp.organization} logo`} 
                        className="max-h-full object-contain"
                      />
                    </div>
                  </div>
                )}
                
                <CardContent className="pt-4 flex-grow">
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium mb-1">Field:</p>
                      <Badge variant="outline">{exp.field}</Badge>
                    </div>
                    
                    <div>
                      <p className="font-medium mb-2">Responsibilities:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        {exp.responsibilities.map((item, index) => (
                          <li key={index} className="text-gray-700 dark:text-gray-300">{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-4">
                  <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                    {exp.id.includes("ieee") ? "IEEE - Advancing Technology for Humanity" : 
                     exp.id.includes("gyl") ? "Empowering Youth Through Education" : 
                     "Creating Positive Change in Communities"}
                  </p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default VolunteeringExperience;
