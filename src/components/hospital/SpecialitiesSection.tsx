import { Link } from "react-router-dom";
import {
  Heart, Bone, Brain, Stethoscope, Scissors, Baby, Activity, Microscope, Dumbbell, User
} from "lucide-react";

const specialities = [
  { icon: Heart, name: "Cardiology", desc: "Heart & vascular care", color: "text-red-500", bg: "bg-red-50", id: "cardiology" },
  { icon: Bone, name: "Orthopaedics", desc: "Joint & bone surgery", color: "text-orange-500", bg: "bg-orange-50", id: "orthopaedics" },
  { icon: Brain, name: "Neurology", desc: "Brain & nervous system", color: "text-purple-500", bg: "bg-purple-50", id: "neurology" },
  { icon: Stethoscope, name: "General Medicine", desc: "Internal medicine", color: "text-primary", bg: "bg-primary-light", id: "general-medicine" },
  { icon: Scissors, name: "General Surgery", desc: "Laparoscopic surgery", color: "text-secondary", bg: "bg-secondary-light", id: "general-surgery" },
  { icon: User, name: "Gynaecology", desc: "Women's health", color: "text-pink-500", bg: "bg-pink-50", id: "gynaecology" },
  { icon: Baby, name: "Pediatrics", desc: "Child healthcare", color: "text-yellow-500", bg: "bg-yellow-50", id: "pediatrics" },
  { icon: Activity, name: "ICU & Emergency", desc: "Critical care 24/7", color: "text-red-600", bg: "bg-red-50", id: "icu-emergency" },
  { icon: Microscope, name: "Diagnostics", desc: "Advanced lab & imaging", color: "text-indigo-500", bg: "bg-indigo-50", id: "diagnostics" },
  { icon: Dumbbell, name: "Physiotherapy", desc: "Rehabilitation care", color: "text-green-500", bg: "bg-green-50", id: "physiotherapy" },
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
            World-Class Medical Specialities
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Comprehensive care across 10+ specialities with experienced specialists and advanced technology.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
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
              <div className="font-semibold text-foreground text-sm mb-1">{spec.name}</div>
              <div className="text-muted-foreground text-xs">{spec.desc}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialitiesSection;
