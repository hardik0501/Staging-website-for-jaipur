import { Calendar, Phone, MessageCircle, ShieldCheck, Clock, Stethoscope } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/Gallery/2.jpg"
          alt="Jaipur Hospital Building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/30 via-transparent to-navy/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-width text-center pt-32 pb-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-primary-foreground/15 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-6 animate-fade-up">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-primary-foreground text-sm font-medium">
            Trusted Healthcare Since 2004 · Jaipur, Rajasthan
          </span>
        </div>

        <h1
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-primary-foreground mb-6 leading-tight animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          Trusted Multispeciality
          <br />
          <span className="text-yellow-300">Hospital in Jaipur</span>
        </h1>

        <p
          className="text-lg md:text-xl text-primary-foreground/85 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Advanced care, expert doctors, 24/7 emergency & critical support.
          Your health is our highest priority.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="#appointment"
            className="flex items-center gap-2 bg-primary-foreground text-primary font-bold rounded-full px-8 py-4 text-base shadow-lg-blue hover:scale-105 transition-transform"
          >
            <Calendar size={18} />
            Book Appointment
          </a>
          <a
            href="tel:+919257029901"
            className="flex items-center gap-2 bg-primary-foreground/15 backdrop-blur-sm border border-primary-foreground/30 text-primary-foreground font-semibold rounded-full px-8 py-4 text-base hover:bg-primary-foreground/25 transition-colors"
          >
            <Phone size={18} />
            Call Now
          </a>
          <a
            href="https://wa.me/919257029901"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 text-white font-semibold rounded-full px-8 py-4 text-base hover:bg-green-600 transition-colors"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
        </div>

        {/* Trust Badges */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          {[
            { icon: Clock, label: "24/7 Emergency", desc: "Always Available" },
            { icon: Stethoscope, label: "50+ Specialists", desc: "Expert Doctors" },
            { icon: ShieldCheck, label: "Advanced ICU", desc: "Critical Care" },
          ].map(({ icon: Icon, label, desc }) => (
            <div
              key={label}
              className="flex items-center gap-3 bg-primary-foreground/12 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl px-5 py-3"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/80 flex items-center justify-center">
                <Icon size={20} className="text-primary-foreground" />
              </div>
              <div className="text-left">
                <div className="text-primary-foreground font-bold text-sm">{label}</div>
                <div className="text-primary-foreground/70 text-xs">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/60">
        <span className="text-xs">Scroll to explore</span>
        <div className="w-5 h-8 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-primary-foreground/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
