import { Link } from "react-router-dom";
import { ArrowRight, Heart, Bone, Brain, Stethoscope, Scissors, Baby, Activity, Microscope, Dumbbell, User, Eye, Ear, Sparkles, type LucideIcon } from "lucide-react";
import HospitalHeader from "@/components/hospital/HospitalHeader";
import ContactFooter from "@/components/hospital/ContactFooter";
import FloatingButtons from "@/components/hospital/FloatingButtons";
import { specialities } from "@/data/hospitalData";

const iconMap: Record<string, LucideIcon> = {
  Heart, Bone, Brain, Stethoscope, Scissors, User, Baby, Activity, Microscope, Dumbbell, Eye, Ear, Sparkles,
};

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <HospitalHeader />
      <main>
        {/* Page Hero */}
        <section className="pt-32 pb-14 bg-gradient-primary">
          <div className="container-width text-center">
            <span className="inline-block text-primary-foreground/80 font-semibold text-sm uppercase tracking-widest mb-3">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
              Our Services
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Jaipur Hospital provides expert care in cardiology, orthopedics, neurology, and emergency services with advanced technology.
            </p>
          </div>
        </section>

        {/* All Services Grid */}
        <section className="section-padding bg-surface">
          <div className="container-width">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {specialities.map((spec) => {
                const Icon = iconMap[spec.icon] || Heart;
                return (
                  <Link
                    to={`/services/${spec.id}`}
                    key={spec.id}
                    className="group bg-card rounded-2xl border border-border shadow-card overflow-hidden card-hover flex flex-col"
                  >
                    {/* Image */}
                    <div className="h-48 overflow-hidden relative">
                      <img
                        src={spec.img}
                        alt={spec.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <div className={`absolute top-4 left-4 w-11 h-11 rounded-xl ${spec.bg} flex items-center justify-center shadow-md`}>
                        <Icon size={22} className={spec.color} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="font-display font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                        {spec.name}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1 line-clamp-3 text-justify">
                        {spec.fullDesc}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm group-hover:gap-2.5 transition-all">
                        Read More <ArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <ContactFooter />
      <FloatingButtons />
    </div>
  );
};

export default ServicesPage;
