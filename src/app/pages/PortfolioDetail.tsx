import { useParams, Link, Navigate } from "react-router";
import { ArrowLeft, ArrowRight, ExternalLink, Tag } from "lucide-react";
import { motion } from "motion/react";

/* ─── Project data ─── */
const PROJECTS: Record<string, {
  title: string;
  category: string;
  description: string;
  image: string;
  results: string;
  tags: string[];
  client: string;
  duration: string;
  year: string;
  challenge: string;
  solution: string;
  outcome: string;
}> = {
  "aura-fintech": {
    title: "Aura Fintech",
    category: "Plateforme Web",
    description: "Plateforme SaaS B2B pour la gestion de trésorerie avec intégrations bancaires en temps réel.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    results: "+300% de volume transactionnel",
    tags: ["React", "Node.js", "PostgreSQL"],
    client: "Aura Financial Group",
    duration: "8 mois",
    year: "2025",
    challenge: "Aura Financial Group avait besoin d'une plateforme centralisée permettant à ses clients B2B de gérer leur trésorerie en temps réel, avec des connexions sécurisées à plusieurs banques partenaires simultanément.",
    solution: "Nous avons conçu et développé une architecture microservices robuste, avec un tableau de bord temps réel basé sur React et une API Node.js intégrant l'Open Banking (STET/Berlin Group). La sécurité bancaire a été assurée grâce à une authentification MFA et un chiffrement AES-256.",
    outcome: "En 6 mois post-lancement, le volume transactionnel a augmenté de 300%. La plateforme gère désormais plus de 50M€ de flux par mois avec un taux de disponibilité de 99.98%.",
  },
  "lumina-health": {
    title: "Lumina Health",
    category: "Application Mobile",
    description: "Application de suivi santé personnalisée utilisant l'intelligence artificielle pour des recommandations sur mesure.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
    results: "50K+ téléchargements en 3 mois",
    tags: ["React Native", "AI", "Santé"],
    client: "Lumina Health SA",
    duration: "6 mois",
    year: "2025",
    challenge: "Créer une application mobile de santé capable de fournir des recommandations personnalisées en temps réel, tout en garantissant la confidentialité des données médicales des utilisateurs (RGPD/HDS).",
    solution: "Développement d'une application React Native cross-platform intégrant un moteur d'IA embarqué pour l'analyse de données biométriques. Architecture serverless AWS avec chiffrement bout-en-bout et hébergement HDS certifié.",
    outcome: "50 000 téléchargements en 3 mois, note de 4.8/5 sur les stores. L'application a été sélectionnée parmi les 10 meilleures applications santé françaises par la presse spécialisée.",
  },
  "nova-retail": {
    title: "Nova Retail",
    category: "Identité de Marque",
    description: "Direction artistique et rebranding complet pour une marque de prêt-à-porter éco-responsable.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
    results: "3 prix de design remportés",
    tags: ["Brand Identity", "Packaging"],
    client: "Nova Retail Group",
    duration: "4 mois",
    year: "2024",
    challenge: "Nova Retail souhaitait repositionner sa marque sur le segment premium éco-responsable, avec une identité forte capable de rivaliser avec les grandes marques internationales, tout en communiquant des valeurs authentiques de durabilité.",
    solution: "Refonte complète de l'identité visuelle : nouveau logo, typographie propriétaire, système de couleurs tertiaires, guidelines de marque de 80 pages. Déclinaison sur tous les supports physiques (packaging, flagship store, uniforme équipes).",
    outcome: "3 prix de design internationaux remportés (Red Dot Award, iF Design). Augmentation de 120% des recherches de marque en ligne. Ouverture de 5 nouveaux points de vente flagship.",
  },
  "marketplace-pro": {
    title: "MarketPlace Pro",
    category: "Plateforme Web",
    description: "Marketplace multi-vendeurs hautement scalable connectant des fournisseurs industriels et des acheteurs.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2070&auto=format&fit=crop",
    results: "5M€ de CA la première année",
    tags: ["Next.js", "Stripe Connect", "E-Commerce"],
    client: "ProB2B Industrie",
    duration: "10 mois",
    year: "2024",
    challenge: "Construire une marketplace B2B capable de gérer des milliers de fournisseurs et d'acheteurs industriels avec des catalogues produits complexes, des prix négociés et des workflows de validation multi-niveaux.",
    solution: "Plateforme Next.js avec Stripe Connect pour les paiements multi-vendeurs, moteur de recherche Algolia, système de catalogue dynamique avec règles de prix complexes et tableau de bord analytics en temps réel.",
    outcome: "5M€ de chiffre d'affaires généré la première année. Plus de 2000 fournisseurs actifs et 15 000 acheteurs enregistrés. Temps de mise en marché divisé par 3 pour les fournisseurs.",
  },
  "telecare": {
    title: "TeleCare",
    category: "Application Mobile",
    description: "Plateforme de télémédecine sécurisée avec gestion de planning et consultations vidéo HD.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    results: "10K+ consultations/mois",
    tags: ["Healthcare", "WebRTC", "HIPAA"],
    client: "TeleCare Medical SAS",
    duration: "12 mois",
    year: "2024",
    challenge: "Développer une solution de télémédecine conforme HIPAA permettant des consultations vidéo HD entre médecins et patients, avec gestion des ordonnances électroniques et intégration aux dossiers médicaux partagés.",
    solution: "Architecture WebRTC pour les appels vidéo end-to-end chiffrés, système de gestion de planning intelligent avec IA pour l'optimisation des créneaux, intégration DMP (Dossier Médical Partagé) conforme.",
    outcome: "Plus de 10 000 consultations par mois. Réduction de 40% du temps d'attente pour les patients. Solution adoptée par 3 groupes hospitaliers régionaux.",
  },
  "onyx-coffee": {
    title: "Onyx Coffee",
    category: "Identité de Marque",
    description: "Refonte de l'identité visuelle d'une chaîne de cafés premiums et déclinaison sur tous les supports physiques.",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=2070&auto=format&fit=crop",
    results: "+85% de reconnaissance de marque",
    tags: ["Rebranding", "Print"],
    client: "Onyx Coffee Group",
    duration: "3 mois",
    year: "2025",
    challenge: "Onyx Coffee cherchait à s'imposer sur le segment ultra-premium du café pour concurrencer des enseignes internationales établies, avec une identité capable de justifier un positionnement prix 30% au-dessus du marché.",
    solution: "Création d'une identité visuelle \"luxury dark\" avec typographie sur-mesure, système de packaging premium en matériaux recyclés haut de gamme, déploiement sur le mobilier, les uniformes et les supports digitaux.",
    outcome: "Augmentation de 85% de la reconnaissance de marque. +45% de panier moyen. La marque a été citée comme référence dans 3 magazines spécialisés café et design.",
  },
};

