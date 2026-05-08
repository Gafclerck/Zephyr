import { Link } from "react-router";
import {
  ArrowRight,
  Code,
  Smartphone,
  Palette,
  TrendingUp,
  ArrowUpRight,
  ArrowDown,
} from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { useLanguage } from "../contexts/LanguageContext";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const SERVICES_BASE = [
  { icon: Code,       label: "01", tKey: "s1", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop", slug: "developpement-web" },
  { icon: Smartphone, label: "02", tKey: "s2", img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop", slug: "applications-mobiles" },
  { icon: Palette,    label: "03", tKey: "s3", img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop", slug: "branding-design" },
  { icon: TrendingUp, label: "04", tKey: "s4", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop", slug: "marketing-digital" },
];

const FEATURED_PROJECTS_BASE = [
  { title: "Aura Fintech",    tKey: "fp1", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", slug: "aura-fintech",  span: true  },
  { title: "Lumina Health",   tKey: "fp2", img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop", slug: "lumina-health", span: false },
  { title: "Nova Retail",     tKey: "fp3", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop", slug: "nova-retail",  span: false },
];

const TESTIMONIALS_BASE = [
  { tKey: "t1", name: "Sarah Johnson", role: "CEO, TechStart Inc.",    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&fit=crop" },
  { tKey: "t2", name: "Michael Chen",  role: "VP Product, GrowthCo",  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&fit=crop" },
  { tKey: "t3", name: "Emma Williams", role: "CMO, BrandFlow",         avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&fit=crop" },
];

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export function Landing() {
  const { t } = useLanguage();

  const SERVICES = SERVICES_BASE.map(s => ({ ...s, title: t(`landing.${s.tKey}_title`), desc: t(`landing.${s.tKey}_desc`) }));
  const FEATURED_PROJECTS = FEATURED_PROJECTS_BASE.map(p => ({ ...p, category: t(`landing.${p.tKey}_category`), result: t(`landing.${p.tKey}_result`) }));
  const TESTIMONIALS = TESTIMONIALS_BASE.map(t_item => ({ ...t_item, quote: t(`landing.${t_item.tKey}_quote`) }));

  return (
    <div className="bg-background selection:bg-[#1A3AFF] selection:text-white">
      {/* ── HERO ── */}
      <Hero />

      {/* ── SERVICES ── */}
      <section className="py-10 md:py-14 border-b border-border/40 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="eyebrow">{t("landing.services_eyebrow")}</span>
              <h2 className="font-['Orbitron'] text-3xl md:text-4xl text-foreground font-medium tracking-tight">
                {t("landing.services_title")}
              </h2>
            </div>
            <Link
              to="/services"
              className="flex items-center gap-2 text-foreground/60 text-sm hover:text-[#1A3AFF] transition-colors group shrink-0"
            >
              {t("landing.services_link")}
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICES.map((service, i) => (
              <ServiceCard key={i} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED WORK ── */}
      <section className="py-10 md:py-14 border-b border-border/40 bg-muted/20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="eyebrow">{t("landing.portfolio_eyebrow")}</span>
              <h2 className="font-['Orbitron'] text-3xl md:text-4xl text-foreground font-medium tracking-tight">
                {t("landing.portfolio_title")}
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="flex items-center gap-2 text-foreground/60 text-sm hover:text-[#1A3AFF] transition-colors group shrink-0"
            >
              {t("landing.portfolio_link")}
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FEATURED_PROJECTS.map((project, i) => (
              <PortfolioCard key={i} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-10 md:py-14 border-b border-border/40 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="eyebrow">{t("landing.process_eyebrow")}</span>
            <h2 className="font-['Orbitron'] text-3xl md:text-4xl text-foreground tracking-tight">
              {t("landing.process_title")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {[
              { n: "01", title: t("landing.p1_title"), desc: t("landing.p1_desc") },
              { n: "02", title: t("landing.p2_title"), desc: t("landing.p2_desc") },
              { n: "03", title: t("landing.p3_title"), desc: t("landing.p3_desc") },
              { n: "04", title: t("landing.p4_title"), desc: t("landing.p4_desc") },
            ].map((step, i) => (
              <ProcessStep key={i} {...step} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-10 md:py-14 border-b border-border/40 bg-muted/20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-8">
            <span className="eyebrow">{t("landing.testimonials_eyebrow")}</span>
            <h2 className="font-['Orbitron'] text-3xl md:text-4xl text-foreground font-medium tracking-tight">
              {t("landing.testimonials_title")}
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
      <section className="py-12 md:py-16 bg-[#0A1628]">
        <div className="container mx-auto px-6 md:px-12 flex flex-col items-center text-center">
          <span className="eyebrow" style={{ color: "rgba(255,255,255,0.5)" }}>
            {t("landing.cta_eyebrow")}
          </span>
          <h2 className="font-['Orbitron'] text-3xl md:text-4xl lg:text-5xl text-white font-medium mb-6 tracking-tight max-w-3xl leading-[1.05]">
            {t("landing.cta_title")}
          </h2>
          <p className="text-white/60 text-sm md:text-base max-w-xl mb-8 leading-relaxed">
            {t("landing.cta_desc")}
          </p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-[#1A3AFF] text-white rounded-none font-medium tracking-wide hover:bg-[#0D2FE0] transition-colors flex items-center gap-3"
            >
              {t("landing.cta_btn")}
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
}

function Hero() {
  const { t } = useLanguage(); // i18n hook — required here since Hero is its own component
  return (
    <section className="relative flex min-h-[90vh] border-b border-border/40 overflow-hidden">
      {/* ── Colonne texte ── */}
      <div className="relative z-10 w-full lg:w-[55%] flex flex-col justify-between px-6 md:px-12 lg:px-16 xl:px-20 pt-6 md:pt-8 pb-6 md:pb-8 border-r border-border/40">
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-3 pt-4"
        >
          <span className="w-8 h-px bg-[#1A3AFF]" />
          <span className="text-muted-foreground text-xs font-['Orbitron'] tracking-widest uppercase">
            {t("landing.hero_eyebrow")}
          </span>
        </motion.div>

        {/* Main content */}
        <div className="flex flex-col justify-center flex-1 py-4 md:py-8">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-['Orbitron'] text-[clamp(2.4rem,5vw,4.5rem)] font-medium text-foreground leading-[1.0] tracking-tight mb-6"
          >
            {t("landing.hero_title_1")}
            <br />
            <span>
              {t("landing.hero_title_2a")}
              <span style={{ color: "#1A3AFF" }}>{t("landing.hero_title_2b")}</span>
            </span>
            <br />
            {t("landing.hero_title_3")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="text-muted-foreground text-sm md:text-base max-w-md mb-7 leading-relaxed"
          >
            {t("landing.hero_desc")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-3"
          >
            <Link to="/contact">
              <button className="px-7 py-3.5 bg-[#1A3AFF] text-white text-sm rounded-none font-medium tracking-wide hover:bg-[#0D2FE0] transition-colors flex items-center gap-2 group">
                {t("landing.cta_start")}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link to="/portfolio">
              <button className="px-7 py-3.5 border border-border text-foreground text-sm rounded-none font-medium tracking-wide hover:bg-muted hover:border-foreground/30 transition-colors flex items-center gap-2">
                {t("landing.cta_portfolio")}
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Bottom — stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="border-t border-border/40 pt-6"
        >
          <div className="grid grid-cols-3 gap-0 divide-x divide-border/40">
            {[
              { value: "150+", label: t("landing.stats_projects") },
              { value: "98%",  label: t("landing.stats_satisfaction") },
              { value: "12+",  label: t("landing.stats_countries") },
            ].map((s) => (
              <div key={s.label} className="px-3 sm:px-5 first:pl-0">
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
          <div className="absolute inset-0 bg-background/20" />
        </motion.div>

        {/* Carte flottante */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="absolute bottom-10 left-8 right-8 bg-background/90 backdrop-blur-md border border-border/60 p-5"
        >
          <p className="text-muted-foreground text-[10px] font-['Orbitron'] tracking-widest uppercase mb-3">
            {t("landing.recent_project")}
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
              <p className="font-['Orbitron'] text-foreground text-sm mb-0.5 truncate">
                Aura Fintech
              </p>
              <p className="text-muted-foreground text-xs truncate">
                SaaS · +300% volume transactionnel
              </p>
            </div>
            <Link to="/portfolio/aura-fintech" className="shrink-0">
              <div className="w-8 h-8 border border-border flex items-center justify-center hover:bg-[#1A3AFF] hover:border-[#1A3AFF] hover:text-white transition-colors text-muted-foreground">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          </div>
        </motion.div>

        {/* Scroll hint */}
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
            {t("landing.scroll")}
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
function ServiceCard({
  service,
  index,
}: {
  service: { icon: React.ElementType; label: string; tKey: string; img: string; slug: string; title: string; desc: string };
  index: number;
}) {
  const Icon = service.icon;
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {/* Link to individual service detail page */}
      <Link to={`/services/${service.slug}`} className="group block h-full">
        <div className="h-full bg-background border border-border/50 hover:border-[#1A3AFF]/40 transition-colors flex flex-col overflow-hidden">
          <div className="relative h-36 overflow-hidden">
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

          <div className="p-4 flex flex-col flex-1">
            <Icon className="w-4 h-4 text-[#1A3AFF] mb-3" />
            <h3 className="font-['Orbitron'] text-sm font-semibold text-foreground mb-1.5">
              {service.title}
            </h3>
            <p className="text-muted-foreground text-xs leading-relaxed flex-1 mb-3 line-clamp-3">
              {service.desc}
            </p>
            <div className="flex items-center gap-1.5 text-xs text-foreground/50 group-hover:text-[#1A3AFF] transition-colors">
              {t("landing.learn_more")}
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </div>
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
  project: { title: string; category: string; result: string; img: string; slug: string; span: boolean };
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`group relative overflow-hidden ${project.span ? "md:col-span-2" : ""}`}
      style={{ height: project.span ? "260px" : "200px" }}
    >
      {/* Link to individual case study */}
      <Link to={`/portfolio/${project.slug}`} className="block w-full h-full">
        <img
          src={project.img}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-background/50 group-hover:bg-background/30 transition-colors duration-300" />

        <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
          <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="px-2.5 py-1 bg-white/10 backdrop-blur-sm text-white/80 text-[10px] font-['Orbitron'] tracking-wider border border-white/15">
                {project.category}
              </span>
              <span className="text-[#00B4FF] text-sm">{project.result}</span>
            </div>
            <div className="flex items-end justify-between gap-4">
              <h3 className="font-['Orbitron'] text-white text-xl md:text-2xl font-medium tracking-tight">
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

function ProcessStep({
  n,
  title,
  desc,
  index,
}: {
  n: string;
  title: string;
  desc: string;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="p-5 bg-muted/40 border border-border/40 hover:border-[#1A3AFF]/30 hover:bg-muted/60 transition-colors group"
    >
      <div className="w-10 h-10 bg-background border border-border flex items-center justify-center mb-4 group-hover:border-[#1A3AFF]/40 transition-colors">
        <span className="font-['Orbitron'] text-sm font-medium text-foreground">
          {n}
        </span>
      </div>
      <h4 className="font-['Orbitron'] text-sm font-semibold text-foreground mb-2">
        {title}
      </h4>
      <p className="text-muted-foreground text-xs leading-relaxed">{desc}</p>
    </motion.div>
  );
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: { quote: string; name: string; role: string; avatar: string };
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="p-6 bg-background border border-border/40 flex flex-col h-full"
    >
      <div className="flex gap-0.5 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="w-3.5 h-3.5 text-[#1A3AFF]"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <blockquote className="text-foreground/90 leading-relaxed mb-5 flex-1 text-sm line-clamp-4">
        "{testimonial.quote}"
      </blockquote>
      <div className="flex items-center gap-3 border-t border-border/40 pt-4">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-9 h-9 object-cover"
        />
        <div>
          <p className="text-foreground font-semibold text-xs">
            {testimonial.name}
          </p>
          <p className="text-muted-foreground text-[11px]">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
}
