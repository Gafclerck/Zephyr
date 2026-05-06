import { Link } from "react-router";
import {
  ArrowRight, Code, Smartphone, Palette, TrendingUp,
  ArrowUpRight, ArrowDown,
} from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const SERVICES = [
  {
    icon: Code,
    label: "01",
    title: "Ingénierie Web",
    desc: "Des plateformes robustes, optimisées pour la conversion et la performance absolue.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
  },
  {
    icon: Smartphone,
    label: "02",
    title: "Expériences Mobiles",
    desc: "Applications natives et cross-platform pensées pour l'engagement utilisateur.",
    img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop",
  },
  {
    icon: Palette,
    label: "03",
    title: "Direction Artistique",
    desc: "Identités visuelles mémorables et interfaces (UI/UX) qui subliment la marque.",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
  },
  {
    icon: TrendingUp,
    label: "04",
    title: "Marketing Growth",
    desc: "Stratégies d'acquisition data-driven pour démultiplier votre croissance.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
  },
];

const FEATURED_PROJECTS = [
  {
    title: "Aura Fintech",
    category: "SaaS · Ingénierie",
    result: "+300% de volume transactionnel",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    slug: "aura-fintech",
    span: true,
  },
  {
    title: "Lumina Health",
    category: "App Mobile · Santé",
    result: "50K+ utilisateurs actifs",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
    slug: "lumina",
    span: false,
  },
  {
    title: "Nova Retail",
    category: "E-commerce · Design",
    result: "Conversion doublée",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
    slug: "nova-retail",
    span: false,
  },
];

