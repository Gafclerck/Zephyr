/**
 * Mock Project Data
 * All data is stored in local state - no backend calls
 */

export interface Stage {
  id: string;
  name: "analysis" | "planning" | "design" | "development" | "testing" | "delivery";
  displayName: string;
  status: "pending" | "in_progress" | "completed";
  description: string;
  dueDate?: string;
}

export interface Project {
  id: string;
  title: string;
  clientName: string;
  status: "pending" | "in_progress" | "completed";
  createdDate: string;
  startDate: string;
  estimatedEndDate: string;
  stages: Stage[];
  clientEmail?: string;
  trackingToken?: string;
}

export const STAGE_ORDER = [
  "analysis",
  "planning",
  "design",
  "development",
  "testing",
  "delivery",
] as const;

export const STAGE_LABELS: Record<string, string> = {
  analysis: "Analyse & Cadrage",
  planning: "Planification",
  design: "Design & Prototypage",
  development: "Développement",
  testing: "Tests & QA",
  delivery: "Livraison",
};

export const STAGE_DESCRIPTIONS: Record<string, string> = {
  analysis:
    "Analyse approfondie des besoins, définition du scope et roadmap technique.",
  planning: "Planification détaillée des ressources, timeline et jalons.",
  design: "Création de maquettes, prototypes et design system.",
  development: "Implémentation du code et intégration des fonctionnalités.",
  testing:
    "Tests unitaires, intégration et UAT pour garantir la qualité.",
  delivery:
    "Déploiement en production et support post-lancement.",
};

// Initial mock projects
export const initialProjects: Project[] = [
  {
    id: "proj-001",
    title: "Aura Fintech - Platform SaaS",
    clientName: "Aura Fintech",
    status: "in_progress",
    createdDate: "2025-10-15",
    startDate: "2025-11-01",
    estimatedEndDate: "2026-06-15",
    clientEmail: "contact@aurafintech.com",
    trackingToken: "aura-fintech-2025",
    stages: [
      {
        id: "stage-001-1",
        name: "analysis",
        displayName: STAGE_LABELS.analysis,
        status: "completed",
        description: STAGE_DESCRIPTIONS.analysis,
        dueDate: "2025-11-15",
      },
      {
        id: "stage-001-2",
        name: "planning",
        displayName: STAGE_LABELS.planning,
        status: "completed",
        description: STAGE_DESCRIPTIONS.planning,
        dueDate: "2025-12-01",
      },
      {
        id: "stage-001-3",
        name: "design",
        displayName: STAGE_LABELS.design,
        status: "in_progress",
        description: STAGE_DESCRIPTIONS.design,
        dueDate: "2026-01-15",
      },
      {
        id: "stage-001-4",
        name: "development",
        displayName: STAGE_LABELS.development,
        status: "pending",
        description: STAGE_DESCRIPTIONS.development,
        dueDate: "2026-04-15",
      },
      {
        id: "stage-001-5",
        name: "testing",
        displayName: STAGE_LABELS.testing,
        status: "pending",
        description: STAGE_DESCRIPTIONS.testing,
        dueDate: "2026-05-15",
      },
      {
        id: "stage-001-6",
        name: "delivery",
        displayName: STAGE_LABELS.delivery,
        status: "pending",
        description: STAGE_DESCRIPTIONS.delivery,
        dueDate: "2026-06-15",
      },
    ],
  },
  {
    id: "proj-002",
    title: "Lumina Health - App Mobile",
    clientName: "Lumina Health",
    status: "in_progress",
    createdDate: "2025-08-20",
    startDate: "2025-09-01",
    estimatedEndDate: "2026-05-01",
    clientEmail: "contact@luminahealth.com",
    trackingToken: "lumina-health-2025",
    stages: [
      {
        id: "stage-002-1",
        name: "analysis",
        displayName: STAGE_LABELS.analysis,
        status: "completed",
        description: STAGE_DESCRIPTIONS.analysis,
        dueDate: "2025-09-15",
      },
      {
        id: "stage-002-2",
        name: "planning",
        displayName: STAGE_LABELS.planning,
        status: "in_progress",
        description: STAGE_DESCRIPTIONS.planning,
        dueDate: "2025-10-01",
      },
      {
        id: "stage-002-3",
        name: "design",
        displayName: STAGE_LABELS.design,
        status: "pending",
        description: STAGE_DESCRIPTIONS.design,
        dueDate: "2025-11-15",
      },
      {
        id: "stage-002-4",
        name: "development",
        displayName: STAGE_LABELS.development,
        status: "pending",
        description: STAGE_DESCRIPTIONS.development,
        dueDate: "2026-02-15",
      },
      {
        id: "stage-002-5",
        name: "testing",
        displayName: STAGE_LABELS.testing,
        status: "pending",
        description: STAGE_DESCRIPTIONS.testing,
        dueDate: "2026-04-01",
      },
      {
        id: "stage-002-6",
        name: "delivery",
        displayName: STAGE_LABELS.delivery,
        status: "pending",
        description: STAGE_DESCRIPTIONS.delivery,
        dueDate: "2026-05-01",
      },
    ],
  },
  {
    id: "proj-003",
    title: "Nova Retail - E-commerce Redesign",
    clientName: "Nova Retail",
    status: "completed",
    createdDate: "2025-05-10",
    startDate: "2025-06-01",
    estimatedEndDate: "2026-03-01",
    clientEmail: "contact@novaretail.com",
    trackingToken: "nova-retail-2025",
    stages: [
      {
        id: "stage-003-1",
        name: "analysis",
        displayName: STAGE_LABELS.analysis,
        status: "completed",
        description: STAGE_DESCRIPTIONS.analysis,
        dueDate: "2025-06-15",
      },
      {
        id: "stage-003-2",
        name: "planning",
        displayName: STAGE_LABELS.planning,
        status: "completed",
        description: STAGE_DESCRIPTIONS.planning,
        dueDate: "2025-07-01",
      },
      {
        id: "stage-003-3",
        name: "design",
        displayName: STAGE_LABELS.design,
        status: "completed",
        description: STAGE_DESCRIPTIONS.design,
        dueDate: "2025-09-01",
      },
      {
        id: "stage-003-4",
        name: "development",
        displayName: STAGE_LABELS.development,
        status: "completed",
        description: STAGE_DESCRIPTIONS.development,
        dueDate: "2025-12-15",
      },
      {
        id: "stage-003-5",
        name: "testing",
        displayName: STAGE_LABELS.testing,
        status: "completed",
        description: STAGE_DESCRIPTIONS.testing,
        dueDate: "2026-02-01",
      },
      {
        id: "stage-003-6",
        name: "delivery",
        displayName: STAGE_LABELS.delivery,
        status: "completed",
        description: STAGE_DESCRIPTIONS.delivery,
        dueDate: "2026-03-01",
      },
    ],
  },
];

/**
 * Calculate project progress percentage
 */
export function calculateProjectProgress(stages: Stage[]): number {
  if (!stages.length) return 0;
  const completed = stages.filter((s) => s.status === "completed").length;
  return Math.round((completed / stages.length) * 100);
}

/**
 * Get the current active stage
 */
export function getCurrentStage(stages: Stage[]): Stage | null {
  return stages.find((s) => s.status === "in_progress") || null;
}

/**
 * Get the next pending stage
 */
export function getNextPendingStage(stages: Stage[]): Stage | null {
  return stages.find((s) => s.status === "pending") || null;
}
