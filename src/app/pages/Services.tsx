import { useRef } from "react";
import {
  Code, Smartphone, Palette, TrendingUp,
  ArrowRight, CheckCircle, ArrowUpRight,
  Globe, Zap, Shield, Users, ArrowDown
} from "lucide-react";
import { Link } from "react-router";
import { motion, useScroll, useTransform, useInView } from "motion/react";

/* ─── Types ─── */
interface Service {
  id: string;
  number: string;
  icon: React.ElementType;
  title: string;
  shortDesc: string;
  longDesc: string;
  img: string;
  features: string[];
  deliverables: string[];
  technologies: string[];
  startingPrice: string;
  highlight: { label: string; value: string }[];
}

/* ─── Data ─── */
const SERVICES: Service[] = [
  {
    id: "web",
    number: "01",
    icon: Code,
    title: "Développement Web",
    shortDesc: "Sites & SaaS",
    longDesc: "Des plateformes web performantes, scalables et taillées pour la conversion.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    features: [
      "Architecture Headless",
      "Performances Core Web Vitals",
      "Optimisation SEO technique",
    ],
    deliverables: [
      "Code source documenté",
      "Déploiement CI/CD",
      "Documentation API",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js"],
    startingPrice: "500K FCFA",
    highlight: [
      { label: "Projets", value: "80+" },
      { label: "Délai", value: "4 sem." },
      { label: "Perf", value: "99%" },
    ],
  },
  {
    id: "mobile",
    number: "02",
    icon: Smartphone,
    title: "Applications Mobiles",
    shortDesc: "iOS & Android",
    longDesc: "Des expériences mobiles natives, fluides et engageantes pour vos utilisateurs.",
    img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop",
    features: [
      "React Native",
      "Mode hors connexion",
      "Notifications ciblées",
    ],
    deliverables: [
      "App iOS & Android",
      "Backend & API",
      "Publication stores",
    ],
    technologies: ["React Native", "Firebase", "Node.js"],
    startingPrice: "2M FCFA",
    highlight: [
      { label: "Apps", value: "35+" },
      { label: "DL", value: "200K+" },
      { label: "OS", value: "iOS/Android" },
    ],
  },
  {
    id: "branding",
    number: "03",
    icon: Palette,
    title: "Branding & Design",
    shortDesc: "Identité Visuelle",
    longDesc: "Une image de marque forte et cohérente, déclinée sur tous vos supports.",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
    features: [
      "Stratégie de marque",
      "Charte graphique",
      "Design System UI",
    ],
    deliverables: [
      "Fichiers vectoriels",
      "Brand Guidelines",
      "Librairie Figma",
    ],
    technologies: ["Figma", "Illustrator", "Photoshop"],
    startingPrice: "300K FCFA",
    highlight: [
      { label: "Marques", value: "60+" },
      { label: "Awards", value: "8" },
      { label: "Concepts", value: "3/projet" },
    ],
  },
  {
    id: "marketing",
    number: "04",
    icon: TrendingUp,
    title: "Marketing Digital",
    shortDesc: "Acquisition & SEO",
    longDesc: "Des stratégies pilotées par la donnée pour accélérer votre croissance.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    features: [
      "Campagnes Ads (Google/Meta)",
      "Stratégie de Contenu",
      "Emailing Automation",
    ],
    deliverables: [
      "Plan stratégique",
      "Reporting ROI",
      "Dashboards",
    ],
    technologies: ["Analytics", "Ads", "HubSpot"],
    startingPrice: "150K/mois",
    highlight: [
      { label: "Clients", value: "40+" },
      { label: "Leads", value: "10K+" },
      { label: "ROI", value: "×4.2" },
    ],
  },
];

const WHY_US = [
  { icon: Zap, title: "Exécution Rapide", desc: "Sprints agiles et itérations hebdomadaires." },
  { icon: Shield, title: "Qualité Supérieure", desc: "Code propre, tests et design premium." },
  { icon: Globe, title: "Vision 360°", desc: "Architecture, UI et marketing unifiés." },
  { icon: Users, title: "Équipe Experte", desc: "Un interlocuteur unique et dédié." },
];

/* ─── Page Component ─── */
export function Services() {
  return (
    <div className="bg-background min-h-screen selection:bg-[#1A3AFF] selection:text-white pb-24">
      <HeroSection />
      
      {/* Individual Service Sections */}
      <div id="services-list" className="flex flex-col">
        {SERVICES.map((service, index) => (
          <ServiceSection key={service.id} service={service} index={index} />
        ))}
      </div>

      <ProcessSection />
      <WhyUsSection />
      <CtaSection />
    </div>
  );
}

