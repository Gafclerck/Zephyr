import { useState } from "react";
import { SectionTitle } from "../components/ui/SectionTitle";
import { GlassCard } from "../components/ui/GlassCard";
import { Button } from "../components/ui/Button";
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
    "Website Development",
    "Mobile App",
    "Branding & Design",
    "Digital Marketing",
    "E-Commerce",
    "Custom Solution",
  ];

  const businessGoals = [
    "Generate More Leads",
    "Increase Sales",
    "Build Brand Awareness",
    "Improve User Experience",
    "Launch New Product",
    "Digital Transformation",
  ];

  const budgetRanges = [
    "< $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000+",
  ];

  const timelines = [
    "ASAP (< 2 weeks)",
    "1-2 months",
    "2-3 months",
    "3-6 months",
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
        <div className="bg-background min-h-screen flex items-center justify-center">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto text-center border border-[#1A3AFF]/20 bg-muted p-16"
            >
              <div className="w-20 h-20 bg-[#1A3AFF] flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-foreground" />
              </div>
              <h2 className="text-4xl font-['Orbitron'] text-foreground mb-4">
                Request Received
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Thank you for your interest. Our team will review your project details and get back
                to you within 24 hours.
              </p>
              <Button variant="primary" onClick={() => window.location.href = "/"}>
                Back to Home
              </Button>
            </motion.div>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="bg-background min-h-screen">
        <section className="py-32 border-b border-[#1A3AFF]/20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mb-16"
            >
              <h1 className="text-6xl md:text-7xl font-['Orbitron'] text-foreground mb-8 leading-tight">
                Contact
              </h1>
              <p className="text-2xl text-muted-foreground max-w-2xl">
                Get a free quote in minutes. Tell us about your project and we'll get back to you within 24 hours.
              </p>
            </motion.div>

            {/* Progress Bar */}
            <div className="max-w-5xl mx-auto mb-12">
              <div className="flex gap-px bg-[#1A3AFF]/20 border border-[#1A3AFF]/20">
                {[
                  { num: 1, label: "Project Type" },
                  { num: 2, label: "Business Goal" },
                  { num: 3, label: "Budget & Timeline" },
                  { num: 4, label: "Contact Info" },
                ].map((s) => (
                  <div
                    key={s.num}
                    className={`flex-1 p-6 text-center ${s.num <= step ? "bg-[#1A3AFF]" : "bg-background"
                      } transition-colors`}
                  >
                    <div className="text-2xl font-['Orbitron'] text-foreground mb-2">{s.num}</div>
                    <div className={`text-sm ${s.num <= step ? "text-foreground" : "text-muted-foreground"}`}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="max-w-5xl mx-auto border border-[#1A3AFF]/20 bg-muted p-12">
              <AnimatePresence mode="wait">
                {/* Step 1: Project Type */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                  >
                    <h3 className="text-2xl font-['Orbitron'] text-foreground mb-6">
                      What type of project do you need?
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      {projectTypes.map((type) => (
                        <button
                          key={type}
                          onClick={() => updateFormData("projectType", type)}
                          className={`p-4 rounded-lg border-2 transition-all text-left ${formData.projectType === type
                              ? "border-[#00B4FF] bg-[#00B4FF]/10 text-foreground"
                              : "border-[#0D1F4E] text-muted-foreground hover:border-[#00B4FF]/50"
                            }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                    <Button
                      variant="primary"
                      onClick={() => setStep(2)}
                      disabled={!formData.projectType}
                      className="w-full"
                    >
                      Continue
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </motion.div>
                )}

                {/* Step 2: Business Goal */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                  >
                    <h3 className="text-2xl font-['Orbitron'] text-foreground mb-6">
                      What's your primary business goal?
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      {businessGoals.map((goal) => (
                        <button
                          key={goal}
                          onClick={() => updateFormData("businessGoal", goal)}
                          className={`p-4 rounded-lg border-2 transition-all text-left ${formData.businessGoal === goal
                              ? "border-[#00B4FF] bg-[#00B4FF]/10 text-foreground"
                              : "border-[#0D1F4E] text-muted-foreground hover:border-[#00B4FF]/50"
                            }`}
                        >
                          {goal}
                        </button>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <Button variant="ghost" onClick={() => setStep(1)} className="flex-1">
                        <ArrowLeft className="mr-2 w-5 h-5" />
                        Back
                      </Button>
                      <Button
                        variant="primary"
                        onClick={() => setStep(3)}
                        disabled={!formData.businessGoal}
                        className="flex-1"
                      >
                        Continue
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
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
                    transition={{ duration: 0.25 }}
                  >
                    <h3 className="text-2xl font-['Orbitron'] text-foreground mb-6">
                      Budget & Timeline
                    </h3>

                    <div className="mb-6">
                      <label className="block text-foreground mb-3">Budget Range</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {budgetRanges.map((budget) => (
                          <button
                            key={budget}
                            onClick={() => updateFormData("budget", budget)}
                            className={`p-3 rounded-lg border-2 transition-all text-left ${formData.budget === budget
                              ? "border-[#00B4FF] bg-[#00B4FF]/10 text-foreground"
                              : "border-[#0D1F4E] text-muted-foreground hover:border-[#00B4FF]/50"
                              }`}
                          >
                            {budget}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="mb-8">
                      <label className="block text-foreground mb-3">Desired Timeline</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {timelines.map((timeline) => (
                          <button
                            key={timeline}
                            onClick={() => updateFormData("timeline", timeline)}
                            className={`p-3 rounded-lg border-2 transition-all text-left ${formData.timeline === timeline
                              ? "border-[#00B4FF] bg-[#00B4FF]/10 text-foreground"
                              : "border-[#0D1F4E] text-muted-foreground hover:border-[#00B4FF]/50"
                              }`}
                          >
                            {timeline}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="mb-8">
                      <label className="block text-foreground mb-3">Project Description</label>
                      <textarea
                        value={formData.description}
                        onChange={(e) => updateFormData("description", e.target.value)}
                        className="w-full px-4 py-3 rounded-lg bg-background border border-[#00B4FF]/20 text-foreground focus:border-[#00B4FF] focus:outline-none"
                        rows={4}
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <div className="flex gap-4">
                      <Button variant="ghost" onClick={() => setStep(2)} className="flex-1">
                        <ArrowLeft className="mr-2 w-5 h-5" />
                        Back
                      </Button>
                      <Button
                        variant="primary"
                        onClick={() => setStep(4)}
                        disabled={!formData.budget || !formData.timeline}
                        className="flex-1"
                      >
                        Continue
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
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
                    transition={{ duration: 0.25 }}
                  >
                    <h3 className="text-2xl font-['Orbitron'] text-foreground mb-6">
                      Your Contact Information
                    </h3>

                    <div className="space-y-4 mb-8">
                      <div>
                        <label className="block text-foreground mb-2">Full Name *</label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => updateFormData("name", e.target.value)}
                          className="w-full px-4 py-3 rounded-lg bg-background border border-[#00B4FF]/20 text-foreground focus:border-[#00B4FF] focus:outline-none"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label className="block text-foreground mb-2">Email *</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => updateFormData("email", e.target.value)}
                          className="w-full px-4 py-3 rounded-lg bg-background border border-[#00B4FF]/20 text-foreground focus:border-[#00B4FF] focus:outline-none"
                          placeholder="john@company.com"
                        />
                      </div>

                      <div>
                        <label className="block text-foreground mb-2">Phone</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => updateFormData("phone", e.target.value)}
                          className="w-full px-4 py-3 rounded-lg bg-background border border-[#00B4FF]/20 text-foreground focus:border-[#00B4FF] focus:outline-none"
                          placeholder="+221 XX XXX XX XX"
                        />
                      </div>

                      <div>
                        <label className="block text-foreground mb-2">Company</label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => updateFormData("company", e.target.value)}
                          className="w-full px-4 py-3 rounded-lg bg-background border border-[#00B4FF]/20 text-foreground focus:border-[#00B4FF] focus:outline-none"
                          placeholder="Company Name"
                        />
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button variant="ghost" onClick={() => setStep(3)} className="flex-1">
                        <ArrowLeft className="mr-2 w-5 h-5" />
                        Back
                      </Button>
                      <Button
                        variant="primary"
                        onClick={handleSubmit}
                        disabled={!formData.name || !formData.email}
                        className="flex-1"
                      >
                        Submit Request
                        <CheckCircle2 className="ml-2 w-5 h-5" />
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
