import { useParams, Link } from "react-router";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { motion } from "motion/react";

export function BlogPost() {
  const { slug } = useParams();

  // Helper to make the slug look like a real title if no database fetch is implemented
  const formattedTitle = slug
    ? slug.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())
    : "Titre de l'Article par Défaut";

  return (
    <div className="bg-background min-h-screen selection:bg-[#1A3AFF] selection:text-white pb-24">
      {/* Header Article */}
      <section className="pt-32 pb-16 border-b border-border/40 relative">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground text-xs tracking-widest uppercase font-semibold transition-colors mb-12 group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Retour aux articles
            </Link>

            <div className="flex items-center gap-4 mb-8">
              <span className="px-3 py-1 bg-[#1A3AFF]/10 border border-[#1A3AFF]/30 text-[#1A3AFF] text-[10px] font-semibold tracking-widest uppercase">
                Ingénierie
              </span>
              <span className="w-8 h-[1px] bg-border" />
              <div className="flex items-center gap-4 text-muted-foreground text-xs font-medium tracking-widest uppercase">
                <span className="flex items-center gap-2"><Calendar className="w-3 h-3 text-[#1A3AFF]" /> 1 Mai 2026</span>
                <span className="flex items-center gap-2"><Clock className="w-3 h-3 text-[#1A3AFF]" /> 8 min de lecture</span>
              </div>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-['Orbitron'] text-foreground mb-12 leading-[1.1] tracking-tight"
            >
              {formattedTitle}
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="border-b border-border/40 bg-muted/10">
        <div className="container mx-auto px-6 md:px-12 py-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-5xl mx-auto relative h-[400px] md:h-[600px] overflow-hidden border border-border/50"
          >
            {/* Vector corner decoration */}
            <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-[#1A3AFF] z-20 mix-blend-screen" />
            <div className="absolute inset-0 bg-[#1A3AFF]/5 mix-blend-overlay z-10" />
            <div
              className="absolute inset-0 bg-cover bg-center grayscale-[0.5]"
              style={{
                backgroundImage: "url(https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1600&h=900&fit=crop)",
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_80px] gap-12">

            {/* Main Text */}
            <div className="prose prose-invert prose-lg max-w-none font-sans text-muted-foreground">
              <p className="text-2xl text-foreground leading-relaxed mb-10 font-medium">
                Ceci est un article d'exemple démontrant l'intégration visuelle d'un contenu textuel dans le style "vectoriel et premium" de Zephyr. Dans une application réelle, le contenu serait généré depuis un CMS ou une base de données.
              </p>

              <h2 className="text-foreground text-3xl font-['Orbitron'] mt-16 mb-6 tracking-tight">
                L'Architecture de Demain
              </h2>
              <p className="leading-relaxed mb-8">
                La conception d'interfaces modernes exige une approche rigoureuse et structurée. Le design n'est plus seulement une question d'esthétique, mais de performance, d'accessibilité et de logique algorithmique. Les systèmes complexes nécessitent des fondations solides.
              </p>

              <blockquote className="border-l-2 border-[#1A3AFF] pl-6 my-10 py-2 bg-muted/20 pr-6 italic text-foreground/80">
                "La simplicité apparente d'une interface est toujours proportionnelle à la complexité de l'ingénierie qui la soutient."
              </blockquote>

              <h3 className="text-foreground text-2xl font-['Orbitron'] mt-12 mb-6 tracking-tight">
                Concepts Clés et Implémentation
              </h3>
              <p className="leading-relaxed mb-6">
                Chaque composant doit être pensé comme un bloc logique indépendant, capable d'être réutilisé et testé de manière unitaire. L'approche modulaire garantit la pérennité du code :
              </p>
              <ul className="list-none space-y-4 mb-10 border border-border/40 p-8 bg-muted/10">
                <li className="flex items-start gap-3">
                  <span className="text-[#1A3AFF] mt-1">▰</span>
                  <span><strong>Isolation des responsabilités :</strong> Un composant fait une seule chose, et la fait bien.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1A3AFF] mt-1">▰</span>
                  <span><strong>Flux de données unidirectionnel :</strong> Assure la prévisibilité de l'état de l'application.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1A3AFF] mt-1">▰</span>
                  <span><strong>Typage statique :</strong> Détecter les erreurs avant l'exécution avec TypeScript.</span>
                </li>
              </ul>

              <p className="leading-relaxed">
                Le développement d'une plateforme SaaS B2B nécessite par exemple de prendre en compte la scalabilité horizontale et l'optimisation des temps de réponse (latency).
              </p>
            </div>

            {/* Sidebar Share */}
            <div className="hidden md:flex flex-col items-center gap-6 pt-2">
              <div className="w-[1px] h-12 bg-border" />
              <Share2 className="w-5 h-5 text-muted-foreground" />
              {/* X (Twitter) */}
              <button
                onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`, '_blank')}
                className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-[#1A3AFF] hover:border-[#1A3AFF] transition-colors"
                aria-label="Partager sur X"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </button>
              {/* LinkedIn */}
              <button
                onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')}
                className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-[#1A3AFF] hover:border-[#1A3AFF] transition-colors"
                aria-label="Partager sur LinkedIn"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </button>
              {/* Facebook */}
              <button
                onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
                className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-[#1A3AFF] hover:border-[#1A3AFF] transition-colors"
                aria-label="Partager sur Facebook"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </button>
              <div className="w-[1px] h-24 bg-border" />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
