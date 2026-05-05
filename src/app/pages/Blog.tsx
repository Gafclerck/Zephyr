import { Link } from "react-router";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function Blog() {
  const posts = [
    {
      slug: "react-performance-2025",
      title: "React Performance Optimization in 2025",
      excerpt: "Learn the latest techniques to build lightning-fast React applications that scale.",
      category: "Development",
      date: "May 1, 2026",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=500&fit=crop",
      featured: true,
    },
    {
      slug: "mobile-app-trends",
      title: "Mobile App Development Trends",
      excerpt: "The technologies and patterns shaping mobile development this year.",
      category: "Mobile",
      date: "April 28, 2026",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop",
      featured: false,
    },
    {
      slug: "branding-essentials",
      title: "Brand Identity Essentials for Startups",
      excerpt: "Build a memorable brand identity from day one with these proven strategies.",
      category: "Branding",
      date: "April 25, 2026",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop",
      featured: false,
    },
    {
      slug: "seo-strategies-2026",
      title: "SEO Strategies That Actually Work",
      excerpt: "Data-driven SEO techniques that deliver measurable traffic growth.",
      category: "Marketing",
      date: "April 22, 2026",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&h=500&fit=crop",
      featured: false,
    },
    {
      slug: "design-systems-guide",
      title: "Building Scalable Design Systems",
      excerpt: "Create design systems that grow with your product and team.",
      category: "Design",
      date: "April 18, 2026",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=500&fit=crop",
      featured: false,
    },
    {
      slug: "conversion-optimization",
      title: "Conversion Rate Optimization Guide",
      excerpt: "Turn more visitors into customers with proven CRO techniques.",
      category: "Marketing",
      date: "April 15, 2026",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      featured: false,
    },
  ];

  const featuredPost = posts.find((p) => p.featured);
  const regularPosts = posts.filter((p) => !p.featured);

  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="py-32 border-b border-[#1A3AFF]/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <h1 className="text-6xl md:text-7xl font-['Orbitron'] text-foreground mb-8 leading-tight">
              Blog
            </h1>
            <p className="text-2xl text-muted-foreground max-w-2xl">
              Insights, tutorials, and industry trends from our team of experts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-20 border-b border-[#1A3AFF]/20">
          <div className="container mx-auto px-6">
            <FeaturedPostCard post={featuredPost} />
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1A3AFF]/20 max-w-7xl mx-auto border border-[#1A3AFF]/20">
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
    <Link to={`/blog/${post.slug}`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ backgroundColor: "#0A1628" }}
        className="max-w-7xl mx-auto border border-[#1A3AFF]/20 bg-background transition-colors"
      >
        <div className="grid md:grid-cols-2 gap-px bg-[#1A3AFF]/20">
          {/* Image */}
          <div
            className="h-96 md:h-auto bg-cover bg-center"
            style={{ backgroundImage: `url(${post.image})` }}
          />

          {/* Content */}
          <div className="p-12 flex flex-col justify-center bg-background">
            <div className="inline-block px-4 py-2 border border-[#1A3AFF] text-[#00B4FF] text-sm mb-6 self-start">
              {post.category}
            </div>

            <h2 className="text-4xl font-['Orbitron'] text-foreground mb-4 group-hover:text-[#00B4FF] transition-colors">
              {post.title}
            </h2>

            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">{post.excerpt}</p>

            <div className="flex items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[#00B4FF] group">
              <span>Read Article</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <Link to={`/blog/${post.slug}`}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        whileHover={{ backgroundColor: "#0A1628" }}
        className="bg-background flex flex-col transition-colors min-h-[500px]"
      >
        {/* Image */}
        <div
          className="h-56 bg-cover bg-center"
          style={{ backgroundImage: `url(${post.image})` }}
        />

        {/* Content */}
        <div className="p-8 flex flex-col flex-grow">
          <div className="inline-block px-3 py-1.5 border border-[#1A3AFF]/40 text-[#00B4FF] text-xs mb-4 self-start">
            {post.category}
          </div>

          <h3 className="text-2xl font-['Orbitron'] text-foreground mb-3 hover:text-[#00B4FF] transition-colors">
            {post.title}
          </h3>

          <p className="text-muted-foreground mb-6 flex-grow">{post.excerpt}</p>

          <div className="flex items-center gap-4 text-muted-foreground text-sm border-t border-[#1A3AFF]/20 pt-4">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
