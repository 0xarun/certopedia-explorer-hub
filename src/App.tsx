
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/providers/AuthProvider";

import Index from "@/pages/Index";
import ExplorePage from "@/pages/ExplorePage";
import CertificationDetailsPage from "@/pages/CertificationDetailsPage";
import ProvidersPage from "@/pages/ProvidersPage";
import AuthCallback from "@/pages/AuthCallback";
import NotFound from "@/pages/NotFound";
import FavoritesPage from "@/pages/FavoritesPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/certification/:id" element={<CertificationDetailsPage />} />
            <Route path="/providers" element={<ProvidersPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/auth/callback" element={<AuthCallback />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TooltipProvider>
      </AuthProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
