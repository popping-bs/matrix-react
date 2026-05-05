import { Bell, ChevronLeft, ChevronRight, Menu, Search, UserCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";

interface DashboardNavbarProps {
  sidebarCollapsed: boolean;
  onToggleSidebar: () => void;
  onOpenMobileSidebar: () => void;
}

export function DashboardNavbar({
  sidebarCollapsed,
  onToggleSidebar,
  onOpenMobileSidebar,
}: DashboardNavbarProps) {
  return (
    <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b bg-white/90 px-4 backdrop-blur md:px-6">
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={onOpenMobileSidebar}
          aria-label="Open sidebar"
        >
          <Menu className="h-5 w-5" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="hidden lg:inline-flex"
          onClick={onToggleSidebar}
          aria-label="Toggle sidebar"
        >
          {sidebarCollapsed ? (
            <ChevronRight className="h-5 w-5" />
          ) : (
            <ChevronLeft className="h-5 w-5" />
          )}
        </Button>

        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-sm font-semibold text-white">
            M
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">MATRIX</p>
            <p className="text-xs text-slate-500">Semiconductor Process Analytics</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon" aria-label="Search">
          <Search className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" aria-label="Notifications">
          <Bell className="h-4 w-4" />
        </Button>
        <div className="flex items-center gap-2 rounded-full border bg-white px-2 py-1.5">
          <UserCircle2 className="h-5 w-5 text-slate-500" />
          <span className="hidden text-sm font-medium text-slate-700 sm:inline">Engineer</span>
        </div>
      </div>
    </header>
  );
}
