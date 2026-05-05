import { useState, useRef } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { motion, useInView } from "motion/react";

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web" },
    { id: "mobile", label: "Mobile" },
    { id: "branding", label: "Branding" },
  ];

  const projects = [
    {
      title: "TechFlow Platform",
      category: "web",
      description: "SaaS platform for project management with real-time collaboration",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      results: "+300% user engagement",
      tags: ["React", "Node.js", "WebSocket"],
      large: true,
    },
    {
      title: "FitTrack Mobile",
      category: "mobile",
      description: "Fitness tracking app with AI-powered workout recommendations",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      results: "50K+ downloads in 3 months",
      tags: ["React Native", "AI", "Health"],
      large: false,
    },
    {
      title: "GreenEco Brand",
      category: "branding",
      description: "Complete brand identity for sustainable products company",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
      results: "3 design awards",
      tags: ["Brand Identity", "Packaging"],
      large: false,
    },
    {
      title: "ShopLocal E-Commerce",
      category: "web",
      description: "Multi-vendor marketplace connecting local businesses",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      results: "$500K+ revenue in year 1",
      tags: ["Next.js", "Stripe", "E-Commerce"],
      large: true,
    },
    {
      title: "MediCare App",
      category: "mobile",
      description: "Telemedicine platform with appointment scheduling",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      results: "10K+ consultations/month",
      tags: ["Healthcare", "Video", "HIPAA"],
      large: false,
    },
    {
      title: "Urban Coffee Rebrand",
      category: "branding",
      description: "Complete rebrand for artisan coffee chain",
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&h=600&fit=crop",
      results: "+85% brand recognition",
      tags: ["Rebranding", "Marketing"],
      large: false,
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

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
              Portfolio
            </h1>
            <p className="text-2xl text-muted-foreground max-w-2xl">
              Real projects. Real results. Explore our work and see how we've helped businesses achieve their digital goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 border-b border-[#1A3AFF]/20 sticky top-20 bg-background z-30">
        <div className="container mx-auto px-6">
          <div className="flex gap-px max-w-7xl mx-auto border border-[#1A3AFF]/20">
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                whileHover={{ backgroundColor: activeFilter === filter.id ? "#1A3AFF" : "#0A1628" }}
                className={`flex-1 py-5 ${
                  activeFilter === filter.id
                    ? "bg-[#1A3AFF] text-foreground"
                    : "bg-background text-muted-foreground"
                } transition-colors font-['Orbitron'] text-lg`}
              >
                {filter.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1A3AFF]/20 max-w-7xl mx-auto border border-[#1A3AFF]/20">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-muted border-t border-[#1A3AFF]/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-['Orbitron'] text-foreground mb-8">
              Start Your Project
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Let's create something exceptional together. Get in touch to discuss your project.
            </p>
            <a href="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-12 py-5 bg-[#1A3AFF] text-foreground text-lg hover:bg-[#00B4FF] transition-colors inline-flex items-center gap-3"
              >
                Get Started
                <ArrowRight className="w-6 h-6" />
              </motion.button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

// Project Card Component
interface ProjectCardProps {
  project: {
    title: string;
    category: string;
    description: string;
    image: string;
    results: string;
    tags: string[];
    large: boolean;
  };
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden bg-background cursor-pointer group ${
        project.large ? "md:col-span-2" : ""
      }`}
      style={{ minHeight: project.large ? "600px" : "500px" }}
    >
      {/* Background Image */}
      <motion.div
        animate={{ scale: isHovered ? 1.05 : 1 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${project.image})` }}
      />

      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0.6 }}
        animate={{ opacity: isHovered ? 0.95 : 0.6 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-background"
      />

      {/* Content */}
      <div className="relative h-full p-10 flex flex-col justify-between">
        {/* Top - Tags */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -10 }}
          transition={{ duration: 0.3 }}
          className="flex flex-wrap gap-2"
        >
          {project.tags.map((tag, i) => (
            <div
              key={i}
              className="px-4 py-2 border border-[#1A3AFF]/40 text-foreground text-sm bg-[#0D1F4E]/80"
            >
              {tag}
            </div>
          ))}
        </motion.div>

        {/* Bottom - Info */}
        <div>
          <motion.h3
            animate={{ y: isHovered ? -10 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-4xl font-['Orbitron'] text-foreground mb-4"
          >
            {project.title}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-muted-foreground text-lg mb-6 max-w-xl"
          >
            {project.description}
          </motion.p>

          <motion.div
            animate={{ opacity: isHovered ? 1 : 0.8 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-between"
          >
            <div className="text-[#00B4FF] text-lg font-medium">{project.results}</div>
            <motion.div
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ExternalLink className="w-6 h-6 text-[#00B4FF]" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
