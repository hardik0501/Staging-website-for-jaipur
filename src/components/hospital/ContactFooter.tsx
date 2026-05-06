import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { HOSPITAL_CONTACT } from "@/data/hospitalData";
import logoJH from "@/assets/logo-jh.png";

const footerLinks: Record<string, { label: string; href: string }[]> = {
  "Quick Links": [
    { label: "About Us", href: "/about" },
    { label: "Our Doctors", href: "/doctors" },
    { label: "Services", href: "/services" },
    { label: "Facilities", href: "/facilities" },
  ],
  "Patient Care": [
    { label: "Book Appointment", href: "/#appointment" },
    { label: "Empanelment", href: "/#empanelment" },
    { label: "Health Packages", href: "/#packages" },
    { label: "Testimonials", href: "/#testimonials" },
    { label: "Contact", href: "/contact" },
  ],
  "Hospital": [
    { label: "Career", href: "/contact" },
    { label: "Contact Us", href: "/contact" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Use", href: "#" },
  ],
};

const ContactFooter = () => {
  return (
    <footer id="contact" className="bg-navy text-navy-foreground">
      {/* Map + Contact Info */}
      <div className="container-width py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            {/* Logo */}
            <div className="flex items-center mb-8">
              <img
                src={logoJH}
                alt="Jaipur Hospital - we care for life"
                className="h-28 md:h-32 w-auto"
              />
            </div>

            <p className="text-navy-foreground/60 text-sm mb-8 leading-relaxed max-w-md">
              Jaipur Hospital is a trusted multispeciality hospital providing advanced healthcare with compassion, 
              expertise and cutting-edge technology to the people of Rajasthan since 2004.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-primary-glow flex-shrink-0 mt-0.5" />
                <span className="text-navy-foreground/80 text-sm">
                  {HOSPITAL_CONTACT.address}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-primary-glow flex-shrink-0 mt-0.5" />
                <div className="text-navy-foreground/80 text-sm space-y-0.5">
                  {HOSPITAL_CONTACT.phones.map((ph) => (
                    <a key={ph} href={`tel:${ph.replace(/[^+\d]/g, "")}`} className="hover:text-primary-glow transition-colors block">
                      {ph}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-primary-glow flex-shrink-0" />
                <a href={`mailto:${HOSPITAL_CONTACT.email}`} className="text-navy-foreground/80 text-sm hover:text-primary-glow transition-colors">
                  {HOSPITAL_CONTACT.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={18} className="text-primary-glow flex-shrink-0" />
                <span className="text-navy-foreground/80 text-sm">OPD: {HOSPITAL_CONTACT.opdTimings} · Emergency: {HOSPITAL_CONTACT.emergencyTimings}</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3">
              {[Facebook, Instagram, Youtube, Twitter].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-navy-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Icon size={16} className="text-navy-foreground/70" />
                </a>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-navy-foreground/10 h-72 lg:h-auto min-h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.347356439285!2d75.80222627502319!3d26.892469076659104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db420e65e5acb%3A0x2b5b8e5dec74b037!2sJaipur%20Hospital-%20Best%20hospital%20in%20Lal%20kothi%20Jaipur%20%7C%20Multispeciality%20hospital%20in%20Jaipur!5e0!3m2!1sen!2sin!4v1773386283154!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Jaipur Hospital Location"
            />
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-14 pt-10 border-t border-navy-foreground/10">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-display font-semibold text-navy-foreground mb-4 text-sm uppercase tracking-wide">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("/") ? (
                      <Link
                        to={link.href}
                        className="text-navy-foreground/60 text-sm hover:text-primary-glow transition-colors"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-navy-foreground/60 text-sm hover:text-primary-glow transition-colors"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-foreground/10 py-5">
        <div className="container-width flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-navy-foreground/50">
          <span>© 2026 Jaipur Hospital, Jaipur. All rights reserved.</span>
          <span>Designed for excellence in healthcare</span>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
