import { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, ChevronDown, ArrowRight } from "lucide-react";
import HospitalHeader from "@/components/hospital/HospitalHeader";
import ContactFooter from "@/components/hospital/ContactFooter";
import FloatingButtons from "@/components/hospital/FloatingButtons";
import { doctors, DOCTOR_DEPARTMENTS } from "@/data/hospitalData";
import { SEO } from "@/components/SEO";

const DoctorsPage = () => {
  const [selected, setSelected] = useState("All Departments");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const filtered = selected === "All Departments"
    ? doctors
    : doctors.filter((d) => d.dept === selected);

  return (
    <div className="min-h-screen bg-background font-sans">
      <SEO title="Our Expert Doctors" description="Meet our team of 50+ specialist doctors providing world-class healthcare across all departments in Jaipur Hospital." canonical="/doctors" />
      <HospitalHeader />
      <main>
        {/* Page Hero */}
        <section className="pt-32 pb-12 bg-gradient-primary">
          <div className="container-width text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
              Our Expert Doctors
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Meet our team of 50+ specialist doctors providing world-class healthcare across all departments.
            </p>
          </div>
        </section>

        {/* Filter & Grid */}
        <section className="section-padding bg-surface">
          <div className="container-width">
            {/* Filter */}
            <div className="flex justify-end mb-8">
              <div className="relative w-full sm:w-auto">
                <button
                  className="w-full sm:w-auto flex justify-between sm:justify-start items-center gap-2 bg-card border border-border rounded-xl px-4 py-2.5 text-sm font-medium text-foreground shadow-sm hover:border-primary transition-colors"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  {selected}
                  <ChevronDown size={16} className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 w-full sm:w-52 bg-card border border-border rounded-xl shadow-lg z-30 overflow-hidden">
                    {DOCTOR_DEPARTMENTS.map((dept) => (
                      <button
                        key={dept}
                        className={`w-full text-left px-4 py-2.5 text-sm hover:bg-primary-light transition-colors ${selected === dept ? "text-primary font-semibold bg-primary-light" : "text-foreground"
                          }`}
                        onClick={() => { setSelected(dept); setDropdownOpen(false); }}
                      >
                        {dept}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Doctor Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((doc) => (
                <Link
                  to={`/doctors/${doc.id}`}
                  key={doc.id}
                  className="group bg-card rounded-2xl border border-border shadow-card overflow-hidden card-hover flex flex-col sm:flex-row"
                >
                  <div className="w-full sm:w-40 h-56 sm:h-auto flex-shrink-0 overflow-hidden bg-gradient-surface">
                    <img
                      src={doc.img}
                      alt={doc.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => { (e.target as HTMLImageElement).src = "/placeholder.svg"; }}
                    />
                  </div>
                  <div className="p-5 flex flex-col justify-between flex-1">
                    <div>
                      <div className="font-display font-bold text-foreground mb-1">{doc.name}</div>
                      <div className="text-muted-foreground text-sm mb-1">{doc.qual}</div>
                      <span className="inline-block bg-primary-light text-primary text-xs font-semibold px-2 py-0.5 rounded-full mb-1">
                        {doc.dept}
                      </span>
                      <div className="text-muted-foreground text-xs">{doc.exp} Experience</div>
                    </div>
                    <div className="flex items-center gap-3 mt-4">
                      <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                        View Profile <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <ContactFooter />
      <FloatingButtons />
    </div>
  );
};

export default DoctorsPage;
