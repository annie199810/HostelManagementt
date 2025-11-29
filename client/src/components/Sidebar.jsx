
import React from "react";

const items = [
  { key: "dashboard", label: "Dashboard", icon: "🏠" },
  { key: "rooms", label: "Room Management", icon: "🛏️" },
  { key: "residents", label: "Residents", icon: "👥" },
  { key: "maintenance", label: "Maintenance", icon: "🛠️" },
  { key: "billing", label: "Billing", icon: "💳" },
  { key: "reports", label: "Reports", icon: "📊" },
  { key: "users", label: "User Management", icon: "⚙️" },
];

export default function Sidebar({ collapsed, active, onSelect }) {
  return (
    <aside className={`bg-slate-900 text-white w-64 ${collapsed ? "hidden md:block" : "block"} transition-all`}>
      <div className="p-4 flex items-center gap-3">
        <div className="h-10 w-10 bg-white/10 rounded-md flex items-center justify-center">🏫</div>
        <div className="font-semibold">Hostel Manager</div>
      </div>

      <nav className="mt-4">
        {items.map((it) => {
          const isActive = active === it.key;
          return (
            <button
              key={it.key}
              onClick={() => onSelect && onSelect(it.key)}
              className={`w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-white/5 transition-colors ${
                isActive ? "bg-white/10 border-l-4 border-blue-400" : ""
              }`}
            >
              <span style={{ width: 24 }}>{it.icon}</span>
              <span className="flex-1">{it.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
