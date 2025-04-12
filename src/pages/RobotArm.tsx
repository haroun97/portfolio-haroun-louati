
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import RobotArmHero from "@/components/robot-arm/RobotArmHero";
import RobotArmOverview from "@/components/robot-arm/RobotArmOverview";
import RobotArmGallery from "@/components/robot-arm/RobotArmGallery";
import RobotArmArchitecture from "@/components/robot-arm/RobotArmArchitecture";
import RobotArmTechnicalDetails from "@/components/robot-arm/RobotArmTechnicalDetails";
import RobotArmSkills from "@/components/robot-arm/RobotArmSkills";
import RobotArmCTA from "@/components/robot-arm/RobotArmCTA";
import { scrollToElement } from "@/utils/scrollUtils";

const RobotArm = () => {
  const location = useLocation();
  const hardwareTechnologies = ["Arduino Uno", "Stepper Motors", "CNC Shield A4988", "3D Printing"];
  const softwareTechnologies = ["Python", "OpenCV", "Visual Studio", "C Programming", "Haarcascade Classifier"];
  const skills = ["Embedded Systems", "Problem Solving", "Embedded Software", "Software Development", "Mechanical Design"];
  
  useEffect(() => {
    // If hash is present in the URL (e.g., /robot-arm#robotArmHero), scroll to that section
    if (location.hash) {
      // Remove the # character to get the element ID
      const elementId = location.hash.substring(1);
      
      // Small delay to ensure the component is fully mounted
      setTimeout(() => {
        scrollToElement(elementId);
      }, 100);
    }
  }, [location]);

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
