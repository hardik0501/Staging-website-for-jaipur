import HospitalHeader from "@/components/hospital/HospitalHeader";
import ContactFooter from "@/components/hospital/ContactFooter";
import FloatingButtons from "@/components/hospital/FloatingButtons";
import { Info, FileSearch, Link2, Users, Phone, Mail, Globe } from "lucide-react";

const Regulation46and62Page = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <HospitalHeader />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-12 bg-gradient-primary">
          <div className="container-width text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-4">
              Regulation 46 &amp; 62 Disclosures
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-3xl mx-auto">
              Overview of disclosures made under Regulation 46 and 62 of SEBI (LODR) Regulations, 2015 and a guide to
              key investor information available on this website.
            </p>
          </div>
        </section>

        {/* Search (static UI) */}
        <section className="bg-surface border-b border-border">
          <div className="container-width max-w-4xl py-6">
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <FileSearch className="w-4 h-4 text-primary" />
                <span>Write search keyword &amp; press Enter</span>
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full px-3 py-2 text-sm rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-surface">
          <div className="container-width max-w-5xl space-y-10">
            {/* Company / regulation summary */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Info className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold text-foreground">
                    Disclosure under Regulation 46 &amp; 62
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    As per SEBI (Listing Obligations &amp; Disclosure Requirements) Regulations, 2015.
                  </p>
                </div>
              </div>

              <div className="bg-card rounded-2xl border border-border shadow-card p-6 md:p-8 space-y-4 text-sm md:text-base">
                <p className="text-muted-foreground leading-relaxed">
                  M/s Sharma East India Hospitals and Medical Research Limited is a public limited Company
                  incorporated in 1989, listed at BSE Limited, and is engaged in the provision of medical and
                  healthcare services. The Company runs a multi-specialty hospital in the name and style of{" "}
                  <span className="font-semibold text-foreground">Jaipur Hospital</span> at Lal Kothi, Tonk Road,
                  Jaipur – 302015, Rajasthan.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The CIN of the Company is{" "}
                  <span className="font-semibold text-foreground">L85110RJ1989PLC005206</span>. The ISIN of the
                  Company is{" "}
                  <span className="font-semibold text-foreground">INE465H01012</span>. The BSE Scrip Code of the
                  Company is{" "}
                  <span className="font-semibold text-foreground">524548 (SHARMEH)</span>.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The Registered Address of the Company is:
                </p>
                <div className="text-sm text-muted-foreground leading-relaxed">
                  <p>Jaipur Hospital</p>
                  <p>Near SMS Stadium</p>
                  <p>Lal Kothi, Tonk Road</p>
                  <p>Jaipur – 302015 (Rajasthan)</p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Stakeholders of the Company may please visit the{" "}
                  <span className="font-semibold text-foreground">“Investors”</span> section of the website for
                  detailed reports and compliances.
                </p>
              </div>
            </section>

            {/* Gist of Investors section */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Link2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold text-foreground">
                    Gist of the “Investors” Section
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Summary of information available under different tabs for investors.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="bg-card rounded-2xl border border-border shadow-card p-5 space-y-2 text-sm">
                  <h3 className="font-semibold text-foreground">Listing Information</h3>
                  <p className="text-muted-foreground">
                    Contains information about the Company and its listing at the recognised stock exchange, including
                    contact details for investor grievances.
                  </p>
                </div>
                <div className="bg-card rounded-2xl border border-border shadow-card p-5 space-y-2 text-sm">
                  <h3 className="font-semibold text-foreground">Notice of AGM</h3>
                  <p className="text-muted-foreground">
                    Contains notices of Annual General Meetings of the Company for the information of investors.
                  </p>
                </div>
                <div className="bg-card rounded-2xl border border-border shadow-card p-5 space-y-2 text-sm">
                  <h3 className="font-semibold text-foreground">Financial Results</h3>
                  <p className="text-muted-foreground">
                    Contains financial results approved for various quarters of the Company.
                  </p>
                </div>
                <div className="bg-card rounded-2xl border border-border shadow-card p-5 space-y-2 text-sm">
                  <h3 className="font-semibold text-foreground">Shareholder’s Information</h3>
                  <p className="text-muted-foreground">
                    Contains the shareholding pattern of the Company for various quarters.
                  </p>
                </div>
                <div className="bg-card rounded-2xl border border-border shadow-card p-5 space-y-2 text-sm">
                  <h3 className="font-semibold text-foreground">Annual Reports</h3>
                  <p className="text-muted-foreground">
                    Contains the annual reports of the Company for the information of investors.
                  </p>
                </div>
                <div className="bg-card rounded-2xl border border-border shadow-card p-5 space-y-2 text-sm">
                  <h3 className="font-semibold text-foreground">Corporate Governance</h3>
                  <p className="text-muted-foreground">
                    Contains Board Meeting intimations, voting results of AGMs, various policies (Preservation, Archival,
                    Materiality), Regulation 13(3) Investor Complaints, Regulation 27(2) Non-Applicability of Corporate
                    Governance, Regulation 74(5), Regulation 76 reports, outcomes of Board Meetings and Grievance
                    Redressal Mechanism for investors.
                  </p>
                </div>
                <div className="bg-card rounded-2xl border border-border shadow-card p-5 space-y-2 text-sm">
                  <h3 className="font-semibold text-foreground">Notice of Book Closure</h3>
                  <p className="text-muted-foreground">
                    Contains notices of book closure disclosure for the Company.
                  </p>
                </div>
                <div className="bg-card rounded-2xl border border-border shadow-card p-5 space-y-2 text-sm">
                  <h3 className="font-semibold text-foreground">Regulation 46 &amp; 62</h3>
                  <p className="text-muted-foreground">
                    Provides this consolidated gist of inclusions of various reports and compliances on the website and
                    an overview of information relevant for investor relations.
                  </p>
                </div>
              </div>
            </section>

            {/* Quick links */}
            <section>
              <h2 className="text-xl font-display font-bold text-foreground mb-4">Quick Links</h2>
              <div className="flex flex-wrap gap-3 text-sm">
                <a
                  href="/listing-information"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-colors"
                >
                  <Link2 className="w-4 h-4 text-primary" />
                  Listing Information
                </a>
                <a
                  href="/notice-of-agm"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-colors"
                >
                  <Link2 className="w-4 h-4 text-primary" />
                  Notice of AGM
                </a>
                <a
                  href="/financial-results"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-colors"
                >
                  <Link2 className="w-4 h-4 text-primary" />
                  Financial Results
                </a>
                <a
                  href="/shareholders-information"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-colors"
                >
                  <Link2 className="w-4 h-4 text-primary" />
                  Shareholder&apos;s Information
                </a>
                <a
                  href="/annual-report"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-colors"
                >
                  <Link2 className="w-4 h-4 text-primary" />
                  Annual Reports
                </a>
                <a
                  href="/corporate-governance"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-colors"
                >
                  <Link2 className="w-4 h-4 text-primary" />
                  Corporate Governance
                </a>
                <a
                  href="/notice-of-book-closure"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-colors"
                >
                  <Link2 className="w-4 h-4 text-primary" />
                  Notice of Book Closure
                </a>
                <a
                  href="/board-of-directors"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-colors"
                >
                  <Link2 className="w-4 h-4 text-primary" />
                  Board of Directors &amp; KMP
                </a>
              </div>
            </section>

            {/* Board and KMP table */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold text-foreground">
                    Details of the Board of Directors &amp; Key Managerial Personnel
                  </h2>
                </div>
              </div>

              <div className="bg-card rounded-2xl border border-border shadow-card p-4 md:p-6 overflow-x-auto">
                <table className="w-full text-xs md:text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface text-left">
                      <th className="border-b border-border px-2 py-2 font-semibold">Sr. No.</th>
                      <th className="border-b border-border px-2 py-2 font-semibold">Name</th>
                      <th className="border-b border-border px-2 py-2 font-semibold">
                        Category (Promoter / Director / Compliance Officer)
                      </th>
                      <th className="border-b border-border px-2 py-2 font-semibold">DIN</th>
                      <th className="border-b border-border px-2 py-2 font-semibold">PAN</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-b border-border px-2 py-2 align-top">1</td>
                      <td className="border-b border-border px-2 py-2 align-top">Shri. Shailendra Kumar Sharma</td>
                      <td className="border-b border-border px-2 py-2 align-top">Promoter – Managing Director</td>
                      <td className="border-b border-border px-2 py-2 align-top">00432070</td>
                      <td className="border-b border-border px-2 py-2 align-top">AFEPS7340Q</td>
                    </tr>
                    <tr>
                      <td className="border-b border-border px-2 py-2 align-top">2</td>
                      <td className="border-b border-border px-2 py-2 align-top">
                        Shri. Pushpendra Prasad Garg and CA Rajeev Kumar
                      </td>
                      <td className="border-b border-border px-2 py-2 align-top">
                        Independent Non-Executive Directors
                      </td>
                      <td className="border-b border-border px-2 py-2 align-top">
                        10304570 and 07847472
                      </td>
                      <td className="border-b border-border px-2 py-2 align-top">
                        ACCPG2105L and ABQPK1584Q
                      </td>
                    </tr>
                    <tr>
                      <td className="border-b border-border px-2 py-2 align-top">3</td>
                      <td className="border-b border-border px-2 py-2 align-top">Ms. Maya Sharma</td>
                      <td className="border-b border-border px-2 py-2 align-top">Non-Executive Woman Director</td>
                      <td className="border-b border-border px-2 py-2 align-top">00432496</td>
                      <td className="border-b border-border px-2 py-2 align-top">ABXPS3785L</td>
                    </tr>
                    <tr>
                      <td className="border-b border-border px-2 py-2 align-top">4</td>
                      <td className="border-b border-border px-2 py-2 align-top">Shri. Karan Sharma</td>
                      <td className="border-b border-border px-2 py-2 align-top">Non-Executive Director</td>
                      <td className="border-b border-border px-2 py-2 align-top">01484050</td>
                      <td className="border-b border-border px-2 py-2 align-top">BPJPS1420R</td>
                    </tr>
                    <tr>
                      <td className="border-b border-border px-2 py-2 align-top">5</td>
                      <td className="border-b border-border px-2 py-2 align-top">Shri. Pawan Shorey</td>
                      <td className="border-b border-border px-2 py-2 align-top">
                        Independent Non-Executive Director
                      </td>
                      <td className="border-b border-border px-2 py-2 align-top">10636955</td>
                      <td className="border-b border-border px-2 py-2 align-top">ACZPS7413G</td>
                    </tr>
                    <tr>
                      <td className="border-b border-border px-2 py-2 align-top">6</td>
                      <td className="border-b border-border px-2 py-2 align-top">Shri. Srikant Vinayakrao Bulakh</td>
                      <td className="border-b border-border px-2 py-2 align-top">
                        Independent Non-Executive Director
                      </td>
                      <td className="border-b border-border px-2 py-2 align-top">10637125</td>
                      <td className="border-b border-border px-2 py-2 align-top">AESPB8318L</td>
                    </tr>
                    <tr>
                      <td className="border-b border-border px-2 py-2 align-top">7</td>
                      <td className="border-b border-border px-2 py-2 align-top">Ms. Radhika Sathe</td>
                      <td className="border-b border-border px-2 py-2 align-top">Non-Executive Woman Director</td>
                      <td className="border-b border-border px-2 py-2 align-top">10645753</td>
                      <td className="border-b border-border px-2 py-2 align-top">CTLPS2523L</td>
                    </tr>
                    <tr>
                      <td className="border-b border-border px-2 py-2 align-top">8</td>
                      <td className="border-b border-border px-2 py-2 align-top">Shri. Vimal Kumar Joshi</td>
                      <td className="border-b border-border px-2 py-2 align-top">Chief Financial Officer</td>
                      <td className="border-b border-border px-2 py-2 align-top">N.A.</td>
                      <td className="border-b border-border px-2 py-2 align-top">AECPJ3849L</td>
                    </tr>
                    <tr>
                      <td className="border-b border-border px-2 py-2 align-top">9</td>
                      <td className="border-b border-border px-2 py-2 align-top">Ms. Bhawana Sharma</td>
                      <td className="border-b border-border px-2 py-2 align-top">Company Secretary</td>
                      <td className="border-b border-border px-2 py-2 align-top">N.A.</td>
                      <td className="border-b border-border px-2 py-2 align-top">HEKPS8865A</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Investor grievance contact */}
            <section>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                Investor Grievance Contact
              </h2>
              <div className="bg-card rounded-2xl border border-border shadow-card p-5 md:p-6 space-y-4 text-sm">
                <p className="text-muted-foreground">
                  Investor grievance may be sent to the Registered Office of the Company:
                </p>
                <div className="space-y-1 text-muted-foreground">
                  <p className="font-semibold text-foreground">
                    Bhawana Sharma
                  </p>
                  <p>Company Secretary &amp; Compliance Officer</p>
                  <p>Sharma East India Hospitals and Medical Research Limited</p>
                </div>
                <div className="space-y-1 text-muted-foreground">
                  <p>Jaipur Hospital, Near SMS Stadium</p>
                  <p>Lal Kothi, Tonk Road</p>
                  <p>Jaipur – 302015 (Rajasthan)</p>
                </div>
                <div className="space-y-1 text-muted-foreground">
                  <p className="flex flex-wrap items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    <span>
                      Tel: 0141-2742557, 2742266, 2742619, 2741465
                    </span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    <span>sharmaeastindia@gmail.com</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-primary" />
                    <span>www.jaipurhospital.co.in</span>
                  </p>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
      <ContactFooter />
      <FloatingButtons />
    </div>
  );
};

export default Regulation46and62Page;

