import { useRef } from "react";
import { Code, Smartphone, Palette, TrendingUp, ArrowRight, CheckCircle, ArrowUpRight, Globe, Zap, Shield, Users, ArrowDown } from "lucide-react";
import { Link } from "react-router";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";

interface ServiceData {
  id: string; slug: string; number: string; icon: React.ElementType;
  titleKey: string; shortDescKey: string; longDescKey: string;
  img: string;
  featureKeys: string[]; deliverableKeys: string[]; technologies: string[];
  startingPrice: string;
  highlight: { labelKey: string; value: string }[];
}

const SERVICES: ServiceData[] = [
  {
    id: "web", slug: "developpement-web", number: "01", icon: Code,
    titleKey: "services.web_title", shortDescKey: "services.web_short", longDescKey: "services.web_long",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    featureKeys: ["services.web_f1","services.web_f2","services.web_f3"],
    deliverableKeys: ["services.web_d1","services.web_d2","services.web_d3"],
    technologies: ["React","Next.js","TypeScript","Node.js"], startingPrice: "500K FCFA",
    highlight: [{ labelKey:"services.web_h1", value:"80+" },{ labelKey:"services.web_h2", value:"4 sem." },{ labelKey:"services.web_h3", value:"99%" }],
  },
  {
    id: "mobile", slug: "applications-mobiles", number: "02", icon: Smartphone,
    titleKey: "services.mobile_title", shortDescKey: "services.mobile_short", longDescKey: "services.mobile_long",
    img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop",
    featureKeys: ["services.mobile_f1","services.mobile_f2","services.mobile_f3"],
    deliverableKeys: ["services.mobile_d1","services.mobile_d2","services.mobile_d3"],
    technologies: ["React Native","Firebase","Node.js"], startingPrice: "2M FCFA",
    highlight: [{ labelKey:"services.mobile_h1", value:"35+" },{ labelKey:"services.mobile_h2", value:"200K+" },{ labelKey:"services.mobile_h3", value:"iOS/And." }],
  },
  {
    id: "branding", slug: "branding-design", number: "03", icon: Palette,
    titleKey: "services.branding_title", shortDescKey: "services.branding_short", longDescKey: "services.branding_long",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
    featureKeys: ["services.branding_f1","services.branding_f2","services.branding_f3"],
    deliverableKeys: ["services.branding_d1","services.branding_d2","services.branding_d3"],
    technologies: ["Figma","Illustrator","Photoshop"], startingPrice: "300K FCFA",
    highlight: [{ labelKey:"services.branding_h1", value:"60+" },{ labelKey:"services.branding_h2", value:"8" },{ labelKey:"services.branding_h3", value:"3/proj." }],
  },
  {
    id: "marketing", slug: "marketing-digital", number: "04", icon: TrendingUp,
    titleKey: "services.marketing_title", shortDescKey: "services.marketing_short", longDescKey: "services.marketing_long",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    featureKeys: ["services.marketing_f1","services.marketing_f2","services.marketing_f3"],
    deliverableKeys: ["services.marketing_d1","services.marketing_d2","services.marketing_d3"],
    technologies: ["Analytics","Ads","HubSpot"], startingPrice: "150K/mois",
    highlight: [{ labelKey:"services.marketing_h1", value:"40+" },{ labelKey:"services.marketing_h2", value:"10K+" },{ labelKey:"services.marketing_h3", value:"×4.2" }],
  },
];

const WHY_US_KEYS = [
  { icon: Zap,    titleKey:"services.why1_title", descKey:"services.why1_desc" },
  { icon: Shield, titleKey:"services.why2_title", descKey:"services.why2_desc" },
  { icon: Globe,  titleKey:"services.why3_title", descKey:"services.why3_desc" },
  { icon: Users,  titleKey:"services.why4_title", descKey:"services.why4_desc" },
];

export function Services() {
  return (
    <div className="bg-background min-h-screen selection:bg-[#1A3AFF] selection:text-white pb-24">
      <HeroSection />
      <div id="services-list" className="flex flex-col">
        {SERVICES.map((service, index) => <ServiceSection key={service.id} service={service} index={index} />)}
      </div>
      <ProcessSection />
      <WhyUsSection />
      <CtaSection />
    </div>
  );
}

