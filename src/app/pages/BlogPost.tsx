import { useParams, Link } from "react-router";
import { ArrowLeft, Calendar, Clock, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
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
            <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-['Orbitron'] text-xs tracking-widest uppercase transition-colors mb-12 group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Retour aux articles
            </Link>

            <div className="flex items-center gap-4 mb-8">
              <span className="px-3 py-1 bg-[#1A3AFF]/10 border border-[#1A3AFF]/30 text-[#1A3AFF] text-[10px] font-['Orbitron'] tracking-widest uppercase">
                Ingénierie
              </span>
              <span className="w-8 h-[1px] bg-border" />
              <div className="flex items-center gap-4 text-muted-foreground text-xs font-['Orbitron'] tracking-widest uppercase">
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
              <button className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-[#1A3AFF] hover:border-[#1A3AFF] transition-colors">
                <Twitter className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-[#1A3AFF] hover:border-[#1A3AFF] transition-colors">
                <Linkedin className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-[#1A3AFF] hover:border-[#1A3AFF] transition-colors">
                <Facebook className="w-4 h-4" />
              </button>
              <div className="w-[1px] h-24 bg-border" />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
