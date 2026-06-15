import { MessageCircle, Phone } from "lucide-react";

const AppointmentForm = () => {
  const waNumber = "919257029901";
  const waMsg = "Hello Jaipur Hospital! I'd like to book an appointment. Please help me with doctor availability and timings.";
  const primaryPhone = "0141-2741465";

  return (
    <section id="appointment" className="section-padding bg-surface border-t border-border">
      <div className="container-width">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-3 bg-primary-light px-4 py-1.5 rounded-full">
              Quick Booking
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Book Your Appointment Instantly
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              We have simplified the booking process. Connect with our helpdesk directly on WhatsApp or make a phone call to secure your appointment in under 2 minutes.
            </p>
          </div>

          <div className="bg-card rounded-3xl border border-border shadow-lg-blue overflow-hidden hover:shadow-xl-blue transition-all duration-300">
            <div className="p-6 md:p-10 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-green-100 text-green-500 flex items-center justify-center mx-auto animate-bounce">
                <MessageCircle size={36} />
              </div>
              
              <div className="space-y-2">
                <h3 className="font-display font-bold text-2xl text-foreground">
                  Connect on WhatsApp
                </h3>
                <p className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto leading-relaxed">
                  Click below to chat with our patient care coordinator. You can share your preferred department, doctor, and timings for instant confirmation.
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
                <a
                  href={`https://wa.me/${waNumber}?text=${encodeURIComponent(waMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 flex items-center justify-center gap-2.5 bg-green-500 hover:bg-green-600 text-white font-bold rounded-2xl py-4 px-6 text-base transition-all hover:scale-102 hover:shadow-lg shadow-green-500/20"
                >
                  <MessageCircle size={20} />
                  Book on WhatsApp
                </a>
                
                <a
                  href={`tel:${primaryPhone}`}
                  className="w-full sm:flex-1 flex items-center justify-center gap-2.5 border-2 border-primary text-primary hover:bg-primary-light font-bold rounded-2xl py-3.5 px-6 text-base transition-all hover:scale-102"
                >
                  <Phone size={18} />
                  Call Reception
                </a>
              </div>

              <div className="pt-4 text-xs md:text-sm text-muted-foreground flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>Our representative is online and ready to assist you</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
