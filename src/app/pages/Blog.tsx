import { Link } from "react-router";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { useLanguage } from "../contexts/LanguageContext";

// ─── Types ────────────────────────────────────────────────────────────────────
interface PostData {
  slug: string;
  titleKey: string;
  excerptKey: string;
  categoryKey: string;
  date: string;
  readTimeKey: string;
  image: string;
  featured: boolean;
}

type TranslateFn = (key: string) => string;

// ─── Post data (dates stay locale-neutral as they are already in French) ──────
const POSTS: PostData[] = [
  {
    slug: "react-performance-2025",
    titleKey: "blog.post1_title",
    excerptKey: "blog.post1_excerpt",
    categoryKey: "blog.cat_engineering",
    date: "1 Mai 2026",
    readTimeKey: "blog.post1_read",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=500&fit=crop",
    featured: true,
  },
  {
    slug: "mobile-app-trends",
    titleKey: "blog.post2_title",
    excerptKey: "blog.post2_excerpt",
    categoryKey: "blog.cat_mobile",
    date: "28 Avril 2026",
    readTimeKey: "blog.post2_read",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop",
    featured: false,
  },
  {
    slug: "branding-essentials",
    titleKey: "blog.post3_title",
    excerptKey: "blog.post3_excerpt",
    categoryKey: "blog.cat_design",
    date: "25 Avril 2026",
    readTimeKey: "blog.post3_read",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop",
    featured: false,
  },
  {
    slug: "seo-strategies-2026",
    titleKey: "blog.post4_title",
    excerptKey: "blog.post4_excerpt",
    categoryKey: "blog.cat_marketing",
    date: "22 Avril 2026",
    readTimeKey: "blog.post4_read",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&h=500&fit=crop",
    featured: false,
  },
  {
    slug: "design-systems-guide",
    titleKey: "blog.post5_title",
    excerptKey: "blog.post5_excerpt",
    categoryKey: "blog.cat_design",
    date: "18 Avril 2026",
    readTimeKey: "blog.post5_read",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=500&fit=crop",
    featured: false,
  },
  {
    slug: "conversion-optimization",
    titleKey: "blog.post6_title",
    excerptKey: "blog.post6_excerpt",
    categoryKey: "blog.cat_marketing",
    date: "15 Avril 2026",
    readTimeKey: "blog.post6_read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    featured: false,
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export function Blog() {
  const { t } = useLanguage();

  const featuredPost = POSTS.find((p) => p.featured);
  const regularPosts = POSTS.filter((p) => !p.featured);

  return (
    <div className="bg-background min-h-screen selection:bg-[#1A3AFF] selection:text-white pb-24">
      {/* Hero */}
      <section className="pt-20 md:pt-28 pb-10 border-b border-border/40 relative">
        <div className="absolute inset-0 bg-grid-subtle pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[1px] bg-[#1A3AFF]" />
              <span className="eyebrow" style={{ marginBottom: 0 }}>{t("blog.eyebrow")}</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tight text-foreground mb-5 font-['Orbitron']">
              {t("blog.title")}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              {t("blog.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-10 md:py-14 border-b border-border/40 bg-muted/10">
          <div className="container mx-auto px-6 md:px-12">
            <FeaturedPostCard post={featuredPost} t={t} />
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-10 md:py-14">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {regularPosts.map((post, index) => (
              <BlogPostCard key={post.slug} post={post} index={index} t={t} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── Featured Post Card ───────────────────────────────────────────────────────
function FeaturedPostCard({ post, t }: { post: PostData; t: TranslateFn }) {
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
          <div className="relative h-56 lg:h-auto overflow-hidden border-b lg:border-b-0 lg:border-r border-border/40">
            <div className="absolute inset-0 bg-[#1A3AFF]/10 group-hover:bg-transparent transition-colors z-10 mix-blend-overlay" />
            <div
              className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700 ease-out"
              style={{ backgroundImage: `url(${post.image})` }}
            />
          </div>

          {/* Content */}
          <div className="p-7 md:p-10 flex flex-col justify-center">
            <div className="inline-flex items-center px-3 py-1.5 border border-[#1A3AFF] bg-[#1A3AFF]/5 text-[#1A3AFF] text-xs font-semibold tracking-widest uppercase mb-5 self-start">
              {t(post.categoryKey)}
            </div>

            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 leading-tight group-hover:text-[#1A3AFF] transition-colors">
              {t(post.titleKey)}
            </h2>

            <p className="text-muted-foreground text-base mb-6 leading-relaxed max-w-xl line-clamp-2">
              {t(post.excerptKey)}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-xs uppercase tracking-wider mb-6 border-t border-border/40 pt-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-[#1A3AFF]" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#1A3AFF]" />
                <span>{t(post.readTimeKey)}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-foreground font-semibold text-sm tracking-wider uppercase group-hover:text-[#1A3AFF] transition-colors">
              <span className="border-b border-transparent group-hover:border-[#1A3AFF] pb-1 transition-colors">
                {t("blog.readFull")}
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

// ─── Blog Post Card ───────────────────────────────────────────────────────────
function BlogPostCard({ post, index, t }: { post: PostData; index: number; t: TranslateFn }) {
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
        <div className="p-6 flex flex-col flex-grow">
          <div className="inline-flex items-center px-3 py-1 border border-foreground/20 text-foreground text-[10px] font-semibold tracking-widest uppercase mb-6 self-start group-hover:border-[#1A3AFF] group-hover:text-[#1A3AFF] transition-colors">
            {t(post.categoryKey)}
          </div>

          <h3 className="text-2xl font-semibold text-foreground mb-4 group-hover:text-[#1A3AFF] transition-colors leading-tight">
            {t(post.titleKey)}
          </h3>

          <p className="text-muted-foreground mb-8 flex-grow leading-relaxed text-sm">
            {t(post.excerptKey)}
          </p>

          <div className="flex flex-col gap-4 border-t border-border/40 pt-6">
            <div className="flex items-center justify-between text-muted-foreground text-xs uppercase tracking-wider">
              <div className="flex items-center gap-2">
                <Calendar className="w-3 h-3 text-foreground/50 group-hover:text-[#1A3AFF] transition-colors" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3 h-3 text-foreground/50 group-hover:text-[#1A3AFF] transition-colors" />
                <span>{t(post.readTimeKey)}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-foreground font-semibold text-[10px] tracking-widest uppercase mt-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
              <span className="text-[#1A3AFF]">{t("blog.readMore")}</span>
              <ArrowRight className="w-3 h-3 text-[#1A3AFF]" />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
