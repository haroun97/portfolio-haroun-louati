
import { HandHeart, School, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface VolunteerExperience {
  id: string;
  role: string;
  organization: string;
  duration: string;
  field: string;
  responsibilities: string[];
  icon: JSX.Element;
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
    icon: <School className="h-8 w-8 text-blue-500" />
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
    icon: <School className="h-8 w-8 text-green-500" />
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
    icon: <School className="h-8 w-8 text-purple-500" />
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
    icon: <Users className="h-8 w-8 text-orange-500" />
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
          <div className="max-w-4xl mx-auto space-y-8">
            {volunteerExperiences.map((exp) => (
              <Card key={exp.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center gap-4">
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
                <CardContent>
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
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default VolunteeringExperience;
