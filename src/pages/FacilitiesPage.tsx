import { useState } from "react";
import { Building2, Wifi, Shield, Clock, Thermometer, Heart, Baby, Microscope, Stethoscope, Bed, Syringe, Ambulance } from "lucide-react";
import HospitalHeader from "@/components/hospital/HospitalHeader";
import ContactFooter from "@/components/hospital/ContactFooter";
import FloatingButtons from "@/components/hospital/FloatingButtons";
import icuImg from "@/assets/facility-icu.jpg";
import otImg from "@/assets/facility-ot.jpg";
import roomImg from "@/assets/facility-room.jpg";
import waitingImg from "@/assets/facility-waiting.jpg";
import labImg from "@/assets/facility-lab.jpg";
import emergencyImg from "@/assets/service-emergency.jpg";

const facilities = [
  {
    img: icuImg,
    title: "Intensive Care Unit (ICU/CCU/NICU)",
    desc: "Fully equipped ICU, CCU, and NICU with advanced ventilators, multi-parameter monitors, and 24/7 critical care specialists ensuring round-the-clock intensive patient monitoring.",
    icon: Heart,
    features: ["24/7 Monitoring", "Advanced Ventilators", "Cardiac Monitors", "Isolation Beds"],
  },
  {
    img: otImg,
    title: "Modular Operation Theatres",
    desc: "State-of-the-art modular OTs with HEPA filtration, laminar airflow, and advanced surgical instruments for orthopaedic, cardiac, general, laparoscopic, and gynaecological surgeries.",
    icon: Syringe,
    features: ["HEPA Filtration", "Laminar Airflow", "C-Arm Imaging", "Laparoscopic Setup"],
  },
  {
    img: roomImg,
    title: "Patient Rooms & Suites",
    desc: "Comfortable private and semi-private rooms with attached bathrooms, nurse call systems, AC, and attendant facilities — designed for a restful recovery experience.",
    icon: Bed,
    features: ["AC Rooms", "Nurse Call System", "Attached Bathroom", "Attendant Area"],
  },
  {
    img: waitingImg,
    title: "Reception & Waiting Area",
    desc: "Spacious, well-lit reception and waiting areas with comfortable seating, digital displays, and dedicated help desks for smooth patient navigation.",
    icon: Building2,
    features: ["Wheelchair Access", "Digital Displays", "Help Desk", "Cafeteria Access"],
  },
  {
    img: labImg,
    title: "Diagnostics & Pathology Lab",
    desc: "NABL-accredited diagnostics laboratory equipped with MRI, CT Scan, Digital X-Ray, Ultrasound, and comprehensive pathology services for accurate and rapid diagnosis.",
    icon: Microscope,
    features: ["MRI & CT Scan", "Digital X-Ray", "Ultrasound", "Pathology Lab"],
  },
  {
    img: emergencyImg,
    title: "24/7 Emergency & Ambulance",
    desc: "Round-the-clock emergency department with rapid triage, trauma care, advanced life support ambulances, and dedicated emergency physicians for immediate critical care.",
    icon: Ambulance,
    features: ["24/7 Availability", "Trauma Care", "ALS Ambulance", "Rapid Triage"],
  },
];

const highlights = [
  { icon: Bed, label: "100+ Beds", desc: "Multi-speciality capacity" },
  { icon: Shield, label: "NABH Standards", desc: "Quality accredited care" },
  { icon: Clock, label: "24/7 Emergency", desc: "Round the clock services" },
  { icon: Wifi, label: "Digital Records", desc: "EMR & paperless workflow" },
  { icon: Thermometer, label: "Central AC", desc: "Climate controlled facility" },
  { icon: Stethoscope, label: "OPD Clinics", desc: "Multi-speciality consultations" },
  { icon: Baby, label: "NICU", desc: "Neonatal intensive care" },
  { icon: Microscope, label: "In-House Lab", desc: "Advanced diagnostics" },
];

const FacilitiesPage = () => {
  const [activeFacility, setActiveFacility] = useState(0);

  return (
    <div className="min-h-screen bg-background font-sans">
      <HospitalHeader />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-14 bg-gradient-primary">
          <div className="container-width text-center">
            <span className="inline-block text-primary-foreground/80 font-semibold text-sm uppercase tracking-widest mb-3">
              Hospital Infrastructure
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
              Our Facilities
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              World-class medical infrastructure designed for clinical excellence and patient comfort at Jaipur Hospital.
            </p>
          </div>
        </section>

        {/* Highlights Grid */}
        <section className="py-12 bg-card border-b border-border">
          <div className="container-width">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {highlights.map((h) => (
                <div key={h.label} className="flex items-center gap-3 bg-surface rounded-xl p-4 border border-border/50">
                  <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center flex-shrink-0">
                    <h.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-foreground text-sm">{h.label}</div>
                    <div className="text-muted-foreground text-xs">{h.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Facilities Detail */}
        <section className="section-padding bg-surface">
          <div className="container-width">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Explore Our Infrastructure
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Every facility is built with the latest medical technology, designed for patient safety and comfort.
              </p>
            </div>

            <div className="space-y-8">
              {facilities.map((facility, idx) => {
                const FIcon = facility.icon;
                const isEven = idx % 2 === 0;
                return (
                  <div
                    key={facility.title}
                    className={`group bg-card rounded-2xl border border-border shadow-card overflow-hidden flex flex-col ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Image */}
                    <div className="md:w-1/2 h-64 md:h-auto min-h-72 overflow-hidden relative">
                      <img
                        src={facility.img}
                        alt={facility.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center">
                          <FIcon size={24} className="text-primary" />
                        </div>
                        <h3 className="font-display font-bold text-xl text-foreground">{facility.title}</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-6">{facility.desc}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {facility.features.map((f) => (
                          <div key={f} className="flex items-center gap-2 text-sm text-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                            {f}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-navy text-center">
          <div className="container-width">
            <h2 className="text-3xl font-display font-bold text-navy-foreground mb-4">
              Experience World-Class Healthcare
            </h2>
            <p className="text-navy-foreground/60 max-w-lg mx-auto mb-8">
              Visit Jaipur Hospital to see our advanced infrastructure firsthand. Book an appointment or contact us today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/919257029901?text=Hi%2C%20I%20want%20to%20book%20an%20appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-primary text-primary-foreground font-semibold rounded-full px-8 py-3 hover:opacity-90 transition-opacity"
              >
                Book Appointment
              </a>
              <a
                href="/contact"
                className="border-2 border-navy-foreground/30 text-navy-foreground font-semibold rounded-full px-8 py-3 hover:border-primary-glow hover:text-primary-glow transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <ContactFooter />
      <FloatingButtons />
    </div>
  );
};

export default FacilitiesPage;
