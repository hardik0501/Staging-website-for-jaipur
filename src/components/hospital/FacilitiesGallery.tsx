import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import icuImg from "@/assets/facility-icu.jpg";
import otImg from "@/assets/facility-ot.jpg";
import roomImg from "@/assets/facility-room.jpg";
import waitingImg from "@/assets/facility-waiting.jpg";
import labImg from "@/assets/facility-lab.jpg";
import emergencyImg from "@/assets/service-emergency.jpg";

const facilities = [
  {
    img: icuImg,
    label: "Intensive Care Unit",
    desc: "24/7 intensivist-managed ICU in Jaipur with continuous monitoring",
    alt: "ICU ward at Jaipur Hospital near SMS Stadium Jaipur"
  },
  {
    img: otImg,
    label: "Modular Operation Theatres",
    desc: "HEPA-filtered surgical OTs for safe, precise procedures",
    alt: "Modular operation theatres at Jaipur Hospital near SMS Stadium Jaipur"
  },
  {
    img: waitingImg,
    label: "Labour and Delivery Unit",
    desc: "Safe, private maternity suites at the best maternity hospital in Jaipur",
    alt: "Labour and Delivery Unit at Jaipur Hospital near SMS Stadium Jaipur"
  },
  {
    img: roomImg,
    label: "Patient Wards",
    desc: "Clean, well-staffed general and private wards for inpatient comfort",
    alt: "Patient Wards at Jaipur Hospital near SMS Stadium Jaipur"
  },
  {
    img: labImg,
    label: "Diagnostics and Imaging Centre",
    desc: "In-house MRI, CT, X-ray, and NABL lab in Jaipur",
    alt: "Diagnostics and Imaging Centre at Jaipur Hospital near SMS Stadium Jaipur"
  },
  {
    img: emergencyImg,
    label: "Advanced Life Support Ambulance",
    desc: "24/7 ambulance service in Jaipur with paramedic teams",
    alt: "Advanced Life Support Ambulance at Jaipur Hospital near SMS Stadium Jaipur"
  },
];

const FacilitiesGallery = () => {
  const [active, setActive] = useState(0);

  const prev = () => setActive((p) => (p - 1 + facilities.length) % facilities.length);
  const next = () => setActive((p) => (p + 1) % facilities.length);

  return (
    <section id="facilities" className="section-padding bg-navy">
      <div className="container-width">
        <div className="text-center mb-12">
          <span className="inline-block text-primary-glow font-semibold text-sm uppercase tracking-widest mb-3 bg-primary/20 px-4 py-1.5 rounded-full">
            Hospital Facilities
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-foreground mb-4">
            Infrastructure Built for Modern Healthcare
          </h2>
          <p className="text-navy-foreground/75 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Every facility at Jaipur Hospital is designed to support excellent clinical outcomes and a comfortable patient experience. This is what makes us one of the top hospitals in Jaipur for both routine and complex care.
          </p>
        </div>

        {/* Main Image */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-6" style={{ height: "420px" }}>
          <img
            src={facilities[active].img}
            alt={facilities[active].alt}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 text-left">
            <span className="inline-block bg-primary text-primary-foreground font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-wide mb-2">
              {facilities[active].label}
            </span>
            <p className="text-white text-base md:text-lg font-semibold drop-shadow-md">
              {facilities[active].desc}
            </p>
          </div>

          {/* Nav arrows */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-card/85 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-card transition-colors shadow-md"
            aria-label="Previous image"
          >
            <ChevronLeft size={20} className="text-foreground" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-card/85 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-card transition-colors shadow-md"
            aria-label="Next image"
          >
            <ChevronRight size={20} className="text-foreground" />
          </button>
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
          {facilities.map((f, idx) => (
            <button
              key={f.label}
              onClick={() => setActive(idx)}
              className={`rounded-xl overflow-hidden border-2 transition-all ${
                idx === active ? "border-primary scale-105 shadow-md-blue" : "border-transparent opacity-60 hover:opacity-90"
              }`}
            >
              <img src={f.img} alt={f.alt} loading="lazy" decoding="async" className="w-full h-16 object-cover" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesGallery;
