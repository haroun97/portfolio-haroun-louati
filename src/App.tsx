
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BoxCovid from "./pages/BoxCovid";
import RobotArm from "./pages/RobotArm";
import PanTiltRobot from "./pages/PanTiltRobot";
import RoboticsCompetition from "./pages/RoboticsCompetition";
import SiemensExperience from "./pages/SiemensExperience";
import RocheExperience from "./pages/RocheExperience";
import CodingBetounsiExperience from "./pages/CodingBetounsiExperience";
import EspritInternshipExperience from "./pages/EspritInternshipExperience";
import AkwelInternshipExperience from "./pages/AkwelInternshipExperience";
import SilvatrimExperience from "./pages/SilvatrimExperience";
import MaintenanceExperience from "./pages/MaintenanceExperience";
import Awards from "./pages/Awards";
import FlightsCarRentals from "./pages/FlightsCarRentals";
import ChandelierProject from "./pages/ChandelierProject";
import Resume from "./pages/Resume";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/box-covid" element={<BoxCovid />} />
          <Route path="/robot-arm" element={<RobotArm />} />
          <Route path="/pan-tilt-robot" element={<PanTiltRobot />} />
          <Route path="/robotics-competition" element={<RoboticsCompetition />} />
          <Route path="/siemens-experience" element={<SiemensExperience />} />
          <Route path="/roche-experience" element={<RocheExperience />} />
          <Route path="/coding-betounsi-experience" element={<CodingBetounsiExperience />} />
          <Route path="/esprit-internship-experience" element={<EspritInternshipExperience />} />
          <Route path="/akwel-internship-experience" element={<AkwelInternshipExperience />} />
          <Route path="/silvatrim-experience" element={<SilvatrimExperience />} />
          <Route path="/maintenance-experience" element={<MaintenanceExperience />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/flights-car-rentals" element={<FlightsCarRentals />} />
          <Route path="/chandelier-project" element={<ChandelierProject />} />
          <Route path="/resume" element={<Resume />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
