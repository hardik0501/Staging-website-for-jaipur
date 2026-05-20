import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ArrowRight, Calendar, Check, Heart, Bone, Brain, Stethoscope, Scissors, Baby, Activity, Microscope, Dumbbell, User, Eye, Ear, Sparkles, Phone, type LucideIcon } from "lucide-react";
import HospitalHeader from "@/components/hospital/HospitalHeader";
import ContactFooter from "@/components/hospital/ContactFooter";
import FloatingButtons from "@/components/hospital/FloatingButtons";
import { getSpecialityById, getDoctorsForSpeciality, specialities, HOSPITAL_CONTACT } from "@/data/hospitalData";

const iconMap: Record<string, LucideIcon> = {
  Heart, Bone, Brain, Stethoscope, Scissors, User, Baby, Activity, Microscope, Dumbbell, Eye, Ear, Sparkles,
};

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const speciality = getSpecialityById(id || "");
  const associatedDoctors = getDoctorsForSpeciality(id || "");

  if (!speciality) {
    return (
      <div className="min-h-screen bg-background font-sans">
        <HospitalHeader />
        <main className="pt-32 pb-20">
          <div className="container-width text-center">
            <h1 className="text-3xl font-display font-bold text-foreground mb-4">Service Not Found</h1>
            <Link to="/services" className="text-primary font-semibold hover:underline">← Back to Services</Link>
          </div>
        </main>
        <ContactFooter />
      </div>
    );
  }

  const Icon = iconMap[speciality.icon] || Heart;
  const otherServices = specialities.filter((s) => s.id !== id).slice(0, 5);

  return (
    <div className="min-h-screen bg-background font-sans">
      <Helmet>
        <title>{speciality.metaTitle || `${speciality.name} Services | Jaipur Hospital`}</title>
        <meta name="description" content={speciality.metaDescription || speciality.shortDesc} />
      </Helmet>
      <HospitalHeader />
      <main>
        {/* Breadcrumb */}
        <section className="pt-28 pb-4 bg-surface border-b border-border">
          <div className="container-width flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors flex-shrink-0">Home</Link>
            <span className="flex-shrink-0">/</span>
            <Link to="/services" className="hover:text-primary transition-colors flex-shrink-0">Services</Link>
            <span className="flex-shrink-0">/</span>
            <span className="text-foreground font-medium truncate max-w-full">{speciality.name}</span>
          </div>
        </section>

        {/* Hero */}
        <section className="relative h-72 md:h-96 overflow-hidden">
          <img src={speciality.img} alt={speciality.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/50 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="container-width">
              <div className="max-w-2xl">
                <div className={`w-16 h-16 rounded-2xl ${speciality.bg} flex items-center justify-center mb-5 shadow-lg`}>
                  <Icon size={32} className={speciality.color} />
                </div>
                <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-3">{speciality.name}</h1>
                <p className="text-white/80 text-lg md:text-xl">{speciality.shortDesc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding bg-surface">
          <div className="container-width">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* About */}
                {speciality.htmlContent ? (
                  <div className="bg-card rounded-2xl border border-border shadow-card p-6 md:p-8 prose prose-sm sm:prose-base prose-gray max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:text-justify prose-li:text-muted-foreground prose-strong:text-foreground">
                    <div dangerouslySetInnerHTML={{ __html: speciality.htmlContent }} />
                  </div>
                ) : (
                  <div className="bg-card rounded-2xl border border-border shadow-card p-6 md:p-8">
                    <h2 className="font-display font-bold text-2xl text-foreground mb-4">About {speciality.name}</h2>
                    <p className="text-muted-foreground leading-relaxed text-base text-justify">{speciality.fullDesc}</p>
                  </div>
                )}

                {/* Treatments */}
                <div className="bg-card rounded-2xl border border-border shadow-card p-6 md:p-8">
                  <h2 className="font-display font-bold text-2xl text-foreground mb-6">Treatments & Procedures</h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {speciality.treatments.map((treatment) => (
                      <div key={treatment} className="flex items-center gap-3 bg-surface rounded-xl px-4 py-3.5 border border-border/50">
                        <div className={`w-7 h-7 rounded-full ${speciality.bg} flex items-center justify-center flex-shrink-0`}>
                          <Check size={14} className={speciality.color} />
                        </div>
                        <span className="text-foreground text-sm font-medium">{treatment}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Associated Doctors */}
                {associatedDoctors.length > 0 && (
                  <div className="bg-card rounded-2xl border border-border shadow-card p-6 md:p-8">
                    <h2 className="font-display font-bold text-2xl text-foreground mb-6">Our Specialists</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {associatedDoctors.map((doc) => (
                        <Link
                          to={`/doctors/${doc.id}`}
                          key={doc.id}
                          className="group flex flex-col sm:flex-row items-center sm:items-start gap-4 bg-surface rounded-2xl p-4 border border-border hover:border-primary hover:shadow-md transition-all text-center sm:text-left"
                        >
                          <img src={doc.img} alt={doc.name} className="w-20 h-20 sm:w-16 sm:h-16 rounded-xl object-cover object-top flex-shrink-0" />
                          <div>
                            <div className="font-display font-bold text-foreground">{doc.name}</div>
                            <div className="text-muted-foreground text-xs mb-1">{doc.qual}</div>
                            <div className="text-muted-foreground text-xs mb-2">{doc.exp} Experience</div>
                            <span className="inline-flex items-center justify-center sm:justify-start gap-1 text-primary text-xs font-semibold group-hover:gap-1.5 transition-all w-full sm:w-auto">
                              View Profile <ArrowRight size={10} />
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Book Appointment CTA */}
                <div className="bg-card rounded-2xl border border-border shadow-card p-6 sticky top-28">
                  <h3 className="font-display font-bold text-lg text-foreground mb-3">Need an Appointment?</h3>
                  <p className="text-muted-foreground text-sm mb-5">
                    Book a consultation with our {speciality.name} specialist today.
                  </p>
                  <a
                    href="/#appointment"
                    className="flex items-center justify-center gap-2 bg-gradient-primary text-primary-foreground font-semibold rounded-xl py-3 hover:opacity-90 transition-opacity mb-3 w-full"
                  >
                    <Calendar size={16} /> Book Appointment
                  </a>
                  <a
                    href={`tel:${HOSPITAL_CONTACT.primaryPhone}`}
                    className="flex items-center justify-center gap-2 border-2 border-primary text-primary font-semibold rounded-xl py-3 hover:bg-primary-light transition-colors mb-3 w-full"
                  >
                    <Phone size={16} /> Call Now
                  </a>
                  <a
                    href={`https://wa.me/${HOSPITAL_CONTACT.whatsapp}?text=Hello! I'd like to consult a ${speciality.name} specialist.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-green-500 text-white font-semibold rounded-xl py-3 hover:bg-green-600 transition-colors w-full"
                  >
                    WhatsApp Us
                  </a>
                </div>

                {/* Other Specialities */}
                <div className="bg-card rounded-2xl border border-border shadow-card p-6">
                  <h3 className="font-display font-bold text-lg text-foreground mb-4">Other Services</h3>
                  <div className="space-y-2">
                    {otherServices.map((s) => {
                      const SIcon = iconMap[s.icon] || Heart;
                      return (
                        <Link
                          to={`/services/${s.id}`}
                          key={s.id}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-surface transition-colors group"
                        >
                          <div className={`w-9 h-9 rounded-lg ${s.bg} flex items-center justify-center flex-shrink-0`}>
                            <SIcon size={16} className={s.color} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="text-foreground text-sm font-medium block truncate">{s.name}</span>
                            <span className="text-muted-foreground text-xs">{s.shortDesc}</span>
                          </div>
                          <ArrowRight size={14} className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ContactFooter />
      <FloatingButtons />
    </div>
  );
};

export default ServiceDetail;
