import { useState } from "react";
import { GlassCard } from "../../components/ui/GlassCard";
import { Badge } from "../../components/ui/Badge";
import { Button } from "../../components/ui/Button";
import { Search, Filter, X } from "lucide-react";

type LeadStatus = "new" | "contacted" | "qualified" | "closed";

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  businessGoal: string;
  budget: string;
  timeline: string;
  description: string;
  status: LeadStatus;
  createdAt: string;
  notes: string;
}

export function AdminLeads() {
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<LeadStatus | "all">("all");

  const leads: Lead[] = [
    {
      id: "1",
      name: "Sarah Johnson",
      email: "sarah@techcorp.com",
      phone: "+221 77 123 4567",
      company: "TechCorp",
      projectType: "Website Development",
      businessGoal: "Generate More Leads",
      budget: "$10,000 - $25,000",
      timeline: "2-3 months",
      description: "Need a modern website with lead generation features",
      status: "new",
      createdAt: "2026-05-05T10:30:00",
      notes: "",
    },
    {
      id: "2",
      name: "Michael Chen",
      email: "michael@startupx.com",
      phone: "+221 77 234 5678",
      company: "StartupX",
      projectType: "Mobile App",
      businessGoal: "Launch New Product",
      budget: "$25,000 - $50,000",
      timeline: "3-6 months",
      description: "MVP for a fitness tracking app",
      status: "contacted",
      createdAt: "2026-05-05T08:15:00",
      notes: "Scheduled call for May 8",
    },
    {
      id: "3",
      name: "Emma Williams",
      email: "emma@brandco.com",
      phone: "+221 77 345 6789",
      company: "BrandCo",
      projectType: "Branding & Design",
      businessGoal: "Build Brand Awareness",
      budget: "$5,000 - $10,000",
      timeline: "1-2 months",
      description: "Complete rebrand for sustainable products company",
      status: "qualified",
      createdAt: "2026-05-04T14:20:00",
      notes: "Budget approved, waiting for contract",
    },
  ];

  const statusColors: Record<LeadStatus, any> = {
    new: "primary",
    contacted: "cyan",
    qualified: "gray",
    closed: "gray",
  };

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === "all" || lead.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const updateLeadStatus = (leadId: string, newStatus: LeadStatus) => {
    console.log("Update lead status:", leadId, newStatus);
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-['Orbitron'] text-foreground mb-2">Leads Management</h1>
        <p className="text-muted-foreground">Track and manage your incoming leads</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Leads List */}
        <div className="lg:col-span-1">
          <GlassCard>
            {/* Search & Filter */}
            <div className="mb-4">
              <div className="relative mb-3">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-muted border border-[#00B4FF]/20 text-foreground focus:border-[#00B4FF] focus:outline-none"
                  placeholder="Search leads..."
                />
              </div>

              <div className="flex gap-2 flex-wrap">
                {(["all", "new", "contacted", "qualified", "closed"] as const).map((status) => (
                  <button
                    key={status}
                    onClick={() => setStatusFilter(status)}
                    className={`px-3 py-1 rounded-lg text-xs capitalize ${
                      statusFilter === status
                        ? "bg-gradient-to-r from-[#1A3AFF] to-[#00B4FF] text-foreground"
                        : "bg-[#0D1F4E] text-muted-foreground"
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>

            {/* Leads */}
            <div className="space-y-2 max-h-[600px] overflow-y-auto">
              {filteredLeads.map((lead) => (
                <button
                  key={lead.id}
                  onClick={() => setSelectedLead(lead)}
                  className={`w-full text-left p-4 rounded-lg border transition-all ${
                    selectedLead?.id === lead.id
                      ? "bg-[#00B4FF]/10 border-[#00B4FF]"
                      : "bg-muted/40 border-[#00B4FF]/10 hover:border-[#00B4FF]/30"
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <p className="text-foreground font-medium">{lead.name}</p>
                    <Badge variant={statusColors[lead.status]}>{lead.status}</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm">{lead.company}</p>
                  <p className="text-muted-foreground text-xs mt-1">{lead.projectType}</p>
                </button>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Lead Details */}
        <div className="lg:col-span-2">
          {selectedLead ? (
            <GlassCard>
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-['Orbitron'] text-foreground mb-1">{selectedLead.name}</h2>
                  <p className="text-muted-foreground">{selectedLead.company}</p>
                </div>
                <button onClick={() => setSelectedLead(null)} className="text-muted-foreground hover:text-foreground">
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Status Update */}
              <div className="mb-6">
                <label className="block text-foreground mb-2 text-sm">Status</label>
                <div className="flex gap-2">
                  {(["new", "contacted", "qualified", "closed"] as LeadStatus[]).map((status) => (
                    <button
                      key={status}
                      onClick={() => updateLeadStatus(selectedLead.id, status)}
                      className={`px-4 py-2 rounded-lg capitalize text-sm ${
                        selectedLead.status === status
                          ? "bg-gradient-to-r from-[#1A3AFF] to-[#00B4FF] text-foreground"
                          : "bg-[#0D1F4E] text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-muted-foreground text-sm mb-1">Email</p>
                  <p className="text-foreground">{selectedLead.email}</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm mb-1">Phone</p>
                  <p className="text-foreground">{selectedLead.phone}</p>
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-muted-foreground text-sm mb-1">Project Type</p>
                  <p className="text-foreground">{selectedLead.projectType}</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm mb-1">Business Goal</p>
                  <p className="text-foreground">{selectedLead.businessGoal}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-muted-foreground text-sm mb-1">Budget</p>
                    <p className="text-foreground">{selectedLead.budget}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm mb-1">Timeline</p>
                    <p className="text-foreground">{selectedLead.timeline}</p>
                  </div>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm mb-1">Description</p>
                  <p className="text-foreground">{selectedLead.description}</p>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-foreground mb-2 text-sm">Internal Notes</label>
                <textarea
                  defaultValue={selectedLead.notes}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-[#00B4FF]/20 text-foreground focus:border-[#00B4FF] focus:outline-none"
                  rows={4}
                  placeholder="Add notes about this lead..."
                />
                <Button variant="primary" className="mt-3">Save Notes</Button>
              </div>
            </GlassCard>
          ) : (
            <GlassCard className="h-full flex items-center justify-center text-center">
              <div>
                <Filter className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Select a lead to view details</p>
              </div>
            </GlassCard>
          )}
        </div>
      </div>
    </div>
  );
}
