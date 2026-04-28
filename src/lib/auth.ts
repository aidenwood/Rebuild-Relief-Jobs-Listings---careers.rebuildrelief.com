import { cookies } from "next/headers";

const AUTH_COOKIE = "rr_admin_session";
const SESSION_TOKEN = "rebuild-relief-staff-2026-authenticated";

export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  return cookieStore.get(AUTH_COOKIE)?.value === SESSION_TOKEN;
}

export function getSessionToken(): string {
  return SESSION_TOKEN;
}

export function getAuthCookieName(): string {
  return AUTH_COOKIE;
}
