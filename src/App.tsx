
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import Home from "./pages/Home";
import Index from "./pages/Index";
import Messages from "./pages/Messages";
import Campaigns from "./pages/Campaigns";
import Flows from "./pages/Flows";
import Communities from "./pages/Communities";
import Insights from "./pages/Insights";
import Scheduled from "./pages/Scheduled";
import GrowthTools from "./pages/GrowthTools";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function AppContent() {
  useDocumentTitle();
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/campaigns" element={<Campaigns />} />
      <Route path="/flows" element={<Flows />} />
      <Route path="/communities" element={<Communities />} />
      <Route path="/insights" element={<Insights />} />
      <Route path="/scheduled" element={<Scheduled />} />
      <Route path="/growth-tools" element={<GrowthTools />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/" element={<Index />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="community-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
