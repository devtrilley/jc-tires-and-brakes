function LeadFilters({
  statusFilter,
  setStatusFilter,
  sortBy,
  setSortBy,
  priorityFilter,
  setPriorityFilter,
  showAdvancedFilters,
  setShowAdvancedFilters,
  tierFilter,
  setTierFilter,
  timelineFilter,
  setTimelineFilter,
  scopeFilter,
  setScopeFilter,
  clearAllFilters,
  leadsCount,
  leadsLoading,
}) {
  const hasActiveAdvancedFilters =
    tierFilter !== "all" || timelineFilter !== "all" || scopeFilter !== "all";

  return (
    <div className="space-y-6">
      {/* Basic Filters */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
        <div className="flex flex-col md:flex-row md:items-end gap-4">
          <div className="flex-1">
            <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
              Status
            </label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--fl-green-600)] font-medium"
            >
              <option value="all">All Statuses</option>
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="closed">Closed</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
              Priority
            </label>
            <select
              value={priorityFilter}
              onChange={(e) => setPriorityFilter(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--fl-green-600)] font-medium"
            >
              <option value="all">All Priorities</option>
              <option value="hot">🔥 Hot</option>
              <option value="warm">🟡 Warm</option>
              <option value="cold">❄️ Cold</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
              Sort By
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--fl-green-600)] font-medium"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="status">By Status</option>
            </select>
          </div>
          <div className="flex gap-2"></div>
          <div className="flex gap-2">
            <button
              onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
              className="px-3 py-3 bg-[var(--fl-teal)] text-white font-bold rounded-xl hover:bg-[var(--fl-green-600)] transition-all flex items-center gap-2 whitespace-nowrap"
            >
              {showAdvancedFilters ? "Hide" : "Show"} Advanced
              <svg
                className={`w-4 h-4 transition-transform ${
                  showAdvancedFilters ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {hasActiveAdvancedFilters && (
              <button
                onClick={clearAllFilters}
                className="px-6 py-3 border-2 border-[var(--fl-green-600)] text-[var(--fl-teal)] font-bold rounded-xl hover:bg-[var(--fl-green-600)] hover:text-white transition-all whitespace-nowrap"
              >
                Clear All
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Advanced Filters Panel */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          showAdvancedFilters ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
          <h3 className="text-sm font-bold text-gray-700 uppercase mb-6">
            Advanced Filters
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                Service Type
              </label>
              <select
                value={tierFilter}
                onChange={(e) => setTierFilter(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--jc-red-600)] font-medium"
              >
                <option value="all">All Services</option>
                <option value="oil-change">Oil Change</option>
                <option value="brake-repair">Brake Repair</option>
                <option value="tires-rotation">Tires & Rotation</option>
                <option value="battery">Battery Replacement</option>
                <option value="nc-inspection">NC State Inspection</option>
                <option value="alignment">Wheel Alignment</option>
                <option value="diagnostics">Engine Diagnostics</option>
                <option value="transmission">Transmission Service</option>
                <option value="radiator">Radiator Flush</option>
                <option value="ac">AC Service</option>
                <option value="tune-up">Tune Up</option>
                <option value="not-sure">Not Sure</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                Timeline
              </label>
              <select
                value={timelineFilter}
                onChange={(e) => setTimelineFilter(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--jc-red-600)] font-medium"
              >
                <option value="all">All Timelines</option>
                <option value="asap">ASAP</option>
                <option value="this-week">This Week</option>
                <option value="next-week">Next Week</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                Symptom
              </label>
              <select
                value={scopeFilter}
                onChange={(e) => setScopeFilter(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--jc-red-600)] font-medium"
              >
                <option value="all">All Symptoms</option>
                <option value="Check engine light is on">Check Engine Light</option>
                <option value="Squeaking / grinding brakes">Squeaking / Grinding Brakes</option>
                <option value="Won't start">Won't Start</option>
                <option value="Pulling to one side">Pulling to One Side</option>
                <option value="Vibration / shaking">Vibration / Shaking</option>
                <option value="Overheating">Overheating</option>
                <option value="AC not cold">AC Not Cold</option>
                <option value="Loud noise">Loud Noise</option>
                <option value="Leaking fluid">Leaking Fluid</option>
                <option value="Rough idle / stalling">Rough Idle / Stalling</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-sm font-bold text-gray-700">
          {leadsLoading
            ? "Loading..."
            : `Showing ${leadsCount} lead${leadsCount !== 1 ? "s" : ""}`}
        </p>
      </div>
    </div>
  );
}

export default LeadFilters;
