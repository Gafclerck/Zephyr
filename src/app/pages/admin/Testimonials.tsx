import { useState } from "react";
import { GlassCard } from "../../components/ui/GlassCard";
import { Button } from "../../components/ui/Button";
import { Plus, Edit, Trash2 } from "lucide-react";

export function AdminTestimonials() {
  const [showForm, setShowForm] = useState(false);

  const testimonials = [
    {
      id: "1",
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      text: "Zephyr transformed our digital presence. The website they built increased our conversions by 240%.",
      rating: 5,
      image: "",
    },
    {
      id: "2",
      name: "Michael Chen",
      company: "GrowthCo",
      role: "Founder",
      text: "Professional, fast, and exceptional quality. Our mobile app launch exceeded all expectations.",
      rating: 5,
      image: "",
    },
  ];

  return (
    <div className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-['Orbitron'] text-foreground mb-2">Testimonials</h1>
          <p className="text-muted-foreground">Manage client testimonials</p>
        </div>
        <Button variant="primary" onClick={() => setShowForm(!showForm)}>
          <Plus className="w-5 h-5 mr-2" />
          Add Testimonial
        </Button>
      </div>

      {showForm && (
        <GlassCard className="mb-6">
          <h2 className="text-xl font-['Orbitron'] text-foreground mb-4">New Testimonial</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-foreground mb-2 text-sm">Client Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-[#00B4FF]/20 text-foreground focus:border-[#00B4FF] focus:outline-none"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-foreground mb-2 text-sm">Company</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-[#00B4FF]/20 text-foreground focus:border-[#00B4FF] focus:outline-none"
                  placeholder="Company Name"
                />
              </div>
            </div>

            <div>
              <label className="block text-foreground mb-2 text-sm">Role/Title</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-muted border border-[#00B4FF]/20 text-foreground focus:border-[#00B4FF] focus:outline-none"
                placeholder="CEO, Founder, etc."
              />
            </div>

            <div>
              <label className="block text-foreground mb-2 text-sm">Testimonial Text</label>
              <textarea
                className="w-full px-4 py-3 rounded-lg bg-muted border border-[#00B4FF]/20 text-foreground focus:border-[#00B4FF] focus:outline-none"
                rows={4}
                placeholder="What did they say about working with you?"
              />
            </div>

            <div>
              <label className="block text-foreground mb-2 text-sm">Rating</label>
              <select className="w-full px-4 py-3 rounded-lg bg-muted border border-[#00B4FF]/20 text-foreground focus:border-[#00B4FF] focus:outline-none">
                <option value="5">5 Stars</option>
                <option value="4">4 Stars</option>
                <option value="3">3 Stars</option>
              </select>
            </div>

            <div>
              <label className="block text-foreground mb-2 text-sm">Client Photo URL (Optional)</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-muted border border-[#00B4FF]/20 text-foreground focus:border-[#00B4FF] focus:outline-none"
                placeholder="https://..."
              />
            </div>

            <div className="flex gap-3">
              <Button variant="primary">Save Testimonial</Button>
              <Button variant="ghost" onClick={() => setShowForm(false)}>Cancel</Button>
            </div>
          </div>
        </GlassCard>
      )}

      {/* Testimonials List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial) => (
          <GlassCard key={testimonial.id}>
            <div className="flex items-start justify-between mb-4">
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <div key={i} className="w-5 h-5 text-[#00E5FF]">★</div>
                ))}
              </div>
              <div className="flex gap-2">
                <button className="p-2 rounded-lg bg-[#0D1F4E] text-[#00B4FF] hover:bg-[#00B4FF]/10">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="p-2 rounded-lg bg-[#0D1F4E] text-red-400 hover:bg-red-400/10">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            <p className="text-foreground mb-4">{testimonial.text}</p>
            <div>
              <p className="text-foreground font-medium">{testimonial.name}</p>
              <p className="text-muted-foreground text-sm">
                {testimonial.role} at {testimonial.company}
              </p>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
