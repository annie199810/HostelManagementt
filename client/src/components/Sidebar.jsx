
import React from "react";

const ITEMS = [
  { key: "dashboard", label: "Dashboard", short: "📊" },
  { key: "rooms", label: "Room Management", short: "🏠" },
  { key: "residents", label: "Residents", short: "👥" },
  { key: "maintenance", label: "Maintenance", short: "🔧" },
  { key: "billing", label: "Billing", short: "💰" },
  { key: "reports", label: "Reports", short: "📈" },
  { key: "users", label: "User Management", short: "⚙️" },
];

export default function Sidebar({ collapsed, active, onSelect }) {
  return (
    <aside
      className={
        "h-screen bg-[#0b2b63] text-white flex flex-col transition-all duration-300 " +
        (collapsed ? "w-20" : "w-64")
      }
    >
     
      <div className="flex items-center gap-3 h-16 px-4 border-b border-white/10">
        <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center text-xl">
          🏠
        </div>

        {!collapsed && (
          <div className="leading-tight">
            <div className="font-semibold text-sm tracking-wide">
              Hostel Manager
            </div>
            <div className="text-[11px] text-white/60">
              Management System
            </div>
          </div>
        )}
      </div>

   
      <nav className="mt-4 flex-1 space-y-1">
        {ITEMS.map((item) => {
          const isActive = item.key === active;

          return (
            <button
              key={item.key}
              onClick={() => {
                console.log("Sidebar pressed:", item.key);
                onSelect(item.key);
              }}
              className={
                "w-full flex items-center gap-3 px-4 py-2 text-sm rounded-lg transition-colors " +
                (isActive
                  ? "bg-white text-[#0b2b63] font-semibold"
                  : "hover:bg-white/10 text-white/90")
              }
            >
              <span
                className={
                  "min-w-[32px] h-8 rounded-full flex items-center justify-center text-xs font-medium " +
                  (isActive ? "bg-[#0b2b63]/10" : "bg-white/10")
                }
              >
                {item.short}
              </span>

              {!collapsed && <span>{item.label}</span>}
            </button>
          );
        })}
      </nav>

    
      <div className="p-4 text-white/40 text-xs border-t border-white/10">
        {!collapsed && (
          <div>
           
            <div>Hostel Management</div>
          </div>
        )}
      </div>
    </aside>
  );
}
