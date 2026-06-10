import { Stethoscope, Phone } from "lucide-react";

const conditions = [
  { condition: "Heart attack and chest pain", dept: "Cardiology", routeId: "cardiology" },
  { condition: "Knee and hip arthritis", dept: "Orthopaedics", routeId: "orthopaedics" },
  { condition: "Stroke and brain conditions", dept: "Neurology", routeId: "neurology" },
  { condition: "Fever, dengue, and typhoid", dept: "General Medicine", routeId: "general-medicine" },
  { condition: "Diabetes management", dept: "General Medicine", routeId: "general-medicine" },
  { condition: "High blood pressure", dept: "General Medicine", routeId: "general-medicine" },
  { condition: "Pregnancy and normal delivery", dept: "Gynaecology and Obstetrics", routeId: "gynaecology" },
  { condition: "PCOD and women's health", dept: "Gynaecology", routeId: "gynaecology" },
  { condition: "Child illness and vaccination", dept: "Paediatrics", routeId: "pediatrics" },
  { condition: "Back pain and physiotherapy", dept: "Physiotherapy", routeId: "physiotherapy" },
  { condition: "Gallbladder stones and hernia", dept: "General Surgery", routeId: "general-surgery" },
  { condition: "Accident and trauma injuries", dept: "Emergency and ICU", routeId: "icu-emergency" },
];

const ConditionsWeTreat = () => {
  return (
    <section id="conditions" className="section-padding bg-surface">
      <div className="container-width">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-3 bg-primary-light px-4 py-1.5 rounded-full">
            Conditions We Treat
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            From Common Conditions to Complex Cases, We Are Here
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            Our team of specialist doctors in Jaipur diagnoses and treats a wide range of medical, surgical, and chronic conditions. Here are some of the most common reasons patients visit us.
          </p>
        </div>

        {/* Condition Grid */}
        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {conditions.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-4 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-sm transition-all"
            >
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="font-semibold text-foreground text-sm md:text-base">
                  {item.condition}
                </span>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary-light text-primary whitespace-nowrap">
                {item.dept}
              </span>
            </div>
          ))}
        </div>

        {/* Help line Callout */}
        <div className="mt-12 text-center bg-card border border-border rounded-2xl p-6 max-w-2xl mx-auto shadow-sm">
          <p className="text-muted-foreground text-sm md:text-base mb-4">
            Not sure which department you need? Call our team, and we will guide you to the right specialist.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="tel:+919257029901"
              className="flex items-center gap-2 bg-gradient-primary text-primary-foreground font-bold px-6 py-3 rounded-full text-sm hover:opacity-90 transition-opacity"
            >
              <Phone size={14} /> Call Patient Coordinator
            </a>
            <a
              href="#appointment"
              className="text-primary font-semibold text-sm hover:underline"
            >
              Or Book Appointment Online
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConditionsWeTreat;
