import { Link } from "react-router";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import LogoBlanc from "../../assets/logos/Logo-Zephyr-Blanc.png";
import LogoNoir from "../../assets/logos/Logo-Zephyr-Noir.png";

const FOOTER_LINKS = {
  company: [
    { label: "Services", to: "/services" },
    { label: "Portfolio", to: "/portfolio" },
    { label: "Solutions", to: "/solutions" },
    { label: "Blog", to: "/blog" },
  ],
  services: [
    { label: "Website Development", to: "/services" },
    { label: "Mobile Apps", to: "/services" },
    { label: "Branding & Design", to: "/services" },
    { label: "Digital Marketing", to: "/services" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-muted border-t border-[#1A3AFF]/15">
      {/* Main grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-[#1A3AFF]/15">
        {/* Brand */}
        <div className="p-10 lg:border-r border-[#1A3AFF]/15">
          <Link to="/" className="flex items-center mb-6 group">
            <img 
              src={LogoBlanc} 
              alt="Zephyr Logo" 
              className="h-8 hidden dark:block" 
            />
            <img 
              src={LogoNoir} 
              alt="Zephyr Logo" 
              className="h-8 block dark:hidden" 
            />
          </Link>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-[220px]">
            Agence digitale premium. Nous construisons des expériences web et mobile qui génèrent des résultats mesurables.
          </p>
        </div>

        {/* Company */}
        <div className="p-10 lg:border-r border-[#1A3AFF]/15 border-t md:border-t-0">
          <h4 className="font-['Orbitron'] text-xs tracking-widest uppercase text-muted-foreground mb-6">
            Company
          </h4>
          <ul className="space-y-3">
            {FOOTER_LINKS.company.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors inline-flex items-center gap-1.5 group"
                >
                  {link.label}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="p-10 lg:border-r border-[#1A3AFF]/15 border-t lg:border-t-0">
          <h4 className="font-['Orbitron'] text-xs tracking-widest uppercase text-muted-foreground mb-6">
            Services
          </h4>
          <ul className="space-y-3">
            {FOOTER_LINKS.services.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="p-10 border-t lg:border-t-0">
          <h4 className="font-['Orbitron'] text-xs tracking-widest uppercase text-muted-foreground mb-6">
            Contact
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-[#1A3AFF] mt-0.5 shrink-0" />
              <a
                href="mailto:contact@zephyr.sn"
                className="text-sm text-foreground/70 hover:text-foreground transition-colors"
              >
                contact@zephyr.sn
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-[#1A3AFF] mt-0.5 shrink-0" />
              <span className="text-sm text-foreground/70">+221 XX XXX XX XX</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#1A3AFF] mt-0.5 shrink-0" />
              <span className="text-sm text-foreground/70">Dakar, Sénégal</span>
            </li>
          </ul>

          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1A3AFF] text-white text-sm font-['Orbitron'] tracking-wider hover:bg-[#1A3AFF] transition-colors"
            >
              Start a Project
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col md:flex-row items-center justify-between px-10 py-5 gap-4">
        <p className="text-muted-foreground text-xs">
          © 2025 Zephyr — Agence Digitale. Tous droits réservés.
        </p>
        <div className="flex items-center gap-6">
          <Link to="/admin" className="text-muted-foreground/50 text-xs hover:text-muted-foreground transition-colors">
            Admin
          </Link>
          <span className="text-muted-foreground/30 text-xs">v1.0.0</span>
        </div>
      </div>
    </footer>
  );
}
