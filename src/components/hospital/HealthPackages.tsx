import { Heart, Droplets, Activity, Check, ArrowRight } from "lucide-react";

const packages = [
  {
    icon: Heart,
    title: "Heart Checkup Package",
    price: "₹1,499",
    original: "₹2,800",
    color: "text-red-500",
    bg: "bg-red-50",
    border: "border-red-100",
    highlight: false,
    tests: [
      "ECG",
      "Echo Cardiography",
      "Lipid Profile",
      "Blood Pressure Monitoring",
      "Cardiologist Consultation",
    ],
  },
  {
    icon: Droplets,
    title: "Diabetes & Thyroid Package",
    price: "₹999",
    original: "₹2,200",
    color: "text-primary",
    bg: "bg-primary-light",
    border: "border-primary/20",
    highlight: true,
    tests: [
      "Fasting Blood Sugar",
      "HbA1c",
      "Thyroid Profile (T3, T4, TSH)",
      "Urine Routine",
      "Physician Consultation",
    ],
  },
  {
    icon: Activity,
    title: "Full Body Checkup",
    price: "₹1,999",
    original: "₹4,500",
    color: "text-secondary",
    bg: "bg-secondary-light",
    border: "border-secondary/20",
    highlight: false,
    tests: [
      "CBC + Blood Group",
      "Liver & Kidney Function",
      "Lipid + Sugar + Thyroid",
      "Chest X-Ray + ECG",
      "Senior Physician Consultation",
    ],
  },
];

const HealthPackages = () => {
  return (
    <section className="section-padding bg-surface">
      <div className="container-width">
        <div className="text-center mb-14">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-3 bg-primary-light px-4 py-1.5 rounded-full">
            Health Packages
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Preventive Health Packages
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Affordable comprehensive health checkup packages designed for early detection and prevention.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className={`relative rounded-3xl border ${pkg.border} bg-card shadow-card card-hover overflow-hidden ${
                pkg.highlight ? "ring-2 ring-primary shadow-lg-blue" : ""
              }`}
            >
              {pkg.highlight && (
                <div className="bg-gradient-primary text-primary-foreground text-xs font-bold uppercase tracking-widest text-center py-2">
                  Most Popular
                </div>
              )}
              <div className="p-7">
                <div className={`w-14 h-14 rounded-2xl ${pkg.bg} flex items-center justify-center mb-5`}>
                  <pkg.icon size={28} className={pkg.color} />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-2">
                  {pkg.title}
                </h3>
                <div className="flex items-baseline gap-2 mb-5">
                  <span className="text-3xl font-bold text-foreground">{pkg.price}</span>
                  <span className="text-muted-foreground line-through text-sm">{pkg.original}</span>
                </div>

                <div className="space-y-2.5 mb-7">
                  {pkg.tests.map((test) => (
                    <div key={test} className="flex items-center gap-2.5 text-sm text-foreground/80">
                      <div className={`w-5 h-5 rounded-full ${pkg.bg} flex items-center justify-center flex-shrink-0`}>
                        <Check size={12} className={pkg.color} />
                      </div>
                      {test}
                    </div>
                  ))}
                </div>

                <a
                  href="#appointment"
                  className={`flex items-center justify-center gap-2 rounded-xl py-3 font-semibold text-sm transition-all hover:opacity-90 ${
                    pkg.highlight
                      ? "bg-gradient-primary text-primary-foreground shadow-md-blue"
                      : `${pkg.bg} ${pkg.color}`
                  }`}
                >
                  Book Package <ArrowRight size={15} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthPackages;
