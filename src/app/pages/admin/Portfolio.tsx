import { useState } from "react";
import { GlassCard } from "../../components/ui/GlassCard";
import { Button } from "../../components/ui/Button";
import { Badge } from "../../components/ui/Badge";
import { Plus, Edit, Trash2 } from "lucide-react";

export function AdminPortfolio() {
  const [showForm, setShowForm] = useState(false);

  const projects = [
    {
      id: "1",
      title: "TechFlow Platform",
      category: "web",
      tags: ["Web App", "React", "Node.js"],
      description: "SaaS platform for project management",
      results: "+300% user engagement",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    },
    {
      id: "2",
      title: "FitTrack Mobile",
      category: "mobile",
      tags: ["iOS", "Android", "Health"],
      description: "Fitness tracking app with AI recommendations",
      results: "50K+ downloads",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop",
    },
  ];

  return (
    <div className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-['Orbitron'] text-foreground mb-2">Portfolio Management</h1>
          <p className="text-muted-foreground">Showcase your best work</p>
        </div>
        <Button variant="primary" onClick={() => setShowForm(!showForm)}>
          <Plus className="w-5 h-5 mr-2" />
          Add Project
        </Button>
      </div>

      {showForm && (
        <GlassCard className="mb-6">
          <h2 className="text-xl font-['Orbitron'] text-foreground mb-4">New Project</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-foreground mb-2 text-sm">Project Title</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-muted border border-[#00B4FF]/20 text-foreground focus:border-[#00B4FF] focus:outline-none"
                placeholder="Project name"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-foreground mb-2 text-sm">Category</label>
                <select className="w-full px-4 py-3 rounded-lg bg-muted border border-[#00B4FF]/20 text-foreground focus:border-[#00B4FF] focus:outline-none">
                  <option value="web">Web</option>
                  <option value="mobile">Mobile</option>
                  <option value="branding">Branding</option>
                </select>
              </div>
              <div>
                <label className="block text-foreground mb-2 text-sm">Tags (comma-separated)</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-[#00B4FF]/20 text-foreground focus:border-[#00B4FF] focus:outline-none"
                  placeholder="React, Node.js, API"
                />
              </div>
            </div>

            <div>
              <label className="block text-foreground mb-2 text-sm">Description</label>
              <textarea
                className="w-full px-4 py-3 rounded-lg bg-muted border border-[#00B4FF]/20 text-foreground focus:border-[#00B4FF] focus:outline-none"
                rows={3}
                placeholder="Brief project description"
              />
            </div>

            <div>
              <label className="block text-foreground mb-2 text-sm">Key Results</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-muted border border-[#00B4FF]/20 text-foreground focus:border-[#00B4FF] focus:outline-none"
                placeholder="e.g. +300% engagement, $500K revenue"
              />
            </div>

            <div>
              <label className="block text-foreground mb-2 text-sm">Project Image URL</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-muted border border-[#00B4FF]/20 text-foreground focus:border-[#00B4FF] focus:outline-none"
                placeholder="https://..."
              />
            </div>

            <div className="flex gap-3">
              <Button variant="primary">Add Project</Button>
              <Button variant="ghost" onClick={() => setShowForm(false)}>Cancel</Button>
            </div>
          </div>
        </GlassCard>
      )}

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <GlassCard key={project.id} className="p-0">
            <div
              className="h-48 bg-cover bg-center rounded-t-xl"
              style={{ backgroundImage: `url(${project.image})` }}
            />
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag, i) => (
                  <Badge key={i} variant="gray">{tag}</Badge>
                ))}
              </div>
              <h3 className="text-xl text-foreground mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
              <p className="text-[#00B4FF] text-sm mb-4">{project.results}</p>

              <div className="flex gap-2">
                <button className="flex-1 p-2 rounded-lg bg-[#0D1F4E] text-[#00B4FF] hover:bg-[#00B4FF]/10 flex items-center justify-center gap-2">
                  <Edit className="w-4 h-4" />
                  Edit
                </button>
                <button className="p-2 rounded-lg bg-[#0D1F4E] text-red-400 hover:bg-red-400/10">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
