import { useState } from "react";
import { Plus, Edit, Trash2, X, CheckCircle, MessageSquare, Star } from "lucide-react";

export function AdminTestimonials() {
  const [showForm, setShowForm] = useState(false);

  const testimonials = [
    {
      id: "1",
      name: "Amadou Diallo",
      role: "CEO, TechSen",
      content: "Une agence exceptionnelle. Leur compréhension de nos enjeux B2B a fait toute la différence.",
      rating: 5,
      status: "Publié",
      date: "02 Mai 2026",
    },
    {
      id: "2",
      name: "Fatou Sow",
      role: "Directrice Marketing, RetailSn",
      content: "L'équipe a su moderniser notre image de marque tout en respectant notre ADN historique.",
      rating: 5,
      status: "En attente",
      date: "28 Avril 2026",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-foreground tracking-tight mb-1">Avis Clients</h1>
          <p className="text-sm text-muted-foreground">Gérez les témoignages et recommandations de vos clients.</p>
        </div>
        <button 
          onClick={() => setShowForm(!showForm)}
          className="px-4 py-2 bg-[#1A3AFF] text-white text-sm font-medium hover:bg-[#1A3AFF]/90 transition-colors flex items-center gap-2"
        >
          {showForm ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
          {showForm ? "Fermer l'éditeur" : "Ajouter un Avis"}
        </button>
      </div>

      {showForm && (
        <div className="bg-white dark:bg-[#0A1220] border border-border/40 p-6 md:p-8">
          <h2 className="text-lg font-semibold text-foreground mb-6">Nouveau Témoignage</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Nom du Client</label>
              <input
                type="text"
                className="w-full px-4 py-2.5 bg-muted/10 border border-border/40 text-foreground text-sm focus:border-[#1A3AFF] focus:ring-1 focus:ring-[#1A3AFF] outline-none transition-colors"
                placeholder="Prénom Nom"
              />
            </div>
            
            <div>
              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Rôle et Entreprise</label>
              <input
                type="text"
                className="w-full px-4 py-2.5 bg-muted/10 border border-border/40 text-foreground text-sm focus:border-[#1A3AFF] focus:ring-1 focus:ring-[#1A3AFF] outline-none transition-colors"
                placeholder="Ex: CEO chez StartupX"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Message (Témoignage)</label>
              <textarea
                className="w-full px-4 py-3 bg-muted/10 border border-border/40 text-foreground text-sm focus:border-[#1A3AFF] focus:ring-1 focus:ring-[#1A3AFF] outline-none transition-colors min-h-[120px] resize-y"
                placeholder="Avis du client..."
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Note (sur 5)</label>
              <select className="w-full px-4 py-2.5 bg-muted/10 border border-border/40 text-foreground text-sm focus:border-[#1A3AFF] focus:ring-1 focus:ring-[#1A3AFF] outline-none transition-colors">
                <option value="5">5 Étoiles - Excellent</option>
                <option value="4">4 Étoiles - Très Bien</option>
                <option value="3">3 Étoiles - Bien</option>
              </select>
            </div>
            
            <div>
              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Statut initial</label>
              <select className="w-full px-4 py-2.5 bg-muted/10 border border-border/40 text-foreground text-sm focus:border-[#1A3AFF] focus:ring-1 focus:ring-[#1A3AFF] outline-none transition-colors">
                <option>En attente (Brouillon)</option>
                <option>Publié</option>
              </select>
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="p-6 bg-white dark:bg-[#0A1220] border border-border/40 flex flex-col relative group">
            
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-muted/30 border border-border/40 flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-foreground">{testimonial.name}</h3>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <span className={`px-2.5 py-1 text-xs font-medium ${
                testimonial.status === "Publié" 
                  ? "bg-[#1A3AFF]/10 text-[#1A3AFF]" 
                  : "bg-amber-500/10 text-amber-600 dark:text-amber-500"
              }`}>
                {testimonial.status}
              </span>
            </div>
            
            <div className="mb-4 flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-3.5 h-3.5 ${i < testimonial.rating ? "text-amber-500 fill-amber-500" : "text-muted-foreground opacity-30"}`} />
              ))}
            </div>

            <p className="text-sm text-foreground/80 leading-relaxed mb-6 italic border-l-2 border-[#1A3AFF]/30 pl-4">
              "{testimonial.content}"
            </p>

            <div className="flex items-center gap-2 mt-auto pt-4 border-t border-border/40">
              <button className="flex-1 p-2 bg-muted/30 text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-colors text-xs font-medium flex items-center justify-center gap-2">
                <Edit className="w-3.5 h-3.5" /> Modifier
              </button>
              {testimonial.status !== "Publié" && (
                <button className="flex-1 p-2 bg-[#1A3AFF]/5 text-[#1A3AFF] hover:bg-[#1A3AFF]/10 transition-colors text-xs font-medium flex items-center justify-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5" /> Publier
                </button>
              )}
              <button className="p-2 bg-muted/30 text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors">
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
