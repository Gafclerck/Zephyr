import { Link } from "react-router";
import {
  ArrowRight, Code, Smartphone, Palette, TrendingUp,
  ArrowUpRight, Play, CheckCircle
} from "lucide-react";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import { useRef } from "react";

/* ── Animated counter ── */
function StatBlock({ value, label, delay = 0 }: { value: string; label: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center justify-center p-8 text-center relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-muted/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-none" />
      <span className="font-['Orbitron'] text-5xl md:text-6xl text-foreground font-semibold tracking-tighter mb-3 relative z-10">{value}</span>
      <span className="text-muted-foreground text-sm uppercase tracking-widest relative z-10">{label}</span>
    </motion.div>
  );
}

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

export function Landing() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 800], [0, 250]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <div className="bg-background selection:bg-[#1A3AFF] selection:text-white overflow-hidden">
      
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center pt-20 border-b border-border/40">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/80 to-background z-10" />
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
            alt="Digital abstract background"
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
          />
        </motion.div>

        <div className="container relative z-10 px-6 md:px-12 mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col pt-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-none border border-[#1A3AFF]/30 bg-[#1A3AFF]/5 mb-8 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-none bg-[#1A3AFF] animate-pulse" />
                  <span className="text-[#1A3AFF] text-xs font-semibold tracking-widest uppercase">
                    Agence Digitale Premium
                  </span>
                </div>
                
                <h1 className="font-['Orbitron'] text-5xl md:text-7xl xl:text-[5.5rem] font-medium text-foreground leading-[1.05] tracking-tight mb-8">
                  Forgez l'<span className="text-[#1A3AFF]">Avenir</span><br />
                  de votre Marque.
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-12 leading-relaxed">
                  Des solutions d'ingénierie logicielle, de design interactif et de stratégies d'acquisition conçues pour les leaders de demain.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact">
                    <button className="w-full sm:w-auto px-8 py-4 bg-[#1A3AFF] text-white rounded-none font-medium tracking-wide hover:bg-[#1A3AFF] transition-colors flex items-center justify-center gap-2 group">
                      Démarrer un projet
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                  <Link to="/portfolio">
                    <button className="w-full sm:w-auto px-8 py-4 bg-background border border-border text-foreground rounded-none font-medium tracking-wide hover:bg-muted transition-colors flex items-center justify-center gap-2 group">
                      <Play className="w-4 h-4 text-[#1A3AFF]" />
                      Découvrir nos cas
                    </button>
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Right Visual */}
            <div className="lg:col-span-5 hidden lg:flex justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-[90%] aspect-[4/5] rounded-none overflow-hidden border border-border/50 shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop"
                  alt="Creative Workspace"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                
                <div className="absolute bottom-8 left-8 right-8 bg-background/60 backdrop-blur-xl border border-white/10 p-5 rounded-none">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-['Orbitron'] text-foreground font-semibold mb-1">150+ Projets</p>
                      <p className="text-muted-foreground text-xs uppercase tracking-wider">Livrés mondialement</p>
                    </div>
                    <div className="w-10 h-10 rounded-none bg-[#1A3AFF]/20 flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-[#1A3AFF]" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="border-b border-border/40 bg-muted/20 relative z-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-border/40">
            <StatBlock delay={0.1} value="150+" label="Projets livrés" />
            <StatBlock delay={0.2} value="98%" label="Clients satisfaits" />
            <StatBlock delay={0.3} value="2.4x" label="Croissance Moyenne" />
            <StatBlock delay={0.4} value="12+" label="Pays desservis" />
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 md:py-32 border-b border-border/40 relative z-10 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
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
              className="flex items-center gap-2 text-foreground font-medium tracking-wide hover:text-[#1A3AFF] transition-colors group"
            >
              Tous les services
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, i) => (
              <ServiceCard key={i} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED WORK ── */}
      <section className="py-24 md:py-32 bg-muted/30 border-b border-border/40 relative z-10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
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
              className="flex items-center gap-2 text-foreground font-medium tracking-wide hover:text-[#1A3AFF] transition-colors group"
            >
              Explorer le portfolio
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FEATURED_PROJECTS.map((project, i) => (
              <PortfolioCard key={i} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-24 md:py-32 bg-background border-b border-border/40 relative z-10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[#1A3AFF] font-['Orbitron'] text-xs tracking-widest uppercase block mb-4">
              Méthodologie
            </span>
            <h2 className="font-['Orbitron'] text-4xl md:text-5xl text-foreground tracking-tight">
              De l'idée à l'impact
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
      <section className="py-24 md:py-32 bg-muted/20 border-b border-border/40 relative z-10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-16">
            <span className="text-[#1A3AFF] font-['Orbitron'] text-xs tracking-widest uppercase block mb-4">
              Témoignages
            </span>
            <h2 className="font-['Orbitron'] text-4xl md:text-5xl text-foreground font-medium tracking-tight">
              Partenariats réussis
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <TestimonialCard key={i} testimonial={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-32 relative overflow-hidden bg-foreground">
        {/* Subtle background decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#1A3AFF]/20 blur-[120px] rounded-none pointer-events-none" />
        
        <div className="container relative z-10 mx-auto px-6 md:px-12 flex flex-col items-center text-center">
          <span className="text-[#00E5FF] font-['Orbitron'] text-xs tracking-widest uppercase block mb-6">
            Votre prochain projet
          </span>
          <h2 className="font-['Orbitron'] text-5xl md:text-7xl text-background font-medium mb-8 tracking-tight max-w-3xl">
            L'excellence digitale, <br className="hidden md:block"/>
            à votre portée.
          </h2>
          <p className="text-background/70 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
            Unissons nos forces pour concevoir le produit qui transformera votre activité. Obtenez une proposition détaillée sous 48h.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link to="/contact" className="w-full sm:w-auto">
              <button className="w-full px-10 py-5 bg-[#1A3AFF] text-white rounded-none font-medium tracking-wide hover:bg-[#1A3AFF] transition-colors flex items-center justify-center gap-3">
                Initier la collaboration <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ── Sub-components ── */

function ServiceCard({ service, index }: { service: (typeof SERVICES)[0]; index: number; }) {
  const Icon = service.icon;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link to="/services" className="group block h-full">
        <div className="h-full bg-background border border-border/50 rounded-none overflow-hidden hover:border-[#1A3AFF]/50 transition-colors flex flex-col relative">
          <div className="relative h-48 overflow-hidden">
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-background/50 group-hover:bg-background/20 transition-colors duration-500" />
            <div className="absolute top-4 left-4 w-8 h-8 rounded-none bg-background/40 backdrop-blur-md flex items-center justify-center border border-white/10">
              <span className="font-['Orbitron'] text-xs font-semibold text-foreground">{service.label}</span>
            </div>
          </div>

          <div className="p-6 flex flex-col flex-1">
            <div className="w-12 h-12 bg-muted/50 rounded-none flex items-center justify-center mb-6 group-hover:bg-[#1A3AFF]/10 group-hover:text-[#1A3AFF] transition-colors">
              <Icon className="w-6 h-6 text-foreground group-hover:text-[#1A3AFF] transition-colors" />
            </div>
            <h3 className="font-['Orbitron'] text-xl font-semibold text-foreground mb-3">{service.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">{service.desc}</p>
            <div className="flex items-center gap-2 text-foreground font-medium text-sm group-hover:text-[#1A3AFF] transition-colors">
              En savoir plus <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function PortfolioCard({ project, index }: { project: (typeof FEATURED_PROJECTS)[0]; index: number; }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative overflow-hidden rounded-none ${project.span ? "md:col-span-2" : ""}`}
      style={{ height: project.span ? "480px" : "400px" }}
    >
      <Link to="/portfolio" className="block w-full h-full">
        <img
          src={project.img}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
        
        <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-none text-white/90 text-xs font-['Orbitron'] tracking-wider border border-white/20">
                {project.category}
              </span>
              <span className="text-[#00E5FF] text-sm font-medium">{project.result}</span>
            </div>
            <div className="flex items-end justify-between">
              <h3 className="font-['Orbitron'] text-white text-3xl md:text-4xl font-medium tracking-tight">
                {project.title}
              </h3>
              <div className="w-12 h-12 rounded-none bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-[#1A3AFF] group-hover:border-[#1A3AFF] transition-colors">
                <ArrowUpRight className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function ProcessStep({ n, title, desc, index }: { n: string; title: string; desc: string; index: number; }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative p-8 rounded-none bg-muted/50 border border-border/40 hover:bg-muted transition-colors group"
    >
      <div className="w-14 h-14 rounded-none bg-background border border-border flex items-center justify-center mb-8 shadow-sm group-hover:border-[#1A3AFF]/50 transition-colors">
        <span className="font-['Orbitron'] text-xl font-medium text-foreground">{n}</span>
      </div>
      <h4 className="font-['Orbitron'] text-xl font-medium text-foreground mb-4">{title}</h4>
      <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}

function TestimonialCard({ testimonial, index }: { testimonial: (typeof TESTIMONIALS)[0]; index: number; }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="p-8 md:p-10 bg-background border border-border/50 rounded-none flex flex-col h-full hover:shadow-xl transition-shadow"
    >
      <div className="flex gap-1 mb-8">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-[#1A3AFF]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <blockquote className="text-lg text-foreground leading-relaxed mb-8 font-medium flex-1">
        "{testimonial.quote}"
      </blockquote>
      <div className="flex items-center gap-4 border-t border-border/50 pt-6">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-none object-cover border border-border"
        />
        <div>
          <p className="text-foreground font-semibold">{testimonial.name}</p>
          <p className="text-muted-foreground text-sm">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
}
