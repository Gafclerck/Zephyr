import { useState, useRef } from "react";
import {
  Code, Smartphone, Palette, TrendingUp,
  ArrowRight, CheckCircle, ArrowUpRight,
  Globe, Zap, Shield, Users
} from "lucide-react";
import { Link } from "react-router";
import { motion, useInView, AnimatePresence } from "motion/react";

/* ─── Types ─── */
interface Service {
  id: string;
  number: string;
  icon: React.ElementType;
  title: string;
  shortDesc: string;
  longDesc: string;
  img: string;
  imgLabel: string;
  features: string[];
  deliverables: string[];
  technologies: string[];
  timeline: string;
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
    shortDesc: "Sites haute performance, e-commerce, SaaS",
    longDesc:
      "On conçoit et développe des sites web qui convertissent. Du site vitrine au SaaS complexe, chaque ligne de code est pensée pour la performance, le SEO et l'expérience utilisateur.",
    img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&h=800&fit=crop",
    imgLabel: "Service Web — Screenshot projet ou mockup device",
    features: [
      "Design responsive tous écrans",
      "Optimisation SEO dès la structure",
      "Temps de chargement < 2 secondes",
      "CMS headless ou intégré",
      "E-commerce Shopify / WooCommerce",
      "Progressive Web Apps (PWA)",
      "Analytics et suivi conversions",
      "Maintenance et évolutions",
    ],
    deliverables: [
      "Maquettes Figma validées",
      "Code source complet",
      "Documentation technique",
      "Formation CMS",
      "Déploiement + hébergement",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Vercel", "Stripe"],
    timeline: "2 – 8 semaines",
    startingPrice: "500 000 FCFA",
    highlight: [
      { label: "Projets livrés", value: "80+" },
      { label: "Taux satisfaction", value: "98%" },
      { label: "Délai moyen", value: "4 sem." },
    ],
  },
  {
    id: "mobile",
    number: "02",
    icon: Smartphone,
    title: "Applications Mobiles",
    shortDesc: "iOS & Android natifs ou cross-platform",
    longDesc:
      "Applications mobiles performantes et intuitives. On utilise React Native pour couvrir iOS et Android avec un seul code optimisé, ou le développement natif pour les cas exigeants.",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=800&fit=crop",
    imgLabel: "Service Mobile — Mockup phones avec interface app",
    features: [
      "iOS & Android (une seule codebase)",
      "Interface native et fluide",
      "Mode hors connexion",
      "Notifications push",
      "Authentification sécurisée",
      "Intégration paiement mobile",
      "Backend API REST / GraphQL",
      "Optimisation App Store (ASO)",
    ],
    deliverables: [
      "Wireframes et prototypes",
      "Application iOS et Android",
      "API backend documentée",
      "Publication App Store / Play Store",
      "Guide d'utilisation",
    ],
    technologies: ["React Native", "Expo", "TypeScript", "Firebase", "Node.js", "AWS", "Redux", "Jest"],
    timeline: "6 – 16 semaines",
    startingPrice: "2 000 000 FCFA",
    highlight: [
      { label: "Apps publiées", value: "35+" },
      { label: "Downloads cumulés", value: "200K+" },
      { label: "Plateformes", value: "iOS & Android" },
    ],
  },
  {
    id: "branding",
    number: "03",
    icon: Palette,
    title: "Branding & Design",
    shortDesc: "Identité visuelle complète et mémorable",
    longDesc:
      "Une marque forte, c'est un avantage compétitif durable. On construit des identités visuelles qui reflètent votre positionnement et parlent à votre cible, des stratégies de marque aux supports de communication.",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop",
    imgLabel: "Service Branding — Planche d'identité visuelle, logo",
    features: [
      "Stratégie de marque et positionnement",
      "Logo design (3 concepts initiaux)",
      "Palette de couleurs et typographie",
      "Charte graphique complète",
      "Templates réseaux sociaux",
      "Cartes de visite et supports print",
      "Motion design pour digital",
      "Brand guidelines document",
    ],
    deliverables: [
      "Charte graphique PDF + Figma",
      "Logo tous formats (SVG, PNG, etc.)",
      "Kit réseaux sociaux",
      "Templates print",
      "Fichiers sources complets",
    ],
    technologies: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "After Effects", "Notion"],
    timeline: "2 – 4 semaines",
    startingPrice: "300 000 FCFA",
    highlight: [
      { label: "Projets branding", value: "60+" },
      { label: "Secteurs couverts", value: "15+"},
      { label: "Awards design", value: "8" },
    ],
  },
  {
    id: "marketing",
    number: "04",
    icon: TrendingUp,
    title: "Marketing Digital",
    shortDesc: "Croissance mesurable, ROI prouvé",
    longDesc:
      "Stratégies data-driven qui génèrent des leads qualifiés. SEO, publicité payante, réseaux sociaux et email marketing : on pilote chaque canal avec des KPIs clairs et des reportings transparents.",
    img: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=1200&h=800&fit=crop",
    imgLabel: "Service Marketing — Dashboard analytics, graphiques croissance",
    features: [
      "Audit SEO et stratégie de contenu",
      "Optimisation on-page et technique",
      "Google Ads & Meta Ads",
      "Gestion réseaux sociaux (3 plateformes)",
      "Email marketing et automation",
      "Création de contenus (texte + visuels)",
      "Reporting mensuel détaillé",
      "A/B testing et optimisation CRO",
    ],
    deliverables: [
      "Audit initial complet",
      "Plan éditorial mensuel",
      "Rapports de performance",
      "Bibliothèque de contenus",
      "Recommandations mensuelles",
    ],
    technologies: ["Google Analytics", "Google Ads", "Meta Business", "SEMrush", "HubSpot", "Mailchimp", "Hotjar"],
    timeline: "Minimum 3 mois",
    startingPrice: "150 000 FCFA/mois",
    highlight: [
      { label: "Clients marketing", value: "40+" },
      { label: "Leads générés", value: "10 000+" },
      { label: "ROI moyen", value: "×4.2" },
    ],
  },
];

