function LeadCard({ lead, onUpdateStatus, formatLeadData }) {
  const priorityConfig = {
    hot: {
      emoji: "🔥",
      label: "HOT",
      gradient: "bg-gradient-to-r from-red-500 to-red-600",
    },
    warm: {
      emoji: "🟡",
      label: "WARM",
      gradient: "bg-gradient-to-r from-yellow-400 to-orange-500",
    },
    cold: {
      emoji: "❄️",
      label: "COLD",
      gradient: "bg-gradient-to-r from-blue-400 to-blue-500",
    },
  };

  const statusConfig = {
    new: "bg-blue-500",
    contacted: "bg-gray-500",
    closed: "bg-green-500",
  };

  const priority = priorityConfig[lead.priority] || priorityConfig.cold;
  const statusBg = statusConfig[lead.status] || statusConfig.new;

  return (
    <div
      className="
  bg-white
  rounded-xl
  border border-gray-300
  shadow-[0_10px_30px_rgba(0,0,0,0.15)]
  hover:shadow-[0_16px_40px_rgba(0,0,0,0.2)]
  overflow-hidden
  flex flex-col
  h-full
  transition-all
  duration-200
"
    >
      {/* HEADER */}
      <div className={`${priority.gradient} p-4`}>
        <div className="flex items-center justify-between gap-3">
          {/* LEFT: status + name */}
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <span
              className={`${statusBg} text-white text-xs font-bold px-3 py-1 rounded-full shrink-0`}
            >
              {lead.status.toUpperCase()}
            </span>
            <h3 className="text-lg md:text-xl font-bold text-white truncate">
              {lead.name}
            </h3>
          </div>

          {/* RIGHT: priority badge only */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30 shrink-0">
            <span className="text-lg">{priority.emoji}</span>
            <span className="text-xs font-bold text-white">
              {priority.label}
            </span>
          </div>
        </div>
      </div>

      {/* BODY */}
      <div className="flex-1">
        {/* CONTACT */}
        <div className="p-4 bg-gray-50 border-b md:border-b-0 md:border-r border-gray-200">
          <div className="space-y-3">
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase">
                Full Name
              </p>
              <p className="text-sm font-semibold text-black">{lead.name}</p>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase">Email</p>
              <a
                href={`mailto:${lead.email}`}
                className="text-sm font-semibold text-black hover:underline break-all"
              >
                {lead.email}
              </a>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase">Phone</p>
              <a
                href={`tel:${lead.phone}`}
                className="text-sm font-semibold text-black hover:underline"
              >
                {lead.phone}
              </a>
            </div>
          </div>
        </div>

        {/* DETAILS */}
        <div className="p-4">
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="col-span-2">
              <p className="text-xs font-bold text-gray-500 uppercase">Vehicle</p>
              <p className="font-medium">{formatLeadData(lead, "vehicle")}</p>
            </div>
            {lead.mileage && (
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase">Mileage</p>
                <p className="font-medium">{lead.mileage}</p>
              </div>
            )}
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase">Service</p>
              <p className="font-medium">{formatLeadData(lead, "tier")}</p>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase">Timeline</p>
              <p className="font-medium">{formatLeadData(lead, "urgency")}</p>
            </div>
            <div className="col-span-2">
              <p className="text-xs font-bold text-gray-500 uppercase">Symptoms</p>
              <p className="font-medium">{formatLeadData(lead, "symptoms")}</p>
            </div>
            {lead.notes && (
              <div className="col-span-2">
                <p className="text-xs font-bold text-gray-500 uppercase">Notes</p>
                <p className="font-medium">{lead.notes}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="p-4 border-t border-gray-200 space-y-2 mt-auto">
        <div className="animate-fadeIn">
          <p className="text-xs text-gray-500 mb-3">
            {new Date(lead.created_at).toLocaleString()}
          </p>

          <div
            key={lead.status}
            className="flex gap-2 transition-all duration-300 ease-out animate-fadeIn"
          >
            {lead.status === "new" && (
              <button
                onClick={() => onUpdateStatus(lead.id, "contacted")}
                className="flex-1 py-2.5 bg-gray-600 text-white font-bold rounded-lg hover:bg-gray-700"
              >
                Mark Contacted →
              </button>
            )}

            {lead.status === "contacted" && (
              <>
                <button
                  onClick={() => onUpdateStatus(lead.id, "new")}
                  className="flex-1 py-2.5 border-2 border-gray-300 text-gray-700 font-bold rounded-lg hover:border-gray-400 hover:bg-gray-50"
                >
                  ← New
                </button>

                <button
                  onClick={() => onUpdateStatus(lead.id, "closed")}
                  className="flex-1 py-2.5 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700"
                >
                  Mark Closed →
                </button>
              </>
            )}

            {lead.status === "closed" && (
              <button
                onClick={() => onUpdateStatus(lead.id, "contacted")}
                className="flex-1 py-2.5 border-2 border-gray-300 text-gray-700 font-bold rounded-lg hover:border-gray-400 hover:bg-gray-50"
              >
                ← Contacted
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeadCard;
