import { useState } from "react";
import { Plus, Edit, Trash2, X, CheckCircle, Package } from "lucide-react";

export function AdminSolutions() {
  const [showForm, setShowForm] = useState(false);

  const solutions = [
    {
      id: "1",
      name: "Landing Page Pro",
      pricing: "À partir de 500k FCFA",
      timeline: "1-2 semaines",
      popular: true,
      status: "Actif",
    },
    {
      id: "2",
      name: "Brand Identity System",
      pricing: "À partir de 300k FCFA",
      timeline: "2-3 semaines",
      popular: false,
      status: "Actif",
    },
    {
      id: "3",
      name: "E-Commerce Architecture",
      pricing: "À partir de 2.5M FCFA",
      timeline: "4-6 semaines",
      popular: false,
      status: "Actif",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-foreground tracking-tight mb-1">Solutions</h1>
          <p className="text-sm text-muted-foreground">Catalogue de services standardisés et offres packagées.</p>
        </div>
        <button 
          onClick={() => setShowForm(!showForm)}
          className="px-4 py-2 bg-[#1A3AFF] text-white text-sm font-medium hover:bg-[#1A3AFF]/90 transition-colors flex items-center gap-2"
        >
          {showForm ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
          {showForm ? "Fermer l'éditeur" : "Nouvelle Solution"}
        </button>
      </div>

      {showForm && (
        <div className="bg-white dark:bg-[#0A1220] border border-border/40 p-6 md:p-8">
          <h2 className="text-lg font-semibold text-foreground mb-6">Ajouter une Solution</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Nom de la solution</label>
              <input
                type="text"
                className="w-full px-4 py-2.5 bg-muted/10 border border-border/40 text-foreground text-sm focus:border-[#1A3AFF] focus:ring-1 focus:ring-[#1A3AFF] outline-none transition-colors"
                placeholder="Ex: Architecture E-Commerce"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Slogan / Accroche</label>
              <input
                type="text"
                className="w-full px-4 py-2.5 bg-muted/10 border border-border/40 text-foreground text-sm focus:border-[#1A3AFF] focus:ring-1 focus:ring-[#1A3AFF] outline-none transition-colors"
                placeholder="Ex: Vente en ligne performante"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Description</label>
              <input
                type="text"
                className="w-full px-4 py-2.5 bg-muted/10 border border-border/40 text-foreground text-sm focus:border-[#1A3AFF] focus:ring-1 focus:ring-[#1A3AFF] outline-none transition-colors"
                placeholder="Description courte..."
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Tarification</label>
              <input
                type="text"
                className="w-full px-4 py-2.5 bg-muted/10 border border-border/40 text-foreground text-sm focus:border-[#1A3AFF] focus:ring-1 focus:ring-[#1A3AFF] outline-none transition-colors"
                placeholder="Ex: À partir de 2.5M FCFA"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Délai estimé</label>
              <input
                type="text"
                className="w-full px-4 py-2.5 bg-muted/10 border border-border/40 text-foreground text-sm focus:border-[#1A3AFF] focus:ring-1 focus:ring-[#1A3AFF] outline-none transition-colors"
                placeholder="Ex: 4-6 semaines"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Caractéristiques (une par ligne)</label>
              <textarea
                className="w-full px-4 py-3 bg-muted/10 border border-border/40 text-foreground text-sm focus:border-[#1A3AFF] focus:ring-1 focus:ring-[#1A3AFF] outline-none transition-colors min-h-[100px] resize-y"
                placeholder="- Caractéristique 1\n- Caractéristique 2"
              />
            </div>

            <div className="md:col-span-2 flex items-center gap-3 p-4 bg-muted/5 border border-border/40">
              <input type="checkbox" id="popular" className="w-4 h-4 rounded-sm border-border/40 text-[#1A3AFF] focus:ring-[#1A3AFF]" />
              <label htmlFor="popular" className="text-sm font-medium text-foreground">Marquer comme solution "Plus Demandée"</label>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-6 border-t border-border/40">
            <button className="px-5 py-2.5 bg-[#1A3AFF] text-white text-sm font-medium hover:bg-[#1A3AFF]/90 transition-colors flex items-center gap-2">
              <CheckCircle className="w-4 h-4" /> Enregistrer la Solution
            </button>
            <button onClick={() => setShowForm(false)} className="px-5 py-2.5 bg-transparent text-muted-foreground hover:text-foreground text-sm font-medium transition-colors">
              Annuler
            </button>
          </div>
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {solutions.map((solution) => (
          <div key={solution.id} className="p-6 bg-white dark:bg-[#0A1220] border border-border/40 flex flex-col relative group hover:border-border/80 transition-colors">
            
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 bg-muted/30 border border-border/40 flex items-center justify-center">
                <Package className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              </div>
              {solution.popular && (
                <span className="px-2 py-1 bg-[#1A3AFF]/10 text-[#1A3AFF] text-xs font-medium">
                  Populaire
                </span>
              )}
            </div>
            
            <h3 className="text-lg font-semibold text-foreground mb-4">{solution.name}</h3>
            
            <div className="space-y-3 mb-6 flex-grow">
              <div className="flex justify-between items-center pb-2 border-b border-border/40">
                <span className="text-xs text-muted-foreground font-medium">Budget Base</span>
                <span className="text-sm text-foreground">{solution.pricing}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-border/40">
                <span className="text-xs text-muted-foreground font-medium">Délai</span>
                <span className="text-sm text-foreground">{solution.timeline}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-border/40">
                <span className="text-xs text-muted-foreground font-medium">Statut</span>
                <span className="text-sm text-emerald-600 dark:text-emerald-500 font-medium">{solution.status}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-auto">
              <button className="flex-1 p-2 bg-muted/30 text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-colors text-sm font-medium flex items-center justify-center gap-2">
                <Edit className="w-4 h-4" /> Éditer
              </button>
              <button className="p-2 bg-muted/30 text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
