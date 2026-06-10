import { Link } from "react-router-dom";
import {
  Heart, Bone, Brain, Stethoscope, Scissors, Baby, Activity, Microscope, Dumbbell, User
} from "lucide-react";

const specialities = [
  { icon: Heart, name: "Cardiology and CTVS", desc: "Best cardiologist in Jaipur for heart and vascular care", color: "text-red-500", bg: "bg-red-50", id: "cardiology" },
  { icon: Bone, name: "Orthopaedics and Joint Replacement", desc: "Top orthopaedic hospital in Jaipur for bones and joints", color: "text-orange-500", bg: "bg-orange-50", id: "orthopaedics" },
  { icon: Brain, name: "Neurology", desc: "Expert brain specialist and neuro care in Jaipur", color: "text-purple-500", bg: "bg-purple-50", id: "neurology" },
  { icon: Stethoscope, name: "General Medicine", desc: "Trusted general physician in Jaipur for all ages", color: "text-primary", bg: "bg-primary-light", id: "general-medicine" },
  { icon: Scissors, name: "General and Laparoscopic Surgery", desc: "Advanced minimally invasive surgery in Jaipur", color: "text-secondary", bg: "bg-secondary-light", id: "general-surgery" },
  { icon: User, name: "Gynaecology and Obstetrics", desc: "Best maternity and gynaecology hospital in Jaipur", color: "text-pink-500", bg: "bg-pink-50", id: "gynaecology" },
  { icon: Baby, name: "Paediatrics", desc: "Trusted child specialist hospital in Jaipur with NICU", color: "text-yellow-500", bg: "bg-yellow-50", id: "pediatrics" },
  { icon: Activity, name: "ICU and Emergency", desc: "24/7 emergency and critical care hospital in Jaipur", color: "text-red-600", bg: "bg-red-50", id: "icu-emergency" },
  { icon: Microscope, name: "Diagnostics and Imaging", desc: "NABL-accredited diagnostic centre in Jaipur", color: "text-indigo-500", bg: "bg-indigo-50", id: "diagnostics" },
  { icon: Dumbbell, name: "Physiotherapy", desc: "Expert physiotherapy and rehabilitation centre in Jaipur", color: "text-green-500", bg: "bg-green-50", id: "physiotherapy" },
];

const SpecialitiesSection = () => {
  return (
    <section id="specialities" className="section-padding bg-surface">
      <div className="container-width">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-3 bg-primary-light px-4 py-1.5 rounded-full">
            Our Specialities
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            10+ Medical Specialties, One Trusted Hospital in Jaipur
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            From heart care to bone surgery, from maternity to emergency medicine — every speciality you need is available under one roof at Jaipur Hospital.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {specialities.map((spec, idx) => (
            <Link
              key={spec.name}
              to={`/services/${spec.id}`}
              className="group flex flex-col items-center text-center p-5 bg-card rounded-2xl border border-border shadow-card card-hover cursor-pointer"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              <div
                className={`w-14 h-14 rounded-2xl ${spec.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <spec.icon size={26} className={spec.color} />
              </div>
              <div className="font-semibold text-foreground text-sm mb-1 leading-snug">{spec.name}</div>
              <div className="text-muted-foreground text-xs leading-relaxed">{spec.desc}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialitiesSection;
