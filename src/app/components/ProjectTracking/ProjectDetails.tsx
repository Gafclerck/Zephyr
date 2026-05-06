import { motion } from "motion/react";
import { useState } from "react";
import { Project, calculateProjectProgress, getCurrentStage } from "../../data/mockProjects.ts";
import { ProgressBar } from "./ProgressBar";
import { Timeline } from "./Timeline";
import { StageItem } from "./StageItem";
import { ChevronDown } from "lucide-react";

interface ProjectDetailsProps {
  project: Project;
  onStageStatusChange?: (projectId: string, stageId: string, status: any) => void;
  onStageDescriptionChange?: (projectId: string, stageId: string, description: string) => void;
  isAdmin?: boolean;
}

/**
 * Detailed view of a single project with all stages
 */
export function ProjectDetails({
  project,
  onStageStatusChange,
  onStageDescriptionChange,
  isAdmin = false,
}: ProjectDetailsProps) {
  const [expanded, setExpanded] = useState(true);
  const progress = calculateProjectProgress(project.stages);
  const currentStage = getCurrentStage(project.stages);

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-muted text-muted-foreground border-border";
      case "in_progress":
        return "bg-[#1A3AFF]/10 text-[#1A3AFF] border-[#1A3AFF]/30";
      case "completed":
        return "bg-border text-muted-foreground border-border";
      default:
        return "bg-muted text-muted-foreground border-border";
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-1">
              {project.title}
            </h2>
            <p className="text-sm text-muted-foreground">{project.clientName}</p>
          </div>
          <div
            className={`px-3 py-1 rounded text-xs font-medium border ${getStatusBadgeColor(
              project.status
            )}`}
          >
            {getStatusLabel(project.status)}
          </div>
        </div>

        {/* Meta Info */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-muted/30 rounded border border-border/40">
          <div>
            <p className="text-xs text-muted-foreground mb-1">Créé le</p>
            <p className="font-medium text-sm">
              {new Date(project.createdDate).toLocaleDateString("fr-FR")}
            </p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">Démarrage</p>
            <p className="font-medium text-sm">
              {new Date(project.startDate).toLocaleDateString("fr-FR")}
            </p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">Fin estimée</p>
            <p className="font-medium text-sm">
              {new Date(project.estimatedEndDate).toLocaleDateString("fr-FR")}
            </p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">Étape actuelle</p>
            <p className="font-medium text-sm">
              {currentStage?.displayName || "Terminé"}
            </p>
          </div>
        </div>
      </div>

      {/* Progress Section */}
      <div className="space-y-4 p-5 bg-background border border-border/40 rounded">
        <h3 className="font-semibold text-foreground">Progression globale</h3>
        <ProgressBar value={progress} />
        <Timeline
          stages={project.stages}
          currentStageId={currentStage?.id}
          isCompact={true}
        />
      </div>

      {/* Stages Section */}
      <motion.div
        initial={false}
        animate={{ height: expanded ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="space-y-3">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2 w-full p-4 bg-background border border-border/40 rounded hover:bg-muted/10 transition-colors"
          >
            <h3 className="font-semibold text-foreground flex-1 text-left">
              Détail des étapes
            </h3>
            <motion.div
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-5 h-5 text-muted-foreground" />
            </motion.div>
          </button>

          {expanded && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-3"
            >
              {project.stages.map((stage, idx) => (
                <StageItem
                  key={stage.id}
                  stage={stage}
                  isActive={currentStage?.id === stage.id}
                  isAdmin={isAdmin}
                  index={idx}
                  onStatusChange={
                    isAdmin && onStageStatusChange
                      ? (stageId, status) =>
                        onStageStatusChange(project.id, stageId, status)
                      : undefined
                  }
                  onDescriptionChange={
                    isAdmin && onStageDescriptionChange
                      ? (stageId, desc) =>
                        onStageDescriptionChange(project.id, stageId, desc)
                      : undefined
                  }
                />
              ))}
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
