import HospitalHeader from "@/components/hospital/HospitalHeader";
import ContactFooter from "@/components/hospital/ContactFooter";
import FloatingButtons from "@/components/hospital/FloatingButtons";
import HealthPackages from "@/components/hospital/HealthPackages";
import { ChevronRight, ClipboardList, Info, HelpCircle } from "lucide-react";

const HealthPackagesPage = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <HospitalHeader />
      <main className="pt-24">
        {/* Page Hero */}
        <section className="pt-16 pb-12 bg-gradient-primary">
          <div className="container-width text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
              Health Packages
            </h1>
            <div className="flex items-center justify-center gap-2 text-primary-foreground/80 text-sm font-medium mb-4">
              <span>Jaipur Hospital</span>
              <ChevronRight size={14} />
              <span className="text-primary-foreground">Health Packages</span>
            </div>
            <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto">
              Preventive wellness packages designed for you and your family
            </p>
          </div>
        </section>

        {/* Mount Main Packages Component */}
        <HealthPackages />

        {/* Additional Guidelines Section */}
        <section className="pb-20 bg-surface">
          <div className="container-width max-w-4xl">
            <div className="bg-card border border-border rounded-3xl p-8 shadow-sm space-y-6">
              <h3 className="font-display font-bold text-xl text-foreground flex items-center gap-2 border-b border-border pb-3">
                <ClipboardList size={22} className="text-primary" /> Guidelines for Health Checkups
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6 text-sm text-muted-foreground">
                <div className="space-y-4">
                  <div className="flex gap-2.5">
                    <Info size={18} className="text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-foreground">Fasting Requirement:</strong>
                      <p className="mt-1">For packages containing sugar/lipid tests (Full Body and Diabetes/Thyroid), 10–12 hours of overnight fasting is mandatory. Do not consume tea, coffee, or breakfast before giving blood samples.</p>
                    </div>
                  </div>

                  <div className="flex gap-2.5">
                    <Info size={18} className="text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-foreground">Regular Medication:</strong>
                      <p className="mt-1">Please take your regular blood pressure medications with a small sip of water. In case you are diabetic, avoid taking insulin or diabetic tablets on the morning of sample collection.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-2.5">
                    <Info size={18} className="text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-foreground">X-Ray and Scans:</strong>
                      <p className="mt-1">Please wear loose, comfortable clothing. If you are pregnant or suspect you might be pregnant, inform the technician/radiographer before getting chest X-rays done.</p>
                    </div>
                  </div>

                  <div className="flex gap-2.5">
                    <Info size={18} className="text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-foreground">Reporting & Reviews:</strong>
                      <p className="mt-1">Reports are delivered within 4–6 hours of sample collection. Doctor consultations and reviews will be conducted immediately following report collection.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Booking Helpline */}
              <div className="bg-primary-light rounded-2xl p-5 border border-primary/20 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left mt-6">
                <div>
                  <h4 className="font-bold text-foreground text-sm">Need a custom package for senior citizens or corporate groups?</h4>
                  <p className="text-muted-foreground text-xs mt-1">Talk to our health managers for custom configurations and discounts.</p>
                </div>
                <a
                  href="tel:+919257029901"
                  className="bg-primary text-primary-foreground font-bold px-6 py-2.5 rounded-full text-xs hover:opacity-90 transition-opacity whitespace-nowrap shadow-sm"
                >
                  Call health coordinator
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ContactFooter />
      <FloatingButtons />
    </div>
  );
};

export default HealthPackagesPage;