const WHY_US = [
  { icon: Zap, title: "Livraison rapide", desc: "Sprints agiles, livraisons itératives. On respecte les délais, point." },
  { icon: Shield, title: "Code de qualité", desc: "Tests automatisés, code review, documentation. Rien n'est laissé au hasard." },
  { icon: Globe, title: "Vision globale", desc: "UX, performance, SEO, accessibilité. On pense à tout dès le départ." },
  { icon: Users, title: "Équipe dédiée", desc: "Un interlocuteur unique, une équipe senior. Communication directe, zéro bureaucratie." },
];

/* ─── Page Component ─── */
export function Services() {
  const [activeId, setActiveId] = useState<string>("web");
  const activeService = SERVICES.find((s) => s.id === activeId)!;

  return (
    <div className="bg-background min-h-screen">
      {/* ── HERO ── */}
      <HeroSection />

      {/* ── SERVICE EXPLORER ── */}
      <section className="border-b border-[#1A3AFF]/15">
        <div className="grid lg:grid-cols-[280px_1fr] min-h-[700px]">
          {/* Sidebar navigation */}
          <aside className="border-r border-[#1A3AFF]/15 flex flex-col">
            <div className="p-6 border-b border-[#1A3AFF]/15">
              <p className="font-['Orbitron'] text-xs tracking-widest uppercase text-muted-foreground">
                Sélectionner
              </p>
            </div>
            {SERVICES.map((service) => (
              <ServiceTabButton
                key={service.id}
                service={service}
                isActive={activeId === service.id}
                onClick={() => setActiveId(service.id)}
              />
            ))}
          </aside>

          {/* Service detail panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
              className="grid lg:grid-cols-2"
            >
              {/* Left: Content */}
              <div className="flex flex-col justify-between p-10 border-r border-[#1A3AFF]/15">
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 border border-[#1A3AFF]/30 flex items-center justify-center">
                      <activeService.icon className="w-6 h-6 text-[#1A3AFF]" />
                    </div>
                    <div>
                      <span className="font-['Orbitron'] text-xs text-muted-foreground tracking-widest">
                        {activeService.number}
                      </span>
                      <h2 className="font-['Orbitron'] text-2xl text-foreground">{activeService.title}</h2>
                    </div>
                  </div>

                  <p className="text-foreground/80 leading-relaxed mb-8">{activeService.longDesc}</p>

                  {/* Highlights */}
                  <div className="grid grid-cols-3 gap-3 mb-8">
                    {activeService.highlight.map((h) => (
                      <div key={h.label} className="bg-muted p-4 border border-[#1A3AFF]/10">
                        <p className="font-['Orbitron'] text-xl text-foreground mb-1">{h.value}</p>
                        <p className="text-muted-foreground text-xs">{h.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="font-['Orbitron'] text-xs tracking-widest uppercase text-muted-foreground mb-4">
                      Inclus
                    </h4>
                    {activeService.features.slice(0, 6).map((f) => (
                      <div key={f} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-[#1A3AFF] shrink-0" />
                        <span className="text-foreground/80 text-sm">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing & CTA */}
                <div className="mt-8 pt-8 border-t border-[#1A3AFF]/15">
                  <div className="flex items-end justify-between mb-6">
                    <div>
                      <p className="text-muted-foreground text-xs mb-1">À partir de</p>
                      <p className="font-['Orbitron'] text-2xl text-foreground">{activeService.startingPrice}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-muted-foreground text-xs mb-1">Délai</p>
                      <p className="font-['Orbitron'] text-sm text-foreground">{activeService.timeline}</p>
                    </div>
                  </div>
                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="w-full py-4 bg-[#1A3AFF] text-white font-['Orbitron'] text-sm tracking-wider hover:bg-[#0D2FE0] transition-colors flex items-center justify-center gap-3"
                    >
                      Demander ce service
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                </div>
              </div>

              {/* Right: Visual */}
              <div className="flex flex-col">
                {/* Image */}
                <div className="relative flex-1 min-h-[300px] overflow-hidden">
                  {activeService.img ? (
                    <img
                      src={activeService.img}
                      alt={activeService.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-muted flex items-center justify-center">
                      <p className="text-muted-foreground text-sm text-center px-8">{activeService.imgLabel}</p>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-background/30" />
                </div>

                {/* Tech stack + Deliverables */}
                <div className="p-8 border-t border-[#1A3AFF]/15 grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-['Orbitron'] text-xs tracking-widest uppercase text-muted-foreground mb-4">
                      Stack technique
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeService.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 text-xs border border-[#1A3AFF]/20 text-foreground/70 bg-muted"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-['Orbitron'] text-xs tracking-widest uppercase text-muted-foreground mb-4">
                      Livrables
                    </h4>
                    <ul className="space-y-1.5">
                      {activeService.deliverables.map((d) => (
                        <li key={d} className="flex items-center gap-2 text-xs text-foreground/70">
                          <span className="w-1 h-1 rounded-full bg-[#1A3AFF] shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <ProcessSection />

      {/* ── WHY US ── */}
      <WhyUsSection />

      {/* ── ALL SERVICES CARDS ── */}
      <AllServicesSection onSelect={setActiveId} />

      {/* ── CTA ── */}
      <CtaSection />
    </div>
  );
}

/* ─── Hero Section ─── */
function HeroSection() {
  return (
    <section className="border-b border-[#1A3AFF]/15">
      <div className="grid lg:grid-cols-[1fr_400px]">
        <div className="px-8 md:px-16 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-12 bg-[#1A3AFF]" />
              <span className="text-[#1A3AFF] font-['Orbitron'] text-xs tracking-widest uppercase">
                Ce qu'on fait
              </span>
            </div>
            <h1 className="font-['Orbitron'] text-6xl md:text-7xl text-foreground leading-[1.0] mb-8 tracking-tight">
              Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl leading-relaxed mb-12">
              Quatre domaines d'expertise, une seule obsession : livrer des solutions digitales
              qui génèrent des résultats concrets pour votre activité.
            </p>

            {/* Service quick-nav pills */}
            <div className="flex flex-wrap gap-3">
              {SERVICES.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="px-4 py-2 border border-[#1A3AFF]/20 text-muted-foreground text-sm hover:border-[#1A3AFF] hover:text-[#1A3AFF] transition-colors font-['Orbitron'] text-xs tracking-wider"
                >
                  {s.number} {s.title}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Hero image */}
        <div className="hidden lg:block border-l border-[#1A3AFF]/15 relative min-h-[400px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=900&fit=crop"
            alt="Zephyr team at work"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/40" />
          {/* Stats overlay */}
          <div className="absolute bottom-8 left-8 right-8">
            <div className="bg-background/90 backdrop-blur-sm border border-[#1A3AFF]/20 p-5 grid grid-cols-2 gap-4">
              {[
                { label: "Années d'expérience", value: "5+" },
                { label: "Projets livrés", value: "150+" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-['Orbitron'] text-2xl text-foreground">{s.value}</p>
                  <p className="text-muted-foreground text-xs mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Service Tab Button ─── */
function ServiceTabButton({
  service,
  isActive,
  onClick,
}: {
  service: Service;
  isActive: boolean;
  onClick: () => void;
}) {
  const Icon = service.icon;
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center gap-4 px-6 py-5 text-left w-full
        border-b border-[#1A3AFF]/15 transition-colors duration-150 group
        ${isActive
          ? "bg-[#1A3AFF]/5 border-l-2 border-l-[#1A3AFF]"
          : "hover:bg-muted border-l-2 border-l-transparent"
        }
      `}
    >
      <Icon className={`w-5 h-5 shrink-0 ${isActive ? "text-[#1A3AFF]" : "text-muted-foreground group-hover:text-foreground"}`} />
      <div className="min-w-0">
        <span className={`font-['Orbitron'] text-xs tracking-wider block ${isActive ? "text-[#1A3AFF]" : "text-muted-foreground"}`}>
          {service.number}
        </span>
        <span className={`text-sm font-medium block truncate ${isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"}`}>
          {service.title}
        </span>
      </div>
      {isActive && <ArrowRight className="w-4 h-4 text-[#1A3AFF] ml-auto shrink-0" />}
    </button>
  );
}

/* ─── Process Section ─── */
function ProcessSection() {
  const steps = [
    {
      n: "01", title: "Découverte",
      desc: "On analyse votre activité, vos objectifs et vos concurrents. On pose les vraies questions avant d'écrire la première ligne.",
      duration: "1-3 jours",
      img: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=600&h=400&fit=crop",
    },
    {
      n: "02", title: "Design",
      desc: "Wireframes, maquettes Figma, prototype cliquable. Vous validez avant qu'on code. Zéro surprise.",
      duration: "3-7 jours",
      img: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&h=400&fit=crop",
    },
    {
      n: "03", title: "Développement",
      desc: "Sprints d'une semaine avec livraisons régulières. Vous suivez l'avancement en temps réel.",
      duration: "2-10 semaines",
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    },
    {
      n: "04", title: "Lancement",
      desc: "Tests complets, déploiement, formation. Et on reste disponibles après le lancement.",
      duration: "2-5 jours",
      img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&h=400&fit=crop",
    },
  ];

  return (
    <section className="py-24 border-b border-[#1A3AFF]/15">
      <div className="px-8 md:px-16 mb-16">
        <span className="text-[#1A3AFF] font-['Orbitron'] text-xs tracking-widest uppercase block mb-4">
          Méthode
        </span>
        <h2 className="font-['Orbitron'] text-4xl md:text-5xl text-foreground">
          Notre processus
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-[#1A3AFF]/15">
        {steps.map((step, i) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { once: true });
          return (
            <motion.div
              key={step.n}
              ref={ref}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="border-r border-[#1A3AFF]/15 last:border-r-0"
            >
              {/* Step image */}
              <div className="relative h-48 overflow-hidden">
                <img src={step.img} alt={step.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-background/50" />
                <span className="absolute top-4 left-5 font-['Orbitron'] text-3xl text-white/20">{step.n}</span>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-['Orbitron'] text-foreground text-lg">{step.title}</h4>
                  <span className="text-muted-foreground text-xs border border-[#1A3AFF]/20 px-2 py-0.5">
                    {step.duration}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

/* ─── Why Us Section ─── */
function WhyUsSection() {
  return (
    <section className="py-24 border-b border-[#1A3AFF]/15 bg-muted">
      <div className="px-8 md:px-16 mb-16">
        <span className="text-[#1A3AFF] font-['Orbitron'] text-xs tracking-widest uppercase block mb-4">
          Pourquoi nous
        </span>
        <h2 className="font-['Orbitron'] text-4xl md:text-5xl text-foreground">
          Ce qui nous différencie
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-[#1A3AFF]/15">
        {WHY_US.map((item, i) => {
          const Icon = item.icon;
          const ref = useRef(null);
          const isInView = useInView(ref, { once: true });
          return (
            <motion.div
              key={item.title}
              ref={ref}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="p-10 border-r border-[#1A3AFF]/15 last:border-r-0"
            >
              <div className="w-12 h-12 border border-[#1A3AFF]/30 flex items-center justify-center mb-6">
                <Icon className="w-5 h-5 text-[#1A3AFF]" />
              </div>
              <h4 className="font-['Orbitron'] text-foreground text-base mb-3">{item.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

/* ─── All Services Cards ─── */
function AllServicesSection({ onSelect }: { onSelect: (id: string) => void }) {
  return (
    <section className="py-24 border-b border-[#1A3AFF]/15">
      <div className="px-8 md:px-16 mb-16">
        <span className="text-[#1A3AFF] font-['Orbitron'] text-xs tracking-widest uppercase block mb-4">
          Vue d'ensemble
        </span>
        <h2 className="font-['Orbitron'] text-4xl md:text-5xl text-foreground">
          Tous nos services
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 border-t border-[#1A3AFF]/15">
        {SERVICES.map((service, i) => {
          const Icon = service.icon;
          const ref = useRef(null);
          const isInView = useInView(ref, { once: true });
          return (
            <motion.div
              key={service.id}
              ref={ref}
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: (i % 2) * 0.1 }}
              className={`border-b border-r border-[#1A3AFF]/15 ${i % 2 === 1 ? "border-r-0" : ""} group`}
            >
              <button
                onClick={() => {
                  onSelect(service.id);
                  window.scrollTo({ top: 400, behavior: "smooth" });
                }}
                className="w-full text-left"
              >
                {/* Image band */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-background/50 group-hover:bg-background/30 transition-colors" />
                  <div className="absolute top-6 left-8">
                    <span className="font-['Orbitron'] text-5xl text-white/10">{service.number}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 border border-[#1A3AFF]/30 flex items-center justify-center group-hover:bg-[#1A3AFF] group-hover:border-[#1A3AFF] transition-colors">
                        <Icon className="w-5 h-5 text-[#1A3AFF] group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h3 className="font-['Orbitron'] text-foreground text-xl">{service.title}</h3>
                        <p className="text-muted-foreground text-sm">{service.shortDesc}</p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-[#1A3AFF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>

                  <div className="flex items-center justify-between text-sm border-t border-[#1A3AFF]/10 pt-5 mt-5">
                    <span className="text-muted-foreground">Dès <strong className="text-foreground">{service.startingPrice}</strong></span>
                    <span className="text-muted-foreground">{service.timeline}</span>
                  </div>
                </div>
              </button>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

/* ─── CTA Section ─── */
function CtaSection() {
  return (
    <section className="grid lg:grid-cols-2 min-h-[400px]">
      <div className="flex flex-col justify-center px-8 md:px-16 py-24 border-r border-[#1A3AFF]/15">
        <span className="text-[#1A3AFF] font-['Orbitron'] text-xs tracking-widest uppercase block mb-6">
          Passons à l'action
        </span>
        <h2 className="font-['Orbitron'] text-4xl md:text-5xl text-foreground mb-6 leading-tight">
          Prêt à lancer<br />votre projet ?
        </h2>
        <p className="text-muted-foreground mb-10 max-w-md leading-relaxed">
          Dites-nous ce que vous voulez construire. Devis gratuit sous 24h. Pas d'engagement, juste une conversation.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="px-8 py-4 bg-[#1A3AFF] text-white font-['Orbitron'] text-sm tracking-wider hover:bg-[#0D2FE0] transition-colors inline-flex items-center gap-3"
            >
              Demander un devis gratuit
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
          <Link to="/portfolio">
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="px-8 py-4 border border-foreground/20 text-foreground font-['Orbitron'] text-sm tracking-wider hover:bg-muted transition-colors inline-flex items-center gap-3"
            >
              Voir nos réalisations
              <ArrowUpRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Visual */}
      <div className="relative min-h-[300px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&h=600&fit=crop"
          alt="Zephyr team"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/40" />
        <div className="absolute bottom-8 left-8 right-8 bg-background/90 backdrop-blur-sm border border-[#1A3AFF]/20 p-6">
          <p className="text-foreground/60 text-sm italic mb-2">
            "Zephyr a livré notre plateforme en 5 semaines. Le résultat a dépassé toutes nos attentes."
          </p>
          <p className="text-foreground text-sm font-medium">— CEO, TechStart Inc.</p>
        </div>
      </div>
    </section>
  );
}
