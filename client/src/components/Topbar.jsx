
import React from "react";

export default function Topbar(props) {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 md:px-6">
     
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={function () {
            if (props.onToggle) props.onToggle();
          }}
          className="h-9 w-9 flex items-center justify-center rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100"
        >
          <span className="sr-only">Toggle sidebar</span>
          ☰
        </button>

        <div className="hidden sm:block">
          <div className="text-[11px] uppercase tracking-wide text-slate-400">
            Hostel Management System 
          </div>
          <div className="text-base md:text-lg font-semibold text-slate-800">
            {props.title}
          </div>
        </div>

        <div className="sm:hidden text-base font-semibold text-slate-800">
          {props.title}
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100 hover:bg-blue-100">
          ⚡ Quick Action
        </button>

        <div className="flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 bg-slate-50">
          <div className="h-8 w-8 rounded-full bg-indigo-500 text-white flex items-center justify-center text-sm font-semibold">
            A
          </div>
          <div className="hidden sm:block leading-tight">
            <div className="text-[11px] text-slate-500">Admin</div>
          </div>
        </div>
      </div>
    </header>
  );
}
