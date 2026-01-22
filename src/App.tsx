import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "./components/DashboardLayout";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Auth from "./pages/Auth";
import Overview from "./pages/Overview";
import FarmProfile from "./pages/FarmProfile";
import SmartAdvisory from "./pages/SmartAdvisory";
import VisionDiagnosis from "./pages/VisionDiagnosis";
import MarketSales from "./pages/MarketSales";
import Scheduler from "./pages/Scheduler";
import KnowledgeHub from "./pages/KnowledgeHub";
import Insights from "./pages/Insights";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <Routes>
                    <Route path="/" element={<Overview />} />
                    <Route path="/farm-profile" element={<FarmProfile />} />
                    <Route path="/advisory" element={<SmartAdvisory />} />
                    <Route path="/diagnosis" element={<VisionDiagnosis />} />
                    <Route path="/market" element={<MarketSales />} />
                    <Route path="/scheduler" element={<Scheduler />} />
                    <Route path="/knowledge" element={<KnowledgeHub />} />
                    <Route path="/insights" element={<Insights />} />
                    <Route path="/settings" element={<Settings />} />
                    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
