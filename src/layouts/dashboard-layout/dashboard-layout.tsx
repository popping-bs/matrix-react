import { useState } from "react";
import { Outlet } from "react-router-dom";

import { cn } from "@/lib/utils";

import { DashboardNavbar } from "./dashboard-navbar";
import { DashboardSidebar } from "./dashboard-sidebar";

export function DashboardLayout() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100">
      <DashboardNavbar
        sidebarCollapsed={sidebarCollapsed}
        onToggleSidebar={() => setSidebarCollapsed((previous) => !previous)}
        onOpenMobileSidebar={() => setMobileSidebarOpen(true)}
      />

      <DashboardSidebar
        collapsed={sidebarCollapsed}
        mobileOpen={mobileSidebarOpen}
        onCloseMobile={() => setMobileSidebarOpen(false)}
      />

      <main
        className={cn(
          "min-h-[calc(100vh-4rem)] transition-[padding] duration-200",
          "pt-0 lg:pl-72",
          sidebarCollapsed && "lg:pl-20",
        )}
      >
        <div className="p-4 md:p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
