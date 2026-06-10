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
    saveText: "Save 46%",
    description: "Best for anyone above 35 or with a family history of heart disease.",
    tests: [
      "ECG",
      "2D Echocardiography",
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
    saveText: "Save 55%",
    description: "Ideal for people managing blood sugar or thyroid conditions, or those wanting to screen for them.",
    tests: [
      "Fasting Blood Sugar",
      "HbA1c",
      "Thyroid Profile T3 T4 TSH",
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
    saveText: "Save 56%",
    description: "Comprehensive wellness screening for working adults and senior citizens.",
    tests: [
      "CBC and Blood Group",
      "Liver and Kidney Function Tests",
      "Lipid, Sugar and Thyroid Profile",
      "Chest X-Ray",
      "ECG",
      "Senior Physician Consultation",
    ],
  },
];

const HealthPackages = () => {
  return (
    <section className="section-padding bg-surface">
      <div className="container-width">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-3 bg-primary-light px-4 py-1.5 rounded-full">
            Health Packages
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Affordable Health Checkup Packages in Jaipur
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Prevention is always better than a cure. Our health checkup packages in Jaipur are priced to make early detection accessible to every family, not just those with generous budgets.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className={`relative flex flex-col justify-between rounded-3xl border ${pkg.border} bg-card shadow-card card-hover overflow-hidden ${
                pkg.highlight ? "ring-2 ring-primary shadow-lg-blue" : ""
              }`}
            >
              <div>
                {pkg.highlight && (
                  <div className="bg-gradient-primary text-primary-foreground text-xs font-bold uppercase tracking-widest text-center py-2">
                    Most Popular
                  </div>
                )}
                <div className="p-7">
                  <div className={`w-14 h-14 rounded-2xl ${pkg.bg} flex items-center justify-center mb-5`}>
                    <pkg.icon size={28} className={pkg.color} />
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-2 leading-snug">
                    {pkg.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl font-bold text-foreground">{pkg.price}</span>
                    <span className="text-muted-foreground line-through text-xs">{pkg.original}</span>
                    <span className="ml-auto text-xs font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded">
                      {pkg.saveText}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground text-xs leading-relaxed mb-5">
                    {pkg.description}
                  </p>

                  <div className="space-y-2.5 mb-7">
                    {pkg.tests.map((test) => (
                      <div key={test} className="flex items-center gap-2.5 text-xs text-foreground/80 leading-relaxed">
                        <div className={`w-5 h-5 rounded-full ${pkg.bg} flex items-center justify-center flex-shrink-0`}>
                          <Check size={12} className={pkg.color} />
                        </div>
                        {test}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-7 pb-7">
                <a
                  href="#appointment"
                  className={`w-full flex items-center justify-center gap-2 rounded-xl py-3 font-semibold text-sm transition-all hover:opacity-90 ${
                    pkg.highlight
                      ? "bg-gradient-primary text-primary-foreground shadow-md-blue"
                      : `${pkg.bg} ${pkg.color}`
                  }`}
                >
                  Book Your Health Checkup in Jaipur <ArrowRight size={15} />
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
