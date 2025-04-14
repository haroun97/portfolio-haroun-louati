
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const RobotArmCTA = () => {
  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Interested in Learning More?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Feel free to contact me if you'd like to learn more about this project or discuss how we could collaborate on something similar.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg">
            <Link to="/#contact">Contact Me</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RobotArmCTA;
