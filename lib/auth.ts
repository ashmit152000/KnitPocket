import { cookies } from "next/headers";
import { verifyAccessToken } from "@/lib/jwt";
import prisma from "@/lib/prisma";

export async function getAuthUser() {
  const cookieStore = await cookies();
  const accessToken = await cookieStore.get("access_token")?.value;
  if (!accessToken) return null;

  const payload = verifyAccessToken(accessToken);
  if (!payload) return null;

  const user = await prisma.user.findUnique({
    where: { id: payload.userId },
  });

  return user;
}
