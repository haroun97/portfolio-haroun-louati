
import RobotArmHero from "@/components/robot-arm/RobotArmHero";
import RobotArmOverview from "@/components/robot-arm/RobotArmOverview";
import RobotArmGallery from "@/components/robot-arm/RobotArmGallery";
import RobotArmArchitecture from "@/components/robot-arm/RobotArmArchitecture";
import RobotArmTechnicalDetails from "@/components/robot-arm/RobotArmTechnicalDetails";
import RobotArmSkills from "@/components/robot-arm/RobotArmSkills";
import RobotArmCTA from "@/components/robot-arm/RobotArmCTA";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const RobotArm = () => {
  // Use the hook directly in this component
  useScrollToTop();
  
  const hardwareTechnologies = ["Arduino Uno", "Stepper Motors", "CNC Shield A4988", "3D Printing"];
  const softwareTechnologies = ["Python", "OpenCV", "Visual Studio", "C Programming", "Haarcascade Classifier"];
  const skills = ["Embedded Systems", "Problem Solving", "Embedded Software", "Software Development", "Mechanical Design"];

  return (
    <div className="min-h-screen bg-white dark:bg-portfolio-blue-dark">
      <RobotArmHero />
      <RobotArmOverview 
        hardwareTechnologies={hardwareTechnologies}
        softwareTechnologies={softwareTechnologies}
      />
      <RobotArmGallery />
      <RobotArmArchitecture />
      <RobotArmTechnicalDetails />
      <RobotArmSkills skills={skills} />
      <RobotArmCTA />
    </div>
  );
};

export default RobotArm;