/* ─── Hero Section ─── */
function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden border-b border-border/40">
      <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background z-10" />
        <img
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
          alt="Abstract architecture"
          className="w-full h-full object-cover opacity-60 grayscale"
        />
      </motion.div>

      <div className="container relative z-20 px-6 md:px-12 mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="w-12 h-[1px] bg-[#1A3AFF]" />
            <span className="text-[#1A3AFF] font-['Orbitron'] text-xs tracking-[0.3em] uppercase font-semibold">
              Nos Services
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-medium leading-[1.05] tracking-tight text-foreground mb-8">
            Expertise <br className="hidden md:block" />
            <span className="text-foreground">
              Digitale Complète.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-12">
            Des solutions sur-mesure pour propulser votre entreprise. Nous couvrons l'ensemble de votre stratégie technologique et créative.
          </p>

          <div className="flex items-center gap-6">
            <button 
              onClick={() => {
                const el = document.getElementById("services-list");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-14 h-14 rounded-none border border-border/50 flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-300 group"
            >
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
            <span className="text-sm font-['Orbitron'] uppercase tracking-widest text-muted-foreground">
              Découvrir nos offres
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Individual Service Section ─── */
function ServiceSection({ service, index }: { service: Service; index: number }) {
  const isEven = index % 2 === 0;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section 
      ref={ref}
      id={service.id} 
      className="py-20 md:py-24 border-b border-border/40 relative"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className={`flex flex-col gap-16 lg:gap-20 items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
          
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-5/12 flex flex-col gap-8"
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-muted rounded-none flex items-center justify-center border border-border/50">
                  <service.icon className="w-6 h-6 text-[#1A3AFF]" />
                </div>
                <span className="font-['Orbitron'] text-3xl text-foreground/20 font-bold tracking-tighter">
                  {service.number}
                </span>
              </div>
              <h3 className="text-4xl lg:text-5xl font-semibold mb-6 tracking-tight text-foreground">{service.title}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {service.longDesc}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border/50">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-4 font-['Orbitron']">Points clés</p>
                <ul className="space-y-3">
                  {service.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm text-foreground/80">
                      <CheckCircle className="w-4 h-4 text-[#1A3AFF] shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-4 font-['Orbitron']">Livrables</p>
                <ul className="space-y-3">
                  {service.deliverables.map(d => (
                    <li key={d} className="flex items-start gap-2 text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-none bg-foreground/30 mt-1.5 shrink-0" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-border/50 flex flex-wrap items-center justify-between gap-6">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Budget moyen</p>
                <p className="text-xl font-['Orbitron'] font-semibold text-foreground">{service.startingPrice}</p>
              </div>
              <Link to="/contact">
                <button className="flex items-center gap-2 px-6 py-3 bg-[#1A3AFF] text-white rounded-none hover:bg-[#1A3AFF] transition-colors font-medium">
                  Nous consulter <ArrowUpRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="w-full lg:w-7/12"
          >
            <div className="relative w-full h-[500px] lg:h-[650px] rounded-none overflow-hidden group border border-border/40">
              <img 
                src={service.img} 
                alt={service.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-4">
                {service.highlight.map(h => (
                  <div key={h.label} className="bg-background/80 backdrop-blur-md p-4 rounded-none border border-white/10">
                    <p className="font-['Orbitron'] text-xl md:text-2xl text-foreground mb-1">{h.value}</p>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{h.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 p-6 bg-muted/30 border border-border/50 rounded-none flex items-center justify-between">
              <span className="text-sm font-['Orbitron'] uppercase tracking-wider text-muted-foreground">Tech Stack</span>
              <div className="flex items-center gap-2 flex-wrap justify-end">
                {service.technologies.map(t => (
                  <span key={t} className="px-3 py-1 bg-background border border-border rounded-none text-xs font-medium text-foreground/80">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

/* ─── Process Section ─── */
function ProcessSection() {
  const steps = [
    { n: "01", title: "Cadrage", desc: "Analyse des objectifs et specs techniques." },
    { n: "02", title: "Design", desc: "Création des interfaces UI/UX." },
    { n: "03", title: "Ingénierie", desc: "Développement agile en sprints." },
    { n: "04", title: "Lancement", desc: "Mise en production et tests QA." },
  ];

  return (
    <section className="py-20 md:py-24 bg-foreground text-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <span className="text-[#1A3AFF] font-['Orbitron'] text-xs tracking-widest uppercase block mb-4">
              Méthodologie
            </span>
            <h2 className="text-4xl md:text-5xl font-['Orbitron'] tracking-tight">Le processus</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 relative">
          {steps.map((step) => (
            <div key={step.n} className="relative group">
              <div className="h-[2px] w-full bg-background/10 absolute top-8 left-0 hidden lg:block" />
              <div className="w-16 h-16 rounded-none bg-background/5 border border-background/20 flex items-center justify-center relative z-10 mb-10 backdrop-blur-sm group-hover:bg-[#1A3AFF] group-hover:border-[#1A3AFF] transition-colors">
                <span className="font-['Orbitron'] text-lg font-medium">{step.n}</span>
              </div>
              <h4 className="text-2xl font-medium mb-4">{step.title}</h4>
              <p className="text-background/50 text-base leading-relaxed pr-6">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Why Us Section ─── */
function WhyUsSection() {
  return (
    <section className="py-20 md:py-24 border-b border-border/40">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-[#1A3AFF] font-['Orbitron'] text-xs tracking-widest uppercase block mb-4">
            L'avantage Zephyr
          </span>
          <h2 className="text-4xl md:text-5xl font-['Orbitron'] tracking-tight text-foreground">
            Pourquoi nous ?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-12">
          {WHY_US.map((item) => (
            <div key={item.title} className="p-10 md:p-14 bg-muted/30 border border-border/50 rounded-none hover:bg-muted/50 transition-colors">
              <div className="w-16 h-16 bg-background border border-border rounded-none flex items-center justify-center mb-8 shadow-sm">
                <item.icon className="w-7 h-7 text-[#1A3AFF]" />
              </div>
              <h4 className="text-2xl font-semibold mb-4 text-foreground">{item.title}</h4>
              <p className="text-lg text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA Section ─── */
function CtaSection() {
  return (
    <section className="py-20 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0A1628] z-0" />
      
      <div className="container relative z-10 px-6 md:px-12 mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-['Orbitron'] text-white mb-6">
          Prêt à commencer ?
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <Link to="/contact">
            <button className="w-full sm:w-auto px-8 py-4 bg-[#1A3AFF] text-white rounded-none font-medium tracking-wide hover:bg-[#1A3AFF] transition-colors flex items-center justify-center gap-2">
              Démarrer le projet <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
