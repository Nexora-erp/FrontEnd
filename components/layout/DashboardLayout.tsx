"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { useAuth } from "@/hooks/useAuth";

interface DashboardLayoutProps {
  title: string;
  children: React.ReactNode;
}

// Uso: en app/(finanzas)/layout.tsx envuelves los children con
// <DashboardLayout title="Finanzas">{children}</DashboardLayout>
// El rol se toma de useAuth(), así que el mismo layout sirve para los 4 roles.
export function DashboardLayout({ title, children }: DashboardLayoutProps) {
  const { user } = useAuth();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-slate-100 dark:bg-slate-900">
      <Sidebar role={user.role} />

      {mobileNavOpen && (
        <div className="fixed inset-0 z-40 flex md:hidden">
          <div
            className="fixed inset-0 bg-black/30"
            onClick={() => setMobileNavOpen(false)}
            aria-hidden="true"
          />
          <div className="relative z-50 flex w-64 flex-col bg-slate-50 dark:bg-slate-950">
            <button
              type="button"
              className="absolute right-3 top-4 rounded-md p-1 text-slate-500"
              onClick={() => setMobileNavOpen(false)}
              aria-label="Cerrar navegación"
            >
              <X className="h-5 w-5" />
            </button>
            <Sidebar role={user.role} />
          </div>
        </div>
      )}

      <div className="flex flex-1 flex-col overflow-hidden">
        <Header title={title} onOpenMobileNav={() => setMobileNavOpen(true)} />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}
