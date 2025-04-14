
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const RobotArmHero = () => {
  return (
    <section className="bg-portfolio-blue-dark text-white relative overflow-hidden py-24">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMWEyZTQ0Ij48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMyYTRhN2YiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-20"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Autonomous Robot Arm</h1>
          <p className="text-xl md:text-2xl text-portfolio-blue-lightest max-w-3xl mb-8">
            Based on Machine Learning and Computer Vision for people with reduced mobility
          </p>
          <Link to="/">
            <Button variant="outline" className="border-portfolio-blue-light text-portfolio-blue-lightest hover:bg-portfolio-blue-medium/20">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default RobotArmHero;
