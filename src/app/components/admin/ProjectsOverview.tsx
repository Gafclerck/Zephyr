import { motion } from "motion/react";
import { Link } from "react-router";
import { initialProjects, calculateProjectProgress } from "../../data/mockProjects.ts";
import { ProgressBar } from "../ProjectTracking/ProgressBar";
import { ArrowUpRight, Folder, CheckCircle, Clock } from "lucide-react";

/**
 * Project overview component for admin dashboard
 */
export function ProjectsOverview() {
    const projects = initialProjects;
    const totalProjects = projects.length;
    const inProgressProjects = projects.filter((p) => p.status === "in_progress").length;
    const completedProjects = projects.filter((p) => p.status === "completed").length;

    return (
        <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0 }}
                    className="p-5 bg-white dark:bg-[#0A1220] border border-border/40 rounded flex flex-col justify-between"
                >
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-medium text-muted-foreground">
                            Projets totaux
                        </span>
                        <Folder className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <div className="flex items-baseline gap-3">
                        <span className="text-2xl font-semibold text-foreground">
                            {totalProjects}
                        </span>
                        <span className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-500/10 px-1.5 py-0.5">
                            100%
                        </span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="p-5 bg-white dark:bg-[#0A1220] border border-border/40 rounded flex flex-col justify-between"
                >
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-medium text-muted-foreground">
                            En cours
                        </span>
                        <Clock className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <div className="flex items-baseline gap-3">
                        <span className="text-2xl font-semibold text-foreground">
                            {inProgressProjects}
                        </span>
                        <span className="text-xs font-medium text-amber-600 dark:text-amber-400 bg-amber-500/10 px-1.5 py-0.5">
                            {Math.round((inProgressProjects / totalProjects) * 100)}%
                        </span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="p-5 bg-white dark:bg-[#0A1220] border border-border/40 rounded flex flex-col justify-between"
                >
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-medium text-muted-foreground">
                            Complétés
                        </span>
                        <CheckCircle className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <div className="flex items-baseline gap-3">
                        <span className="text-2xl font-semibold text-foreground">
                            {completedProjects}
                        </span>
                        <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5">
                            {Math.round((completedProjects / totalProjects) * 100)}%
                        </span>
                    </div>
                </motion.div>
            </div>

            {/* Projects List */}
            <div className="bg-white dark:bg-[#0A1220] border border-border/40 rounded">
                <div className="p-5 border-b border-border/40 flex items-center justify-between">
                    <h2 className="text-base font-semibold text-foreground">Projets en cours</h2>
                    <Link
                        to="/admin/projects"
                        className="text-sm text-[#1A3AFF] hover:underline font-medium flex items-center gap-1"
                    >
                        Voir tout <ArrowUpRight className="w-3 h-3" />
                    </Link>
                </div>
                <div className="overflow-x-auto">
                    <div className="divide-y divide-border/40">
                        {projects.slice(0, 3).map((project, idx) => {
                            const progress = calculateProjectProgress(project.stages);
                            return (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="p-4 hover:bg-muted/10 transition-colors"
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <div>
                                            <p className="font-medium text-foreground text-sm">
                                                {project.title}
                                            </p>
                                            <p className="text-xs text-muted-foreground">
                                                {project.clientName}
                                            </p>
                                        </div>
                                        <span
                                            className={`text-xs font-medium px-2 py-1 rounded ${project.status === "in_progress"
                                                ? "bg-blue-500/10 text-blue-600 dark:text-blue-400"
                                                : project.status === "completed"
                                                    ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                                                    : "bg-slate-500/10 text-slate-600 dark:text-slate-400"
                                                }`}
                                        >
                                            {progress}%
                                        </span>
                                    </div>
                                    <ProgressBar value={progress} className="text-xs" />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
