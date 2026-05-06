import { motion } from "motion/react";
import { Stage } from "../../data/mockProjects.ts";
import { Check, Circle, Clock } from "lucide-react";

interface StageItemProps {
  stage: Stage;
  isActive: boolean;
  onStatusChange?: (stageId: string, newStatus: Stage["status"]) => void;
  onDescriptionChange?: (stageId: string, newDescription: string) => void;
  isAdmin?: boolean;
  index: number;
}

/**
 * Individual stage display component (used in timelines)
 */
export function StageItem({
  stage,
  isActive,
  onStatusChange,
  onDescriptionChange,
  isAdmin = false,
  index,
}: StageItemProps) {
  const isCompleted = stage.status === "completed";
  const isPending = stage.status === "pending";

  const getStatusIcon = () => {
    if (isCompleted) return <Check className="w-5 h-5" />;
    if (isActive) return <Clock className="w-5 h-5 animate-pulse" />;
    return <Circle className="w-5 h-5" />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={`p-4 rounded border transition-all ${isActive
          ? "bg-muted/40 border-[#1A3AFF]"
          : isCompleted
            ? "bg-muted/20 border-border/40"
            : "bg-background border-border/40"
        }`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3 flex-1">
          <div
            className={`p-1.5 rounded ${isCompleted
                ? "bg-border text-muted-foreground"
                : isActive
                  ? "bg-[#1A3AFF]/10 text-[#1A3AFF]"
                  : "bg-muted text-muted-foreground"
              }`}
          >
            {getStatusIcon()}
          </div>
          <div>
            <h4 className="font-semibold text-foreground">{stage.displayName}</h4>
            {stage.dueDate && (
              <p className="text-xs text-muted-foreground">
                Échéance: {new Date(stage.dueDate).toLocaleDateString("fr-FR")}
              </p>
            )}
          </div>
        </div>

        {/* Admin Status Dropdown */}
        {isAdmin && onStatusChange && (
          <select
            value={stage.status}
            onChange={(e) =>
              onStatusChange(stage.id, e.target.value as Stage["status"])
            }
            className="text-xs px-2 py-1 bg-background border border-border/40 rounded text-foreground hover:border-[#1A3AFF]/50 transition-colors"
          >
            <option value="pending">En attente</option>
            <option value="in_progress">En cours</option>
            <option value="completed">Complétée</option>
          </select>
        )}
      </div>

      {/* Description - editable for admin */}
      {isAdmin && onDescriptionChange ? (
        <textarea
          value={stage.description}
          onChange={(e) => onDescriptionChange(stage.id, e.target.value)}
          className="w-full text-sm p-2 bg-muted/20 border border-border/40 rounded text-foreground placeholder-muted-foreground focus:outline-none focus:border-[#1A3AFF]/50 resize-none"
          rows={2}
        />
      ) : (
        <p className="text-sm text-muted-foreground leading-relaxed">
          {stage.description}
        </p>
      )}
    </motion.div>
  );
}
