import { Scissors, Activity, Truck, Microscope, Pill, Heart } from "lucide-react";

const usps = [
  {
    icon: Scissors,
    title: "Advanced OT",
    desc: "State-of-the-art modular operation theatres with HEPA filtration and robotic assistance.",
    color: "text-primary",
    bg: "bg-primary-light",
  },
  {
    icon: Activity,
    title: "ICU / CCU / NICU",
    desc: "Advanced critical care units with 24/7 intensivist coverage and monitoring.",
    color: "text-red-500",
    bg: "bg-red-50",
  },
  {
    icon: Truck,
    title: "24/7 Ambulance",
    desc: "GPS-enabled advanced life support ambulances with trained paramedics.",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    icon: Microscope,
    title: "Digital Diagnostics",
    desc: "In-house MRI, CT scan, digital X-ray and NABL-accredited lab with rapid results.",
    color: "text-secondary",
    bg: "bg-secondary-light",
  },
  {
    icon: Pill,
    title: "Pharmacy Support",
    desc: "24/7 in-house pharmacy with all essential medicines and medical supplies.",
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
  {
    icon: Heart,
    title: "Patient-First Care",
    desc: "Dedicated patient coordinators, multilingual staff and compassionate care.",
    color: "text-pink-500",
    bg: "bg-pink-50",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-width">
        <div className="text-center mb-14">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-3 bg-primary-light px-4 py-1.5 rounded-full">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            The Jaipur Hospital Difference
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We combine world-class technology with compassionate care to deliver exceptional health outcomes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {usps.map((usp, idx) => (
            <div
              key={usp.title}
              className="group p-6 bg-card rounded-2xl border border-border shadow-card card-hover"
            >
              <div
                className={`w-14 h-14 rounded-2xl ${usp.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
              >
                <usp.icon size={26} className={usp.color} />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-2">{usp.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{usp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
