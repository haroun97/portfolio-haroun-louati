
import { Trophy, Medal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface Award {
  id: string;
  title: string;
  institution: string;
  date: string;
  details: string;
  icon: JSX.Element;
  project?: string;
  projectLink?: string;
}

const awards: Award[] = [
  {
    id: "box-covid-1st",
    title: "1st Prize – "Box-Covid" Project",
    institution: "ESPRIT Projects Ball Event",
    date: "June 2021",
    details: "Recognized as the best project in the 4th year – SLEAM specialization (Embedded Systems & Software and Mobile Development). Institution: Ecole Supérieure Privée d'Ingénierie et de Technologies (ESPRIT)",
    icon: <Trophy className="h-8 w-8 text-yellow-500" />,
    project: "Box-Covid",
    projectLink: "/box-covid"
  },
  {
    id: "box-covid-2nd",
    title: "Silver Medal for "Box-Covid" Project",
    institution: "ESPRIT Projects Ball Event",
    date: "June 2021",
    details: "Ranked 2nd among 200+ projects across all departments at ESPRIT. Institution: Ecole Supérieure Privée d'Ingénierie et de Technologies (ESPRIT)",
    icon: <Medal className="h-8 w-8 text-gray-400" />,
    project: "Box-Covid",
    projectLink: "/box-covid"
  },
  {
    id: "maze-solver-iset",
    title: "2nd Prize – Maze Solver Robot Competition",
    institution: "Robotics Competition – ISET Sousse",
    date: "January 2018",
    details: "Secured 2nd place with a maze-solving robot built for autonomous navigation challenges.",
    icon: <Medal className="h-8 w-8 text-gray-400" />,
    project: "Robotics Competition",
    projectLink: "/robotics-competition"
  },
  {
    id: "all-terrain-robot",
    title: "2nd Prize – All Terrain Robot Competition",
    institution: "CRATT Junior Robotics Competition – ISET Rades",
    date: "January 2017",
    details: "Awarded for outstanding performance in the All Terrain Robot challenge.",
    icon: <Medal className="h-8 w-8 text-gray-400" />,
    project: "Robotics Competition",
    projectLink: "/robotics-competition"
  },
  {
    id: "maze-solver-cratt",
    title: "2nd Prize – Maze Solver Robot Competition",
    institution: "CRATT Junior Robotics Competition – ISET Rades",
    date: "January 2017",
    details: "Earned 2nd place with an efficient maze-solving robot design.",
    icon: <Medal className="h-8 w-8 text-gray-400" />,
    project: "Robotics Competition",
    projectLink: "/robotics-competition"
  }
];

const Awards = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-700 to-amber-500 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center">
            <Trophy size={64} className="text-white mb-4" />
            <h1 className="text-4xl font-bold text-white mb-4">Awards & Achievements</h1>
            <p className="text-xl text-amber-100 max-w-3xl">
              Recognition for excellence in engineering, innovation, and technical competitions
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

      {/* Awards Section */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {awards.map((award) => (
              <Card key={award.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-full">
                    {award.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl">{award.title}</CardTitle>
                    <CardDescription className="text-md">
                      {award.institution} • {award.date}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-700 dark:text-gray-300">{award.details}</p>
                    
                    {award.project && (
                      <div className="flex flex-wrap items-center gap-2 mt-4">
                        <span className="font-medium">Related Project:</span>
                        {award.projectLink ? (
                          <Link to={award.projectLink}>
                            <Badge variant="secondary" className="hover:bg-amber-200 dark:hover:bg-amber-800 cursor-pointer">
                              {award.project}
                            </Badge>
                          </Link>
                        ) : (
                          <Badge variant="secondary">{award.project}</Badge>
                        )}
                      </div>
                    )}
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

export default Awards;
