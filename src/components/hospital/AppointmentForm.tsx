import { useState } from "react";
import { Calendar, MessageCircle, User, Phone, Stethoscope, FileText, CheckCircle } from "lucide-react";

const departments = [
  "Cardiology", "Orthopaedics", "Neurology", "General Medicine",
  "General Surgery", "Gynaecology", "Pediatrics", "ICU & Emergency",
  "Diagnostics", "Physiotherapy",
];

const AppointmentForm = () => {
  const [form, setForm] = useState({
    name: "", phone: "", department: "", date: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", phone: "", department: "", date: "", message: "" });
  };

  const waMsg = `Hello Jaipur Hospital! I'd like to book an appointment.%0AName: ${form.name}%0APhone: ${form.phone}%0ADepartment: ${form.department}%0ADate: ${form.date}`;
  const waNumber = "919257029901";

  return (
    <section id="appointment" className="section-padding bg-background">
      <div className="container-width">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-3 bg-primary-light px-4 py-1.5 rounded-full">
              Book Appointment
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Schedule Your Visit
            </h2>
            <p className="text-muted-foreground">
              Fill the form below or reach us directly via WhatsApp.
            </p>
          </div>

          <div className="bg-card rounded-3xl border border-border shadow-lg-blue overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-primary p-6 text-center">
              <div className="text-primary-foreground font-display font-bold text-xl">
                Jaipur Hospital — Appointment Booking
              </div>
              <div className="text-primary-foreground/70 text-sm mt-1">
                We'll confirm your appointment within 30 minutes
              </div>
            </div>

            {submitted ? (
              <div className="p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} className="text-green-500" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-2">
                  Appointment Requested!
                </h3>
                <p className="text-muted-foreground">
                  Our team will call you shortly to confirm your appointment.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="relative">
                    <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Full Name *"
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-sm"
                    />
                  </div>
                  <div className="relative">
                    <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Phone Number *"
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-sm"
                    />
                  </div>
                  <div className="relative">
                    <Stethoscope size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <select
                      name="department"
                      value={form.department}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-sm appearance-none"
                    >
                      <option value="">Select Department *</option>
                      {departments.map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </div>
                  <div className="relative">
                    <Calendar size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-sm"
                    />
                  </div>
                </div>

                <div className="relative">
                  <FileText size={16} className="absolute left-3.5 top-3.5 text-muted-foreground" />
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Brief symptoms or message (optional)"
                    rows={3}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-sm resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-primary text-primary-foreground font-bold rounded-xl py-4 hover:opacity-90 transition-opacity shadow-md-blue"
                  >
                    <Calendar size={18} />
                    Book Appointment
                  </button>
                  <a
                    href={`https://wa.me/${waNumber}?text=${waMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white font-bold rounded-xl py-4 hover:bg-green-600 transition-colors"
                  >
                    <MessageCircle size={18} />
                    WhatsApp Appointment
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
