import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Wallet,
  Megaphone,
  MessageSquareText,
  BarChart3,
  Settings,
  type LucideIcon,
} from "lucide-react";

export type Role = "ADMIN" | "FINANZAS" | "MARKETING" | "STOCK";

export interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

// Acento visual por rol: cambia el color del sidebar activo y el badge del header
export const roleTheme: Record<Role, { accent: string; accentBg: string; label: string }> = {
  ADMIN: { accent: "text-indigo-600 dark:text-indigo-400", accentBg: "bg-indigo-600", label: "Administrador" },
  FINANZAS: { accent: "text-amber-600 dark:text-amber-400", accentBg: "bg-amber-600", label: "Finanzas" },
  MARKETING: { accent: "text-pink-600 dark:text-pink-400", accentBg: "bg-pink-600", label: "Marketing" },
  STOCK: { accent: "text-teal-600 dark:text-teal-400", accentBg: "bg-teal-600", label: "Stock" },
};

// Ítems de navegación visibles para cada rol.
// ADMIN ve todo; los demás roles solo ven lo suyo + analítica + chatbot.
export const navByRole: Record<Role, NavItem[]> = {
  ADMIN: [
    { label: "Resumen", href: "/dashboard", icon: LayoutDashboard },
    { label: "Productos", href: "/productos", icon: Package },
    { label: "Ventas", href: "/ventas", icon: ShoppingCart },
    { label: "Finanzas", href: "/finanzas", icon: Wallet },
    { label: "Marketing", href: "/marketing", icon: Megaphone },
    { label: "Analítica", href: "/analitica", icon: BarChart3 },
    { label: "Chatbot", href: "/chatbot", icon: MessageSquareText },
    { label: "Configuración", href: "/configuracion", icon: Settings },
  ],
  FINANZAS: [
    { label: "Resumen", href: "/finanzas", icon: LayoutDashboard },
    { label: "Reportes", href: "/finanzas/reportes", icon: Wallet },
    { label: "Analítica", href: "/analitica", icon: BarChart3 },
    { label: "Chatbot", href: "/chatbot", icon: MessageSquareText },
  ],
  MARKETING: [
    { label: "Resumen", href: "/marketing", icon: LayoutDashboard },
    { label: "Campañas", href: "/marketing/campanas", icon: Megaphone },
    { label: "Analítica", href: "/analitica", icon: BarChart3 },
    { label: "Chatbot", href: "/chatbot", icon: MessageSquareText },
  ],
  STOCK: [
    { label: "Resumen", href: "/stock", icon: LayoutDashboard },
    { label: "Productos", href: "/productos", icon: Package },
    { label: "Ventas", href: "/ventas", icon: ShoppingCart },
    { label: "Chatbot", href: "/chatbot", icon: MessageSquareText },
  ],
};