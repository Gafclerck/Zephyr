import { useRef } from "react";
import { Link } from "react-router";
import { ArrowRight, Zap, Target, Box } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";

const SOLUTIONS_BASE = [
  { slug:"landing-page-pro",         tKey:"s1", popular:true  },
  { slug:"brand-identity-system",    tKey:"s2", popular:false },
  { slug:"digital-marketing-engine", tKey:"s3", popular:true  },
  { slug:"corporate-platform",       tKey:"s4", popular:false },
  { slug:"ecommerce-architecture",   tKey:"s5", popular:false },
  { slug:"mobile-mvp-framework",     tKey:"s6", popular:false },
];

const BENEFITS = [
  { icon: Zap,    tKey:"b1" },
  { icon: Target, tKey:"b2" },
  { icon: Box,    tKey:"b3" },
];

export function Solutions() {
  const { t } = useLanguage();

  const solutions = SOLUTIONS_BASE.map(s => ({
    ...s,
    name:        t(`solutions.${s.tKey}_name`),
    tagline:     t(`solutions.${s.tKey}_tagline`),
    description: t(`solutions.${s.tKey}_desc`),
  }));

  return (
    <div className="bg-background min-h-screen selection:bg-[#1A3AFF] selection:text-white">

      {/* Hero */}
      <section className="pt-24 pb-12 border-b border-border/40 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-grid-blueprint-fine" />
          <div className="absolute inset-0 bg-grid-blueprint-major" />
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8, ease:[0.16,1,0.3,1] }} className="max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-px bg-[#1A3AFF]" />
              <span className="eyebrow" style={{ marginBottom:0 }}>{t("solutions.eyebrow")}</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tight text-foreground mb-6 font-['Orbitron']">
              {t("solutions.title_1")} <br />{t("solutions.title_2")}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">{t("solutions.subtitle")}</p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-12 md:py-16 bg-muted/10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => <SolutionCard key={index} solution={solution} index={index} />)}
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-14 md:py-16 border-y border-border/40 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-[#1A3AFF]/5 -skew-x-12 translate-x-20 pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-px bg-foreground/40" />
              <span className="eyebrow" style={{ marginBottom:0, color:"var(--foreground)", opacity:0.6 }}>{t("solutions.custom_eyebrow")}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-['Orbitron'] text-foreground mb-6">{t("solutions.custom_title")}</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{t("solutions.custom_desc")}</p>
            <Link to="/contact">
              <motion.button whileHover={{ scale:1.02 }} whileTap={{ scale:0.98 }} className="px-8 py-4 bg-foreground text-background text-sm font-semibold tracking-wide hover:bg-muted-foreground transition-colors inline-flex items-center gap-3">
                {t("solutions.custom_btn")} <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Value */}
      <section className="py-12 md:py-14">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex items-center gap-4 mb-10">
            <span className="w-12 h-px bg-[#1A3AFF]" />
            <h2 className="text-3xl md:text-4xl font-['Orbitron'] text-foreground">{t("solutions.value_eyebrow")}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BENEFITS.map((b, i) => (
              <BenefitBlock key={i} icon={b.icon} titleKey={`solutions.${b.tKey}_title`} descKey={`solutions.${b.tKey}_desc`} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

interface SolutionCardProps {
  solution: { slug:string; name:string; tagline:string; description:string; popular:boolean };
  index: number;
}

function SolutionCard({ solution, index }: SolutionCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once:true, margin:"-10%" });
  const { t } = useLanguage();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity:0, y:20 }}
      animate={isInView?{opacity:1,y:0}:{}}
      transition={{ duration:0.5, delay:index*0.08, ease:[0.16,1,0.3,1] }}
      className={`relative flex flex-col p-6 md:p-8 border transition-all duration-300 group ${
        solution.popular
          ? "bg-[#1A3AFF]/5 border-[#1A3AFF]/50"
          : "bg-background border-border/40 hover:border-border"
      }`}
    >
      {/* Corner accent */}
      <div className={`absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 transition-colors ${
        solution.popular ? "border-[#1A3AFF]" : "border-transparent group-hover:border-foreground/20"
      }`} />

      {/* Popular badge */}
      <div className="h-7 mb-5">
        {solution.popular && (
          <div className="inline-flex items-center px-3 py-1 bg-[#1A3AFF] text-white text-[10px] font-semibold tracking-widest uppercase">
            {t("solutions.popular")}
          </div>
        )}
      </div>

      {/* Core info */}
      <h3 className="text-lg font-semibold text-foreground mb-1.5">{solution.name}</h3>
      <p className="text-[#1A3AFF] text-xs font-medium uppercase tracking-wider mb-4">{solution.tagline}</p>
      <p className="text-muted-foreground text-sm leading-relaxed grow">{solution.description}</p>

      {/* CTA */}
      <div className="mt-8 pt-5 border-t border-border/40">
        <Link
          to={`/solutions/${solution.slug}`}
          className={`inline-flex items-center gap-2 text-sm font-semibold tracking-wide group/link ${
            solution.popular ? "text-[#1A3AFF]" : "text-foreground"
          }`}
        >
          {t("solutions.view_detail")}
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>
    </motion.div>
  );
}

function BenefitBlock({ icon: Icon, titleKey, descKey, index }: { icon: React.ElementType; titleKey: string; descKey: string; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once:true, margin:"-10%" });
  const { t } = useLanguage();

  return (
    <motion.div ref={ref} initial={{ opacity:0, y:20 }} animate={isInView?{opacity:1,y:0}:{}} transition={{ duration:0.5, delay:index*0.1 }} className="bg-muted/30 p-10 border border-border/40 hover:border-border transition-colors group">
      <div className="w-12 h-12 bg-background border border-border flex items-center justify-center mb-8 group-hover:border-[#1A3AFF]/50 transition-colors">
        <Icon className="w-5 h-5 text-[#1A3AFF]" />
      </div>
      <h4 className="text-base font-semibold text-foreground mb-4">{t(titleKey)}</h4>
      <p className="text-muted-foreground text-sm leading-relaxed">{t(descKey)}</p>
    </motion.div>
  );
}
