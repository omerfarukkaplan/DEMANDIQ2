import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import RFQMarketplace from "./pages/RFQMarketplace";
import CreateRFQ from "./pages/CreateRFQ";
import RFQDetail from "./pages/RFQDetail";
import SupplierDirectory from "./pages/SupplierDirectory";
import SupplierProfile from "./pages/SupplierProfile";
import Products from "./pages/Products";
import Messages from "./pages/Messages";
import Notifications from "./pages/Notifications";
import Favorites from "./pages/Favorites";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BuyerDashboard from "./pages/BuyerDashboard";
import SupplierDashboard from "./pages/SupplierDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Analytics from "./pages/Analytics";
import DemandMap from "./pages/DemandMap";
import AISourcing from "./pages/AISourcing";
import { PrivacyPolicy, TermsOfService, DataProtection } from "./pages/Legal";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/rfqs" element={<RFQMarketplace />} />
            <Route path="/rfqs/create" element={<CreateRFQ />} />
            <Route path="/rfq/:slug" element={<RFQDetail />} />
            <Route path="/suppliers" element={<SupplierDirectory />} />
            <Route path="/suppliers/:slug" element={<SupplierProfile />} />
            <Route path="/products" element={<Products />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard/buyer" element={<BuyerDashboard />} />
            <Route path="/dashboard/supplier" element={<SupplierDashboard />} />
            <Route path="/dashboard/admin" element={<AdminDashboard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/demand-map" element={<DemandMap />} />
            <Route path="/ai-sourcing" element={<AISourcing />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/data-protection" element={<DataProtection />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
