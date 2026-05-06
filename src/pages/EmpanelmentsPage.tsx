import HospitalHeader from "@/components/hospital/HospitalHeader";
import ContactFooter from "@/components/hospital/ContactFooter";
import FloatingButtons from "@/components/hospital/FloatingButtons";
import { CheckCircle2, Building, Shield, Coins, CreditCard, ChevronRight } from "lucide-react";

const schemes = [
  {
    title: "Cashless @ CGHS Rate",
    icon: Shield,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-200",
    items: [
      "CGHS Pensioners",
      "ECHS Pensioners",
      "State Govt. 2004 & Above",
      "Airport Authority of India",
      "Vipul TPA (Jaipur Dairy)",
      "Ex-members of Parliament",
      "Freedom Fighters",
      "ESIC SMC/ Model Hospital",
      "Serving CGHS Employees",
      "Retired Judges (Supreme Court / High Court)",
      "Former Vice President",
      "P.M. & Governors"
    ]
  },
  {
    title: "Cashless @ Hospital Rate (TPA & Banking)",
    icon: Building,
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
    borderColor: "border-indigo-200",
    items: [
      "Alankit TPA",
      "Family Health Plan Ltd.",
      "Dedicated Healthcare TPA",
      "M.D. India",
      "Mediassist TPA",
      "Raksha TPA",
      "Religare Healthcare TPA",
      "Reserve Bank of India (RBI)",
      "SBI Bank",
      "Bank of India",
      "HPCL"
    ]
  },
  {
    title: "Cash Payment @ Hospital Rate",
    icon: Coins,
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-200",
    items: [
      "Raj. State Govt. (Before 2004)",
      "Jaipur Development Authority (JDA)",
      "National Textile Co. Ltd.",
      "HUDCO",
      "SBI Retired Employees",
      "UCO Bank",
      "ITC",
      "Rashtriya Ispat Nigam",
      "RCDF Employees",
      "State Govt. 2004 & Above"
    ]
  },
  {
    title: "Cash Payment @ CGHS Rate",
    icon: CreditCard,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-200",
    items: [
      "Post & Telegraph Dept.",
      "A.G. Office / IT Dept.",
      "Excise & Custom Dept.",
      "Defense Service Civilian",
      "CGHS Beneficiaries in service",
      "CIERI (Pilani)",
      "Central Sheep & Wool Dept.",
      "National Fertilizer",
      "CIPET"
    ]
  }
];

const EmpanelmentsPage = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <HospitalHeader />
      <main className="pt-24">
        {/* Page Hero */}
        <section className="pt-16 pb-12 bg-gradient-primary">
          <div className="container-width text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
              Empanelments
            </h1>
            <div className="flex items-center justify-center gap-2 text-primary-foreground/80 text-sm font-medium mb-4">
              <span>Jaipur Hospital</span>
              <ChevronRight size={14} />
              <span className="text-primary-foreground">Empanelments</span>
            </div>
            <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto">
              Details of Beneficiaries & Facility Schemes
            </p>
          </div>
        </section>

        {/* Schemes Section */}
        <section className="py-20 bg-surface">
          <div className="container-width">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {schemes.map((scheme, index) => {
                const Icon = scheme.icon;
                return (
                  <div 
                    key={index} 
                    className={`bg-card rounded-3xl border ${scheme.borderColor} shadow-sm overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300`}
                  >
                    {/* Header */}
                    <div className="p-6 border-b border-border flex items-center gap-4 bg-slate-50">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${scheme.bgColor} ${scheme.color}`}>
                        <Icon size={28} />
                      </div>
                      <h2 className="text-2xl font-display font-bold text-foreground">
                        {scheme.title}
                      </h2>
                    </div>
                    
                    {/* List Items */}
                    <div className="p-6 flex-1">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                        {scheme.items.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 group">
                            <CheckCircle2 size={18} className={`${scheme.color} mt-0.5 flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity`} />
                            <span className="text-muted-foreground group-hover:text-foreground transition-colors text-sm font-medium">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
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

export default EmpanelmentsPage;
