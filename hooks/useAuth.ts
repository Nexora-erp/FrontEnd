import { useMemo } from "react";
import type { Role } from "@/lib/navigation";

export interface AuthUser {
  name: string;
  email: string;
  role: Role;
}

// (guardado en cookie httpOnly) vía un contexto de auth o un endpoint /me.
export function useAuth() {
  const user: AuthUser = useMemo(
    () => ({
      name: "Admin",
      email: "admin@nexora.com",
      role: "FINANZAS",
    }),
    []
  );

  function logout() {
    // TODO: llamar a POST /api/auth/logout y redirigir a /login
  }

  return { user, logout };
}