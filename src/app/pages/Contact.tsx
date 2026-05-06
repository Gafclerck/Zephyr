import { useState } from "react";
import { CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";
import { PageTransition } from "../components/PageTransition";
import { motion, AnimatePresence } from "motion/react";

type FormStep = 1 | 2 | 3 | 4;

interface FormData {
  projectType: string;
  businessGoal: string;
  budget: string;
  timeline: string;
  description: string;
  name: string;
  email: string;
  phone: string;
  company: string;
}

export function Contact() {
  const [step, setStep] = useState<FormStep>(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    projectType: "",
    businessGoal: "",
    budget: "",
    timeline: "",
    description: "",
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  const projectTypes = [
    "Plateforme Web Complexe",
    "Application Mobile Native",
    "Design System & Branding",
    "Acquisition & Marketing",
    "E-Commerce Scalable",
    "Ingénierie Sur Mesure",
  ];

  const businessGoals = [
    "Génération de Leads B2B",
    "Croissance du Chiffre d'Affaires",
    "Autorité de Marque",
    "Modernisation UX/UI",
    "Lancement de Nouveau Produit",
    "Transformation Digitale",
  ];

  const budgetRanges = [
    "< 2.5M FCFA",
    "2.5M - 5M FCFA",
    "5M - 15M FCFA",
    "15M - 30M FCFA",
    "30M+ FCFA",
  ];

  const timelines = [
    "Urgent (< 1 mois)",
    "Standard (1-3 mois)",
    "Stratégique (3-6 mois)",
    "Long terme (6+ mois)",
    "Flexible",
  ];

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (submitted) {
    return (
      <PageTransition>
        <div className="bg-background min-h-screen flex items-center justify-center selection:bg-[#1A3AFF] selection:text-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-2xl mx-auto text-center border border-border/40 bg-muted/10 p-16 relative"
            >
              {/* Vector Corners */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#1A3AFF]" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#1A3AFF]" />

              <div className="w-20 h-20 bg-[#1A3AFF]/10 border border-[#1A3AFF] flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 className="w-10 h-10 text-[#1A3AFF]" />
              </div>
              <h2 className="text-4xl font-['Orbitron'] text-foreground mb-4">
                Transmission Réussie
              </h2>
              <p className="text-muted-foreground text-lg mb-10 max-w-md mx-auto">
                Vos spécifications ont été enregistrées. Un ingénieur solution prendra contact avec vous dans un délai de 24 à 48 heures.
              </p>
              <button
                onClick={() => window.location.href = "/"}
                className="px-8 py-4 bg-[#1A3AFF] text-white font-['Orbitron'] text-sm tracking-widest uppercase hover:bg-[#1A3AFF] transition-colors"
              >
                Retour au hub
              </button>
            </motion.div>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    // <PageTransition>
    <div className="bg-background min-h-screen selection:bg-[#1A3AFF] selection:text-white pb-24">
      {/* Hero Section */}
      <section className="pt-40 pb-20 border-b border-border/40 relative">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px] pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-[1px] bg-[#1A3AFF]" />
              <span className="text-[#1A3AFF] font-['Orbitron'] text-xs tracking-[0.3em] uppercase font-semibold">
                Initialiser le contact
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-medium leading-[1.05] tracking-tight text-foreground mb-8 font-['Orbitron']">
              Démarrer un Projet
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Paramétrez les détails de votre besoin technologique. Nous évaluerons la faisabilité et vous proposerons une architecture adaptée.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 md:px-12">

          {/* Progress Bar */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="flex gap-px bg-border border border-border/40">
              {[
                { num: 1, label: "Type de Projet" },
                { num: 2, label: "Objectif B2B/B2C" },
                { num: 3, label: "Budget & Délai" },
                { num: 4, label: "Informations" },
              ].map((s) => (
                <div
                  key={s.num}
                  className={`flex-1 p-6 text-center transition-colors ${s.num <= step ? "bg-[#1A3AFF]/10 border-b-2 border-b-[#1A3AFF]" : "bg-background border-b-2 border-b-transparent"
                    }`}
                >
                  <div className={`text-2xl font-['Orbitron'] mb-2 ${s.num <= step ? "text-[#1A3AFF]" : "text-muted-foreground"}`}>0{s.num}</div>
                  <div className={`text-[10px] font-['Orbitron'] uppercase tracking-widest ${s.num <= step ? "text-foreground" : "text-muted-foreground"}`}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Area */}
          <div className="max-w-5xl mx-auto border border-border/40 bg-muted/10 p-10 md:p-16 relative">
            <AnimatePresence mode="wait">
              {/* Step 1: Project Type */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <h3 className="text-2xl font-['Orbitron'] text-foreground mb-10">
                    Spécifiez la nature de votre infrastructure :
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                    {projectTypes.map((type) => (
                      <button
                        key={type}
                        onClick={() => updateFormData("projectType", type)}
                        className={`p-6 border transition-colors text-left group flex items-center justify-between ${formData.projectType === type
                          ? "border-[#1A3AFF] bg-[#1A3AFF]/5 text-foreground"
                          : "border-border/40 text-muted-foreground hover:border-foreground/30"
                          }`}
                      >
                        <span className="font-['Orbitron'] text-sm tracking-wider uppercase">{type}</span>
                        <div className={`w-4 h-4 border ${formData.projectType === type ? "border-[#1A3AFF] bg-[#1A3AFF]" : "border-border"}`} />
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => setStep(2)}
                    disabled={!formData.projectType}
                    className="w-full py-5 bg-foreground text-background font-['Orbitron'] text-sm tracking-widest uppercase hover:bg-muted-foreground transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    Étape Suivante
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              )}

              {/* Step 2: Business Goal */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <h3 className="text-2xl font-['Orbitron'] text-foreground mb-10">
                    Quel est l'objectif principal de ce déploiement ?
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                    {businessGoals.map((goal) => (
                      <button
                        key={goal}
                        onClick={() => updateFormData("businessGoal", goal)}
                        className={`p-6 border transition-colors text-left group flex items-center justify-between ${formData.businessGoal === goal
                          ? "border-[#1A3AFF] bg-[#1A3AFF]/5 text-foreground"
                          : "border-border/40 text-muted-foreground hover:border-foreground/30"
                          }`}
                      >
                        <span className="font-['Orbitron'] text-sm tracking-wider uppercase">{goal}</span>
                        <div className={`w-4 h-4 border ${formData.businessGoal === goal ? "border-[#1A3AFF] bg-[#1A3AFF]" : "border-border"}`} />
                      </button>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <button
                      onClick={() => setStep(1)}
                      className="flex-1 py-5 border border-border text-foreground font-['Orbitron'] text-sm tracking-widest uppercase hover:bg-muted transition-colors flex items-center justify-center gap-3"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Précédent
                    </button>
                    <button
                      onClick={() => setStep(3)}
                      disabled={!formData.businessGoal}
                      className="flex-1 py-5 bg-foreground text-background font-['Orbitron'] text-sm tracking-widest uppercase hover:bg-muted-foreground transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                    >
                      Étape Suivante
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Budget & Timeline */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <h3 className="text-2xl font-['Orbitron'] text-foreground mb-10">
                    Ressources allouées et calendrier :
                  </h3>

                  <div className="mb-8">
                    <label className="block text-foreground text-sm font-['Orbitron'] uppercase tracking-widest mb-4">Enveloppe Budgétaire</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {budgetRanges.map((budget) => (
                        <button
                          key={budget}
                          onClick={() => updateFormData("budget", budget)}
                          className={`p-4 border transition-colors text-left ${formData.budget === budget
                            ? "border-[#1A3AFF] bg-[#1A3AFF]/5 text-foreground"
                            : "border-border/40 text-muted-foreground hover:border-foreground/30"
                            }`}
                        >
                          <span className="font-mono text-sm">{budget}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mb-10">
                    <label className="block text-foreground text-sm font-['Orbitron'] uppercase tracking-widest mb-4">Délai Souhaité</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {timelines.map((timeline) => (
                        <button
                          key={timeline}
                          onClick={() => updateFormData("timeline", timeline)}
                          className={`p-4 border transition-colors text-left ${formData.timeline === timeline
                            ? "border-[#1A3AFF] bg-[#1A3AFF]/5 text-foreground"
                            : "border-border/40 text-muted-foreground hover:border-foreground/30"
                            }`}
                        >
                          <span className="font-['Orbitron'] text-xs tracking-wider uppercase">{timeline}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mb-12">
                    <label className="block text-foreground text-sm font-['Orbitron'] uppercase tracking-widest mb-4">Description Détaillée</label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => updateFormData("description", e.target.value)}
                      className="w-full p-6 bg-background border border-border/40 text-foreground focus:border-[#1A3AFF] focus:ring-1 focus:ring-[#1A3AFF] outline-none transition-all resize-y min-h-[150px] font-sans"
                      placeholder="Décrivez les fonctionnalités clés, le contexte, et toute exigence technique particulière..."
                    />
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={() => setStep(2)}
                      className="flex-1 py-5 border border-border text-foreground font-['Orbitron'] text-sm tracking-widest uppercase hover:bg-muted transition-colors flex items-center justify-center gap-3"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Précédent
                    </button>
                    <button
                      onClick={() => setStep(4)}
                      disabled={!formData.budget || !formData.timeline}
                      className="flex-1 py-5 bg-foreground text-background font-['Orbitron'] text-sm tracking-widest uppercase hover:bg-muted-foreground transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                    >
                      Dernière Étape
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Contact Info */}
              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <h3 className="text-2xl font-['Orbitron'] text-foreground mb-10">
                    Coordonnées professionnelles :
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    <div className="md:col-span-2">
                      <label className="block text-foreground text-xs font-['Orbitron'] uppercase tracking-widest mb-3">Nom Complet *</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => updateFormData("name", e.target.value)}
                        className="w-full p-4 bg-background border border-border/40 text-foreground focus:border-[#1A3AFF] outline-none transition-colors"
                        placeholder="Ex: Alan Turing"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-foreground text-xs font-['Orbitron'] uppercase tracking-widest mb-3">Adresse Email *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateFormData("email", e.target.value)}
                        className="w-full p-4 bg-background border border-border/40 text-foreground focus:border-[#1A3AFF] outline-none transition-colors"
                        placeholder="alan@entreprise.com"
                      />
                    </div>

                    <div>
                      <label className="block text-foreground text-xs font-['Orbitron'] uppercase tracking-widest mb-3">Téléphone</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => updateFormData("phone", e.target.value)}
                        className="w-full p-4 bg-background border border-border/40 text-foreground focus:border-[#1A3AFF] outline-none transition-colors font-mono text-sm"
                        placeholder="+221 XX XXX XX XX"
                      />
                    </div>

                    <div>
                      <label className="block text-foreground text-xs font-['Orbitron'] uppercase tracking-widest mb-3">Société</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => updateFormData("company", e.target.value)}
                        className="w-full p-4 bg-background border border-border/40 text-foreground focus:border-[#1A3AFF] outline-none transition-colors"
                        placeholder="Nom de l'entreprise"
                      />
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={() => setStep(3)}
                      className="flex-1 py-5 border border-border text-foreground font-['Orbitron'] text-sm tracking-widest uppercase hover:bg-muted transition-colors flex items-center justify-center gap-3"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Précédent
                    </button>
                    <button
                      onClick={handleSubmit}
                      disabled={!formData.name || !formData.email}
                      className="flex-[2] py-5 bg-[#1A3AFF] text-white font-['Orbitron'] text-sm tracking-widest uppercase hover:bg-[#1A3AFF] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                    >
                      Transmettre le dossier
                      <CheckCircle2 className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
    // </PageTransition>
  );
}
