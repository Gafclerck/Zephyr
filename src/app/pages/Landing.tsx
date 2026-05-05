import { Link } from "react-router";
import {
  ArrowRight, Code, Smartphone, Palette, TrendingUp,
  ArrowUpRight, Play, CheckCircle
} from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

/* ── Placeholder image component ── */
function ImageBlock({
  src,
  alt,
  label,
  className = "",
}: {
  src?: string;
  alt: string;
  label?: string;
  className?: string;
}) {
  if (src) {
    return (
      <div className={`overflow-hidden ${className}`}>
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
    );
  }
  return (
    <div className={`bg-muted border border-[#1A3AFF]/10 flex flex-col items-center justify-center gap-3 ${className}`}>
      <div className="w-12 h-12 border border-[#1A3AFF]/20 flex items-center justify-center">
        <span className="text-[#1A3AFF]/40 text-2xl">◻</span>
      </div>
      <p className="text-muted-foreground text-xs text-center px-4">{label ?? alt}</p>
    </div>
  );
}

/* ── Animated counter ── */
function StatBlock({ value, label }: { value: string; label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center p-8 text-center"
    >
      <span className="font-['Orbitron'] text-4xl md:text-5xl text-foreground mb-2">{value}</span>
      <span className="text-muted-foreground text-sm">{label}</span>
    </motion.div>
  );
}

const SERVICES = [
  {
    icon: Code,
    label: "01",
    title: "Web Development",
    desc: "Sites performants, e-commerce, SaaS. Du design au déploiement.",
    img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop",
  },
  {
    icon: Smartphone,
    label: "02",
    title: "Mobile Apps",
    desc: "iOS & Android natifs ou cross-platform avec React Native.",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
  },
  {
    icon: Palette,
    label: "03",
    title: "Branding",
    desc: "Identité visuelle complète. Logo, charte, guidelines, supports.",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
  },
  {
    icon: TrendingUp,
    label: "04",
    title: "Digital Marketing",
    desc: "SEO, réseaux sociaux, publicité payante. Croissance mesurable.",
    img: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&h=600&fit=crop",
  },
];

const FEATURED_PROJECTS = [
  {
    title: "TechFlow Platform",
    category: "SaaS · Web",
    result: "+300% engagement",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=600&fit=crop",
    slug: "techflow",
    span: true,
  },
  {
    title: "FitTrack Mobile",
    category: "App · iOS & Android",
    result: "50K+ downloads",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=500&fit=crop",
    slug: "fittrack",
    span: false,
  },
  {
    title: "GreenEco Brand",
    category: "Branding · Identité",
    result: "3 design awards",
    img: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=500&fit=crop",
    slug: "greeneco",
    span: false,
  },
];

