
const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-portfolio-blue-dark/50">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h2 className="section-title">About Me</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                I'm a dedicated software engineer with over two years of professional experience in software development. At <strong>Siemens Healthineers</strong>, I am helping my team reduce troubleshooting time from hours to minutes by developing diagnostic tests and data platforms that enhance radiography system performance. My expertise includes <strong>JavaScript</strong>, <strong>Node.js</strong>, <strong>C++</strong>, and <strong>Python</strong>.
              </p>
              <p>
                Previously, I worked on impactful projects like a <strong>humanoid robot</strong> for children and an <strong>autonomous robot arm</strong> for individuals with limited mobility, leveraging <strong>machine learning</strong> and <strong>computer vision</strong>. These experiences taught me the importance of combining hardware and software to create meaningful solutions that help people.
              </p>
              <p>
                I was honored with the <strong>Best Innovative IoT System in Healthcare</strong> award during COVID-19 for designing a solution that remotely monitors patients and protects healthcare workers using medical sensors and a cross-platform application. This project gave me valuable experience in managing teams, solving complex issues, and delivering technical solutions from design to production under tight deadlines.
              </p>
              <p>
                In my free time, I enjoy <strong>hiking</strong>, <strong>badminton</strong>, going to the gym, and learning new skills through books, podcasts, and YouTube videos. I also love exploring new cities and staying connected with family and friends.
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
