
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useScrollToTop } from "./hooks/useScrollToTop";
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

// RouteHandler component to handle scrolling to top
const RouteHandler = ({ children }: { children: React.ReactNode }) => {
  useScrollToTop();
  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RouteHandler><Index /></RouteHandler>} />
          <Route path="/box-covid" element={<RouteHandler><BoxCovid /></RouteHandler>} />
          <Route path="/robot-arm" element={<RobotArm />} />
          <Route path="/pan-tilt-robot" element={<RouteHandler><PanTiltRobot /></RouteHandler>} />
          <Route path="/robotics-competition" element={<RouteHandler><RoboticsCompetition /></RouteHandler>} />
          <Route path="/siemens-experience" element={<RouteHandler><SiemensExperience /></RouteHandler>} />
          <Route path="/roche-experience" element={<RouteHandler><RocheExperience /></RouteHandler>} />
          <Route path="/coding-betounsi-experience" element={<RouteHandler><CodingBetounsiExperience /></RouteHandler>} />
          <Route path="/esprit-internship-experience" element={<RouteHandler><EspritInternshipExperience /></RouteHandler>} />
          <Route path="/akwel-internship-experience" element={<RouteHandler><AkwelInternshipExperience /></RouteHandler>} />
          <Route path="/silvatrim-experience" element={<RouteHandler><SilvatrimExperience /></RouteHandler>} />
          <Route path="/maintenance-experience" element={<RouteHandler><MaintenanceExperience /></RouteHandler>} />
          <Route path="/awards" element={<RouteHandler><Awards /></RouteHandler>} />
          <Route path="/flights-car-rentals" element={<RouteHandler><FlightsCarRentals /></RouteHandler>} />
          <Route path="/chandelier-project" element={<RouteHandler><ChandelierProject /></RouteHandler>} />
          <Route path="/resume" element={<RouteHandler><Resume /></RouteHandler>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<RouteHandler><NotFound /></RouteHandler>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
