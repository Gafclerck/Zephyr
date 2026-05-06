import { motion } from "motion/react";
import { Project, calculateProjectProgress } from "../../data/mockProjects.ts";
import { ChevronRight, Folder } from "lucide-react";

interface ProjectListProps {
    projects: Project[];
    onSelectProject: (project: Project) => void;
    selectedProjectId?: string;
}

/**
 * List of all projects for admin view
 */
export function ProjectList({
    projects,
    onSelectProject,
    selectedProjectId,
}: ProjectListProps) {
    return (
        <div className="space-y-3">
            {projects.map((project, idx) => {
                const progress = calculateProjectProgress(project.stages);
                const isSelected = project.id === selectedProjectId;

                const getStatusColor = (status: string) => {
                    switch (status) {
                        case "pending":
                            return "text-slate-500";
                        case "in_progress":
                            return "text-[#1A3AFF]";
                        case "completed":
                            return "text-emerald-500";
                        default:
                            return "text-gray-500";
                    }
                };

                const getStatusLabel = (status: string) => {
                    switch (status) {
                        case "pending":
                            return "En attente";
                        case "in_progress":
                            return "En cours";
                        case "completed":
                            return "Complété";
                        default:
                            return status;
                    }
                };

                return (
                    <motion.button
                        key={project.id}
                        onClick={() => onSelectProject(project)}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className={`w-full p-4 rounded border transition-all text-left hover:border-[#1A3AFF]/50 ${isSelected
                            ? "bg-[#1A3AFF]/10 border-[#1A3AFF]/50"
                            : "bg-background border-border/40 hover:bg-muted/10"
                            }`}
                    >
                        <div className="flex items-start justify-between gap-3 mb-3">
                            <div className="flex items-start gap-3 flex-1 min-w-0">
                                <div className="mt-1 text-muted-foreground shrink-0">
                                    <Folder className="w-5 h-5" />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <h3 className="font-semibold text-foreground truncate">
                                        {project.title}
                                    </h3>
                                    <p className="text-xs text-muted-foreground">{project.clientName}</p>
                                </div>
                            </div>
                            <ChevronRight
                                className={`w-5 h-5 shrink-0 transition-transform ${isSelected ? "text-[#1A3AFF] translate-x-0.5" : "text-muted-foreground"
                                    }`}
                            />
                        </div>

                        {/* Progress & Status Bar */}
                        <div className="flex items-center gap-3">
                            <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progress}%` }}
                                    transition={{ duration: 0.6 }}
                                    className="h-full bg-gradient-to-r from-[#1A3AFF] to-[#0D2FE0]"
                                />
                            </div>
                            <span
                                className={`text-xs font-semibold whitespace-nowrap ${getStatusColor(
                                    project.status
                                )}`}
                            >
                                {progress}%
                            </span>
                            <span className="text-xs text-muted-foreground whitespace-nowrap">
                                {getStatusLabel(project.status)}
                            </span>
                        </div>
                    </motion.button>
                );
            })}
        </div>
    );
}
