import { Scissors, Activity, Truck, Microscope, Pill, Heart } from "lucide-react";

const usps = [
  {
    icon: Scissors,
    title: "Advanced Modular Operation Theatres",
    desc: "Our HEPA-filtered modular OTs meet international infection control standards, making every surgery at our private hospital in Jaipur significantly safer with a lower risk of post-operative complications.",
    color: "text-primary",
    bg: "bg-primary-light",
  },
  {
    icon: Activity,
    title: "ICU / CCU / NICU — Round the Clock",
    desc: "Our critical care units are managed by dedicated intensivists 24/7, with continuous bedside monitoring, ventilator support, and immediate access to specialists across departments.",
    color: "text-red-500",
    bg: "bg-red-50",
  },
  {
    icon: Truck,
    title: "24/7 Ambulance Service in Jaipur",
    desc: "Our GPS-enabled Advanced Life Support ambulances with trained paramedics bring care to you before you even reach the hospital. Available round the clock, every day of the year.",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    icon: Microscope,
    title: "NABL-Accredited Diagnostics",
    desc: "In-House MRI, CT scan, digital X-ray, colour Doppler, and a NABL-accredited pathology lab — all under one roof at our diagnostic centre in Jaipur. Fast results mean faster treatment decisions.",
    color: "text-secondary",
    bg: "bg-secondary-light",
  },
  {
    icon: Pill,
    title: "24/7 In-House Pharmacy",
    desc: "No running to outside pharmacies after late-night consultations. Our round-the-clock pharmacy stocks all essential medicines and medical supplies for both inpatients and emergency visitors.",
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
  {
    icon: Heart,
    title: "Cashless Treatment for All",
    desc: "As a CGHS, ECHS, and Ayushman Bharat hospital in Jaipur, we ensure that government employees, defence personnel, and insured patients receive seamless cashless treatment without paperwork delays.",
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
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 leading-tight">
            Why Patients Choose Jaipur Hospital Over Other Hospitals
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            Being the best hospital in Jaipur is not just about equipment. It is about consistently earning the trust of patients and families across Rajasthan, one recovery at a time.
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
              <h3 className="font-display font-bold text-lg text-foreground mb-2 leading-snug">{usp.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{usp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
