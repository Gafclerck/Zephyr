import { Link } from "react-router";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useRef } from "react";
import { useInView } from "motion/react";

export function Solutions() {
  const solutions = [
    {
      name: "Landing Page Pro",
      tagline: "High-converting single page",
      description: "Optimized landing page designed to maximize conversions for your marketing campaigns.",
      features: [
        "Single page design",
        "A/B testing ready",
        "Lead capture forms",
        "Fast loading (< 2s)",
        "Mobile optimized",
        "1 month support",
      ],
      pricing: "$800",
      timeline: "1-2 weeks",
      popular: true,
    },
    {
      name: "Brand Identity Package",
      tagline: "Complete brand system",
      description: "Full brand identity including logo, colors, typography, and brand guidelines.",
      features: [
        "Logo design (3 concepts)",
        "Color palette",
        "Typography system",
        "Brand guidelines",
        "Business cards",
        "Social media kit",
      ],
      pricing: "$1,800",
      timeline: "2-3 weeks",
      popular: false,
    },
    {
      name: "Digital Marketing Campaign",
      tagline: "Drive traffic & conversions",
      description: "3-month digital marketing campaign with SEO, social media, and paid advertising.",
      features: [
        "SEO optimization",
        "Social media management",
        "Paid ads (Google/Meta)",
        "Content creation",
        "Monthly reports",
        "Strategy consulting",
      ],
      pricing: "$2,000/mo",
      timeline: "3 months minimum",
      popular: true,
    },
    {
      name: "Business Website",
      tagline: "Perfect for established businesses",
      description: "Complete professional website with all essential features to establish your online presence.",
      features: [
        "Up to 10 pages",
        "Responsive design",
        "Contact forms",
        "SEO optimization",
        "Google Analytics",
        "3 months support",
      ],
      pricing: "$2,500",
      timeline: "3-4 weeks",
      popular: false,
    },
    {
      name: "E-Commerce Starter",
      tagline: "Start selling online",
      description: "Complete online store with payment processing and inventory management.",
      features: [
        "Up to 100 products",
        "Payment integration",
        "Shopping cart",
        "Order management",
        "Customer accounts",
        "6 months support",
      ],
      pricing: "$4,500",
      timeline: "4-6 weeks",
      popular: false,
    },
    {
      name: "Mobile App MVP",
      tagline: "Launch your app idea",
      description: "Minimum viable product for iOS and Android to validate your mobile app concept.",
      features: [
        "iOS & Android",
        "Core features (5-7)",
        "User authentication",
        "Cloud backend",
        "Push notifications",
        "3 months support",
      ],
      pricing: "$8,000",
      timeline: "6-8 weeks",
      popular: false,
    },
  ];

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
              Solutions
            </h1>
            <p className="text-2xl text-muted-foreground max-w-2xl">
              Pre-built packages designed for fast delivery and proven results. Choose a solution or customize to fit your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1A3AFF]/20 max-w-7xl mx-auto border border-[#1A3AFF]/20">
            {solutions.map((solution, index) => (
              <SolutionCard key={index} solution={solution} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-32 bg-muted border-y border-[#1A3AFF]/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-['Orbitron'] text-foreground mb-8">
              Need Something Custom?
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              These packages are starting points. We customize every project to your specific needs and goals.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-12 py-5 bg-[#1A3AFF] text-foreground text-lg hover:bg-[#00B4FF] transition-colors inline-flex items-center gap-3"
              >
                Discuss Your Project
                <ArrowRight className="w-6 h-6" />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Our Solutions */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-['Orbitron'] text-foreground mb-16 text-center">
            Why Choose Our Solutions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1A3AFF]/20 max-w-6xl mx-auto border border-[#1A3AFF]/20">
            <BenefitBlock
              title="Fast Delivery"
              description="Pre-scoped packages mean faster timelines and predictable delivery dates."
            />
            <BenefitBlock
              title="Proven Results"
              description="Each solution is based on patterns that have delivered success for our clients."
            />
            <BenefitBlock
              title="Transparent Pricing"
              description="Fixed pricing with no hidden costs. Know exactly what you're getting."
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
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ backgroundColor: "#0A1628" }}
      className={`${
        solution.popular ? "bg-[#0D1F4E]" : "bg-background"
      } p-10 flex flex-col transition-colors`}
    >
      {/* Popular Badge */}
      {solution.popular && (
        <div className="mb-6">
          <div className="inline-block px-4 py-2 border border-[#00E5FF] text-[#00E5FF] text-sm">
            MOST POPULAR
          </div>
        </div>
      )}

      {/* Title */}
      <h3 className="text-3xl font-['Orbitron'] text-foreground mb-2">{solution.name}</h3>
      <p className="text-[#00B4FF] mb-4">{solution.tagline}</p>
      <p className="text-muted-foreground mb-8 flex-grow">{solution.description}</p>

      {/* Features */}
      <div className="space-y-3 mb-8">
        {solution.features.map((feature, i) => (
          <div key={i} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-[#00B4FF] flex-shrink-0 mt-0.5" />
            <span className="text-foreground">{feature}</span>
          </div>
        ))}
      </div>

      {/* Pricing & Timeline */}
      <div className="border-t border-[#1A3AFF]/20 pt-8 mt-auto">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-muted-foreground text-sm mb-1">Starting at</p>
            <p className="text-foreground text-2xl font-['Orbitron']">{solution.pricing}</p>
          </div>
          <div>
            <p className="text-muted-foreground text-sm mb-1">Timeline</p>
            <p className="text-foreground">{solution.timeline}</p>
          </div>
        </div>

        <Link to="/contact">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-4 ${
              solution.popular
                ? "bg-[#1A3AFF] text-foreground hover:bg-[#00B4FF]"
                : "border border-[#1A3AFF] text-foreground hover:bg-muted"
            } transition-colors inline-flex items-center justify-center gap-2`}
          >
            Request This Solution
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}

// Benefit Block Component
interface BenefitBlockProps {
  title: string;
  description: string;
}

function BenefitBlock({ title, description }: BenefitBlockProps) {
  return (
    <div className="bg-background p-10 text-center">
      <h4 className="text-2xl font-['Orbitron'] text-foreground mb-4">{title}</h4>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
