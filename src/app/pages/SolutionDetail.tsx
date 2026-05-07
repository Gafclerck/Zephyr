import { useParams, Link, Navigate } from "react-router";
import { ArrowLeft, ArrowRight, Check, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { type ReactNode } from "react";

interface SolutionDetail {
  name: string;
  tagline: string;
  category: string;
  description: string;
  hero: string;
  overview: string;
  process: { step: string; title: string; desc: string }[];
  features: string[];
  technologies: string[];
  benefits: { title: string; desc: string }[];
  pricing: string;
  timeline: string;
  popular: boolean;
}

const SOLUTIONS: Record<string, SolutionDetail> = {
  "landing-page-pro": {
    name: "Landing Page Pro",
    tagline: "Conversion Haute Performance",
    category: "Web",
    description: "Une page d'atterrissage optimisée au pixel près pour maximiser les conversions.",
    hero: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop",
    overview: "Notre offre Landing Page Pro est conçue pour transformer vos visiteurs en clients. Chaque élément est pensé pour maximiser le taux de conversion, du headline percutant au formulaire optimisé.",
    process: [
      { step: "01", title: "Brief & Stratégie", desc: "Analyse de votre offre, de vos cibles et de vos objectifs de conversion." },
      { step: "02", title: "Copywriting", desc: "Rédaction persuasive centrée sur la valeur et les objections de votre audience." },
      { step: "03", title: "Design & Dev", desc: "Maquette haute fidélité et développement pixel-perfect, responsive." },
      { step: "04", title: "Tests & Lancement", desc: "A/B testing, optimisation Core Web Vitals et mise en production." },
    ],
    features: ["Architecture Single Page", "A/B testing intégré", "Formulaires de capture avancés", "Performances Core Web Vitals (<2s)", "Responsive design absolu", "1 mois de support technique"],
    technologies: ["React", "Next.js", "TypeScript", "Vercel", "Google Analytics 4"],
    benefits: [
      { title: "Conversion Maximale", desc: "Design et copywriting pensés pour transformer chaque visiteur en prospect qualifié." },
      { title: "Livraison Rapide", desc: "En 1 à 2 semaines, votre landing page est en ligne et génère des leads." },
    ],
    pricing: "À partir de 500K FCFA",
    timeline: "1–2 semaines",
    popular: true,
  },
  "brand-identity-system": {
    name: "Brand Identity System",
    tagline: "Système de marque complet",
    category: "Branding",
    description: "Identité visuelle exhaustive incluant logotype, typographie, palette et brand book.",
    hero: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
    overview: "Un système de marque complet et cohérent qui positionne votre entreprise sur le segment premium. Logotype, charte graphique, brand book et tous les supports essentiels.",
    process: [
      { step: "01", title: "Audit & Recherche", desc: "Analyse concurrentielle et définition du territoire de marque." },
      { step: "02", title: "3 Directions Créatives", desc: "Trois concepts distincts présentés avec logotype, palette et typo." },
      { step: "03", title: "Développement", desc: "Raffinement de la direction choisie en système complet." },
      { step: "04", title: "Livraison", desc: "Brand book final + tous fichiers sources vectoriels." },
    ],
    features: ["Création de Logotype (3 concepts)", "Système chromatique et typographique", "Brand Guidelines (Livre de marque)", "Cartes de visite / Papeterie", "Kit Réseaux Sociaux", "Cession complète des droits"],
    technologies: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "InDesign"],
    benefits: [
      { title: "Identité Mémorable", desc: "Une marque forte qui se distingue et reste gravée dans les esprits." },
      { title: "Propriété Totale", desc: "Tous les droits vous sont cédés — vous êtes propriétaire à 100%." },
    ],
    pricing: "À partir de 300K FCFA",
    timeline: "2–3 semaines",
    popular: false,
  },
  "digital-marketing-engine": {
    name: "Digital Marketing Engine",
    tagline: "Trafic & Acquisition B2B/B2C",
    category: "Marketing",
    description: "Campagne de marketing digital trimestrielle incluant SEO, médias sociaux et publicité.",
    hero: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    overview: "Une stratégie marketing complète et data-driven pour accélérer votre croissance. SEO, publicité payante et réseaux sociaux gérés par nos experts pour maximiser votre ROI.",
    process: [
      { step: "01", title: "Audit Complet", desc: "Analyse SEO, des canaux existants et des opportunités de croissance." },
      { step: "02", title: "Plan Stratégique", desc: "Roadmap 90 jours priorisée par impact et ROI potentiel." },
      { step: "03", title: "Activation", desc: "Lancement des campagnes et production de contenus." },
      { step: "04", title: "Optimisation Continue", desc: "A/B tests, reporting mensuel et ajustements stratégiques." },
    ],
    features: ["Audit et optimisation SEO", "Gestion des réseaux sociaux", "Campagnes Ads (Google/Meta)", "Création de contenu premium", "Rapports de performance mensuels", "Consulting stratégique"],
    technologies: ["Google Ads", "Meta Ads", "Google Analytics 4", "SEMrush", "HubSpot", "Mailchimp"],
    benefits: [
      { title: "ROI Mesurable", desc: "Chaque euro investi tracké avec précision grâce à notre dashboard analytics." },
      { title: "Croissance Durable", desc: "Combinaison SEO + Paid pour un trafic organique croissant sur le long terme." },
    ],
    pricing: "150K FCFA / mois",
    timeline: "3 mois minimum",
    popular: true,
  },
  "corporate-platform": {
    name: "Corporate Platform",
    tagline: "Site vitrine institutionnel",
    category: "Web",
    description: "Plateforme web professionnelle complète pour asseoir l'autorité de votre entreprise.",
    hero: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    overview: "Votre vitrine digitale institutionnelle, conçue pour inspirer confiance et convertir. Jusqu'à 10 pages structurées, design premium et optimisation SEO complète.",
    process: [
      { step: "01", title: "Architecture", desc: "Définition de la structure, des pages et de l'arborescence du contenu." },
      { step: "02", title: "Design", desc: "Maquettes pages clés + charte graphique appliquée." },
      { step: "03", title: "Développement", desc: "Intégration pixel-perfect, animations et responsive." },
      { step: "04", title: "SEO & Lancement", desc: "Optimisation technique, analytics et mise en production." },
    ],
    features: ["Jusqu'à 10 pages structurées", "Design responsive et interactif", "Formulaires de contact complexes", "Optimisation SEO de base", "Intégration Analytics/Tag Manager", "3 mois de support évolutif"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Contentful", "Vercel"],
    benefits: [
      { title: "Crédibilité Instantanée", desc: "Un site professionnel qui inspire confiance dès les premières secondes." },
      { title: "CMS Intégré", desc: "Mettez à jour votre contenu vous-même sans compétences techniques." },
    ],
    pricing: "À partir de 1.5M FCFA",
    timeline: "3–4 semaines",
    popular: false,
  },
  "ecommerce-architecture": {
    name: "E-Commerce Architecture",
    tagline: "Vente en ligne performante",
    category: "Web",
    description: "Boutique en ligne robuste avec paiements sécurisés et gestion de stocks avancée.",
    hero: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
    overview: "Une boutique en ligne complète, sécurisée et optimisée pour la conversion. Gestion de catalogue, paiements multi-devises et interface d'administration intuitive.",
    process: [
      { step: "01", title: "Catalogue & UX", desc: "Architecture produits, tunnel d'achat et parcours client optimisés." },
      { step: "02", title: "Paiements", desc: "Intégration passerelles locales (Wave, Orange Money) et internationales (Stripe)." },
      { step: "03", title: "Back-office", desc: "Interface de gestion commandes, stocks et clients." },
      { step: "04", title: "Tests & Go Live", desc: "Scénarios d'achat, sécurité PCI-DSS et lancement." },
    ],
    features: ["Jusqu'à 100 produits intégrés", "Passerelles de paiement locales/int.", "Panier et tunnel de conversion optimisés", "Interface de gestion des commandes", "Espace client complet", "6 mois de support technique"],
    technologies: ["Next.js", "Stripe", "Wave API", "PostgreSQL", "Cloudinary", "Vercel"],
    benefits: [
      { title: "Conversion Optimisée", desc: "Tunnel d'achat simplifié pour réduire l'abandon panier." },
      { title: "Paiements Locaux", desc: "Wave, Orange Money et autres solutions locales intégrées nativement." },
    ],
    pricing: "À partir de 2.5M FCFA",
    timeline: "4–6 semaines",
    popular: false,
  },
  "mobile-mvp-framework": {
    name: "Mobile MVP Framework",
    tagline: "Lancement d'application",
    category: "Mobile",
    description: "Produit Minimum Viable pour iOS et Android pour valider votre concept rapidement.",
    hero: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
    overview: "Lancez votre application mobile en 6 à 8 semaines. Notre framework MVP vous permet de valider votre concept sur le marché avec un investissement maîtrisé.",
    process: [
      { step: "01", title: "Scoping", desc: "Définition des 5-7 features core et architecture technique." },
      { step: "02", title: "Design", desc: "UI/UX mobile-first validé avant développement." },
      { step: "03", title: "Développement", desc: "React Native cross-platform avec backend cloud." },
      { step: "04", title: "Publication", desc: "Soumission App Store & Google Play, optimisation ASO." },
    ],
    features: ["Codebase cross-platform (React Native)", "5 à 7 fonctionnalités clés", "Authentification sécurisée (OAuth)", "Backend / Base de données Cloud", "Système de notifications Push", "3 mois d'accompagnement post-lancement"],
    technologies: ["React Native", "Expo", "Firebase", "Node.js", "TypeScript"],
    benefits: [
      { title: "Time-to-Market Rapide", desc: "En 6 semaines, votre app est sur les stores et génère des données marché réelles." },
      { title: "Cross-Platform", desc: "iOS & Android depuis une seule codebase pour optimiser l'investissement." },
    ],
    pricing: "À partir de 3M FCFA",
    timeline: "6–8 semaines",
    popular: false,
  },
};

const SLUG_ORDER = ["landing-page-pro", "brand-identity-system", "digital-marketing-engine", "corporate-platform", "ecommerce-architecture", "mobile-mvp-framework"];

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

export function SolutionDetail() {
  const { slug } = useParams<{ slug: string }>();
  const solution = slug ? SOLUTIONS[slug] : undefined;

  if (!solution) return <Navigate to="/solutions" replace />;

  const currentIndex = SLUG_ORDER.indexOf(slug!);
  const prevSlug = currentIndex > 0 ? SLUG_ORDER[currentIndex - 1] : null;
  const nextSlug = currentIndex < SLUG_ORDER.length - 1 ? SLUG_ORDER[currentIndex + 1] : null;

  return (
    <div className="bg-background min-h-screen selection:bg-[#1A3AFF] selection:text-white pb-24">

      {/* Hero */}
      <section className="pt-32 pb-16 border-b border-border/40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-px h-full bg-border/40 hidden lg:block" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <Link to="/solutions" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-['Orbitron'] text-xs tracking-widest uppercase transition-colors mb-12 group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Nos Solutions
            </Link>
            <div className="flex items-center gap-4 mb-8">
              <span className="px-3 py-1 bg-[#1A3AFF]/10 border border-[#1A3AFF]/30 text-[#1A3AFF] text-[10px] font-['Orbitron'] tracking-widest uppercase">{solution.category}</span>
              {solution.popular && <span className="px-3 py-1 bg-[#1A3AFF] text-white text-[10px] font-['Orbitron'] tracking-widest uppercase">Plus Demandé</span>}
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-['Orbitron'] text-foreground mb-6 leading-[1.05] tracking-tight font-medium">{solution.name}</h1>
            <p className="text-[#1A3AFF] text-lg font-medium tracking-wide mb-6">{solution.tagline}</p>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">{solution.overview}</p>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="border-b border-border/40">
        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="relative w-full h-[45vh] md:h-[55vh] overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-[#1A3AFF] z-20 mix-blend-screen" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-[#1A3AFF] z-20 mix-blend-screen" />
          <img src={solution.hero} alt={solution.name} className="w-full h-full object-cover" />
          <div className="absolute bottom-8 right-8 z-20 bg-background/90 backdrop-blur border border-border px-6 py-4 flex items-center gap-3">
            <span className="w-2 h-2 bg-[#1A3AFF]" />
            <span className="font-['Orbitron'] text-sm text-foreground font-medium">{solution.pricing}</span>
          </div>
          <div className="absolute bottom-8 left-8 z-20 bg-background/90 backdrop-blur border border-border px-6 py-4 flex items-center gap-3">
            <span className="w-2 h-2 bg-[#00E5FF]" />
            <span className="font-['Orbitron'] text-sm text-foreground font-medium">{solution.timeline}</span>
          </div>
        </motion.div>
      </section>

      {/* Process */}
      <section className="py-24 border-b border-border/40">
        <div className="container mx-auto px-6 md:px-12">
          <Reveal><div className="flex items-center gap-4 mb-4"><span className="w-12 h-px bg-[#1A3AFF]" /><span className="eyebrow" style={{ marginBottom: 0 }}>Méthodologie</span></div></Reveal>
          <Reveal delay={0.05}><h2 className="text-4xl md:text-5xl font-['Orbitron'] text-foreground tracking-tight mb-16">Notre Processus</h2></Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {solution.process.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.1}>
                <div className="relative group">
                  <div className="h-px w-full bg-border/60 absolute top-8 left-0 hidden lg:block" />
                  <div className="w-16 h-16 bg-background border border-border flex items-center justify-center relative z-10 mb-10 group-hover:bg-[#1A3AFF] group-hover:border-[#1A3AFF] transition-colors">
                    <span className="font-['Orbitron'] text-lg font-medium text-foreground group-hover:text-white transition-colors">{step.step}</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-3 text-foreground">{step.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features + Pricing */}
      <section className="py-24 border-b border-border/40">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <Reveal>
              <div className="flex items-center gap-4 mb-8"><span className="w-12 h-px bg-[#1A3AFF]" /><span className="eyebrow" style={{ marginBottom: 0 }}>Inclus</span></div>
              <h2 className="text-4xl font-['Orbitron'] text-foreground tracking-tight mb-10">Ce que comprend cette offre</h2>
              <ul className="space-y-4">
                {solution.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#1A3AFF] shrink-0 mt-0.5" />
                    <span className="text-foreground/80 text-base">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 pt-8 border-t border-border/40">
                <p className="text-[10px] font-['Orbitron'] uppercase tracking-widest text-muted-foreground mb-2">Stack Technique</p>
                <div className="flex flex-wrap gap-2">
                  {solution.technologies.map((t) => (
                    <span key={t} className="px-3 py-1.5 border border-border/60 text-xs text-foreground/70 font-medium">{t}</span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="p-8 md:p-12 bg-muted/20 border border-border/40 sticky top-24">
                <p className="text-[10px] font-['Orbitron'] uppercase tracking-widest text-muted-foreground mb-2">Budget Initial</p>
                <p className="text-4xl font-['Orbitron'] font-semibold text-foreground mb-6">{solution.pricing}</p>
                <p className="text-[10px] font-['Orbitron'] uppercase tracking-widest text-muted-foreground mb-2">Délai Estimé</p>
                <p className="text-xl font-medium text-foreground mb-4">{solution.timeline}</p>
                {solution.benefits.map((b) => (
                  <div key={b.title} className="py-4 border-t border-border/30">
                    <p className="text-sm font-semibold text-foreground mb-1">{b.title}</p>
                    <p className="text-sm text-muted-foreground">{b.desc}</p>
                  </div>
                ))}
                <Link to="/contact">
                  <button className="w-full mt-6 py-4 bg-[#1A3AFF] text-white font-['Orbitron'] text-sm tracking-wider uppercase hover:bg-[#0D2FE0] transition-colors flex items-center justify-center gap-3">
                    Sélectionner cette offre
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Prev/Next */}
      <section className="border-t border-border/40 py-12">
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          {prevSlug ? (
            <Link to={`/solutions/${prevSlug}`} className="group flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors">
              <div className="w-10 h-10 border border-border flex items-center justify-center group-hover:border-[#1A3AFF] group-hover:bg-[#1A3AFF] transition-colors">
                <ArrowLeft className="w-4 h-4 group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="text-[10px] font-['Orbitron'] uppercase tracking-widest mb-1">Précédent</p>
                <p className="text-sm text-foreground font-medium">{SOLUTIONS[prevSlug]?.name}</p>
              </div>
            </Link>
          ) : <div />}
          <Link to="/solutions" className="text-[10px] font-['Orbitron'] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">Toutes les solutions</Link>
          {nextSlug ? (
            <Link to={`/solutions/${nextSlug}`} className="group flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors text-right">
              <div>
                <p className="text-[10px] font-['Orbitron'] uppercase tracking-widest mb-1">Suivant</p>
                <p className="text-sm text-foreground font-medium">{SOLUTIONS[nextSlug]?.name}</p>
              </div>
              <div className="w-10 h-10 border border-border flex items-center justify-center group-hover:border-[#1A3AFF] group-hover:bg-[#1A3AFF] transition-colors">
                <ArrowRight className="w-4 h-4 group-hover:text-white transition-colors" />
              </div>
            </Link>
          ) : <div />}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden bg-foreground mx-6 md:mx-12">
        <div className="absolute inset-0 opacity-10"><img src={solution.hero} alt="" className="w-full h-full object-cover" /></div>
        <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-['Orbitron'] text-background mb-8 tracking-tight max-w-2xl">Prêt à démarrer ?</h2>
          <p className="text-background/70 text-lg mb-12 max-w-xl">Discutons de vos besoins. Nous reviendrons sous 48h avec une proposition adaptée.</p>
          <Link to="/contact">
            <button className="px-10 py-5 bg-[#1A3AFF] text-white font-medium tracking-wide hover:bg-[#0D2FE0] transition-colors inline-flex items-center gap-3">
              Initier la collaboration <ExternalLink className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
