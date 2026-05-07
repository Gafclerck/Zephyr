import { Link } from "react-router";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import LogoBlanc from "../../assets/logos/Logo-Zephyr-Blanc.png";
import LogoNoir  from "../../assets/logos/Logo-Zephyr-Noir.png";
import { useLanguage } from "../contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  const companyLinks = [
    { label: t("nav.services"),   to: "/services"  },
    { label: t("nav.portfolio"),  to: "/portfolio" },
    { label: t("nav.solutions"),  to: "/solutions" },
    { label: t("nav.blog"),       to: "/blog"      },
  ];

  const serviceLinks = [
    { label: t("footer.web"),      to: "/services/developpement-web"    },
    { label: t("footer.mobile"),   to: "/services/applications-mobiles" },
    { label: t("footer.branding"), to: "/services/branding-design"      },
    { label: t("footer.marketing"),to: "/services/marketing-digital"    },
  ];

  return (
    <footer className="bg-muted border-t border-[#1A3AFF]/15">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-[#1A3AFF]/15">

        {/* Brand */}
        <div className="p-6 md:p-8 lg:p-10 lg:border-r border-[#1A3AFF]/15">
          <Link to="/" className="flex items-center mb-6 group">
            <img src={LogoBlanc} alt="Zephyr Logo" className="h-8 hidden dark:block" />
            <img src={LogoNoir}  alt="Zephyr Logo" className="h-8 block dark:hidden" />
          </Link>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-[220px]">{t("footer.desc")}</p>
        </div>

        {/* Company */}
        <div className="p-6 md:p-8 lg:p-10 lg:border-r border-[#1A3AFF]/15 border-t md:border-t-0">
          <h4 className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted-foreground mb-6">{t("footer.company")}</h4>
          <ul className="space-y-3">
            {companyLinks.map(link => (
              <li key={link.to}>
                <Link to={link.to} className="text-sm text-foreground/70 hover:text-foreground transition-colors inline-flex items-center gap-1.5 group">
                  {link.label} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="p-6 md:p-8 lg:p-10 lg:border-r border-[#1A3AFF]/15 border-t lg:border-t-0">
          <h4 className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted-foreground mb-6">{t("footer.services")}</h4>
          <ul className="space-y-3">
            {serviceLinks.map(link => (
              <li key={link.to}>
                <Link to={link.to} className="text-sm text-foreground/70 hover:text-foreground transition-colors inline-flex items-center gap-1.5 group">
                  {link.label} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="p-6 md:p-8 lg:p-10 border-t lg:border-t-0">
          <h4 className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted-foreground mb-6">{t("footer.contact")}</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-[#1A3AFF] mt-0.5 shrink-0" />
              <a href="mailto:contact@zephyr.sn" className="text-sm text-foreground/70 hover:text-foreground transition-colors">contact@zephyr.sn</a>
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
            <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1A3AFF] text-white text-sm font-medium tracking-wide hover:bg-[#0D2FE0] transition-colors">
              {t("footer.start")} <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-5 gap-4">
        <p className="text-muted-foreground text-xs">{t("footer.rights")}</p>
        <div className="flex items-center gap-6">
          <Link to="/admin" className="text-muted-foreground/50 text-xs hover:text-muted-foreground transition-colors">Admin</Link>
          <span className="text-muted-foreground/30 text-xs">v1.0.0</span>
        </div>
      </div>
    </footer>
  );
}
