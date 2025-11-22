
import React, { useState } from "react";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

import DashboardPage from "./pages/DashboardPage.jsx";
import RoomsPage from "./pages/RoomsPage.jsx";
import ResidentsPage from "./pages/ResidentsPage.jsx";
import MaintenancePage from "./pages/MaintenancePage.jsx";
import BillingPage from "./pages/BillingPage.jsx";
import ReportsPage from "./pages/ReportsPage.jsx";
import UserManagementPage from "./pages/UserManagementPage.jsx";

const PAGES = {
  dashboard: { title: "Dashboard", component: DashboardPage },
  rooms: { title: "Room Management", component: RoomsPage },
  residents: { title: "Residents", component: ResidentsPage },
  maintenance: { title: "Maintenance", component: MaintenancePage },
  billing: { title: "Billing & Payments", component: BillingPage },
  reports: { title: "Financial Reports", component: ReportsPage },
  users: { title: "User Management", component: UserManagementPage },
};

export default function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [activePage, setActivePage] = useState("dashboard");

  const pageConfig = PAGES[activePage] || PAGES.dashboard;
  const CurrentPage = pageConfig.component;

  console.log("Rendering page:", activePage);

  return (
    <div className="flex h-screen bg-gray-50 text-slate-800 overflow-hidden">
     
      <Sidebar
        collapsed={collapsed}
        active={activePage}
        onToggle={() => setCollapsed((v) => !v)}
        onSelect={(key) => {
          console.log("Sidebar clicked:", key);
          setActivePage(key);
        }}
      />

      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar
          title={pageConfig.title}
          onToggle={() => setCollapsed((v) => !v)}
        />

       
        <div className="flex-1 overflow-auto">
          <CurrentPage />
        </div>
      </div>
    </div>
  );
}
