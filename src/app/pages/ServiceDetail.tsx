import { useParams, Link, Navigate } from "react-router";
import { ArrowLeft, ArrowRight, CheckCircle, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { type ReactNode } from "react";

/* ─── Service Data ─── */
interface ServiceDetail {
  title: string;
  shortDesc: string;
  category: string;
  hero: string;
  overview: string;
  process: { step: string; title: string; desc: string }[];
  technologies: string[];
  benefits: { title: string; desc: string }[];
  deliverables: string[];
  startingPrice: string;
  timeline: string;
  relatedSlugs: string[];
}

const SERVICES: Record<string, ServiceDetail> = {
  "developpement-web": {
    title: "Développement Web",
    shortDesc: "Sites & SaaS",
    category: "Engineering",
    hero: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    overview:
      "Nous concevons et développons des plateformes web performantes, scalables et taillées pour la conversion. De la landing page au SaaS B2B complexe, notre stack technique s'adapte à vos ambitions.",
    process: [
      { step: "01", title: "Discovery & Cadrage", desc: "Analyse de vos objectifs, benchmark concurrentiel, définition de l'architecture technique et des KPIs de succès." },
      { step: "02", title: "Design UX/UI", desc: "Wireframes, maquettes haute fidélité et prototype interactif validé avant tout développement." },
      { step: "03", title: "Développement Agile", desc: "Sprints hebdomadaires, démos régulières et intégration continue pour une livraison fiable et transparente." },
      { step: "04", title: "Mise en Production", desc: "Déploiement CI/CD, tests QA exhaustifs, optimisation Core Web Vitals et handover technique complet." },
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Vercel", "AWS"],
    benefits: [
      { title: "Performance Maximale", desc: "Optimisation Core Web Vitals dès la conception pour un score Lighthouse > 95." },
      { title: "Scalabilité Native", desc: "Architectures conçues pour absorber la croissance sans refonte technique majeure." },
      { title: "SEO Technique", desc: "Structure sémantique, metadata avancées et performances qui favorisent le classement Google." },
      { title: "Sécurité Renforcée", desc: "HTTPS, CORS, CSP, protection OWASP et mises à jour de sécurité régulières." },
    ],
    deliverables: ["Code source documenté (GitHub)", "Déploiement CI/CD configuré", "Documentation API complète", "Tests unitaires & e2e", "Formation équipe client", "1 mois de support inclus"],
    startingPrice: "500K FCFA",
    timeline: "4–8 semaines",
    relatedSlugs: ["applications-mobiles", "branding-design"],
  },
  "applications-mobiles": {
    title: "Applications Mobiles",
    shortDesc: "iOS & Android",
    category: "Mobile Engineering",
    hero: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop",
    overview:
      "Nous développons des applications mobiles natives et cross-platform qui délivrent une expérience utilisateur exceptionnelle. Des MVPs rapides aux plateformes complexes, nous maîtrisons tout l'écosystème mobile.",
    process: [
      { step: "01", title: "Analyse & Prototypage", desc: "Définition des user stories, architecture de données et prototype interactif pour valider l'expérience avant développement." },
      { step: "02", title: "Design Mobile-First", desc: "UI/UX spécifique aux guidelines Apple HIG et Material Design pour une intégration native parfaite." },
      { step: "03", title: "Développement Cross-Platform", desc: "Codebase React Native unique pour iOS et Android, avec accès aux APIs natives (caméra, GPS, biométrie…)." },
      { step: "04", title: "Publication & Suivi", desc: "Soumission App Store & Google Play, optimisation ASO et monitoring post-lancement." },
    ],
    technologies: ["React Native", "Expo", "Firebase", "Node.js", "TypeScript", "Redux Toolkit", "App Store Connect", "Google Play Console"],
    benefits: [
      { title: "Cross-Platform Efficace", desc: "Une seule codebase pour iOS et Android : coût réduit, délai divisé par deux." },
      { title: "Expérience Native", desc: "Performances et animations fluides à 60fps pour une sensation vraiment native." },
      { title: "Mode Hors Ligne", desc: "Synchronisation intelligente pour une utilisation même sans connexion réseau." },
      { title: "Notifications Ciblées", desc: "Push notifications personnalisées pour maximiser l'engagement et la rétention." },
    ],
    deliverables: ["Applications iOS & Android", "Backend & API REST", "Panel d'administration", "Publication sur les stores", "Documentation technique", "3 mois de support inclus"],
    startingPrice: "2M FCFA",
    timeline: "8–12 semaines",
    relatedSlugs: ["developpement-web", "branding-design"],
  },
  "branding-design": {
    title: "Branding & Design",
    shortDesc: "Identité Visuelle",
    category: "Creative Direction",
    hero: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
    overview:
      "Une identité de marque forte est votre avantage compétitif le plus durable. Nous créons des systèmes visuels cohérents, mémorables et déclinables sur tous vos supports — du digital au physique.",
    process: [
      { step: "01", title: "Audit & Positionnement", desc: "Analyse de l'existant, étude des concurrents, définition du territoire de marque et des valeurs différenciantes." },
      { step: "02", title: "Exploration Créative", desc: "3 directions créatives distinctes présentées, chacune avec logotype, palette et typographie." },
      { step: "03", title: "Raffinement", desc: "Développement de la direction choisie jusqu'à un système complet et polyvalent." },
      { step: "04", title: "Déploiement", desc: "Déclinaison sur tous les supports définis et livraison d'un brand book exhaustif." },
    ],
    technologies: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "After Effects", "InDesign"],
    benefits: [
      { title: "Différenciation Forte", desc: "Une identité unique qui se démarque dans un marché saturé et reste en mémoire." },
      { title: "Cohérence Totale", desc: "Système de design scalable déclinable sur chaque point de contact avec votre marque." },
      { title: "Crédibilité Instantanée", desc: "Un branding premium augmente la perception de valeur et justifie un positionnement prix plus élevé." },
      { title: "Propriété Intellectuelle", desc: "Cession complète des droits sur tous les éléments créés — vous êtes propriétaire à 100%." },
    ],
    deliverables: ["Logotype (tous formats vectoriels)", "Brand Guidelines (PDF & web)", "Palette & typographie", "Librairie de composants Figma", "Kit réseaux sociaux", "Papeterie & supports imprimés"],
    startingPrice: "300K FCFA",
    timeline: "2–4 semaines",
    relatedSlugs: ["developpement-web", "marketing-digital"],
  },
  "marketing-digital": {
    title: "Marketing Digital",
    shortDesc: "Acquisition & SEO",
    category: "Growth Marketing",
    hero: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    overview:
      "Des stratégies de croissance data-driven pour accélérer votre acquisition client et maximiser votre ROI. Nous pilotons vos campagnes avec rigueur analytique pour chaque franc investi.",
    process: [
      { step: "01", title: "Audit & Stratégie", desc: "Analyse de l'existant, étude du marché cible et définition d'un plan d'action priorisé par ROI potentiel." },
      { step: "02", title: "Mise en Place", desc: "Configuration du tracking, création des audiences, paramétrage des campagnes et des outils analytics." },
      { step: "03", title: "Activation & Optimisation", desc: "Lancement des campagnes, A/B testing continu et optimisation hebdomadaire basée sur les données." },
      { step: "04", title: "Reporting & Scaling", desc: "Rapports détaillés mensuels, recommandations stratégiques et scaling des actions les plus performantes." },
    ],
    technologies: ["Google Ads", "Meta Ads", "Google Analytics 4", "HubSpot", "SEMrush", "Mailchimp", "Hotjar", "Google Tag Manager"],
    benefits: [
      { title: "ROI Mesurable", desc: "Chaque action trackée avec précision pour un pilotage par la donnée et non par intuition." },
      { title: "Trafic Qualifié", desc: "Ciblage précis pour attirer des prospects réellement intéressés par votre offre." },
      { title: "Visibilité Organique", desc: "Stratégie SEO long-terme pour un trafic gratuit et durable complémentaire au paid." },
      { title: "Automation", desc: "Séquences email et workflows automatisés pour nurturer vos leads sans effort manuel." },
    ],
    deliverables: ["Audit SEO technique", "Plan stratégique 90 jours", "Campagnes Ads configurées", "Rapports de performance mensuels", "Dashboard analytics en temps réel", "Consulting mensuel inclus"],
    startingPrice: "150K FCFA/mois",
    timeline: "3 mois minimum",
    relatedSlugs: ["developpement-web", "branding-design"],
  },
};

const SLUG_ORDER = ["developpement-web", "applications-mobiles", "branding-design", "marketing-digital"];

const SERVICE_LABELS: Record<string, string> = {
  "developpement-web": "Développement Web",
  "applications-mobiles": "Applications Mobiles",
  "branding-design": "Branding & Design",
  "marketing-digital": "Marketing Digital",
};


function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? SERVICES[slug] : undefined;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const currentIndex = SLUG_ORDER.indexOf(slug!);
  const prevSlug = currentIndex > 0 ? SLUG_ORDER[currentIndex - 1] : null;
  const nextSlug = currentIndex < SLUG_ORDER.length - 1 ? SLUG_ORDER[currentIndex + 1] : null;

  return (
    <div className="bg-background min-h-screen selection:bg-[#1A3AFF] selection:text-white pb-24">

      {/* ── Hero ── */}
      <section className="pt-32 pb-16 border-b border-border/40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-px h-full bg-border/40 hidden lg:block" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground text-xs tracking-widest uppercase font-semibold transition-colors mb-12 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Nos Services
            </Link>

            <div className="flex items-center gap-4 mb-8">
              <span className="px-3 py-1 bg-[#1A3AFF]/10 border border-[#1A3AFF]/30 text-[#1A3AFF] text-[10px] font-semibold tracking-widest uppercase">
                {service.category}
              </span>
              <span className="w-8 h-[1px] bg-border" />
              <span className="text-muted-foreground text-xs font-semibold tracking-widest uppercase">{service.shortDesc}</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-['Orbitron'] text-foreground mb-8 leading-[1.05] tracking-tight font-medium">
              {service.title}
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              {service.overview}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Hero Image ── */}
      <section className="border-b border-border/40">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative w-full h-[45vh] md:h-[60vh] overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-[#1A3AFF] z-20 mix-blend-screen" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-[#1A3AFF] z-20 mix-blend-screen" />
          <div className="absolute inset-0 bg-[#1A3AFF]/5 mix-blend-overlay z-10" />
          <img
            src={service.hero}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          {/* Price badge */}
          <div className="absolute bottom-8 right-8 z-20 bg-background/90 backdrop-blur border border-border px-6 py-4 flex items-center gap-3">
            <span className="w-2 h-2 bg-[#1A3AFF]" />
            <span className="text-sm text-foreground font-semibold">À partir de {service.startingPrice}</span>
          </div>
          {/* Timeline badge */}
          <div className="absolute bottom-8 left-8 z-20 bg-background/90 backdrop-blur border border-border px-6 py-4 flex items-center gap-3">
            <span className="w-2 h-2 bg-[#00E5FF]" />
            <span className="text-sm text-foreground font-semibold">{service.timeline}</span>
          </div>
        </motion.div>
      </section>

      {/* ── Process ── */}
      <section className="py-24 border-b border-border/40">
        <div className="container mx-auto px-6 md:px-12">
          <Reveal>
            <div className="flex items-center gap-4 mb-16">
              <span className="w-12 h-px bg-[#1A3AFF]" />
              <span className="eyebrow" style={{ marginBottom: 0 }}>Méthodologie</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-['Orbitron'] text-foreground tracking-tight mb-16">
              Notre Processus
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 relative">
            {service.process.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.1}>
                <div className="relative group">
                  <div className="h-px w-full bg-border/60 absolute top-8 left-0 hidden lg:block" />
                  <div className="w-16 h-16 rounded-none bg-background border border-border flex items-center justify-center relative z-10 mb-10 group-hover:bg-[#1A3AFF] group-hover:border-[#1A3AFF] transition-colors">
                    <span className="text-sm font-semibold text-foreground group-hover:text-white transition-colors">{step.step}</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-4 text-foreground">{step.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Technologies ── */}
      <section className="py-16 border-b border-border/40 bg-muted/20">
        <div className="container mx-auto px-6 md:px-12">
          <Reveal>
            <div className="flex items-center gap-6 flex-wrap">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Stack Technique :</span>
              {service.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 border border-border/60 text-foreground/80 text-xs font-medium tracking-wide hover:border-[#1A3AFF]/50 hover:text-foreground transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="py-24 border-b border-border/40">
        <div className="container mx-auto px-6 md:px-12">
          <Reveal>
            <div className="flex items-center gap-4 mb-16">
              <span className="w-12 h-px bg-[#1A3AFF]" />
              <span className="eyebrow" style={{ marginBottom: 0 }}>Avantages</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-['Orbitron'] text-foreground tracking-tight mb-16">
              Ce que vous gagnez
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {service.benefits.map((benefit, i) => (
              <Reveal key={benefit.title} delay={i * 0.08}>
                <div className="p-8 md:p-10 bg-muted/20 border border-border/40 hover:border-[#1A3AFF]/30 transition-colors group">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-8 h-8 border border-[#1A3AFF]/40 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#1A3AFF] group-hover:border-[#1A3AFF] transition-colors">
                      <CheckCircle className="w-4 h-4 text-[#1A3AFF] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{benefit.desc}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Deliverables ── */}
      <section className="py-24 border-b border-border/40">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <Reveal>
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-px bg-[#1A3AFF]" />
                <span className="eyebrow" style={{ marginBottom: 0 }}>Livrables</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-['Orbitron'] text-foreground tracking-tight mb-8">
                Ce que vous recevez
              </h2>
              <ul className="space-y-4">
                {service.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#1A3AFF] mt-2 shrink-0" />
                    <span className="text-foreground/80 text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="p-8 md:p-12 bg-muted/20 border border-border/40">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-2">Budget initial</p>
                <p className="text-4xl font-bold text-foreground mb-6">{service.startingPrice}</p>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-2">Délai estimé</p>
                <p className="text-xl font-medium text-foreground mb-12">{service.timeline}</p>
                <Link to="/contact">
                  <button className="w-full py-4 bg-[#1A3AFF] text-white text-sm font-semibold tracking-widest uppercase hover:bg-[#0D2FE0] transition-colors flex items-center justify-center gap-3">
                    Démarrer ce projet
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
                <Link to="/solutions">
                  <button className="w-full mt-3 py-4 border border-border text-foreground text-sm font-semibold tracking-widest uppercase hover:bg-muted/30 transition-colors flex items-center justify-center gap-3">
                    Voir nos packages
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Prev / Next navigation ── */}
      <section className="border-t border-border/40 py-12">
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          {prevSlug ? (
            <Link
              to={`/services/${prevSlug}`}
              className="group flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <div className="w-10 h-10 border border-border flex items-center justify-center group-hover:border-[#1A3AFF] group-hover:bg-[#1A3AFF] transition-colors">
                <ArrowLeft className="w-4 h-4 group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-widest mb-1">Précédent</p>
                <p className="text-sm text-foreground font-medium">{SERVICE_LABELS[prevSlug]}</p>
              </div>
            </Link>
          ) : <div />}

          <Link
            to="/services"
            className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
          >
            Tous les services
          </Link>

          {nextSlug ? (
            <Link
              to={`/services/${nextSlug}`}
              className="group flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors text-right"
            >
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-widest mb-1">Suivant</p>
                <p className="text-sm text-foreground font-medium">{SERVICE_LABELS[nextSlug]}</p>
              </div>
              <div className="w-10 h-10 border border-border flex items-center justify-center group-hover:border-[#1A3AFF] group-hover:bg-[#1A3AFF] transition-colors">
                <ArrowRight className="w-4 h-4 group-hover:text-white transition-colors" />
              </div>
            </Link>
          ) : <div />}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-32 relative overflow-hidden bg-foreground mx-6 md:mx-12">
        <div className="absolute inset-0 opacity-10">
          <img src={service.hero} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-['Orbitron'] text-background mb-8 tracking-tight max-w-2xl">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-background/70 text-lg mb-12 max-w-xl">
            Discutons de vos ambitions. Nous reviendrons vers vous sous 48h avec une stratégie sur-mesure.
          </p>
          <Link to="/contact">
            <button className="px-10 py-5 bg-[#1A3AFF] text-white font-medium tracking-wide hover:bg-[#0D2FE0] transition-colors inline-flex items-center gap-3">
              Initier la collaboration
              <ExternalLink className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
