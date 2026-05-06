import HospitalHeader from "@/components/hospital/HospitalHeader";
import HeroSection from "@/components/hospital/HeroSection";
import QuickActionBar from "@/components/hospital/QuickActionBar";
import TrustStats from "@/components/hospital/TrustStats";
import SpecialitiesSection from "@/components/hospital/SpecialitiesSection";
import FeaturedServices from "@/components/hospital/FeaturedServices";
import DoctorsSection from "@/components/hospital/DoctorsSection";
import WhyChooseUs from "@/components/hospital/WhyChooseUs";
import FacilitiesGallery from "@/components/hospital/FacilitiesGallery";
import EmpanelmentSection from "@/components/hospital/EmpanelmentSection";
import TestimonialsSection from "@/components/hospital/TestimonialsSection";
import HealthPackages from "@/components/hospital/HealthPackages";
import AppointmentForm from "@/components/hospital/AppointmentForm";
import ContactFooter from "@/components/hospital/ContactFooter";
import FloatingButtons from "@/components/hospital/FloatingButtons";

import { SEO } from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <SEO canonical="/" />
      <HospitalHeader />
      <main>
        <HeroSection />
        <QuickActionBar />
        <TrustStats />
        <SpecialitiesSection />
        <FeaturedServices />
        <DoctorsSection />
        <WhyChooseUs />
        <FacilitiesGallery />
        <EmpanelmentSection />
        <TestimonialsSection />
        <HealthPackages />
        <AppointmentForm />
        <ContactFooter />
      </main>
      <FloatingButtons />
    </div>
  );
};

export default Index;
