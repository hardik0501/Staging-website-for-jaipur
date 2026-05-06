import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import icuImg from "@/assets/facility-icu.jpg";
import otImg from "@/assets/facility-ot.jpg";
import roomImg from "@/assets/facility-room.jpg";
import waitingImg from "@/assets/facility-waiting.jpg";
import labImg from "@/assets/facility-lab.jpg";
import emergencyImg from "@/assets/service-emergency.jpg";

const facilities = [
  { img: icuImg, label: "Intensive Care Unit (ICU)" },
  { img: otImg, label: "Operation Theatre (OT)" },
  { img: roomImg, label: "Private Patient Rooms" },
  { img: waitingImg, label: "Reception & Waiting Area" },
  { img: labImg, label: "Diagnostics Laboratory" },
  { img: emergencyImg, label: "Ambulance Services" },
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
            World-Class Infrastructure
          </h2>
          <p className="text-navy-foreground/60 max-w-xl mx-auto">
            Built with the latest medical infrastructure, designed for patient comfort and clinical excellence.
          </p>
        </div>

        {/* Main Image */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-6" style={{ height: "420px" }}>
          <img
            src={facilities[active].img}
            alt={facilities[active].label}
            className="w-full h-full object-cover transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
          <div className="absolute bottom-6 left-6">
            <span className="bg-primary text-primary-foreground font-semibold px-4 py-2 rounded-full text-sm">
              {facilities[active].label}
            </span>
          </div>

          {/* Nav arrows */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-card transition-colors shadow-md"
          >
            <ChevronLeft size={20} className="text-foreground" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-card transition-colors shadow-md"
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
              <img src={f.img} alt={f.label} className="w-full h-16 object-cover" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesGallery;
