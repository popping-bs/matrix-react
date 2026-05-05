import { Home, LineChart } from "lucide-react";
import { NavLink } from "react-router-dom";

import { cn } from "@/lib/utils";

const navigationItems = [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "Analysis",
    href: "/analysis",
    icon: LineChart,
  },
];

interface DashboardSidebarProps {
  collapsed: boolean;
  mobileOpen: boolean;
  onCloseMobile: () => void;
}

export function DashboardSidebar({
  collapsed,
  mobileOpen,
  onCloseMobile,
}: DashboardSidebarProps) {
  return (
    <>
      {mobileOpen ? (
        <button
          type="button"
          aria-label="Close sidebar overlay"
          className="fixed inset-0 z-30 bg-slate-950/35 lg:hidden"
          onClick={onCloseMobile}
        />
      ) : null}

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 flex w-72 flex-col border-r bg-white/95 backdrop-blur transition-transform duration-200 lg:top-16 lg:translate-x-0",
          collapsed ? "lg:w-20" : "lg:w-72",
          mobileOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-full flex-col px-3 py-4">
          <div className="mb-4 px-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Navigation
          </div>

          <nav className="space-y-1">
            {navigationItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.href}
                  to={item.href}
                  onClick={onCloseMobile}
                  className={({ isActive }) =>
                    cn(
                      "group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-slate-900 text-white"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
                      collapsed && "lg:justify-center lg:px-0",
                    )
                  }
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span className={cn(collapsed && "lg:hidden")}>{item.label}</span>
                </NavLink>
              );
            })}
          </nav>

          <div className="mt-auto rounded-xl border border-dashed border-slate-200 bg-slate-50 p-3">
            <p className={cn("text-xs font-medium text-slate-700", collapsed && "lg:hidden")}>
              Fab Monitor
            </p>
            <p className={cn("mt-1 text-xs text-slate-500", collapsed && "lg:hidden")}>
              Yield and equipment trends at a glance.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
