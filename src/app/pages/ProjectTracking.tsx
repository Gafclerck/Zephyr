import { useState } from "react";
import { useParams, Link } from "react-router";
import { motion } from "motion/react";
import { initialProjects } from "../data/mockProjects.ts";
import { ProjectDetails } from "../components/ProjectTracking/ProjectDetails";
import { ArrowLeft, AlertCircle } from "lucide-react";

export function ProjectTracking() {
    const { projectId } = useParams();
    const [projects] = useState(initialProjects);

    const project = projects.find((p) => p.id === projectId || p.trackingToken === projectId);

    if (!project) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="max-w-md text-center space-y-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500/10 rounded-full">
                        <AlertCircle className="w-8 h-8 text-red-500" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-semibold text-foreground mb-2">
                            Projet non trouvé
                        </h1>
                        <p className="text-muted-foreground mb-6">
                            Le lien d'accès au suivi de projet est invalide ou a expiré.
                        </p>
                    </div>
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#1A3AFF] text-white rounded font-medium hover:bg-[#0D2FE0] transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Retour à l'accueil
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background selection:bg-[#1A3AFF] selection:text-white pb-24">
            {/* Header */}
            <section className="py-16 border-b border-border/40">
                <div className="container mx-auto px-6">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Retour
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="inline-block px-3 py-1 bg-[#1A3AFF]/10 border border-[#1A3AFF]/30 text-[#1A3AFF] text-xs font-['Orbitron'] tracking-widest uppercase rounded mb-4">
                            Suivi de Projet
                        </div>
                        <h1 className="text-4xl md:text-5xl font-medium text-foreground mb-3 tracking-tight">
                            {project.title}
                        </h1>
                        <p className="text-muted-foreground text-lg">
                            Suivez en temps réel l'avancement de votre projet. Nous vous tenons informé
                            à chaque étape.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Project Details */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <ProjectDetails project={project} isAdmin={false} />
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-16 border-t border-border/40 bg-muted/20">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="max-w-2xl mx-auto text-center space-y-6"
                    >
                        <div>
                            <h2 className="text-2xl font-semibold text-foreground mb-3">
                                Des questions sur votre projet ?
                            </h2>
                            <p className="text-muted-foreground">
                                N'hésitez pas à nous contacter pour discuter de l'avancement ou de toute
                                modification.
                            </p>
                        </div>
                        <div className="flex items-center justify-center gap-3 flex-wrap">
                            <a
                                href="mailto:contact@zephyr.com"
                                className="px-6 py-3 bg-[#1A3AFF] text-white rounded font-medium hover:bg-[#0D2FE0] transition-colors"
                            >
                                Nous contacter
                            </a>
                            <Link
                                to="/"
                                className="px-6 py-3 border border-border text-foreground rounded font-medium hover:bg-muted transition-colors"
                            >
                                Voir nos services
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
