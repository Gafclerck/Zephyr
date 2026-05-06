import { motion } from "motion/react";

interface ProgressBarProps {
    value: number;
    className?: string;
}

/**
 * Visual progress bar showing project completion percentage
 */
export function ProgressBar({ value, className = "" }: ProgressBarProps) {
    const displayValue = Math.min(100, Math.max(0, value));

    return (
        <div className={`w-full ${className}`}>
            <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-muted-foreground">Progression</span>
                <span className="text-sm font-semibold text-foreground">{displayValue}%</span>
            </div>
            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${displayValue}%` }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full bg-gradient-to-r from-[#1A3AFF] to-[#0D2FE0] rounded-full"
                />
            </div>
        </div>
    );
}