/* ─── Slug order for prev/next navigation ─── */
const SLUG_ORDER = [
  "aura-fintech",
  "lumina-health",
  "nova-retail",
  "marketplace-pro",
  "telecare",
  "onyx-coffee",
];

export function PortfolioDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? PROJECTS[slug] : undefined;

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  const currentIndex = SLUG_ORDER.indexOf(slug!);
  const prevSlug = currentIndex > 0 ? SLUG_ORDER[currentIndex - 1] : null;
  const nextSlug = currentIndex < SLUG_ORDER.length - 1 ? SLUG_ORDER[currentIndex + 1] : null;

  return (
    <div className="bg-background min-h-screen selection:bg-[#1A3AFF] selection:text-white pb-24">

      {/* ── Hero ── */}
      <section className="pt-32 pb-16 border-b border-border/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-px h-full bg-border/40 hidden lg:block" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-['Orbitron'] text-xs tracking-widest uppercase transition-colors mb-12 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Retour au portfolio
            </Link>

            <div className="flex items-center gap-4 mb-8">
              <span className="px-3 py-1 bg-[#1A3AFF]/10 border border-[#1A3AFF]/30 text-[#1A3AFF] text-[10px] font-['Orbitron'] tracking-widest uppercase">
                {project.category}
              </span>
              <span className="w-8 h-[1px] bg-border" />
              <span className="text-muted-foreground text-xs font-['Orbitron'] tracking-widest uppercase">{project.year}</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-['Orbitron'] text-foreground mb-8 leading-[1.05] tracking-tight font-medium">
              {project.title}
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              {project.description}
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
          className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-[#1A3AFF] z-20 mix-blend-screen" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-[#1A3AFF] z-20 mix-blend-screen" />
          <div className="absolute inset-0 bg-[#1A3AFF]/5 mix-blend-overlay z-10" />
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          {/* Result badge */}
          <div className="absolute bottom-8 right-8 z-20 bg-background/90 backdrop-blur border border-border px-6 py-4 flex items-center gap-3">
            <span className="w-2 h-2 bg-[#00E5FF]" />
            <span className="font-['Orbitron'] text-sm text-foreground font-medium">{project.results}</span>
          </div>
        </motion.div>
      </section>

      {/* ── Meta info ── */}
      <section className="border-b border-border/40 py-10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Client", value: project.client },
              { label: "Catégorie", value: project.category },
              { label: "Durée", value: project.duration },
              { label: "Année", value: project.year },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-[10px] font-['Orbitron'] uppercase tracking-widest text-muted-foreground mb-2">
                  {item.label}
                </p>
                <p className="text-foreground font-medium">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tags ── */}
      <section className="border-b border-border/40 py-8">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex items-center gap-4 flex-wrap">
            <Tag className="w-4 h-4 text-muted-foreground" />
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 border border-border/50 text-muted-foreground text-xs font-['Orbitron'] tracking-widest uppercase hover:border-[#1A3AFF]/50 hover:text-foreground transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Case study content ── */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 max-w-6xl">

            {[
              { label: "01 — Le Défi", content: project.challenge },
              { label: "02 — La Solution", content: project.solution },
              { label: "03 — Les Résultats", content: project.outcome },
            ].map((block, i) => (
              <motion.div
                key={block.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-6 h-[1px] bg-[#1A3AFF]" />
                  <span className="font-['Orbitron'] text-[10px] tracking-widest uppercase text-[#1A3AFF]">
                    {block.label}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed text-base">
                  {block.content}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* ── Prev / Next navigation ── */}
      <section className="border-t border-border/40 py-12">
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          {prevSlug ? (
            <Link
              to={`/portfolio/${prevSlug}`}
              className="group flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <div className="w-10 h-10 border border-border flex items-center justify-center group-hover:border-[#1A3AFF] group-hover:bg-[#1A3AFF] transition-colors">
                <ArrowLeft className="w-4 h-4 group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="text-[10px] font-['Orbitron'] uppercase tracking-widest mb-1">Précédent</p>
                <p className="text-sm text-foreground font-medium">{PROJECTS[prevSlug]?.title}</p>
              </div>
            </Link>
          ) : <div />}

          <Link
            to="/portfolio"
            className="text-[10px] font-['Orbitron'] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
          >
            Tous les projets
          </Link>

          {nextSlug ? (
            <Link
              to={`/portfolio/${nextSlug}`}
              className="group flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors text-right"
            >
              <div>
                <p className="text-[10px] font-['Orbitron'] uppercase tracking-widest mb-1">Suivant</p>
                <p className="text-sm text-foreground font-medium">{PROJECTS[nextSlug]?.title}</p>
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
          <img src={project.image} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-['Orbitron'] text-background mb-8 tracking-tight max-w-2xl">
            Un projet similaire en tête ?
          </h2>
          <p className="text-background/70 text-lg mb-12 max-w-xl">
            Discutons de vos ambitions. Nous reviendrons vers vous sous 48h avec une stratégie sur-mesure.
          </p>
          <Link to="/contact">
            <button className="px-10 py-5 bg-[#1A3AFF] text-white font-medium tracking-wide hover:bg-[#0D2FE0] transition-colors inline-flex items-center gap-3">
              Démarrer votre projet
              <ExternalLink className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
