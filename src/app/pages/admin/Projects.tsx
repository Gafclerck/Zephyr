import { useState } from "react";
import { motion } from "motion/react";
import { initialProjects, Stage } from "../../data/mockProjects.ts";
import { ProjectList } from "../../components/ProjectTracking/ProjectList";
import { ProjectDetails } from "../../components/ProjectTracking/ProjectDetails";
import { Plus } from "lucide-react";

export function AdminProjects() {
    const [projects, setProjects] = useState(initialProjects);
    const [selectedProjectId, setSelectedProjectId] = useState(initialProjects[0]?.id);

    const selectedProject = projects.find((p) => p.id === selectedProjectId);

    const handleStageStatusChange = (
        projectId: string,
        stageId: string,
        newStatus: Stage["status"]
    ) => {
        setProjects((prevProjects) =>
            prevProjects.map((project) => {
                if (project.id !== projectId) return project;

                // Rule: Only one stage can be "in_progress"
                if (newStatus === "in_progress") {
                    return {
                        ...project,
                        stages: project.stages.map((stage) => ({
                            ...stage,
                            status:
                                stage.id === stageId ? "in_progress" : stage.status === "in_progress" ? "completed" : stage.status,
                        })),
                    };
                }

                // Update the specific stage
                return {
                    ...project,
                    stages: project.stages.map((stage) =>
                        stage.id === stageId ? { ...stage, status: newStatus } : stage
                    ),
                };
            })
        );
    };

    const handleStageDescriptionChange = (
        projectId: string,
        stageId: string,
        newDescription: string
    ) => {
        setProjects((prevProjects) =>
            prevProjects.map((project) => {
                if (project.id !== projectId) return project;

                return {
                    ...project,
                    stages: project.stages.map((stage) =>
                        stage.id === stageId
                            ? { ...stage, description: newDescription }
                            : stage
                    ),
                };
            })
        );
    };

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-semibold text-foreground mb-2">
                        Gestion des Projets
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        Suivi d'avancement des projets clients
                    </p>
                </div>
                <button className="px-4 py-2 bg-[#1A3AFF] text-white text-sm font-medium rounded hover:bg-[#0D2FE0] transition-colors flex items-center gap-2">
                    <Plus className="w-4 h-4" />
                    Nouveau projet
                </button>
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Projects List */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="lg:col-span-1 space-y-4"
                >
                    <h2 className="text-lg font-semibold text-foreground">
                        Projets ({projects.length})
                    </h2>
                    <ProjectList
                        projects={projects}
                        selectedProjectId={selectedProjectId}
                        onSelectProject={(project) => setSelectedProjectId(project.id)}
                    />
                </motion.div>

                {/* Project Details */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="lg:col-span-2 p-6 bg-background border border-border/40 rounded"
                >
                    {selectedProject ? (
                        <ProjectDetails
                            project={selectedProject}
                            isAdmin={true}
                            onStageStatusChange={handleStageStatusChange}
                            onStageDescriptionChange={handleStageDescriptionChange}
                        />
                    ) : (
                        <div className="flex items-center justify-center h-64 text-muted-foreground">
                            Sélectionnez un projet pour voir les détails
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
}
