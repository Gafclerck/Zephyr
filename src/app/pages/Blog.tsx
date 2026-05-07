import { Link } from "react-router";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function Blog() {
  const posts = [
    {
      slug: "react-performance-2025",
      title: "Optimisation de Performance React en 2026",
      excerpt: "Découvrez les dernières techniques architecturales pour construire des applications React ultra-rapides et scalables.",
      category: "Ingénierie",
      date: "1 Mai 2026",
      readTime: "8 min de lecture",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=500&fit=crop",
      featured: true,
    },
    {
      slug: "mobile-app-trends",
      title: "Tendances du Développement Mobile Natif",
      excerpt: "Les technologies et les design patterns qui redéfinissent l'écosystème mobile iOS et Android cette année.",
      category: "Mobile",
      date: "28 Avril 2026",
      readTime: "6 min de lecture",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop",
      featured: false,
    },
    {
      slug: "branding-essentials",
      title: "Fondations d'une Identité de Marque Puissante",
      excerpt: "Construisez une image de marque mémorable et percutante dès le premier jour avec ces stratégies éprouvées.",
      category: "Design",
      date: "25 Avril 2026",
      readTime: "5 min de lecture",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop",
      featured: false,
    },
    {
      slug: "seo-strategies-2026",
      title: "Stratégies SEO Data-Driven",
      excerpt: "Des techniques de référencement algorithmique et sémantique pour générer une croissance mesurable du trafic organique.",
      category: "Marketing",
      date: "22 Avril 2026",
      readTime: "7 min de lecture",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&h=500&fit=crop",
      featured: false,
    },
    {
      slug: "design-systems-guide",
      title: "Architecture de Design Systems Évolutifs",
      excerpt: "Comment créer un système de design robuste qui accompagne la croissance de votre produit et de vos équipes.",
      category: "Design",
      date: "18 Avril 2026",
      readTime: "10 min de lecture",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=500&fit=crop",
      featured: false,
    },
    {
      slug: "conversion-optimization",
      title: "Guide CRO : Optimisation du Taux de Conversion",
      excerpt: "Transformez vos visiteurs en clients fidèles grâce à des protocoles d'A/B testing et d'optimisation UI/UX.",
      category: "Marketing",
      date: "15 Avril 2026",
      readTime: "9 min de lecture",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      featured: false,
    },
  ];

  const featuredPost = posts.find((p) => p.featured);
  const regularPosts = posts.filter((p) => !p.featured);

  return (
    <div className="bg-background min-h-screen selection:bg-[#1A3AFF] selection:text-white pb-24">
      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-20 border-b border-border/40 relative">
        {/* Subtle grid background for technical feel */}
        <div className="absolute inset-0 bg-grid-subtle pointer-events-none" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-[1px] bg-[#1A3AFF]" />
              <span className="eyebrow" style={{marginBottom: 0}}>Intelligence Technologique</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-medium leading-[1.05] tracking-tight text-foreground mb-8 font-['Orbitron']">
              Insights & <br /> Prospective
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Analyses approfondies, tutoriels techniques et décryptage des tendances par notre équipe d'experts et d'ingénieurs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-24 border-b border-border/40 bg-muted/10">
          <div className="container mx-auto px-6 md:px-12">
            <FeaturedPostCard post={featuredPost} />
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <BlogPostCard key={index} post={post} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Featured Post Card Component
interface PostData {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
}

interface FeaturedPostCardProps {
  post: PostData;
}

function FeaturedPostCard({ post }: FeaturedPostCardProps) {
  return (
    <Link to={`/blog/${post.slug}`} className="block group">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="border border-border/40 bg-background transition-colors hover:border-[#1A3AFF]/50 relative"
      >
        {/* Vector Corner */}
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-transparent group-hover:border-[#1A3AFF] transition-colors z-20" />

        <div className="grid lg:grid-cols-2">
          {/* Image */}
          <div className="relative h-72 lg:h-auto overflow-hidden border-b lg:border-b-0 lg:border-r border-border/40">
            <div className="absolute inset-0 bg-[#1A3AFF]/10 group-hover:bg-transparent transition-colors z-10 mix-blend-overlay" />
            <div
              className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700 ease-out"
              style={{ backgroundImage: `url(${post.image})` }}
            />
          </div>

          {/* Content */}
          <div className="p-10 md:p-16 flex flex-col justify-center">
            <div className="inline-flex items-center px-4 py-1.5 border border-[#1A3AFF] bg-[#1A3AFF]/5 text-[#1A3AFF] text-xs font-['Orbitron'] tracking-widest uppercase mb-8 self-start">
              {post.category}
            </div>

            <h2 className="text-3xl md:text-5xl font-['Orbitron'] text-foreground mb-6 leading-tight group-hover:text-[#1A3AFF] transition-colors">
              {post.title}
            </h2>

            <p className="text-muted-foreground text-lg mb-10 leading-relaxed max-w-xl">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-muted-foreground text-sm uppercase tracking-wider mb-10 border-t border-border/40 pt-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#1A3AFF]" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#1A3AFF]" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-foreground font-['Orbitron'] text-sm tracking-wider uppercase group-hover:text-[#1A3AFF] transition-colors">
              <span className="border-b border-transparent group-hover:border-[#1A3AFF] pb-1 transition-colors">Lire l'article complet</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

// Blog Post Card Component
interface BlogPostCardProps {
  post: PostData;
  index: number;
}

function BlogPostCard({ post, index }: BlogPostCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <Link to={`/blog/${post.slug}`} className="block h-full group">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="bg-background border border-border/40 hover:border-[#1A3AFF]/50 transition-colors h-full flex flex-col relative"
      >
        {/* Vector Corner */}
        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-transparent group-hover:border-[#1A3AFF] transition-colors z-20" />

        {/* Image */}
        <div className="relative h-60 overflow-hidden border-b border-border/40">
          <div className="absolute inset-0 bg-[#1A3AFF]/10 group-hover:bg-transparent transition-colors z-10 mix-blend-overlay" />
          <div
            className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700 ease-out"
            style={{ backgroundImage: `url(${post.image})` }}
          />
        </div>

        {/* Content */}
        <div className="p-8 flex flex-col flex-grow">
          <div className="inline-flex items-center px-3 py-1 border border-foreground/20 text-foreground text-[10px] font-['Orbitron'] tracking-widest uppercase mb-6 self-start group-hover:border-[#1A3AFF] group-hover:text-[#1A3AFF] transition-colors">
            {post.category}
          </div>

          <h3 className="text-2xl font-['Orbitron'] text-foreground mb-4 group-hover:text-[#1A3AFF] transition-colors leading-tight">
            {post.title}
          </h3>

          <p className="text-muted-foreground mb-8 flex-grow leading-relaxed text-sm">
            {post.excerpt}
          </p>

          <div className="flex flex-col gap-4 border-t border-border/40 pt-6">
            <div className="flex items-center justify-between text-muted-foreground text-xs uppercase tracking-wider">
              <div className="flex items-center gap-2">
                <Calendar className="w-3 h-3 text-foreground/50 group-hover:text-[#1A3AFF] transition-colors" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3 h-3 text-foreground/50 group-hover:text-[#1A3AFF] transition-colors" />
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-foreground font-['Orbitron'] text-[10px] tracking-widest uppercase mt-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
              <span className="text-[#1A3AFF]">Lire l'article</span>
              <ArrowRight className="w-3 h-3 text-[#1A3AFF]" />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
