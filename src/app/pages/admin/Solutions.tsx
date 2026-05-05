import { useState } from "react";
import { GlassCard } from "../../components/ui/GlassCard";
import { Button } from "../../components/ui/Button";
import { Badge } from "../../components/ui/Badge";
import { Plus, Edit, Trash2 } from "lucide-react";

export function AdminSolutions() {
  const [showForm, setShowForm] = useState(false);

  const solutions = [
    {
      id: "1",
      name: "Business Website",
      tagline: "Perfect for established businesses",
      pricing: "From $2,500",
      timeline: "3-4 weeks",
      popular: false,
      features: [
        "Up to 10 pages",
        "Responsive design",
        "Contact forms",
        "SEO optimization",
        "Google Analytics",
        "3 months support",
      ],
    },
    {
      id: "2",
      name: "Landing Page Pro",
      tagline: "High-converting single page",
      pricing: "From $800",
      timeline: "1-2 weeks",
      popular: true,
      features: [
        "Single page design",
        "A/B testing ready",
        "Lead capture forms",
        "Fast loading (< 2s)",
        "Mobile optimized",
        "1 month support",
      ],
    },
  ];

  return (
    <div className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-['Orbitron'] text-foreground mb-2">Solutions Management</h1>
          <p className="text-muted-foreground">Manage pre-built solution packages</p>
        </div>
        <Button variant="primary" onClick={() => setShowForm(!showForm)}>
          <Plus className="w-5 h-5 mr-2" />
          Add Solution
        </Button>
      </div>

      {showForm && (
        <GlassCard className="mb-6">
          <h2 className="text-xl font-['Orbitron'] text-foreground mb-4">New Solution Package</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-foreground mb-2 text-sm">Package Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-muted border border-[#00B4FF]/20 text-foreground focus:border-[#00B4FF] focus:outline-none"
                placeholder="E-Commerce Starter"
              />
            </div>

            <div>
              <label className="block text-foreground mb-2 text-sm">Tagline</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-muted border border-[#00B4FF]/20 text-foreground focus:border-[#00B4FF] focus:outline-none"
                placeholder="Start selling online"
              />
            </div>

            <div>
              <label className="block text-foreground mb-2 text-sm">Description</label>
              <textarea
                className="w-full px-4 py-3 rounded-lg bg-muted border border-[#00B4FF]/20 text-foreground focus:border-[#00B4FF] focus:outline-none"
                rows={3}
                placeholder="What's included in this package?"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-foreground mb-2 text-sm">Pricing</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-[#00B4FF]/20 text-foreground focus:border-[#00B4FF] focus:outline-none"
                  placeholder="From $5,000"
                />
              </div>
              <div>
                <label className="block text-foreground mb-2 text-sm">Timeline</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-[#00B4FF]/20 text-foreground focus:border-[#00B4FF] focus:outline-none"
                  placeholder="4-6 weeks"
                />
              </div>
            </div>

            <div>
              <label className="block text-foreground mb-2 text-sm">Features (one per line)</label>
              <textarea
                className="w-full px-4 py-3 rounded-lg bg-muted border border-[#00B4FF]/20 text-foreground focus:border-[#00B4FF] focus:outline-none"
                rows={6}
                placeholder="Up to 100 products&#10;Payment integration&#10;Shopping cart"
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="popular"
                className="w-5 h-5 rounded bg-muted border border-[#00B4FF]/20"
              />
              <label htmlFor="popular" className="text-foreground text-sm">
                Mark as Popular
              </label>
            </div>

            <div className="flex gap-3">
              <Button variant="primary">Save Solution</Button>
              <Button variant="ghost" onClick={() => setShowForm(false)}>Cancel</Button>
            </div>
          </div>
        </GlassCard>
      )}

      {/* Solutions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {solutions.map((solution) => (
          <GlassCard key={solution.id}>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl text-foreground mb-1">{solution.name}</h3>
                <p className="text-[#00B4FF] text-sm">{solution.tagline}</p>
              </div>
              <div className="flex gap-2">
                {solution.popular && <Badge variant="cyan">Popular</Badge>}
                <button className="p-2 rounded-lg bg-[#0D1F4E] text-[#00B4FF] hover:bg-[#00B4FF]/10">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="p-2 rounded-lg bg-[#0D1F4E] text-red-400 hover:bg-red-400/10">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              {solution.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00B4FF]" />
                  <span className="text-foreground text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[#00B4FF]/20">
              <div>
                <p className="text-muted-foreground text-xs">Pricing</p>
                <p className="text-foreground">{solution.pricing}</p>
              </div>
              <div className="text-right">
                <p className="text-muted-foreground text-xs">Timeline</p>
                <p className="text-foreground">{solution.timeline}</p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
