import { useState } from "react";
import { Plus, Edit, Trash2, X, CheckCircle, Image as ImageIcon } from "lucide-react";

export function AdminPortfolio() {
  const [showForm, setShowForm] = useState(false);

  const projects = [
    {
      id: "1",
      title: "TechFlow Platform",
      category: "Web",
      client: "TechCorp",
      date: "2026",
      featured: true,
    },
    {
      id: "2",
      title: "FitTrack Mobile",
      category: "Mobile",
      client: "FitTrack Inc",
      date: "2026",
      featured: false,
    },
    {
      id: "3",
      title: "GreenEco Brand",
      category: "Branding",
      client: "GreenEco",
      date: "2025",
      featured: false,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-foreground tracking-tight mb-1">Portfolio</h1>
          <p className="text-sm text-muted-foreground">Gérez vos études de cas et réalisations.</p>
        </div>
        <button 
          onClick={() => setShowForm(!showForm)}
          className="px-4 py-2 bg-[#1A3AFF] text-white text-sm font-medium hover:bg-[#1A3AFF]/90 transition-colors flex items-center gap-2"
        >
          {showForm ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
          {showForm ? "Fermer l'éditeur" : "Nouveau Projet"}
        </button>
      </div>

      {showForm && (
        <div className="bg-white dark:bg-[#0A1220] border border-border/40 p-6 md:p-8">
          <h2 className="text-lg font-semibold text-foreground mb-6">Ajout au Portfolio</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Nom du projet</label>
              <input
                type="text"
                className="w-full px-4 py-2.5 bg-muted/10 border border-border/40 text-foreground text-sm focus:border-[#1A3AFF] focus:ring-1 focus:ring-[#1A3AFF] outline-none transition-colors"
                placeholder="Ex: Refonte Système Core"
              />
            </div>
            
            <div>
              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Client</label>
              <input
                type="text"
                className="w-full px-4 py-2.5 bg-muted/10 border border-border/40 text-foreground text-sm focus:border-[#1A3AFF] focus:ring-1 focus:ring-[#1A3AFF] outline-none transition-colors"
                placeholder="Nom du client"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Catégorie</label>
              <select className="w-full px-4 py-2.5 bg-muted/10 border border-border/40 text-foreground text-sm focus:border-[#1A3AFF] focus:ring-1 focus:ring-[#1A3AFF] outline-none transition-colors">
                <option>Web</option>
                <option>Mobile</option>
                <option>Branding</option>
                <option>Marketing</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Description et Résultats</label>
              <textarea
                className="w-full px-4 py-3 bg-muted/10 border border-border/40 text-foreground text-sm focus:border-[#1A3AFF] focus:ring-1 focus:ring-[#1A3AFF] outline-none transition-colors min-h-[120px] resize-y"
                placeholder="Description du défi, solution technique et résultats mesurables..."
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Visuels (URLs)</label>
              <div className="flex gap-3">
                <input
                  type="text"
                  className="flex-1 px-4 py-2.5 bg-muted/10 border border-border/40 text-foreground text-sm focus:border-[#1A3AFF] focus:ring-1 focus:ring-[#1A3AFF] outline-none transition-colors"
                  placeholder="https://..."
                />
                <button className="px-4 bg-muted border border-border/40 hover:bg-muted/80 transition-colors flex items-center justify-center">
                  <ImageIcon className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>
            </div>

            <div className="md:col-span-2 flex items-center gap-3 p-4 bg-muted/5 border border-border/40">
              <input type="checkbox" id="featured" className="w-4 h-4 rounded-sm border-border/40 text-[#1A3AFF] focus:ring-[#1A3AFF]" />
              <label htmlFor="featured" className="text-sm font-medium text-foreground">Mettre en avant sur la page d'accueil</label>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-6 border-t border-border/40">
            <button className="px-5 py-2.5 bg-[#1A3AFF] text-white text-sm font-medium hover:bg-[#1A3AFF]/90 transition-colors flex items-center gap-2">
              <CheckCircle className="w-4 h-4" /> Sauvegarder
            </button>
            <button onClick={() => setShowForm(false)} className="px-5 py-2.5 bg-transparent text-muted-foreground hover:text-foreground text-sm font-medium transition-colors">
              Annuler
            </button>
          </div>
        </div>
      )}

      {/* Grid */}
      <div className="bg-white dark:bg-[#0A1220] border border-border/40">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-muted/30 text-muted-foreground border-b border-border/40">
              <tr>
                <th className="px-6 py-4 font-semibold">Projet</th>
                <th className="px-6 py-4 font-semibold">Client</th>
                <th className="px-6 py-4 font-semibold">Catégorie</th>
                <th className="px-6 py-4 font-semibold text-center">Statut</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/40">
              {projects.map((project) => (
                <tr key={project.id} className="hover:bg-muted/10 transition-colors">
                  <td className="px-6 py-4">
                    <p className="font-medium text-foreground text-base mb-1">{project.title}</p>
                    <p className="text-muted-foreground text-xs">{project.date}</p>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">{project.client}</td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 bg-muted/50 text-muted-foreground text-xs font-medium">
                      {project.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    {project.featured ? (
                      <span className="px-2.5 py-1 bg-[#1A3AFF]/10 text-[#1A3AFF] text-xs font-medium">En Vedette</span>
                    ) : (
                      <span className="px-2.5 py-1 bg-muted text-muted-foreground text-xs font-medium">Standard</span>
                    )}
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
