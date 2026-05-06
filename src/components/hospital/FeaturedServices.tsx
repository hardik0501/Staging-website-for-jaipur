import { ArrowRight } from "lucide-react";
import heartImg from "@/assets/service-heart.jpg";
import emergencyImg from "@/assets/service-emergency.jpg";
import icuImg from "@/assets/facility-icu.jpg";

const services = [
  {
    img: heartImg,
    badge: "Cardiology",
    title: "Heart Care & Interventional Cardiology",
    desc: "State-of-the-art cardiac catheterization lab, 24/7 ICCU, and expert interventional cardiologists for complete heart health.",
    link: "#appointment",
  },
  {
    img: icuImg,
    badge: "Orthopaedics",
    title: "Joint Replacement & Orthopaedics",
    desc: "Advanced joint replacement surgeries using robotic-assisted techniques for faster recovery and better outcomes.",
    link: "#appointment",
  },
  {
    img: emergencyImg,
    badge: "Emergency",
    title: "Emergency & Critical Care",
    desc: "Fully equipped 24/7 emergency department with rapid response team, trauma care and advanced life support.",
    link: "#appointment",
  },
];

const FeaturedServices = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-width">
        <div className="text-center mb-14">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-3 bg-primary-light px-4 py-1.5 rounded-full">
            Featured Services
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Advanced Treatments & Care
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((svc, idx) => (
            <div
              key={svc.title}
              className="group rounded-3xl overflow-hidden border border-border shadow-card card-hover bg-card"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={svc.img}
                  alt={svc.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  {svc.badge}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-lg text-foreground mb-3 leading-snug">
                  {svc.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{svc.desc}</p>
                <a
                  href={svc.link}
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
