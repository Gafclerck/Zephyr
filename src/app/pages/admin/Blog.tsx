import { useState } from "react";
import { Plus, Edit, Trash2, X, CheckCircle } from "lucide-react";

export function AdminBlog() {
  const [showForm, setShowForm] = useState(false);

  const posts = [
    {
      id: "1",
      title: "Optimisation de Performance React en 2026",
      slug: "react-performance-2026",
      category: "Ingénierie",
      status: "Publié",
      date: "1 Mai 2026",
      excerpt: "Découvrez les dernières techniques architecturales pour construire des applications React ultra-rapides et scalables.",
    },
    {
      id: "2",
      title: "Tendances du Développement Mobile Natif",
      slug: "mobile-app-trends",
      category: "Mobile",
      status: "Publié",
      date: "28 Avril 2026",
      excerpt: "Les technologies et les design patterns qui redéfinissent l'écosystème mobile iOS et Android cette année.",
    },
    {
      id: "3",
      title: "Fondations d'une Identité de Marque Puissante",
      slug: "branding-essentials",
      category: "Design",
      status: "Brouillon",
      date: "25 Avril 2026",
      excerpt: "Construisez une image de marque mémorable et percutante dès le premier jour avec ces stratégies éprouvées.",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-foreground tracking-tight mb-1">Publications</h1>
          <p className="text-sm text-muted-foreground">Gérez vos articles de blog et votre contenu éditorial.</p>
        </div>
        <button 
          onClick={() => setShowForm(!showForm)}
          className="px-4 py-2 bg-[#1A3AFF] text-white text-sm font-medium hover:bg-[#1A3AFF]/90 transition-colors flex items-center gap-2"
        >
          {showForm ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
          {showForm ? "Fermer l'éditeur" : "Nouveau Article"}
        </button>
      </div>

      {showForm && (
        <div className="bg-white dark:bg-[#0A1220] border border-border/40 p-6 md:p-8">
          <h2 className="text-lg font-semibold text-foreground mb-6">Éditeur d'Article</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Titre de l'article</label>
              <input
                type="text"
                className="w-full px-4 py-2.5 bg-muted/10 border border-border/40 text-foreground text-sm focus:border-[#1A3AFF] focus:ring-1 focus:ring-[#1A3AFF] outline-none transition-colors"
                placeholder="Titre explicite..."
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Identifiant (Slug)</label>
              <input
                type="text"
                className="w-full px-4 py-2.5 bg-muted/10 border border-border/40 text-foreground text-sm focus:border-[#1A3AFF] focus:ring-1 focus:ring-[#1A3AFF] outline-none transition-colors"
                placeholder="titre-de-l-article"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Catégorie</label>
              <select className="w-full px-4 py-2.5 bg-muted/10 border border-border/40 text-foreground text-sm focus:border-[#1A3AFF] focus:ring-1 focus:ring-[#1A3AFF] outline-none transition-colors">
                <option>Ingénierie</option>
                <option>Mobile</option>
                <option>Design</option>
                <option>Marketing</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Extrait court</label>
              <textarea
                className="w-full px-4 py-3 bg-muted/10 border border-border/40 text-foreground text-sm focus:border-[#1A3AFF] focus:ring-1 focus:ring-[#1A3AFF] outline-none transition-colors resize-y"
                rows={2}
                placeholder="Résumé percutant..."
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Contenu Principal (Markdown)</label>
              <textarea
                className="w-full px-4 py-4 bg-muted/10 border border-border/40 text-foreground text-sm focus:border-[#1A3AFF] focus:ring-1 focus:ring-[#1A3AFF] outline-none transition-colors resize-y min-h-[250px] font-mono"
                placeholder="## Titre de section\n\nCorps du texte..."
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Image de couverture (URL)</label>
              <input
                type="text"
                className="w-full px-4 py-2.5 bg-muted/10 border border-border/40 text-foreground text-sm focus:border-[#1A3AFF] focus:ring-1 focus:ring-[#1A3AFF] outline-none transition-colors"
                placeholder="https://..."
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-6 border-t border-border/40">
            <button className="px-5 py-2.5 bg-[#1A3AFF] text-white text-sm font-medium hover:bg-[#1A3AFF]/90 transition-colors flex items-center gap-2">
              <CheckCircle className="w-4 h-4" /> Publier
            </button>
            <button className="px-5 py-2.5 bg-muted border border-border/40 text-foreground text-sm font-medium hover:bg-muted/80 transition-colors">
              Brouillon
            </button>
            <button onClick={() => setShowForm(false)} className="px-5 py-2.5 bg-transparent text-muted-foreground hover:text-foreground text-sm font-medium transition-colors">
              Annuler
            </button>
          </div>
        </div>
      )}

      {/* Posts List */}
      <div className="bg-white dark:bg-[#0A1220] border border-border/40">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-muted/30 text-muted-foreground border-b border-border/40">
              <tr>
                <th className="px-6 py-4 font-semibold">Article</th>
                <th className="px-6 py-4 font-semibold">Catégorie</th>
                <th className="px-6 py-4 font-semibold">Statut</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/40">
              {posts.map((post) => (
                <tr key={post.id} className="hover:bg-muted/10 transition-colors">
                  <td className="px-6 py-4">
                    <p className="font-medium text-foreground text-base mb-1">{post.title}</p>
                    <p className="text-muted-foreground text-xs">{post.date} • {post.slug}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 bg-muted/50 text-muted-foreground text-xs font-medium">
                      {post.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 text-xs font-medium ${
                      post.status === "Publié" 
                        ? "bg-[#1A3AFF]/10 text-[#1A3AFF]" 
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {post.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
