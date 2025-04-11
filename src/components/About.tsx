
const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-portfolio-blue-dark/50">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h2 className="section-title">About Me</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Hello! I'm a passionate software engineer who loves creating elegant solutions to complex problems. My journey in software development began during college, where I discovered my fascination with turning ideas into functional applications.
              </p>
              <p>
                With several years of professional experience, I've had the opportunity to work on a diverse range of projects spanning web development, cloud architecture, and data engineering. My approach combines technical expertise with a deep understanding of user needs to build software that is not just functional, but also intuitive and enjoyable to use.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or mentoring aspiring developers. I believe in continuous learning and pushing the boundaries of what's possible with technology.
              </p>
              <p>
                I'm currently looking for new opportunities where I can bring my skills and passion to create impactful software solutions. If you're interested in collaborating or just want to connect, feel free to reach out!
              </p>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-64 h-64">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-portfolio-orange-medium rounded-lg"></div>
              <div className="absolute w-full h-full bg-portfolio-blue-medium/20 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-[url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Crect width=\'100\' height=\'100\' fill=\'%230a192f\'/%3E%3Ctext x=\'50\' y=\'50\' font-size=\'20\' text-anchor=\'middle\' alignment-baseline=\'middle\' font-family=\'monospace\' fill=\'%233b82f6\'%3E%3Ctspan x=\'50\' y=\'50\'%3EYour%3C/tspan%3E%3Ctspan x=\'50\' y=\'70\'%3EPhoto%3C/tspan%3E%3C/text%3E%3C/svg%3E')] bg-cover bg-center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