function HeroSection() {
  const { scrollY } = useScroll();
  const y  = useTransform(scrollY, [0, 500], [0, 80]);
  const op = useTransform(scrollY, [0, 300], [1, 0]);
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden border-b border-border/40 bg-background">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-blueprint-fine" />
        <div className="absolute inset-0 bg-grid-blueprint-major" />
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <pattern id="svc-dot" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="0"   cy="0"   r="1.5" fill="var(--grid-dot)" />
              <circle cx="100" cy="0"   r="1.5" fill="var(--grid-dot)" />
              <circle cx="0"   cy="100" r="1.5" fill="var(--grid-dot)" />
              <circle cx="100" cy="100" r="1.5" fill="var(--grid-dot)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#svc-dot)" />
          <line x1="0" y1="50%" x2="100%" y2="50%" stroke="var(--grid-line-major)" strokeWidth="0.5" strokeDasharray="4 8" />
        </svg>
        <motion.div style={{ y, opacity: op }} className="absolute top-[-15%] right-[-5%] w-[55vw] h-[55vw] bg-[#1A3AFF]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="container relative z-20 px-6 md:px-12 mx-auto py-10 md:py-16">
        <motion.div initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8, ease:[0.16,1,0.3,1] }} className="max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-12 h-px bg-[#1A3AFF]" />
            <span className="eyebrow" style={{ marginBottom:0 }}>{t("services.eyebrow")}</span>
          </div>
          <h1 className="font-['Orbitron'] text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tight text-foreground mb-6">
            {t("services.title_1")} <br className="hidden md:block" />
            {t("services.title_2")}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-12">{t("services.subtitle")}</p>
          <div className="flex items-center gap-6">
            <button onClick={() => document.getElementById("services-list")?.scrollIntoView({ behavior:"smooth" })} className="w-14 h-14 rounded-none border border-border/50 flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-300 group">
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
            <span className="text-sm font-['Orbitron'] uppercase tracking-widest text-muted-foreground">{t("services.discover")}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ServiceSection({ service, index }: { service: ServiceData; index: number }) {
  const isEven = index % 2 === 0;
  const ref = useRef(null);
  const isInView = useInView(ref, { once:true, margin:"-20%" });
  const { t } = useLanguage();

  return (
    <section ref={ref} id={service.id} className="py-12 md:py-16 border-b border-border/40 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className={`flex flex-col gap-8 lg:gap-12 items-center ${isEven?"lg:flex-row":"lg:flex-row-reverse"}`}>
          <motion.div initial={{ opacity:0, x:isEven?-50:50 }} animate={isInView?{opacity:1,x:0}:{}} transition={{ duration:0.6, ease:[0.16,1,0.3,1] }} className="w-full lg:w-5/12 flex flex-col gap-8">
            <div>
              <h3 className="font-['Orbitron'] text-4xl lg:text-5xl font-semibold mb-6 tracking-tight text-foreground">{t(service.titleKey)}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">{t(service.longDescKey)}</p>
            </div>
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border/50">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-4 font-['Orbitron']">{t("services.key_points")}</p>
                <ul className="space-y-3">
                  {service.featureKeys.map(k => (
                    <li key={k} className="flex items-start gap-2 text-sm text-foreground/80">
                      <CheckCircle className="w-4 h-4 text-[#1A3AFF] shrink-0 mt-0.5" /><span>{t(k)}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-4 font-['Orbitron']">{t("services.deliverables")}</p>
                <ul className="space-y-3">
                  {service.deliverableKeys.map(k => (
                    <li key={k} className="flex items-start gap-2 text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-none bg-foreground/30 mt-1.5 shrink-0" /><span>{t(k)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="pt-6 border-t border-border/50 flex flex-wrap items-center gap-3">
              <Link to={`/services/${service.slug}`}>
                <button className="flex items-center gap-2 px-6 py-3 border border-border text-foreground hover:bg-muted/30 transition-colors font-medium">
                  {t("services.view_detail")} <ArrowUpRight className="w-4 h-4" />
                </button>
              </Link>
              <Link to="/contact">
                <button className="flex items-center gap-2 px-6 py-3 bg-[#1A3AFF] text-white hover:bg-[#0D2FE0] transition-colors font-medium">
                  {t("services.consult")} <ArrowUpRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity:0, scale:0.95 }} animate={isInView?{opacity:1,scale:1}:{}} transition={{ duration:0.6, ease:[0.16,1,0.3,1], delay:0.2 }} className="w-full lg:w-7/12">
            <div className="relative w-full h-[260px] md:h-[360px] lg:h-[440px] overflow-hidden group border border-border/40">
              <img src={service.img} alt={t(service.titleKey)} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 bg-background/50" />
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-4">
                {service.highlight.map(h => (
                  <div key={h.labelKey} className="bg-background/80 backdrop-blur-md p-4 border border-white/10">
                    <p className="font-['Orbitron'] text-xl md:text-2xl text-foreground mb-1">{h.value}</p>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{t(h.labelKey)}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 p-6 bg-muted/30 border border-border/50 flex items-center justify-between">
              <span className="text-sm font-['Orbitron'] uppercase tracking-wider text-muted-foreground">{t("services.tech_stack")}</span>
              <div className="flex items-center gap-2 flex-wrap justify-end">
                {service.technologies.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-background border border-border text-xs font-medium text-foreground/80">{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const { t } = useLanguage();
  const steps = [
    { n:"01", titleKey:"services.step1_title", descKey:"services.step1_desc" },
    { n:"02", titleKey:"services.step2_title", descKey:"services.step2_desc" },
    { n:"03", titleKey:"services.step3_title", descKey:"services.step3_desc" },
    { n:"04", titleKey:"services.step4_title", descKey:"services.step4_desc" },
  ];
  return (
    <section className="py-12 md:py-16 bg-muted border-y border-border/40">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <span className="eyebrow">{t("services.process_eyebrow")}</span>
            <h2 className="font-['Orbitron'] text-4xl md:text-5xl text-foreground tracking-tight">{t("services.process_title")}</h2>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 relative">
          {steps.map(step => (
            <div key={step.n} className="relative group">
              <div className="h-px w-full bg-border/60 absolute top-8 left-0 hidden lg:block" />
              <div className="w-12 h-12 bg-background border border-border flex items-center justify-center relative z-10 mb-6 group-hover:bg-[#1A3AFF] group-hover:border-[#1A3AFF] transition-colors">
                <span className="font-['Orbitron'] text-lg font-medium text-foreground group-hover:text-white transition-colors">{step.n}</span>
              </div>
              <h4 className="font-['Orbitron'] text-xl font-medium mb-4 text-foreground">{t(step.titleKey)}</h4>
              <p className="text-muted-foreground text-base leading-relaxed pr-6">{t(step.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUsSection() {
  const { t } = useLanguage();
  return (
    <section className="py-12 md:py-16 border-b border-border/40">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="eyebrow">{t("services.why_eyebrow")}</span>
          <h2 className="font-['Orbitron'] text-4xl md:text-5xl tracking-tight text-foreground">{t("services.why_title")}</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
          {WHY_US_KEYS.map(item => (
            <div key={item.titleKey} className="p-6 md:p-8 bg-muted/30 border border-border/50 hover:bg-muted/50 transition-colors">
              <div className="w-12 h-12 bg-background border border-border flex items-center justify-center mb-5 shadow-sm">
                <item.icon className="w-5 h-5 text-[#1A3AFF]" />
              </div>
              <h4 className="font-['Orbitron'] text-xl font-semibold mb-3 text-foreground">{t(item.titleKey)}</h4>
              <p className="text-base text-muted-foreground leading-relaxed">{t(item.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  const { t } = useLanguage();
  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0A1628] z-0" />
      <div className="container relative z-10 px-6 md:px-12 mx-auto text-center">
        <h2 className="font-['Orbitron'] text-4xl md:text-6xl text-white mb-6">{t("services.cta_title")}</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <Link to="/contact">
            <button className="w-full sm:w-auto px-8 py-4 bg-[#1A3AFF] text-white font-medium tracking-wide hover:bg-[#0D2FE0] transition-colors flex items-center justify-center gap-2">
              {t("services.cta_btn")} <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