const TESTIMONIALS = [
  {
    quote: "Zephyr a transformé notre présence digitale. Le site a augmenté nos conversions de 240% en 3 mois.",
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    quote: "Professionnel, rapide, qualité exceptionnelle. Le lancement de notre app mobile a dépassé toutes nos attentes.",
    name: "Michael Chen",
    role: "Fondateur, GrowthCo",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    quote: "Le travail de branding était remarquable. Ils ont capturé parfaitement notre vision.",
    name: "Emma Williams",
    role: "CMO, BrandFlow",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
];

export function Landing() {
  return (
    <div className="bg-background overflow-x-hidden">
      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex items-center border-b border-[#1A3AFF]/15">
        {/* Grid layout: 60% text / 40% visual */}
        <div className="w-full grid lg:grid-cols-[1fr_480px] min-h-[90vh]">
          {/* Left: Content */}
          <div className="flex flex-col justify-center px-8 md:px-16 py-24 border-r border-[#1A3AFF]/15">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="h-px w-12 bg-[#1A3AFF]" />
                <span className="text-[#1A3AFF] font-['Orbitron'] text-xs tracking-widest uppercase">
                  Agence Digitale Premium
                </span>
              </div>
              <h1 className="font-['Orbitron'] text-5xl md:text-6xl xl:text-7xl text-foreground leading-[1.05] tracking-tight mb-8">
                Construire le<br />
                <span className="text-[#1A3AFF]">Digital</span> de<br />
                Demain.
              </h1>
              <p className="text-lg text-muted-foreground max-w-md mb-10 leading-relaxed">
                Sites web, applications mobiles, branding et marketing.
                Des solutions qui génèrent des résultats mesurables.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-[#1A3AFF] text-white font-['Orbitron'] text-sm tracking-wider hover:bg-[#0D2FE0] transition-colors inline-flex items-center gap-3"
                  >
                    Démarrer un projet
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
                <Link to="/portfolio">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 border border-foreground/20 text-foreground font-['Orbitron'] text-sm tracking-wider hover:bg-muted transition-colors inline-flex items-center gap-3"
                  >
                    <Play className="w-4 h-4" />
                    Voir le portfolio
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right: Hero visual */}
          <div className="hidden lg:block relative">
            <ImageBlock
              src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=900&h=1200&fit=crop"
              alt="Zephyr digital agency workspace"
              label="Hero — Espace de travail / Mockup projet"
              className="absolute inset-0"
            />
            {/* Overlay cards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute bottom-12 left-6 right-6 bg-background/90 backdrop-blur-sm border border-[#1A3AFF]/20 p-5"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-['Orbitron'] text-foreground text-sm mb-1">150+ projets livrés</p>
                  <p className="text-muted-foreground text-xs">dans 12 pays</p>
                </div>
                <CheckCircle className="w-8 h-8 text-[#1A3AFF]" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="border-b border-[#1A3AFF]/15">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-[#1A3AFF]/15">
          <StatBlock value="150+" label="Projets livrés" />
          <StatBlock value="98%" label="Clients satisfaits" />
          <StatBlock value="240%" label="Augmentation conversions" />
          <StatBlock value="3–6" label="Semaines de livraison" />
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 border-b border-[#1A3AFF]/15">
        <div className="px-8 md:px-16 mb-16">
          <div className="flex items-end justify-between">
            <div>
              <span className="text-[#1A3AFF] font-['Orbitron'] text-xs tracking-widest uppercase block mb-4">
                Nos services
              </span>
              <h2 className="font-['Orbitron'] text-4xl md:text-5xl text-foreground">
                Ce qu'on construit
              </h2>
            </div>
            <Link
              to="/services"
              className="hidden md:flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm transition-colors group"
            >
              Tous les services
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-[#1A3AFF]/15">
          {SERVICES.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>

        <div className="px-8 md:px-16 mt-8 md:hidden">
          <Link
            to="/services"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm transition-colors"
          >
            Tous les services <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ── FEATURED WORK ── */}
      <section className="py-24 border-b border-[#1A3AFF]/15">
        <div className="px-8 md:px-16 mb-16">
          <span className="text-[#1A3AFF] font-['Orbitron'] text-xs tracking-widest uppercase block mb-4">
            Portfolio
          </span>
          <div className="flex items-end justify-between">
            <h2 className="font-['Orbitron'] text-4xl md:text-5xl text-foreground">
              Travaux récents
            </h2>
            <Link
              to="/portfolio"
              className="hidden md:flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm transition-colors group"
            >
              Voir tout <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-3">
          {FEATURED_PROJECTS.map((project, i) => (
            <PortfolioCard key={i} project={project} index={i} />
          ))}
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-24 border-b border-[#1A3AFF]/15 bg-muted">
        <div className="px-8 md:px-16 mb-16">
          <span className="text-[#1A3AFF] font-['Orbitron'] text-xs tracking-widest uppercase block mb-4">
            Méthode
          </span>
          <h2 className="font-['Orbitron'] text-4xl md:text-5xl text-foreground">
            Comment on travaille
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 border-t border-[#1A3AFF]/15">
          {[
            { n: "01", title: "Découverte", desc: "Analyse de vos objectifs, votre marché et votre cible." },
            { n: "02", title: "Design", desc: "Prototypes, maquettes et système visuel validés ensemble." },
            { n: "03", title: "Développement", desc: "Code propre, testé, optimisé pour la performance." },
            { n: "04", title: "Lancement", desc: "Déploiement, suivi et optimisations post-lancement." },
          ].map((step, i) => (
            <ProcessStep key={i} {...step} index={i} />
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 border-b border-[#1A3AFF]/15">
        <div className="px-8 md:px-16 mb-16">
          <span className="text-[#1A3AFF] font-['Orbitron'] text-xs tracking-widest uppercase block mb-4">
            Témoignages
          </span>
          <h2 className="font-['Orbitron'] text-4xl md:text-5xl text-foreground">
            Ils nous font confiance
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-[#1A3AFF]/15">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} index={i} />
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-32">
        <div className="grid lg:grid-cols-2 min-h-[400px]">
          {/* Left */}
          <div className="flex flex-col justify-center px-8 md:px-16 border-r border-[#1A3AFF]/15">
            <span className="text-[#1A3AFF] font-['Orbitron'] text-xs tracking-widest uppercase block mb-6">
              Prêt à démarrer ?
            </span>
            <h2 className="font-['Orbitron'] text-4xl md:text-5xl text-foreground mb-8 leading-tight">
              Votre projet<br />commence ici.
            </h2>
            <p className="text-muted-foreground mb-10 max-w-md leading-relaxed">
              Dites-nous ce que vous voulez construire. Réponse sous 24h. Devis gratuit.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-5 bg-[#1A3AFF] text-white font-['Orbitron'] text-sm tracking-wider hover:bg-[#0D2FE0] transition-colors inline-flex items-center gap-3 self-start"
              >
                Démarrer maintenant
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </div>

          {/* Right: CTA visual */}
          <ImageBlock
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop"
            alt="Team collaboration"
            label="CTA — Photo équipe / collaboration"
            className="min-h-[300px]"
          />
        </div>
      </section>
    </div>
  );
}

/* ── Sub-components ── */

function ServiceCard({
  service,
  index,
}: {
  service: (typeof SERVICES)[0];
  index: number;
}) {
  const Icon = service.icon;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group border-r border-[#1A3AFF]/15 last:border-r-0 flex flex-col"
    >
      <Link to="/services" className="flex flex-col h-full">
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={service.img}
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors duration-300" />
          <div className="absolute top-4 left-4">
            <span className="font-['Orbitron'] text-xs text-white/70">{service.label}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1 border-t border-[#1A3AFF]/15">
          <Icon className="w-8 h-8 text-[#1A3AFF] mb-4" />
          <h3 className="font-['Orbitron'] text-foreground text-lg mb-3">{service.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed flex-1">{service.desc}</p>
          <div className="flex items-center gap-2 mt-5 text-[#1A3AFF] text-sm group-hover:gap-3 transition-all">
            <span>Découvrir</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function PortfolioCard({
  project,
  index,
}: {
  project: (typeof FEATURED_PROJECTS)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative overflow-hidden ${project.span ? "md:col-span-2" : ""}`}
      style={{ height: project.span ? "420px" : "320px" }}
    >
      <Link to="/portfolio">
        <img
          src={project.img}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-background/50 group-hover:bg-background/30 transition-colors duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-8 flex items-end justify-between">
          <div>
            <p className="text-white/60 text-xs font-['Orbitron'] tracking-wider mb-2">{project.category}</p>
            <h3 className="font-['Orbitron'] text-white text-2xl md:text-3xl">{project.title}</h3>
          </div>
          <div className="flex flex-col items-end gap-2">
            <span className="text-[#00B4FF] text-sm font-medium">{project.result}</span>
            <ArrowUpRight className="w-5 h-5 text-white/60 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function ProcessStep({
  n, title, desc, index,
}: {
  n: string; title: string; desc: string; index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="p-10 border-r border-[#1A3AFF]/15 last:border-r-0 relative"
    >
      {index < 3 && (
        <span className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 text-[#1A3AFF]/30 text-xl z-10">›</span>
      )}
      <span className="font-['Orbitron'] text-4xl text-[#1A3AFF]/20 block mb-6">{n}</span>
      <h4 className="font-['Orbitron'] text-foreground text-lg mb-3">{title}</h4>
      <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof TESTIMONIALS)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="p-10 border-r border-[#1A3AFF]/15 last:border-r-0 flex flex-col"
    >
      <div className="flex gap-0.5 mb-6">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-[#1A3AFF] text-lg">★</span>
        ))}
      </div>
      <blockquote className="text-foreground leading-relaxed mb-8 flex-1">
        "{testimonial.quote}"
      </blockquote>
      <div className="flex items-center gap-3 border-t border-[#1A3AFF]/15 pt-6">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-10 h-10 object-cover"
        />
        <div>
          <p className="text-foreground font-medium text-sm">{testimonial.name}</p>
          <p className="text-muted-foreground text-xs">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
}
