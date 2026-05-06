import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ramesh Agarwal",
    location: "Jaipur",
    rating: 5,
    text: "Dr. Sharma performed my angioplasty with exceptional skill. The ICU team was professional and caring throughout my stay. Best cardiac care in Jaipur!",
    dept: "Cardiology Patient",
  },
  {
    name: "Sunita Devi",
    location: "Dausa",
    rating: 5,
    text: "I had my knee replacement done here. The surgery was smooth and the physiotherapy team helped me walk within 3 days. Amazing results, I'm truly grateful.",
    dept: "Orthopaedics Patient",
  },
  {
    name: "Manoj Sharma",
    location: "Jaipur",
    rating: 5,
    text: "My son was treated in the NICU for 2 weeks. The pediatric team worked tirelessly and our baby recovered fully. Forever thankful to Jaipur Hospital.",
    dept: "Pediatrics Patient",
  },
  {
    name: "Kavya Gupta",
    location: "Ajmer",
    rating: 5,
    text: "Excellent maternity care! Dr. Priya Meena is a wonderful doctor. The delivery suite was clean and comfortable. Highly recommended for expectant mothers.",
    dept: "Gynaecology Patient",
  },
  {
    name: "Pradeep Singhania",
    location: "Jaipur",
    rating: 5,
    text: "Emergency care was outstanding. The team stabilized my father within minutes of arrival. The doctors are highly skilled and very compassionate.",
    dept: "Emergency Care",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((p) => (p + 1) % testimonials.length);

  const getVisible = () => {
    const indices = [];
    for (let i = -1; i <= 1; i++) {
      indices.push((current + i + testimonials.length) % testimonials.length);
    }
    return indices;
  };

  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container-width">
        <div className="text-center mb-14">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-3 bg-primary-light px-4 py-1.5 rounded-full">
            Patient Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            What Our Patients Say
          </h2>
        </div>

        {/* Main testimonial */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="relative bg-card border border-border rounded-3xl p-8 md:p-10 shadow-card">
            <Quote size={48} className="text-primary/10 absolute top-6 left-6" />
            <div className="relative">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-foreground/80 text-lg leading-relaxed mb-6 italic">
                "{testimonials[current].text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {testimonials[current].name[0]}
                </div>
                <div>
                  <div className="font-bold text-foreground">{testimonials[current].name}</div>
                  <div className="text-muted-foreground text-sm">
                    {testimonials[current].location} · {testimonials[current].dept}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center hover:border-primary hover:text-primary transition-colors shadow-sm"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`rounded-full transition-all ${
                  idx === current ? "w-8 h-3 bg-primary" : "w-3 h-3 bg-border hover:bg-primary/40"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center hover:border-primary hover:text-primary transition-colors shadow-sm"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
