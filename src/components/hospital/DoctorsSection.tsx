import { useState, useEffect, useRef } from "react";
import { Calendar, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { doctors, DOCTOR_DEPARTMENTS } from "@/data/hospitalData";

const DoctorsSection = () => {
  const [selected, setSelected] = useState("All Departments");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const filtered =
    selected === "All Departments"
      ? doctors
      : doctors.filter((d) => d.dept === selected);

  // Simple auto-scrolling marquee-style slider for doctor cards
  useEffect(() => {
    const container = scrollRef.current;
    if (!container || filtered.length === 0) return;

    let frameId: number;
    const speed = 0.5; // pixels per frame

    const animate = () => {
      container.scrollLeft += speed;
      // Reset to start when we reach the end
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 1) {
        container.scrollLeft = 0;
      }
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [filtered.length]);

  return (
    <section id="doctors" className="section-padding bg-surface">
      {/* Header */}
      <div className="container-width">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          <div>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-3 bg-primary-light px-4 py-1.5 rounded-full">
              Our Doctors
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Meet Our Expert Team
            </h2>
          </div>

          {/* Department filter */}
          <div className="relative">
            <button
              className="flex items-center gap-2 bg-card border border-border rounded-xl px-4 py-2.5 text-sm font-medium text-foreground shadow-sm hover:border-primary transition-colors"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              {selected}
              <ChevronDown size={16} className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-52 bg-card border border-border rounded-xl shadow-lg z-30 overflow-hidden">
                {DOCTOR_DEPARTMENTS.map((dept) => (
                  <button
                    key={dept}
                    className={`w-full text-left px-4 py-2.5 text-sm hover:bg-primary-light transition-colors ${
                      selected === dept ? "text-primary font-semibold bg-primary-light" : "text-foreground"
                    }`}
                    onClick={() => {
                      setSelected(dept);
                      setDropdownOpen(false);
                    }}
                  >
                    {dept}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Doctor Cards - auto sliding horizontally, full width */}
      <div
        ref={scrollRef}
        className="relative overflow-hidden mt-4"
      >
        <div className="flex gap-5 py-2 px-4 md:px-8 lg:px-16">
          {filtered.concat(filtered).map((doc, index) => (
            <Link
              to={`/doctors/${doc.id}`}
              key={`${doc.id}-${index}`}
              className="group bg-card rounded-2xl border border-border shadow-card overflow-hidden card-hover text-center min-w-[190px] sm:min-w-[210px]"
            >
              <div className="relative h-44 overflow-hidden bg-gradient-surface">
                <img
                  src={doc.img}
                  alt={doc.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/placeholder.svg";
                  }}
                />
              </div>
              <div className="p-4">
                <div className="font-display font-bold text-sm text-foreground mb-0.5 leading-snug">
                  {doc.name}
                </div>
                <div className="text-muted-foreground text-xs mb-1">{doc.qual}</div>
                <div className="inline-block bg-primary-light text-primary text-xs font-semibold px-2 py-0.5 rounded-full mb-2">
                  {doc.dept}
                </div>
                <div className="text-muted-foreground text-xs mb-3">{doc.exp} Exp.</div>
                <span className="flex items-center justify-center gap-1 bg-gradient-primary text-primary-foreground text-xs font-semibold rounded-lg px-3 py-2 hover:opacity-90 transition-opacity">
                  <Calendar size={12} />
                  View Profile
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
