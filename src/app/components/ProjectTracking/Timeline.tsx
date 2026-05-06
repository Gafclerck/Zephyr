import { motion } from "motion/react";
import { Stage } from "../../data/mockProjects.ts";
import { Check, Circle, Clock } from "lucide-react";

interface TimelineProps {
  stages: Stage[];
  currentStageId?: string;
  className?: string;
  isCompact?: boolean;
}

/**
 * Visual timeline showing all project stages
 */
export function Timeline({
  stages,
  currentStageId,
  className = "",
  isCompact = false,
}: TimelineProps) {
  return (
    <div className={`w-full ${className}`}>
      {/* Horizontal Timeline */}
      <div className="flex items-center gap-2 md:gap-1">
        {stages.map((stage, idx) => {
          const isCompleted = stage.status === "completed";
          const isCurrent = stage.id === currentStageId;
          const isCurrentOrNext =
            isCurrent ||
            (idx < stages.length - 1 &&
              stages.slice(0, idx + 1).every((s) => s.status === "completed"));

          return (
            <motion.div
              key={stage.id}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center flex-1 last:flex-1"
            >
              {/* Stage Node */}
              <div
                className={`relative flex flex-col items-center ${isCompact ? "mb-0" : "mb-6"
                  }`}
              >
                {/* Circle */}
                <motion.div
                  animate={isCurrent ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                  className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-semibold text-xs md:text-sm transition-all ${isCompleted
                    ? "bg-border text-muted-foreground"
                    : isCurrent
                      ? "bg-[#1A3AFF] text-white ring-2 ring-[#1A3AFF]/30"
                      : "bg-muted text-muted-foreground border border-border/40"
                    }`}
                >
                  {isCompleted ? (
                    <Check className="w-4 h-4 md:w-5 md:h-5" />
                  ) : isCurrent ? (
                    <Clock className="w-4 h-4 md:w-5 md:h-5" />
                  ) : (
                    idx + 1
                  )}
                </motion.div>

                {/* Label */}
                {!isCompact && (
                  <p className="text-[10px] md:text-xs font-medium text-muted-foreground mt-2 text-center whitespace-nowrap px-1 max-w-[60px]">
                    {stage.displayName}
                  </p>
                )}
              </div>

              {/* Connector Line */}
              {idx < stages.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: idx * 0.1 + 0.2 }}
                  className={`flex-1 h-1 mx-1 md:mx-2 rounded-full origin-left ${isCurrentOrNext
                      ? "bg-[#1A3AFF]"
                      : "bg-border/30"
                    }`}
                />
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
