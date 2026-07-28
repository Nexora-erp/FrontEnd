import { DashboardLayout } from "@/components/layout/DashboardLayout";

export default function FinanzasLayout({ children }: { children: React.ReactNode }) {
  return <DashboardLayout title="Finanzas">{children}</DashboardLayout>;
}
