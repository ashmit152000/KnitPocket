import { NextRequest, NextResponse } from "next/server";
import {
  verifyAccessToken,
  verifyRefreshToken,
  signAccessToken,
} from "@/lib/jwt";
import prisma from "@/lib/prisma";

export default async function proxy(req: NextRequest) {
  const accessToken = req.cookies.get("access_token")?.value;
  const refreshToken = req.cookies.get("refresh_token")?.value;
  const url = req.nextUrl;

  // Public routes that do NOT need authentication
  const publicPaths = ["/sign-in", "/sign-up", "/"];

  if (publicPaths.some((path) => url.pathname.startsWith(path))) {
    return NextResponse.next();
  }

  // Validate Access Token
  const accessPayload = accessToken ? verifyAccessToken(accessToken) : null;

  // Access token is valid → continue
  if (accessPayload) return NextResponse.next();

  // Access token expired → try refresh token
  if (!refreshToken) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  const refreshPayload = verifyRefreshToken(refreshToken);

  if (!refreshPayload) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  // Confirm refresh token exists in DB
  const user = await prisma.user.findUnique({
    where: { id: refreshPayload.userId },
  });

  if (!user || user.refreshToken !== refreshToken) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  // Generate new access token
  const newAccessToken = signAccessToken({ userId: user.id });

  const res = NextResponse.next();

  res.cookies.set("access_token", newAccessToken, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 60 * 15,
  });

  // Important: Do NOT redirect here — avoid rerender loops
  return res;
}

export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*", "/settings/:path*"],
};
