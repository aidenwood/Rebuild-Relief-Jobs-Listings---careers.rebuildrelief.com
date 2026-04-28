import { NextRequest, NextResponse } from "next/server";
import { getSessionToken, getAuthCookieName } from "@/lib/auth";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { username, password } = body;

  const validUsername = process.env.ADMIN_USERNAME ?? "Staff_2026";
  const validPassword = process.env.ADMIN_PASSWORD ?? "RebuildRelief-Entry-2026";

  if (username === validUsername && password === validPassword) {
    const response = NextResponse.json({ success: true });
    response.cookies.set(getAuthCookieName(), getSessionToken(), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });
    return response;
  }

  return NextResponse.json(
    { success: false, error: "Invalid credentials" },
    { status: 401 }
  );
}

export async function DELETE() {
  const response = NextResponse.json({ success: true });
  response.cookies.delete(getAuthCookieName());
  return response;
}
