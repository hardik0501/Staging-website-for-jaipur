import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DoctorsPage from "./pages/DoctorsPage";
import DoctorDetail from "./pages/DoctorDetail";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetail from "./pages/ServiceDetail";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import FacilitiesPage from "./pages/FacilitiesPage";
import AnnualReportPage from "./pages/AnnualReportPage";
import BlogsPage from "./pages/BlogsPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import BoardOfDirectorsPage from "./pages/BoardOfDirectorsPage";
import CompanyProfilePage from "./pages/CompanyProfilePage";
import CorporateGovernancePage from "./pages/CorporateGovernancePage";
import EducationPage from "./pages/EducationPage";
import ListingInformationPage from "./pages/ListingInformationPage";
import ManagingDirectorMessagePage from "./pages/ManagingDirectorMessagePage";
import OurPartnersPage from "./pages/OurPartnersPage";
import Regulation46and62Page from "./pages/Regulation46and62Page";
import GalleryPage from "./pages/GalleryPage";
import FinancialResultsPage from "./pages/FinancialResultsPage";
import ProjectStyle2Page from "./pages/ProjectStyle2Page";
import ProjectStyle2DetailPage from "./pages/ProjectStyle2DetailPage";
import OurTeamMemberPage from "./pages/OurTeamMemberPage";
import OurHistoryPage from "./pages/OurHistoryPage";
import VisionMissionPage from "./pages/VisionMissionPage";
import ShareholdersInformationPage from "./pages/ShareholdersInformationPage";
import EmpanelmentsPage from "./pages/EmpanelmentsPage";
import NoticeOfAGMPage from "./pages/NoticeOfAGMPage";
import NoticeOfBookClosurePage from "./pages/NoticeOfBookClosurePage";
import NoticeOfPostalBallotPage from "./pages/NoticeOfPostalBallotPage";

import { HelmetProvider } from 'react-helmet-async';

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Analytics />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/doctors" element={<DoctorsPage />} />
            <Route path="/doctors/:id" element={<DoctorDetail />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/facilities" element={<FacilitiesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/annual-report" element={<AnnualReportPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/blogs/:slug" element={<BlogDetailPage />} />
            <Route path="/board-of-directors" element={<BoardOfDirectorsPage />} />
            <Route path="/company-profile" element={<CompanyProfilePage />} />
            <Route path="/corporate-governance" element={<CorporateGovernancePage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/listing-information" element={<ListingInformationPage />} />
            <Route path="/managing-directors-message" element={<ManagingDirectorMessagePage />} />
            <Route path="/our-partner" element={<OurPartnersPage />} />
            <Route path="/regulation-46-62" element={<Regulation46and62Page />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/financial-results" element={<FinancialResultsPage />} />
            <Route path="/project-style-2" element={<ProjectStyle2Page />} />
            <Route path="/project-style-2/:id" element={<ProjectStyle2DetailPage />} />
            <Route path="/our-team-member" element={<OurTeamMemberPage />} />
            <Route path="/our-history" element={<OurHistoryPage />} />
            <Route path="/vision-mission" element={<VisionMissionPage />} />
            <Route path="/shareholders-information" element={<ShareholdersInformationPage />} />
            <Route path="/empanelments" element={<EmpanelmentsPage />} />
            <Route path="/notice-of-agm" element={<NoticeOfAGMPage />} />
            <Route path="/notice-of-book-closure" element={<NoticeOfBookClosurePage />} />
            <Route path="/notice-of-postal-ballot" element={<NoticeOfPostalBallotPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
