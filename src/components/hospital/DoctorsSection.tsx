import { useState, useEffect, useRef } from "react";
import { Calendar, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { doctors, DOCTOR_DEPARTMENTS } from "@/data/hospitalData";

const DoctorsSection = () => {
  const [selected, setSelected] = useState("All Departments");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const interactionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    return () => {
      if (interactionTimeoutRef.current) {
        clearTimeout(interactionTimeoutRef.current);
      }
    };
  }, []);

  const filtered =
    selected === "All Departments"
      ? doctors
      : doctors.filter((d) => d.dept === selected);

  // Simple auto-scrolling marquee-style slider for doctor cards
  useEffect(() => {
    const container = scrollRef.current;
    if (!container || filtered.length === 0 || isPaused || isInteracting) return;

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
  }, [filtered.length, isPaused, isInteracting]);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    // Pause auto-scroll temporarily for a smooth button transition
    setIsInteracting(true);

    const cardWidth = window.innerWidth < 640 ? 240 : 270;
    const scrollAmount = direction === "left" ? -cardWidth * 2 : cardWidth * 2;
    container.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });

    if (interactionTimeoutRef.current) {
      clearTimeout(interactionTimeoutRef.current);
    }
    interactionTimeoutRef.current = setTimeout(() => {
      setIsInteracting(false);
    }, 3000);
  };

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
              Meet the Best Doctors in Jaipur
            </h2>
            <p className="text-muted-foreground mt-2 max-w-xl text-sm md:text-base">
              Our 50+ specialist doctors are among the most experienced in Rajasthan, trained at top institutions and committed to delivering honest, patient-first care across every department.
            </p>
          </div>

          {/* Controls & Filter */}
          <div className="flex items-center gap-3 self-stretch sm:self-auto justify-between sm:justify-start">
            {/* Scroll Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                className="w-10 h-10 rounded-xl border border-border bg-card flex items-center justify-center hover:border-primary hover:text-primary transition-all shadow-sm active:scale-95"
                aria-label="Scroll left"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-10 h-10 rounded-xl border border-border bg-card flex items-center justify-center hover:border-primary hover:text-primary transition-all shadow-sm active:scale-95"
                aria-label="Scroll right"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Department filter */}
            <div className="relative flex-1 sm:flex-none" ref={dropdownRef}>
              <button
                className="w-full sm:w-auto flex items-center justify-between gap-2 bg-card border border-border rounded-xl px-4 py-2.5 text-sm font-medium text-foreground shadow-sm hover:border-primary transition-colors"
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
      </div>

      {/* Doctor Cards - auto sliding horizontally, full width */}
      <div
        ref={scrollRef}
        className="relative overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden mt-4 cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div className="flex gap-5 py-2 px-4 md:px-8 lg:px-16 w-max">
          {filtered.concat(filtered).map((doc, index) => (
            <Link
              to={`/doctors/${doc.id}`}
              key={`${doc.id}-${index}`}
              className="group bg-card rounded-2xl border border-border shadow-card overflow-hidden card-hover text-center w-[220px] sm:w-[250px] h-[370px] sm:h-[400px] flex-shrink-0 flex flex-col justify-between"
            >
              <div className="relative h-40 sm:h-44 overflow-hidden bg-gradient-surface flex-shrink-0">
                <img
                  src={doc.img}
                  alt={doc.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/placeholder.svg";
                  }}
                />
              </div>
              <div className="p-4 flex flex-col flex-1 justify-between">
                <div>
                  <div className="font-display font-bold text-sm text-foreground mb-1 leading-snug line-clamp-1">
                    {doc.name}
                  </div>
                  <div className="text-muted-foreground text-xs mb-2 line-clamp-2 h-8 flex items-center justify-center text-center">
                    {doc.qual}
                  </div>
                  <div className="mb-2">
                    <span className="inline-block bg-primary-light text-primary text-[11px] sm:text-xs font-semibold px-2.5 py-0.5 rounded-full truncate max-w-full">
                      {doc.dept}
                    </span>
                  </div>
                  <div className="text-muted-foreground text-xs mb-1">{doc.exp} Experience</div>
                </div>
                <span className="flex items-center justify-center gap-1 bg-gradient-primary text-primary-foreground text-xs font-semibold rounded-lg px-3 py-2 hover:opacity-90 transition-opacity w-full mt-2">
                  <Calendar size={12} />
                  View Profile
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* View All CTA */}
      <div className="container-width text-center mt-12">
        <Link
          to="/doctors"
          className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground font-bold rounded-full px-8 py-4 text-base shadow-lg-blue hover:scale-105 transition-transform"
        >
          View All Specialist Doctors
        </Link>
      </div>
    </section>
  );
};

export default DoctorsSection;
