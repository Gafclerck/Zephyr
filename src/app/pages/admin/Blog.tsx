import { useState } from "react";
import { GlassCard } from "../../components/ui/GlassCard";
import { Button } from "../../components/ui/Button";
import { Badge } from "../../components/ui/Badge";
import { Plus, Edit, Trash2 } from "lucide-react";

export function AdminBlog() {
  const [showForm, setShowForm] = useState(false);

  const posts = [
    {
      id: "1",
      title: "React Performance Optimization in 2025",
      slug: "react-performance-2025",
      category: "Development",
      status: "published",
      date: "May 1, 2026",
      excerpt: "Learn the latest techniques to build lightning-fast React applications...",
    },
    {
      id: "2",
      title: "Mobile App Development Trends",
      slug: "mobile-app-trends",
      category: "Mobile",
      status: "published",
      date: "April 28, 2026",
      excerpt: "The technologies and patterns shaping mobile development this year...",
    },
    {
      id: "3",
      title: "Design Systems for Startups",
      slug: "design-systems-startups",
      category: "Design",
      status: "draft",
      date: "April 25, 2026",
      excerpt: "Building scalable design systems that grow with your product...",
    },
  ];

  return (
    <div className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-['Orbitron'] text-foreground mb-2">Blog Management</h1>
          <p className="text-muted-foreground">Create and manage blog posts</p>
        </div>
        <Button variant="primary" onClick={() => setShowForm(!showForm)}>
          <Plus className="w-5 h-5 mr-2" />
          New Post
        </Button>
      </div>

      {showForm && (
        <GlassCard className="mb-6">
          <h2 className="text-xl font-['Orbitron'] text-foreground mb-4">Create New Post</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-foreground mb-2 text-sm">Title</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-muted border border-[#00B4FF]/20 text-foreground focus:border-[#00B4FF] focus:outline-none"
                placeholder="Post title"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-foreground mb-2 text-sm">Slug</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-[#00B4FF]/20 text-foreground focus:border-[#00B4FF] focus:outline-none"
                  placeholder="post-slug"
                />
              </div>
              <div>
                <label className="block text-foreground mb-2 text-sm">Category</label>
                <select className="w-full px-4 py-3 rounded-lg bg-muted border border-[#00B4FF]/20 text-foreground focus:border-[#00B4FF] focus:outline-none">
                  <option>Development</option>
                  <option>Mobile</option>
                  <option>Design</option>
                  <option>Marketing</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-foreground mb-2 text-sm">Excerpt</label>
              <textarea
                className="w-full px-4 py-3 rounded-lg bg-muted border border-[#00B4FF]/20 text-foreground focus:border-[#00B4FF] focus:outline-none"
                rows={3}
                placeholder="Short excerpt..."
              />
            </div>

            <div>
              <label className="block text-foreground mb-2 text-sm">Content</label>
              <textarea
                className="w-full px-4 py-3 rounded-lg bg-muted border border-[#00B4FF]/20 text-foreground focus:border-[#00B4FF] focus:outline-none"
                rows={8}
                placeholder="Post content (Markdown supported)..."
              />
            </div>

            <div>
              <label className="block text-foreground mb-2 text-sm">Featured Image URL</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-muted border border-[#00B4FF]/20 text-foreground focus:border-[#00B4FF] focus:outline-none"
                placeholder="https://..."
              />
            </div>

            <div className="flex gap-3">
              <Button variant="primary">Publish</Button>
              <Button variant="ghost">Save Draft</Button>
              <Button variant="dark" onClick={() => setShowForm(false)}>Cancel</Button>
            </div>
          </div>
        </GlassCard>
      )}

      {/* Posts List */}
      <GlassCard>
        <div className="space-y-3">
          {posts.map((post) => (
            <div
              key={post.id}
              className="flex items-center justify-between p-4 rounded-lg bg-muted/40 border border-[#00B4FF]/10"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-foreground font-medium">{post.title}</h3>
                  <Badge variant={post.status === "published" ? "cyan" : "gray"}>
                    {post.status}
                  </Badge>
                </div>
                <p className="text-muted-foreground text-sm">{post.excerpt}</p>
                <p className="text-muted-foreground text-xs mt-2">
                  {post.category} • {post.date}
                </p>
              </div>
              <div className="flex items-center gap-2 ml-4">
                <button className="p-2 rounded-lg bg-[#0D1F4E] text-[#00B4FF] hover:bg-[#00B4FF]/10">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="p-2 rounded-lg bg-[#0D1F4E] text-red-400 hover:bg-red-400/10">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}
