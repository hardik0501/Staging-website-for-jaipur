import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  return (
    <>
      {/* Desktop Floating Buttons (visible on tablet/desktop) */}
      <div className="fixed bottom-6 right-4 z-50 hidden sm:flex flex-col gap-3">
        {/* WhatsApp */}
        <a
          href="https://wa.me/919257029901?text=Hello%20Jaipur%20Hospital!%20I%20need%20assistance."
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 bg-green-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
          aria-label="WhatsApp"
        >
          <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center flex-shrink-0">
            <MessageCircle size={24} className="w-5 h-5 md:w-6 md:h-6" />
          </div>
          <span className="text-sm font-semibold pr-4 hidden group-hover:inline-block whitespace-nowrap">
            Chat on WhatsApp
          </span>
        </a>

        {/* Call */}
        <a
          href="tel:+919257029901"
          className="group flex items-center gap-2 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
          aria-label="Call Now"
        >
          <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center flex-shrink-0">
            <Phone size={22} className="w-5 h-5 md:w-6 md:h-6" />
          </div>
          <span className="text-sm font-semibold pr-4 hidden group-hover:inline-block whitespace-nowrap">
            Call Emergency
          </span>
        </a>
      </div>

      {/* Mobile Sticky Bottom Bar (visible on mobile only) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-t border-border p-3 flex sm:hidden gap-3 shadow-[0_-8px_30px_rgb(0,0,0,0.12)]">
        {/* Call CTA */}
        <a
          href="tel:+919257029901"
          className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold rounded-xl py-3.5 text-sm active:scale-95 transition-transform shadow-md"
        >
          <Phone size={16} />
          Call Now
        </a>

        {/* WhatsApp CTA */}
        <a
          href="https://wa.me/919257029901?text=Hello%20Jaipur%20Hospital!%20I%20need%20assistance."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white font-bold rounded-xl py-3.5 text-sm active:scale-95 transition-transform shadow-md"
        >
          <MessageCircle size={16} />
          WhatsApp Us
        </a>
      </div>
    </>
  );
};

export default FloatingButtons;
