import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import AdminHeader from "../components/admin/AdminHeader";
import LeadFilters from "../components/admin/LeadFilters";
import LeadCard from "../components/admin/LeadCard";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

function DashboardPage({ onLogout }) {
  const [leads, setLeads] = useState([]);
  const [allLeads, setAllLeads] = useState([]); // Store unfiltered leads
  const [leadsLoading, setLeadsLoading] = useState(false);

  // Basic filters
  const [statusFilter, setStatusFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");

  // Advanced filters
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [tierFilter, setTierFilter] = useState("all");

  const [timelineFilter, setTimelineFilter] = useState("all");
  const [scopeFilter, setScopeFilter] = useState("all");
  const [sortBy, setSortBy] = useState("newest"); // newest, oldest, status

  const fetchLeads = useCallback(async () => {
    setLeadsLoading(true);
    try {
      const params = new URLSearchParams();
      if (statusFilter !== "all") params.append("status", statusFilter);
      if (priorityFilter !== "all") params.append("priority", priorityFilter);

      const token = localStorage.getItem("doonga_token");
      const response = await fetch(
        `${API_URL}/admin/leads?${params.toString()}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();
      if (data.success) {
        setAllLeads(data.leads);
      }
    } catch (error) {
      console.error("Fetch leads error:", error);
    } finally {
      setLeadsLoading(false);
    }
  }, [statusFilter, priorityFilter]);

  // Client-side filtering for advanced filters
  useEffect(() => {
    let filtered = [...allLeads];

    // Tier filter
    if (tierFilter !== "all") {
      filtered = filtered.filter(
        (lead) => (lead.tier || "").toLowerCase() === tierFilter
      );
    }

    // Timeline filter
    if (timelineFilter !== "all") {
      filtered = filtered.filter((lead) => lead.urgency === timelineFilter);
    }

    // Project scope filter
    if (scopeFilter !== "all") {
      filtered = filtered.filter((lead) =>
        (lead.project_scope || "").includes(scopeFilter)
      );
    }

    // Sort
    if (sortBy === "newest") {
      filtered.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    } else if (sortBy === "oldest") {
      filtered.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
    } else if (sortBy === "status") {
      const statusOrder = { new: 1, contacted: 2, closed: 3 };
      filtered.sort((a, b) => statusOrder[a.status] - statusOrder[b.status]);
    }

    setLeads(filtered);
  }, [allLeads, tierFilter, timelineFilter, scopeFilter, sortBy]);

  const updateLeadStatus = async (leadId, newStatus) => {
    try {
      const token = localStorage.getItem("doonga_token");
      const response = await fetch(`${API_URL}/admin/leads/${leadId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: newStatus }),
      });

      const data = await response.json();
      if (data.success) {
        setLeads(
          leads.map((lead) =>
            lead.id === leadId ? { ...lead, status: newStatus } : lead
          )
        );
        setAllLeads(
          allLeads.map((lead) =>
            lead.id === leadId ? { ...lead, status: newStatus } : lead
          )
        );
      }
    } catch (error) {
      console.error("Update lead error:", error);
    }
  };

  const formatLeadData = (lead, field) => {
    if (!lead) return "—";

    if (field === "vehicle") {
      const year = lead.vehicle_year || "";
      const make = lead.vehicle_make || "";
      const model = lead.vehicle_model || "";
      const combined = `${year} ${make} ${model}`.trim();
      return combined || "Not provided";
    }

    if (field === "tier") {
      const map = {
        "oil-change": "Oil Change",
        "brake-repair": "Brake Repair",
        "tires-rotation": "Tires & Rotation",
        "battery": "Battery Replacement",
        "nc-inspection": "NC State Inspection",
        "alignment": "Wheel Alignment",
        "diagnostics": "Engine Diagnostics",
        "transmission": "Transmission Service",
        "radiator": "Radiator Flush",
        "ac": "AC Service",
        "tune-up": "Tune Up",
        "not-sure": "Not Sure — Diagnose It",
      };
      return map[lead.tier] || "Not Specified";
    }

    if (field === "urgency") {
      const map = {
        "asap": "ASAP (1–3 days)",
        "this-week": "This Week",
        "next-week": "Next Week",
        "flexible": "Flexible",
      };
      return map[lead.urgency] || "—";
    }

    if (field === "symptoms") {
      if (!lead.symptoms) return "None reported";
      try {
        const arr = JSON.parse(lead.symptoms);
        return Array.isArray(arr) && arr.length > 0 ? arr.join(", ") : "None reported";
      } catch {
        return lead.symptoms || "None reported";
      }
    }

    return lead[field] ?? "—";
  };

  const clearAllFilters = () => {
    setStatusFilter("all");
    setPriorityFilter("all");
    setTierFilter("all");
    setTimelineFilter("all");
    setScopeFilter("all");
  };

  useEffect(() => {
    fetchLeads();
  }, [fetchLeads]);

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader onLogout={onLogout} />
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-12">
        <LeadFilters
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          sortBy={sortBy}
          setSortBy={setSortBy}
          priorityFilter={priorityFilter}
          setPriorityFilter={setPriorityFilter}
          showAdvancedFilters={showAdvancedFilters}
          setShowAdvancedFilters={setShowAdvancedFilters}
          tierFilter={tierFilter}
          setTierFilter={setTierFilter}
          timelineFilter={timelineFilter}
          setTimelineFilter={setTimelineFilter}
          scopeFilter={scopeFilter}
          setScopeFilter={setScopeFilter}
          clearAllFilters={clearAllFilters}
          leadsCount={leads.length}
          leadsLoading={leadsLoading}
        />

        {leadsLoading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Loading leads...</p>
          </div>
        ) : leads.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-12 text-center">
            <p className="text-gray-600">No leads found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {leads.map((lead) => (
              <LeadCard
                key={lead.id}
                lead={lead}
                onUpdateStatus={updateLeadStatus}
                formatLeadData={formatLeadData}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default DashboardPage;
