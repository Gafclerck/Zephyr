import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";

type FormStep = 1 | 2 | 3 | 4;

interface FormData {
  projectType: string; businessGoal: string; budget: string;
  timeline: string; description: string; name: string;
  email: string; phone: string; company: string;
}

export function Contact() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [step, setStep] = useState<FormStep>(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>(() => {
    const saved = localStorage.getItem("zephyr_contact_form");
    try {
      return saved ? JSON.parse(saved) : { projectType:"", businessGoal:"", budget:"", timeline:"", description:"", name:"", email:"", phone:"", company:"" };
    } catch {
      return { projectType:"", businessGoal:"", budget:"", timeline:"", description:"", name:"", email:"", phone:"", company:"" };
    }
  });

  useEffect(() => { localStorage.setItem("zephyr_contact_form", JSON.stringify(formData)); }, [formData]);

  const projectTypes  = [t("contact.pt1"),t("contact.pt2"),t("contact.pt3"),t("contact.pt4"),t("contact.pt5"),t("contact.pt6")];
  const businessGoals = [t("contact.bg1"),t("contact.bg2"),t("contact.bg3"),t("contact.bg4"),t("contact.bg5"),t("contact.bg6")];
  const budgetRanges  = [t("contact.budget1"),t("contact.budget2"),t("contact.budget3"),t("contact.budget4"),t("contact.budget5")];
  const timelines     = [t("contact.tl1"),t("contact.tl2"),t("contact.tl3"),t("contact.tl4"),t("contact.tl5")];

  const handleSubmit = () => { setSubmitted(true); localStorage.removeItem("zephyr_contact_form"); };
  const updateFormData = (field: keyof FormData, value: string) => setFormData(prev => ({ ...prev, [field]: value }));

  const isStepValid = (s: number) => {
    if (s === 1) return !!formData.projectType;
    if (s === 2) return !!formData.businessGoal;
    if (s === 3) return !!formData.budget && !!formData.timeline;
    if (s === 4) return !!formData.name && !!formData.email && formData.email.includes("@");
    return false;
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="bg-background min-h-screen flex items-center justify-center selection:bg-[#1A3AFF] selection:text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-50"><div className="absolute inset-0 bg-dots-themed" /></div>
          <div className="container mx-auto px-6 relative z-10">
            <motion.div initial={{ scale:0.95, opacity:0 }} animate={{ scale:1, opacity:1 }} transition={{ duration:0.5, ease:[0.16,1,0.3,1] }} className="max-w-2xl mx-auto text-center border border-border/40 bg-background/50 backdrop-blur-xl p-10 md:p-16 relative">
              <motion.div initial={{ top:"0%" }} animate={{ top:"100%" }} transition={{ duration:2, repeat:Infinity, ease:"linear" }} className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1A3AFF] to-transparent z-20 pointer-events-none" />
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#1A3AFF]" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#1A3AFF]" />
              <div className="w-24 h-24 bg-[#1A3AFF]/10 border border-[#1A3AFF] flex items-center justify-center mx-auto mb-10 relative">
                <motion.div animate={{ scale:[1,1.08,1] }} transition={{ duration:3, repeat:Infinity, ease:[0.45,0,0.55,1] }} className="absolute inset-0 bg-[#1A3AFF]/20" />
                <CheckCircle2 className="w-12 h-12 text-[#1A3AFF] relative z-10" />
              </div>
              <h2 className="text-4xl md:text-5xl font-['Orbitron'] text-foreground mb-6 tracking-tight">{t("contact.success_title")}</h2>
              <p className="text-muted-foreground text-lg mb-12 max-w-md mx-auto leading-relaxed">{t("contact.success_desc")}</p>
              <button onClick={() => navigate("/")} className="group flex items-center gap-4 mx-auto px-10 py-5 bg-[#1A3AFF] text-white font-['Orbitron'] text-xs tracking-[0.3em] uppercase hover:bg-[#0D2FE0] transition-all">
                {t("contact.success_btn")} <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="bg-background min-h-screen selection:bg-[#1A3AFF] selection:text-white pb-24 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-grid-contact opacity-40" />
        {/* CSS-only blobs — no Framer repaint loop, eliminates scroll jank */}
        <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[#1A3AFF]/10 rounded-full blur-[120px] opacity-30 animate-[pulse_20s_ease-in-out_infinite]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-cyan-500/10 rounded-full blur-[100px] opacity-20 animate-[pulse_22s_ease-in-out_infinite]" style={{ animationDelay: "8s" }} />
      </div>

      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-12 relative z-10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity:0, y:10 }}
              animate={{ opacity:1, y:0 }}
              transition={{ duration:0.5, delay:0.05, ease:[0.16,1,0.3,1] }}
              className="flex items-center gap-4 mb-6"
            >
              <span className="w-12 h-[1px] bg-[#1A3AFF]" />
              <span className="text-[#1A3AFF] font-['Orbitron'] text-xs tracking-[0.3em] uppercase font-semibold">{t("contact.eyebrow")}</span>
            </motion.div>
            <motion.h1
              initial={{ opacity:0, y:16 }}
              animate={{ opacity:1, y:0 }}
              transition={{ duration:0.6, delay:0.12, ease:[0.16,1,0.3,1] }}
              className="text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tight text-foreground mb-6 font-['Orbitron']"
            >
              {t("contact.title")}
            </motion.h1>
            <motion.p
              initial={{ opacity:0, y:12 }}
              animate={{ opacity:1, y:0 }}
              transition={{ duration:0.5, delay:0.22, ease:[0.16,1,0.3,1] }}
              className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
            >
              {t("contact.subtitle")}
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-12 relative z-10">
        <div className="container mx-auto px-6 md:px-12">
          {/* Progress Bar */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="flex flex-col md:flex-row gap-px bg-border/20 border border-border/40 overflow-hidden">
              {[
                { num:1, labelKey:"contact.step1_label" },
                { num:2, labelKey:"contact.step2_label" },
                { num:3, labelKey:"contact.step3_label" },
                { num:4, labelKey:"contact.step4_label" },
              ].map(s => (
                <button key={s.num} disabled={s.num > 1 && !isStepValid(s.num - 1) && s.num > step} onClick={() => setStep(s.num as FormStep)}
                  className={`flex-1 p-6 md:p-8 text-left transition-all relative group ${step === s.num?"bg-[#1A3AFF]/10":s.num < step?"bg-muted/20":"bg-background"}`}>
                  <div className={`absolute bottom-0 left-0 h-1 transition-all duration-500 ${step === s.num?"w-full bg-[#1A3AFF]":s.num < step?"w-full bg-[#1A3AFF]/40":"w-0 bg-border"}`} />
                  <div className={`text-xl font-['Orbitron'] mb-2 flex items-center gap-3 ${step === s.num?"text-[#1A3AFF]":s.num < step?"text-[#1A3AFF]/60":"text-muted-foreground"}`}>
                    0{s.num} {s.num < step && <CheckCircle2 className="w-4 h-4" />}
                  </div>
                  <div className={`text-[10px] font-['Orbitron'] uppercase tracking-[0.2em] font-semibold ${step === s.num?"text-foreground":"text-muted-foreground"}`}>{t(s.labelKey)}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="max-w-5xl mx-auto border border-border/40 bg-background/60 p-8 md:p-16 relative">
            <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t border-l border-[#1A3AFF]" />
            <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b border-r border-[#1A3AFF]" />

            <AnimatePresence mode="wait">
              {/* Step 1 */}
              {step === 1 && (
                <motion.div key="step1" initial={{ opacity:0, x:12 }} animate={{ opacity:1, x:0 }} exit={{ opacity:0, x:-12 }} transition={{ duration:0.3, ease:[0.16,1,0.3,1] }}>
                  <h3 className="text-2xl font-['Orbitron'] text-foreground mb-10 flex items-center gap-4"><span className="w-8 h-px bg-border" />{t("contact.step1_title")}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                    {projectTypes.map(type => (
                      <button key={type} onClick={() => updateFormData("projectType", type)} className={`p-6 border transition-all text-left group flex items-center justify-between relative overflow-hidden ${formData.projectType===type?"border-[#1A3AFF] bg-[#1A3AFF]/5 text-foreground":"border-border/40 text-muted-foreground hover:border-[#1A3AFF]/30 hover:bg-[#1A3AFF]/2"}`}>
                        {formData.projectType===type && <motion.div layoutId="active-bg" className="absolute inset-0 bg-[#1A3AFF]/5" />}
                        <span className="font-['Orbitron'] text-sm tracking-wider uppercase relative z-10">{type}</span>
                        <div className={`w-5 h-5 border transition-all ${formData.projectType===type?"border-[#1A3AFF] bg-[#1A3AFF] scale-110":"border-border group-hover:border-[#1A3AFF]/50"}`}>
                          {formData.projectType===type && <CheckCircle2 className="w-full h-full text-white p-0.5" />}
                        </div>
                      </button>
                    ))}
                  </div>
                  <button onClick={() => setStep(2)} disabled={!formData.projectType} className="w-full py-6 bg-foreground text-background font-['Orbitron'] text-xs tracking-[0.3em] uppercase hover:bg-muted-foreground transition-all disabled:opacity-30 disabled:grayscale flex items-center justify-center gap-4 group">
                    {t("contact.next_phase")} <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </button>
                </motion.div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <motion.div key="step2" initial={{ opacity:0, x:12 }} animate={{ opacity:1, x:0 }} exit={{ opacity:0, x:-12 }} transition={{ duration:0.3, ease:[0.16,1,0.3,1] }}>
                  <h3 className="text-2xl font-['Orbitron'] text-foreground mb-10 flex items-center gap-4"><span className="w-8 h-px bg-border" />{t("contact.step2_title")}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                    {businessGoals.map(goal => (
                      <button key={goal} onClick={() => updateFormData("businessGoal", goal)} className={`p-6 border transition-all text-left group flex items-center justify-between relative overflow-hidden ${formData.businessGoal===goal?"border-[#1A3AFF] bg-[#1A3AFF]/5 text-foreground":"border-border/40 text-muted-foreground hover:border-[#1A3AFF]/30"}`}>
                        {formData.businessGoal===goal && <motion.div layoutId="active-bg2" className="absolute inset-0 bg-[#1A3AFF]/5" />}
                        <span className="font-['Orbitron'] text-sm tracking-wider uppercase relative z-10">{goal}</span>
                        <div className={`w-5 h-5 border transition-all ${formData.businessGoal===goal?"border-[#1A3AFF] bg-[#1A3AFF] scale-110":"border-border"}`}>
                          {formData.businessGoal===goal && <CheckCircle2 className="w-full h-full text-white p-0.5" />}
                        </div>
                      </button>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button onClick={() => setStep(1)} className="flex-1 py-5 border border-border/60 text-foreground font-['Orbitron'] text-xs tracking-[0.2em] uppercase hover:bg-muted/30 transition-colors flex items-center justify-center gap-3">
                      <ArrowLeft className="w-4 h-4" />{t("contact.step1_label")}
                    </button>
                    <button onClick={() => setStep(3)} disabled={!formData.businessGoal} className="flex-1 py-5 bg-foreground text-background font-['Orbitron'] text-xs tracking-[0.3em] uppercase hover:bg-muted-foreground transition-all disabled:opacity-30 flex items-center justify-center gap-3 group">
                      {t("contact.next_phase")} <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 3 */}
              {step === 3 && (
                <motion.div key="step3" initial={{ opacity:0, x:12 }} animate={{ opacity:1, x:0 }} exit={{ opacity:0, x:-12 }} transition={{ duration:0.3, ease:[0.16,1,0.3,1] }}>
                  <h3 className="text-2xl font-['Orbitron'] text-foreground mb-10 flex items-center gap-4"><span className="w-8 h-px bg-border" />{t("contact.step3_title")}</h3>
                  <div className="mb-10">
                    <label className="block text-foreground text-[10px] font-['Orbitron'] uppercase tracking-[0.3em] mb-6 opacity-60">{t("contact.budget_label")}</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {budgetRanges.map(budget => (
                        <button key={budget} onClick={() => updateFormData("budget", budget)} className={`p-5 border transition-all text-center relative overflow-hidden ${formData.budget===budget?"border-[#1A3AFF] bg-[#1A3AFF]/10 text-[#1A3AFF]":"border-border/40 text-muted-foreground hover:border-[#1A3AFF]/30"}`}>
                          <span className="font-mono text-sm relative z-10">{budget}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="mb-12">
                    <label className="block text-foreground text-[10px] font-['Orbitron'] uppercase tracking-[0.3em] mb-6 opacity-60">{t("contact.timeline_label")}</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {timelines.map(tl => (
                        <button key={tl} onClick={() => updateFormData("timeline", tl)} className={`p-5 border transition-all text-center relative overflow-hidden ${formData.timeline===tl?"border-[#1A3AFF] bg-[#1A3AFF]/10 text-[#1A3AFF]":"border-border/40 text-muted-foreground hover:border-[#1A3AFF]/30"}`}>
                          <span className="font-['Orbitron'] text-[10px] tracking-widest uppercase relative z-10">{tl}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="mb-14">
                    <label className="block text-foreground text-[10px] font-['Orbitron'] uppercase tracking-[0.3em] mb-6 opacity-60">{t("contact.precision_label")}</label>
                    <textarea value={formData.description} onChange={e => updateFormData("description", e.target.value)} className="w-full p-8 bg-background/50 border border-border/40 text-foreground focus:border-[#1A3AFF] outline-none transition-all resize-none min-h-[180px] font-sans leading-relaxed" placeholder={t("contact.precision_placeholder")} />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button onClick={() => setStep(2)} className="flex-1 py-5 border border-border/60 text-foreground font-['Orbitron'] text-xs tracking-[0.2em] uppercase hover:bg-muted/30 transition-colors flex items-center justify-center gap-3">
                      <ArrowLeft className="w-4 h-4" />{t("contact.step2_label")}
                    </button>
                    <button onClick={() => setStep(4)} disabled={!formData.budget || !formData.timeline} className="flex-1 py-5 bg-foreground text-background font-['Orbitron'] text-xs tracking-[0.3em] uppercase hover:bg-muted-foreground transition-all disabled:opacity-30 flex items-center justify-center gap-3 group">
                      {t("contact.last_step")} <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 4 */}
              {step === 4 && (
                <motion.div key="step4" initial={{ opacity:0, x:12 }} animate={{ opacity:1, x:0 }} exit={{ opacity:0, x:-12 }} transition={{ duration:0.3, ease:[0.16,1,0.3,1] }}>
                  <div className="grid lg:grid-cols-5 gap-12">
                    <div className="lg:col-span-3">
                      <h3 className="text-2xl font-['Orbitron'] text-foreground mb-10 flex items-center gap-4"><span className="w-8 h-px bg-border" />{t("contact.step4_title")}</h3>
                      <div className="space-y-8">
                        <div>
                          <label className="block text-foreground text-[10px] font-['Orbitron'] uppercase tracking-[0.3em] mb-4 opacity-60">{t("contact.name_label")}</label>
                          <input type="text" value={formData.name} onChange={e => updateFormData("name", e.target.value)} className="w-full p-5 bg-background/50 border border-border/40 text-foreground focus:border-[#1A3AFF] outline-none transition-all" placeholder={t("contact.name_placeholder")} />
                        </div>
                        <div>
                          <label className="block text-foreground text-[10px] font-['Orbitron'] uppercase tracking-[0.3em] mb-4 opacity-60">{t("contact.email_label")}</label>
                          <input type="email" value={formData.email} onChange={e => updateFormData("email", e.target.value)} className={`w-full p-5 bg-background/50 border outline-none transition-all ${formData.email && !formData.email.includes("@")?"border-destructive/50":"border-border/40 focus:border-[#1A3AFF]"}`} placeholder={t("contact.email_placeholder")} />
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-foreground text-[10px] font-['Orbitron'] uppercase tracking-[0.3em] mb-4 opacity-60">{t("contact.phone_label")}</label>
                            <input type="tel" value={formData.phone} onChange={e => updateFormData("phone", e.target.value)} className="w-full p-5 bg-background/50 border border-border/40 text-foreground focus:border-[#1A3AFF] outline-none transition-all font-mono text-sm" placeholder={t("contact.phone_placeholder")} />
                          </div>
                          <div>
                            <label className="block text-foreground text-[10px] font-['Orbitron'] uppercase tracking-[0.3em] mb-4 opacity-60">{t("contact.company_label")}</label>
                            <input type="text" value={formData.company} onChange={e => updateFormData("company", e.target.value)} className="w-full p-5 bg-background/50 border border-border/40 text-foreground focus:border-[#1A3AFF] outline-none transition-all" placeholder={t("contact.company_placeholder")} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="lg:col-span-2">
                      <div className="bg-muted/30 border border-border/40 p-8 h-full">
                        <h4 className="text-xs font-['Orbitron'] uppercase tracking-[0.3em] text-[#1A3AFF] mb-8 pb-4 border-b border-border/40">{t("contact.recap_title")}</h4>
                        <div className="space-y-6">
                          {[
                            { label: t("contact.recap_type"),     value: formData.projectType  },
                            { label: t("contact.recap_goal"),     value: formData.businessGoal },
                            { label: t("contact.recap_budget"),   value: formData.budget       },
                            { label: t("contact.recap_timeline"), value: formData.timeline     },
                          ].map(item => (
                            <div key={item.label} className="space-y-1">
                              <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{item.label}</p>
                              <p className="text-sm font-['Orbitron'] text-foreground">{item.value || t("contact.recap_unspecified")}</p>
                            </div>
                          ))}
                        </div>
                        <div className="mt-12 pt-6 border-t border-border/40">
                          <p className="text-[10px] text-muted-foreground leading-relaxed">{t("contact.recap_legal")}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 mt-12">
                    <button onClick={() => setStep(3)} className="flex-1 py-5 border border-border/60 text-foreground font-['Orbitron'] text-xs tracking-[0.2em] uppercase hover:bg-muted/30 transition-colors flex items-center justify-center gap-3">
                      <ArrowLeft className="w-4 h-4" />{t("contact.step3_label")}
                    </button>
                    <button onClick={handleSubmit} disabled={!formData.name || !formData.email || !formData.email.includes("@")} className="flex-[2] py-5 bg-[#1A3AFF] text-white font-['Orbitron'] text-xs tracking-[0.4em] uppercase hover:bg-[#0D2FE0] shadow-xl shadow-[#1A3AFF]/10 transition-all disabled:opacity-30 flex items-center justify-center gap-4 group">
                      {t("contact.submit")} <CheckCircle2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}
