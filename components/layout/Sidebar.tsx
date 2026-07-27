"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navByRole, roleTheme, type Role } from "@/lib/navigation";

interface SidebarProps {
  role: Role;
}

export function Sidebar({ role }: SidebarProps) {
  const pathname = usePathname();
  const items = navByRole[role];
  const theme = roleTheme[role];

  return (
    <aside className="hidden md:flex md:w-60 md:flex-col md:border-r md:border-slate-200 md:bg-slate-50 dark:md:border-slate-800 dark:md:bg-slate-950">
      <div className="flex h-16 items-center gap-2 border-b border-slate-200 px-5 dark:border-slate-800">
        <div className={cn("h-2 w-2 rounded-full", theme.accentBg)} />
        <span className="font-semibold tracking-tight text-slate-900 dark:text-slate-100">
          Nexora <span className="text-slate-400 dark:text-slate-500">ERP</span>
        </span>
      </div>

      <nav className="flex-1 space-y-1 px-3 py-4">
        {items.map((item) => {
          const active = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                active
                  ? cn("bg-white shadow-sm dark:bg-slate-900", theme.accent)
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-slate-100"
              )}
            >
              <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-slate-200 px-5 py-4 text-xs text-slate-400 dark:border-slate-800 dark:text-slate-600">
        {roleTheme[role].label}
      </div>
    </aside>
  );
}
