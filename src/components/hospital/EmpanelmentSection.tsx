import { CheckCircle, ArrowRight } from "lucide-react";

const insurers = [
  "CGHS", "ECHS", "Ayushman Bharat", "Star Health", "HDFC ERGO",
  "ICICI Lombard", "New India", "United India", "Bajaj Allianz",
  "SBI Health", "Niva Bupa", "Aditya Birla Health",
  "CGHS", "ECHS", "Ayushman Bharat", "Star Health", "HDFC ERGO",
  "ICICI Lombard", "New India", "United India", "Bajaj Allianz",
];

const benefits = [
  "Cashless treatment facility",
  "Government CGHS & ECHS empanelled",
  "Ayushman Bharat (PM-JAY) registered",
  "20+ insurance TPA tie-ups",
];

const EmpanelmentSection = () => {
  return (
    <section className="section-padding bg-surface overflow-hidden">
      <div className="container-width">
        <div className="bg-gradient-primary rounded-3xl overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Left */}
              <div>
                <span className="inline-block text-primary-foreground/70 font-semibold text-sm uppercase tracking-widest mb-4 bg-primary-foreground/15 px-4 py-1.5 rounded-full">
                  Cashless & Empanelment
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-6 leading-snug">
                  Cashless & Government Empanelment Available
                </h2>
                <div className="space-y-3 mb-8">
                  {benefits.map((b) => (
                    <div key={b} className="flex items-center gap-3 text-primary-foreground/90">
                      <CheckCircle size={18} className="text-yellow-300 flex-shrink-0" />
                      <span className="text-sm font-medium">{b}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="#appointment"
                  className="inline-flex items-center gap-2 bg-primary-foreground text-primary font-bold rounded-full px-7 py-3.5 hover:scale-105 transition-transform shadow-lg"
                >
                  Check Eligibility <ArrowRight size={16} />
                </a>
              </div>

              {/* Right - Scrolling logos */}
              <div>
                <div className="text-primary-foreground font-semibold text-sm mb-4 uppercase tracking-wide">
                  Our Insurance & TPA Partners
                </div>
                <div className="overflow-hidden relative">
                  <div className="flex gap-3 animate-marquee w-max">
                    {insurers.map((name, idx) => (
                      <div
                        key={`${name}-${idx}`}
                        className="flex-shrink-0 bg-primary-foreground/20 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground font-semibold text-sm px-5 py-2.5 rounded-xl whitespace-nowrap"
                      >
                        {name}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="overflow-hidden relative mt-3">
                  <div className="flex gap-3 animate-marquee w-max" style={{ animationDirection: "reverse", animationDuration: "25s" }}>
                    {[...insurers].reverse().map((name, idx) => (
                      <div
                        key={`${name}-r-${idx}`}
                        className="flex-shrink-0 bg-primary-foreground/15 border border-primary-foreground/15 text-primary-foreground/80 font-medium text-sm px-5 py-2.5 rounded-xl whitespace-nowrap"
                      >
                        {name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmpanelmentSection;
