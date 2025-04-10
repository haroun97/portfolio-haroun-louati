
const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-portfolio-blue-dark/50">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h2 className="section-title">About Me</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                I'm a software engineer with 2+ years of professional experience building smart, user-focused solutions. At Siemens Healthineers, I help improve radiography systems by creating diagnostic tools that reduce troubleshooting time from hours to minutes.
              </p>
              <p>
                My background includes projects like a humanoid robot for kids and a robotic arm for people with limited mobility, using machine learning and computer vision. I also won an award during COVID-19 for an IoT system that safely monitored patients remotely.
              </p>
              <p>
                I hold a Master's Degree in Computer Science (2019–2022) from ESPRIT, Tunisia, and a Bachelor's Degree in Electrical Engineering (2016–2019) from ISETB, Tunisia. These programs provided me with a strong foundation in both software development and engineering principles.
              </p>
              <p>
                Outside of work, I enjoy hiking, badminton, exploring new places, and constantly learning through books, podcasts, and YouTube.
              </p>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-64 h-64">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-portfolio-orange-medium rounded-lg"></div>
              <div className="absolute w-full h-full bg-portfolio-blue-medium/20 rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/29a713e2-1f2d-4b20-aaa5-25ab3282ac45.png" 
                  alt="Haroun Louati" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