const TESTIMONIALS = [
  {
    quote: "L'expertise technique et la vision design de Zephyr ont propulsé notre produit à un niveau inespéré. Un partenariat stratégique indispensable.",
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&fit=crop",
  },
  {
    quote: "Une exécution irréprochable et un niveau de finition rare sur le marché. Notre application mobile a conquis nos utilisateurs dès le lancement.",
    name: "Michael Chen",
    role: "VP Product, GrowthCo",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&fit=crop",
  },
  {
    quote: "Ils ont su capter l'essence de notre marque et la traduire dans une identité digitale puissante. Une équipe brillante et réactive.",
    name: "Emma Williams",
    role: "CMO, BrandFlow",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&fit=crop",
  },
];

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export function Landing() {
  return (
    <div className="bg-background selection:bg-[#1A3AFF] selection:text-white">

      {/* ── HERO ── */}
      <Hero />

      {/* ── SERVICES ── */}
      <section className="py-24 md:py-32 border-b border-border/40 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-[#1A3AFF] font-['Orbitron'] text-xs tracking-widest uppercase block mb-4">
                Nos expertises
              </span>
              <h2 className="font-['Orbitron'] text-4xl md:text-5xl text-foreground font-medium tracking-tight">
                Domaines d'excellence
              </h2>
            </div>
            <Link
              to="/services"
              className="flex items-center gap-2 text-foreground/60 text-sm hover:text-[#1A3AFF] transition-colors group shrink-0"
            >
              Tous les services
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((service, i) => (
              <ServiceCard key={i} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED WORK ── */}
      <section className="py-24 md:py-32 border-b border-border/40 bg-muted/20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-[#1A3AFF] font-['Orbitron'] text-xs tracking-widest uppercase block mb-4">
                Portfolio
              </span>
              <h2 className="font-['Orbitron'] text-4xl md:text-5xl text-foreground font-medium tracking-tight">
                Réalisations phares
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="flex items-center gap-2 text-foreground/60 text-sm hover:text-[#1A3AFF] transition-colors group shrink-0"
            >
              Explorer le portfolio
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {FEATURED_PROJECTS.map((project, i) => (
              <PortfolioCard key={i} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-24 md:py-32 border-b border-border/40 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[#1A3AFF] font-['Orbitron'] text-xs tracking-widest uppercase block mb-4">
              Méthodologie
            </span>
            <h2 className="font-['Orbitron'] text-4xl md:text-5xl text-foreground tracking-tight">
              De l'idée à l'impact
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {[
              { n: "01", title: "Cadrage Stratégique", desc: "Analyse approfondie des besoins, du marché et définition de la roadmap technologique." },
              { n: "02", title: "Design & UX", desc: "Création d'interfaces intuitives et prototypage complet avant toute ligne de code." },
              { n: "03", title: "Ingénierie Agile", desc: "Développement robuste en itérations courtes pour garantir flexibilité et qualité." },
              { n: "04", title: "Go-to-Market", desc: "Déploiement sécurisé, suivi des performances et itérations post-lancement." },
            ].map((step, i) => (
              <ProcessStep key={i} {...step} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 md:py-32 border-b border-border/40 bg-muted/20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-16">
            <span className="text-[#1A3AFF] font-['Orbitron'] text-xs tracking-widest uppercase block mb-4">
              Témoignages
            </span>
            <h2 className="font-['Orbitron'] text-4xl md:text-5xl text-foreground font-medium tracking-tight">
              Partenariats réussis
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <TestimonialCard key={i} testimonial={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-32 bg-[#0A1628]">
        <div className="container mx-auto px-6 md:px-12 flex flex-col items-center text-center">
          <span className="text-[#1A3AFF] font-['Orbitron'] text-xs tracking-widest uppercase block mb-6">
            Votre prochain projet
          </span>
          <h2 className="font-['Orbitron'] text-5xl md:text-7xl text-white font-medium mb-8 tracking-tight max-w-3xl leading-[1.05]">
            L'excellence digitale,{" "}
            <br className="hidden md:block" />
            à votre portée.
          </h2>
          <p className="text-white/60 text-lg max-w-xl mb-12 leading-relaxed">
            Unissons nos forces pour concevoir le produit qui transformera votre activité. Proposition détaillée sous 48h.
          </p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 bg-[#1A3AFF] text-white rounded-none font-medium tracking-wide hover:bg-[#0D2FE0] transition-colors flex items-center gap-3"
            >
              Initier la collaboration
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
}

/* ─────────────────────────────────────────────
   HERO — architecture repensée
   Layout : colonne texte (55%) | image (45%)
   Pleine hauteur écran, stats intégrées en bas
───────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative flex min-h-screen border-b border-border/40 overflow-hidden">

      {/* ── Colonne texte ── */}
      <div className="relative z-10 w-full lg:w-[55%] flex flex-col justify-between px-6 md:px-12 lg:px-16 xl:px-20 pt-10 pb-10 border-r border-border/40">

        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-3 pt-4"
        >
          <span className="w-8 h-px bg-[#1A3AFF]" />
          <span className="text-muted-foreground text-xs font-['Orbitron'] tracking-widest uppercase">
            Dakar, Sénégal — 2025
          </span>
        </motion.div>

        {/* Main content — centré verticalement */}
        <div className="flex flex-col justify-center flex-1 py-12">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-['Orbitron'] text-[clamp(2.8rem,6vw,5.5rem)] font-medium text-foreground leading-[1.0] tracking-tight mb-8"
          >
            Forgez<br />
            l'<span className="text-[#1A3AFF]">Avenir</span><br />
            Digital.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="text-muted-foreground text-base md:text-lg max-w-md mb-10 leading-relaxed"
          >
            Ingénierie logicielle, design interactif et stratégies d'acquisition
            pour les entreprises qui refusent la médiocrité.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-3"
          >
            <Link to="/contact">
              <button className="px-7 py-3.5 bg-[#1A3AFF] text-white text-sm rounded-none font-medium tracking-wide hover:bg-[#0D2FE0] transition-colors flex items-center gap-2 group">
                Démarrer un projet
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link to="/portfolio">
              <button className="px-7 py-3.5 border border-border text-foreground text-sm rounded-none font-medium tracking-wide hover:bg-muted hover:border-foreground/30 transition-colors flex items-center gap-2">
                Voir nos réalisations
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Bottom — stats horizontales */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="border-t border-border/40 pt-6"
        >
          <div className="grid grid-cols-3 gap-0 divide-x divide-border/40">
            {[
              { value: "150+", label: "Projets" },
              { value: "98%", label: "Satisfaction" },
              { value: "12+", label: "Pays" },
            ].map((s) => (
              <div key={s.label} className="px-5 first:pl-0">
                <p className="font-['Orbitron'] text-2xl md:text-3xl text-foreground mb-1 tracking-tight">
                  {s.value}
                </p>
                <p className="text-muted-foreground text-xs uppercase tracking-widest">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Colonne image ── */}
      <div className="hidden lg:block lg:w-[45%] relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop"
            alt="Espace de travail créatif"
            className="w-full h-full object-cover"
          />
          {/* Overlay léger pour lisibilité */}
          <div className="absolute inset-0 bg-background/20" />
        </motion.div>

        {/* Carte flottante — projet en cours */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="absolute bottom-10 left-8 right-8 bg-background/90 backdrop-blur-md border border-border/60 p-5"
        >
          <p className="text-muted-foreground text-[10px] font-['Orbitron'] tracking-widest uppercase mb-3">
            Projet récent
          </p>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 shrink-0 overflow-hidden bg-muted">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=200&fit=crop"
                alt="Aura Fintech"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-['Orbitron'] text-foreground text-sm mb-0.5 truncate">Aura Fintech</p>
              <p className="text-muted-foreground text-xs truncate">SaaS · +300% volume transactionnel</p>
            </div>
            <Link to="/portfolio" className="shrink-0">
              <div className="w-8 h-8 border border-border flex items-center justify-center hover:bg-[#1A3AFF] hover:border-[#1A3AFF] hover:text-white transition-colors text-muted-foreground">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          </div>
        </motion.div>

        {/* Scroll hint vertical — côté droit */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute top-1/2 right-6 -translate-y-1/2 flex flex-col items-center gap-3"
        >
          <span
            className="text-muted-foreground/40 text-[10px] font-['Orbitron'] tracking-[0.3em] uppercase"
            style={{ writingMode: "vertical-rl" }}
          >
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-4 h-4 text-muted-foreground/40" />
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}

/* ─────────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────────── */
function ServiceCard({ service, index }: { service: (typeof SERVICES)[0]; index: number }) {
  const Icon = service.icon;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link to="/services" className="group block h-full">
        <div className="h-full bg-background border border-border/50 hover:border-[#1A3AFF]/40 transition-colors flex flex-col overflow-hidden">
          <div className="relative h-44 overflow-hidden">
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-background/40 group-hover:bg-background/10 transition-colors duration-300" />
            <span className="absolute top-3 left-4 font-['Orbitron'] text-xs text-white/60">
              {service.label}
            </span>
          </div>

          <div className="p-5 flex flex-col flex-1">
            <Icon className="w-5 h-5 text-[#1A3AFF] mb-4" />
            <h3 className="font-['Orbitron'] text-base font-semibold text-foreground mb-2">
              {service.title}
            </h3>
            <p className="text-muted-foreground text-xs leading-relaxed flex-1 mb-4">
              {service.desc}
            </p>
            <div className="flex items-center gap-1.5 text-xs text-foreground/50 group-hover:text-[#1A3AFF] transition-colors">
              En savoir plus
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function PortfolioCard({ project, index }: { project: (typeof FEATURED_PROJECTS)[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative overflow-hidden ${project.span ? "md:col-span-2" : ""}`}
      style={{ height: project.span ? "460px" : "360px" }}
    >
      <Link to="/portfolio" className="block w-full h-full">
        <img
          src={project.img}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-background/50 group-hover:bg-background/30 transition-colors duration-300" />

        <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
          <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="px-2.5 py-1 bg-white/10 backdrop-blur-sm text-white/80 text-[10px] font-['Orbitron'] tracking-wider border border-white/15">
                {project.category}
              </span>
              <span className="text-[#00B4FF] text-sm">{project.result}</span>
            </div>
            <div className="flex items-end justify-between gap-4">
              <h3 className="font-['Orbitron'] text-white text-2xl md:text-3xl font-medium tracking-tight">
                {project.title}
              </h3>
              <div className="w-10 h-10 shrink-0 bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/15 group-hover:bg-[#1A3AFF] group-hover:border-[#1A3AFF] transition-colors">
                <ArrowUpRight className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function ProcessStep({ n, title, desc, index }: { n: string; title: string; desc: string; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="p-7 bg-muted/40 border border-border/40 hover:border-[#1A3AFF]/30 hover:bg-muted/60 transition-colors group"
    >
      <div className="w-12 h-12 bg-background border border-border flex items-center justify-center mb-6 group-hover:border-[#1A3AFF]/40 transition-colors">
        <span className="font-['Orbitron'] text-lg font-medium text-foreground">{n}</span>
      </div>
      <h4 className="font-['Orbitron'] text-base font-semibold text-foreground mb-3">{title}</h4>
      <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}

function TestimonialCard({ testimonial, index }: { testimonial: (typeof TESTIMONIALS)[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="p-8 bg-background border border-border/40 flex flex-col h-full"
    >
      <div className="flex gap-0.5 mb-6">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-4 h-4 text-[#1A3AFF]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <blockquote className="text-foreground leading-relaxed mb-8 flex-1 text-[0.95rem]">
        "{testimonial.quote}"
      </blockquote>
      <div className="flex items-center gap-3 border-t border-border/40 pt-5">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-10 h-10 object-cover"
        />
        <div>
          <p className="text-foreground font-semibold text-sm">{testimonial.name}</p>
          <p className="text-muted-foreground text-xs">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
}
