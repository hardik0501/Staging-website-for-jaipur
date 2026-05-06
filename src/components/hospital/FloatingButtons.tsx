import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-3">
      {/* WhatsApp */}
      <a
        href="https://wa.me/919257029901?text=Hello%20Jaipur%20Hospital!%20I%20need%20assistance."
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 bg-green-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
        aria-label="WhatsApp"
      >
        <div className="w-14 h-14 flex items-center justify-center flex-shrink-0">
          <MessageCircle size={24} />
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
        <div className="w-14 h-14 flex items-center justify-center flex-shrink-0">
          <Phone size={22} />
        </div>
        <span className="text-sm font-semibold pr-4 hidden group-hover:inline-block whitespace-nowrap">
          Call Emergency
        </span>
      </a>
    </div>
  );
};

export default FloatingButtons;
