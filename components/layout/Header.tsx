"use client";

import { LogOut, Menu } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { roleTheme } from "@/lib/navigation";
import { cn } from "@/lib/utils";

interface HeaderProps {
  title: string;
  onOpenMobileNav?: () => void;
}

export function Header({ title, onOpenMobileNav }: HeaderProps) {
  const { user, logout } = useAuth();
  const theme = roleTheme[user.role];

  const initials = user.name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 dark:border-slate-800 dark:bg-slate-950 md:px-6">
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="rounded-md p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-900 md:hidden"
          onClick={onOpenMobileNav}
          aria-label="Abrir navegación"
        >
          <Menu className="h-5 w-5" />
        </button>
        <h1 className="text-lg font-medium text-slate-900 dark:text-slate-100">{title}</h1>
      </div>

      <div className="flex items-center gap-3">
        <span
          className={cn(
            "hidden rounded-full px-2.5 py-1 text-xs font-medium sm:inline-block",
            "bg-slate-100 dark:bg-slate-900",
            theme.accent
          )}
        >
          {theme.label}
        </span>

        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300">
            {initials}
          </div>
          <div className="hidden text-sm leading-tight sm:block">
            <p className="font-medium text-slate-900 dark:text-slate-100">{user.name}</p>
            <p className="text-slate-500 dark:text-slate-500">{user.email}</p>
          </div>
        </div>

        <button
          type="button"
          onClick={logout}
          className="rounded-md p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-900 dark:hover:text-slate-100"
          aria-label="Cerrar sesión"
        >
          <LogOut className="h-4 w-4" />
        </button>
      </div>
    </header>
  );
}
