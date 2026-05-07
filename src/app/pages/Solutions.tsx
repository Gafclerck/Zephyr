import { Link } from "react-router";
import { Check, ArrowRight, Zap, Target, Box } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function Solutions() {
  const solutions = [
    {
      name: "Landing Page Pro",
      tagline: "Conversion Haute Performance",
      description: "Une page d'atterrissage optimisée au pixel près pour maximiser les conversions de vos campagnes d'acquisition.",
      features: [
        "Architecture Single Page",
        "A/B testing intégré",
        "Formulaires de capture avancés",
        "Performances Core Web Vitals (< 2s)",
        "Responsive design absolu",
        "1 mois de support technique",
      ],
      pricing: "À partir de 500k FCFA",
      timeline: "1-2 semaines",
      popular: true,
    },
    {
      name: "Brand Identity System",
      tagline: "Système de marque complet",
      description: "Identité visuelle exhaustive incluant logotype, typographie, palette, et un brand book rigoureux.",
      features: [
        "Création de Logotype (3 concepts)",
        "Système chromatique et typographique",
        "Brand Guidelines (Livre de marque)",
        "Cartes de visite / Papeterie",
        "Kit Réseaux Sociaux",
        "Cession complète des droits",
      ],
      pricing: "À partir de 300k FCFA",
      timeline: "2-3 semaines",
      popular: false,
    },
    {
      name: "Digital Marketing Engine",
      tagline: "Trafic & Acquisition B2B/B2C",
      description: "Campagne de marketing digital trimestrielle incluant SEO, médias sociaux et publicité algorithmique.",
      features: [
        "Audit et optimisation SEO",
        "Gestion des réseaux sociaux",
        "Campagnes Ads (Google/Meta)",
        "Création de contenu premium",
        "Rapports de performance mensuels",
        "Consulting stratégique",
      ],
      pricing: "150k FCFA / mois",
      timeline: "3 mois minimum",
      popular: true,
    },
    {
      name: "Corporate Platform",
      tagline: "Site vitrine institutionnel",
      description: "Plateforme web professionnelle complète pour asseoir l'autorité de votre entreprise sur son marché.",
      features: [
        "Jusqu'à 10 pages structurées",
        "Design responsive et interactif",
        "Formulaires de contact complexes",
        "Optimisation SEO de base",
        "Intégration Analytics/Tag Manager",
        "3 mois de support évolutif",
      ],
      pricing: "À partir de 1.5M FCFA",
      timeline: "3-4 semaines",
      popular: false,
    },
    {
      name: "E-Commerce Architecture",
      tagline: "Vente en ligne performante",
      description: "Boutique en ligne robuste avec traitement des paiements sécurisés et gestion de stocks avancée.",
      features: [
        "Jusqu'à 100 produits intégrés",
        "Passerelles de paiement locales/int.",
        "Panier et tunnel de conversion optimisés",
        "Interface de gestion des commandes",
        "Espace client complet",
        "6 mois de support technique",
      ],
      pricing: "À partir de 2.5M FCFA",
      timeline: "4-6 semaines",
      popular: false,
    },
    {
      name: "Mobile MVP Framework",
      tagline: "Lancement d'application",
      description: "Produit Minimum Viable (MVP) pour iOS et Android afin de valider rapidement votre concept sur le marché.",
      features: [
        "Codebase cross-platform (React Native)",
        "5 à 7 fonctionnalités clés",
        "Authentification sécurisée (OAuth)",
        "Backend / Base de données Cloud",
        "Système de notifications Push",
        "3 mois d'accompagnement post-lancement",
      ],
      pricing: "À partir de 3M FCFA",
      timeline: "6-8 semaines",
      popular: false,
    },
  ];

  return (
    <div className="bg-background min-h-screen selection:bg-[#1A3AFF] selection:text-white">

      {/* Hero */}
      <section className="pt-40 pb-20 border-b border-border/40 relative">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-size-[32px_32px] pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-px bg-[#1A3AFF]" />
              <span className="text-[#1A3AFF] font-['Orbitron'] text-xs tracking-[0.3em] uppercase font-semibold">
                Offres standardisées
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-medium leading-[1.05] tracking-tight text-foreground mb-8 font-['Orbitron']">
              Solutions Prêtes <br /> à Déployer
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Des packages technologiques pré-architecturés pour une livraison accélérée et des résultats prouvés.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-muted/10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <SolutionCard key={index} solution={solution} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-32 border-y border-border/40 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-[#1A3AFF]/5 -skew-x-12 translate-x-20 pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-px bg-foreground/40" />
              <span className="text-foreground/60 font-['Orbitron'] text-xs tracking-[0.3em] uppercase font-semibold">
                Ingénierie sur mesure
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-['Orbitron'] text-foreground mb-8">
              Besoins Complexes ?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Ces solutions ne sont que des points de départ. Nous concevons et développons des infrastructures digitales entièrement sur mesure pour répondre aux défis techniques les plus exigeants.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-foreground text-background font-['Orbitron'] text-sm tracking-wider hover:bg-muted-foreground transition-colors inline-flex items-center gap-3"
              >
                Planifier une consultation technique
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Our Solutions */}
      <section className="py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex items-center gap-4 mb-16">
            <span className="w-12 h-px bg-[#1A3AFF]" />
            <h2 className="text-3xl md:text-4xl font-['Orbitron'] text-foreground">
              La Valeur Zephyr
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <BenefitBlock
              icon={Zap}
              title="Déploiement Rapide"
              description="Des architectures pré-configurées qui permettent de diviser par deux les délais de mise sur le marché (Time-to-Market)."
              index={0}
            />
            <BenefitBlock
              icon={Target}
              title="Résultats Prouvés"
              description="Chaque solution est basée sur des design patterns et des technologies qui ont déjà fait leurs preuves sur des dizaines de projets."
              index={1}
            />
            <BenefitBlock
              icon={Box}
              title="Transparence Totale"
              description="Une tarification claire, des livrables définis à l'avance et un cahier des charges strict. Aucun coût caché."
              index={2}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

// Solution Card Component
interface SolutionCardProps {
  solution: {
    name: string;
    tagline: string;
    description: string;
    features: string[];
    pricing: string;
    timeline: string;
    popular: boolean;
  };
  index: number;
}

function SolutionCard({ solution, index }: SolutionCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`relative p-8 md:p-10 flex flex-col border transition-all duration-300 group ${solution.popular
        ? "bg-[#1A3AFF]/5 border-[#1A3AFF]/50 shadow-[0_0_30px_rgba(26,58,255,0.1)]"
        : "bg-background border-border/40 hover:border-border"
        }`}
    >
      {/* Decorative corner accent */}
      <div className={`absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 transition-colors ${solution.popular ? "border-[#1A3AFF]" : "border-transparent group-hover:border-foreground/20"}`} />

      {/* Popular Badge */}
      <div className="h-8 mb-6">
        {solution.popular && (
          <div className="inline-flex items-center px-3 py-1 bg-[#1A3AFF] text-white text-[10px] font-['Orbitron'] tracking-widest uppercase">
            Plus Demandé
          </div>
        )}
      </div>

      {/* Title */}
      <h3 className="text-2xl font-['Orbitron'] text-foreground mb-2">{solution.name}</h3>
      <p className="text-[#1A3AFF] text-sm font-medium mb-6 uppercase tracking-wider">{solution.tagline}</p>
      <p className="text-muted-foreground text-sm leading-relaxed mb-8 grow">{solution.description}</p>

      {/* Features */}
      <div className="space-y-4 mb-10 border-t border-border/40 pt-8">
        {solution.features.map((feature, i) => (
          <div key={i} className="flex items-start gap-3">
            <Check className="w-4 h-4 text-[#1A3AFF] shrink-0 mt-0.5" />
            <span className="text-foreground/80 text-sm">{feature}</span>
          </div>
        ))}
      </div>

      {/* Pricing & Timeline */}
      <div className="border-t border-border/40 pt-8 mt-auto">
        <div className="flex flex-col gap-4 mb-8">
          <div>
            <p className="text-muted-foreground text-xs uppercase tracking-widest mb-1">Budget Initial</p>
            <p className="text-foreground text-xl font-['Orbitron'] font-semibold">{solution.pricing}</p>
          </div>
          <div>
            <p className="text-muted-foreground text-xs uppercase tracking-widest mb-1">Délai Estimé</p>
            <p className="text-foreground text-sm font-medium">{solution.timeline}</p>
          </div>
        </div>

        <Link to="/contact">
          <button
            className={`w-full py-4 text-sm font-['Orbitron'] tracking-wider uppercase transition-colors flex items-center justify-center gap-3 ${solution.popular
              ? "bg-[#1A3AFF] text-white hover:bg-[#1A3AFF]"
              : "bg-transparent border border-border text-foreground hover:bg-foreground hover:text-background"
              }`}
          >
            Sélectionner
            <ArrowRight className="w-4 h-4" />
          </button>
        </Link>
      </div>
    </motion.div>
  );
}

// Benefit Block Component
interface BenefitBlockProps {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}

function BenefitBlock({ icon: Icon, title, description, index }: BenefitBlockProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="bg-muted/30 p-10 border border-border/40 hover:border-border transition-colors group"
    >
      <div className="w-12 h-12 bg-background border border-border flex items-center justify-center mb-8 group-hover:border-[#1A3AFF]/50 transition-colors">
        <Icon className="w-5 h-5 text-[#1A3AFF]" />
      </div>
      <h4 className="text-xl font-['Orbitron'] text-foreground mb-4">{title}</h4>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}
