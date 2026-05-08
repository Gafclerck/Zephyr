import { useState, useRef } from "react";
import { ArrowRight, Filter } from "lucide-react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { Link } from "react-router";
import { useLanguage } from "../contexts/LanguageContext";

const SLUG_MAP: Record<string, string> = {
  "Aura Fintech":    "aura-fintech",
  "Lumina Health":   "lumina-health",
  "Nova Retail":     "nova-retail",
  "MarketPlace Pro": "marketplace-pro",
  "TeleCare":        "telecare",
  "Onyx Coffee":     "onyx-coffee",
};

const PROJECTS_BASE = [
  { title:"Aura Fintech",    category:"web",      tKey:"p1", tags:["React","Node.js","PostgreSQL"], large:true,  img:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" },
  { title:"Lumina Health",   category:"mobile",   tKey:"p2", tags:["React Native","AI","Santé"],   large:false, img:"https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop" },
  { title:"Nova Retail",     category:"branding", tKey:"p3", tags:["Brand Identity","Packaging"],  large:false, img:"https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop" },
  { title:"MarketPlace Pro", category:"web",      tKey:"p4", tags:["Next.js","Stripe","E-Commerce"],large:true, img:"https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2070&auto=format&fit=crop" },
  { title:"TeleCare",        category:"mobile",   tKey:"p5", tags:["Healthcare","WebRTC","HIPAA"], large:false, img:"https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop" },
  { title:"Onyx Coffee",     category:"branding", tKey:"p6", tags:["Rebranding","Print"],          large:false, img:"https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=2070&auto=format&fit=crop" },
];

export function Portfolio() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id:"all",      label: t("portfolio.filter_all") },
    { id:"web",      label: t("portfolio.filter_web") },
    { id:"mobile",   label: t("portfolio.filter_mobile") },
    { id:"branding", label: t("portfolio.filter_branding") },
  ];

  const projects = PROJECTS_BASE.map(p => ({
    ...p,
    description: t(`portfolio.${p.tKey}_desc`),
    results:     t(`portfolio.${p.tKey}_results`),
  }));

  const filteredProjects = activeFilter === "all" ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <div className="bg-background min-h-screen selection:bg-[#1A3AFF] selection:text-white pb-24">

      {/* Hero */}
      <section className="pt-20 md:pt-28 pb-12 border-b border-border/40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-px h-full bg-border/40 hidden lg:block" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8, ease:[0.16,1,0.3,1] }} className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[1px] bg-[#1A3AFF]" />
              <span className="eyebrow" style={{ marginBottom:0 }}>{t("portfolio.eyebrow")}</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tight text-foreground mb-5 font-['Orbitron']">
              {t("portfolio.title")}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">{t("portfolio.subtitle")}</p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-background border-b border-border/40 relative z-20">
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="hidden md:flex items-center gap-3">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-['Orbitron'] uppercase tracking-wider text-muted-foreground">{t("portfolio.filter_by")}</span>
          </div>
          <div className="flex overflow-x-auto no-scrollbar gap-2 md:gap-4 pb-2 md:pb-0 w-full md:w-auto">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`whitespace-nowrap px-6 py-2.5 text-sm font-medium tracking-wide transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-foreground text-background shadow-md"
                    : "bg-muted/30 text-foreground/70 hover:bg-muted hover:text-foreground border border-border/50"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 relative overflow-hidden bg-foreground mx-6 md:mx-12">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[#0A1628]/80" />
          <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop" alt="texture" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-['Orbitron'] text-background mb-6 tracking-tight max-w-2xl">{t("portfolio.cta_title")}</h2>
          <p className="text-background/80 text-base mb-8 max-w-xl">{t("portfolio.cta_desc")}</p>
          <Link to="/contact">
            <button className="px-8 py-4 bg-[#1A3AFF] text-white font-medium tracking-wide hover:bg-[#0D2FE0] transition-colors inline-flex items-center gap-3">
              {t("portfolio.cta_btn")} <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

interface ProjectCardProps {
  project: { title:string; category:string; description:string; image?:string; img?:string; results:string; tags:string[]; large:boolean };
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once:true, margin:"-10%" });
  const slug = SLUG_MAP[project.title] ?? "";
  const imgSrc = project.image ?? project.img ?? "";
  const Wrapper = slug ? Link : "div";

  return (
    <motion.div
      layout
      initial={{ opacity:0, scale:0.95 }}
      animate={{ opacity:1, scale:1 }}
      exit={{ opacity:0, scale:0.95 }}
      transition={{ duration:0.5, ease:[0.16,1,0.3,1] }}
      className={`group ${project.large?"md:col-span-2":""}`}
    >
      {/* @ts-ignore */}
      <Wrapper
        ref={ref}
        {...(slug ? { to:`/portfolio/${slug}` } : {})}
        className={`relative overflow-hidden bg-muted/20 border border-border/40 shadow-sm hover:shadow-2xl hover:border-[#1A3AFF]/30 transition-all duration-500 block h-full cursor-pointer ${project.large?"min-h-[280px] md:min-h-[360px] lg:min-h-[420px]":"min-h-[220px] md:min-h-[280px] lg:min-h-[320px]"}`}
      >
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img src={imgSrc} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
        </div>
        <div className="absolute inset-0 bg-background/50 group-hover:bg-background/20 transition-colors duration-300" />
        <div className="relative h-full p-5 md:p-7 flex flex-col justify-between z-10">
          <div className="flex flex-wrap gap-2 transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
            {project.tags.map((tag, i) => (
              <span key={i} className="px-3 py-1 bg-background/50 backdrop-blur-md border border-white/10 text-foreground text-xs font-medium tracking-wide">{tag}</span>
            ))}
          </div>
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
            <h3 className="text-2xl md:text-3xl font-['Orbitron'] text-foreground mb-3 font-medium tracking-tight">{project.title}</h3>
            <p className="text-muted-foreground text-base mb-5 max-w-xl leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">{project.description}</p>
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-border/50">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#00E5FF]" />
                <span className="text-foreground text-sm font-medium">{project.results}</span>
              </div>
              <div className="w-9 h-9 bg-background border border-border flex items-center justify-center group-hover:bg-[#1A3AFF] group-hover:border-[#1A3AFF] transition-colors">
                <ArrowRight className="w-5 h-5 text-foreground group-hover:text-white transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </motion.div>
  );
}
