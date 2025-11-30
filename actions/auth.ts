"use server";
import prisma from "@/lib/prisma";
import { cookies } from "next/headers";

// export async function handleFormSubmit(
//   prevState: { errors: string[] },
//   formData: FormData
// ): Promise<{ errors: string[] }> {
//   for (const [key, value] of formData.entries()) {
//     console.log(key, value);
//   }

//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ errors: [] });
//     }, 3000);
//   });
// }

export async function signin(
  prevState: { errors: string[]; success: boolean },
  formData: FormData
): Promise<{ errors: string[]; success: boolean }> {
  console.log("Sign in");
  const errors: string[] = [];
  const email = formData.get("emailId")?.toString();
  const password = formData.get("password")?.toString();
  const cookieStore = await cookies();
  try {
    const user = await prisma.user.findUnique({
      where: { email: email },
    });

    if (!user) {
      return { errors: ["Invalid login credentials"], success: false };
    }

    console.log(user);

    if (user?.password !== password) {
      return { errors: ["Invalid login credentials"], success: false };
    }

    if (errors.length > 0) {
      return { errors, success: false };
    }

    cookieStore.set("user", JSON.stringify(user), {
      httpOnly: true,
      path: "/",
      maxAge: 86400 * 7,
    });
  } catch (err) {
    return { errors: ["Something went wrong"], success: false };
  }

  cookieStore.set("notification_status", "success; Login successful", {
    httpOnly: true,
    path: "/",
    maxAge: 5,
  });
  return { errors: [], success: true };
}

export async function signup(
  prevState: { errors: string[]; success: boolean },
  formData: FormData
): Promise<{ errors: string[]; success: boolean }> {
  console.log("Sign up");
  const errors: string[] = [];

  //   Sign up
  // firstName Ashmit
  // lastName Pathak
  // mobile 9588955499
  // email ashmitrajpathak@123.com
  // password Ashmit@123
  // confirm Ashmit@123
  for (const [key, value] of formData.entries()) {
    if (key.startsWith("$")) continue;
    if (!value || value.toString().length === 0) {
      const formattedData = key.charAt(0).toUpperCase() + key.slice(1);
      errors.push(`${formattedData} is required`);
    }
  }

  if (errors.length > 0) {
    return { errors, success: false };
  }

  const firstName = formData.get("firstName")?.toString();
  const lastName = formData.get("lastName")?.toString();
  const mobile = formData.get("mobile")?.toString();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const confirm = formData.get("confirm")?.toString();

  if (password !== confirm) {
    return { errors: ["Passwords do not match"], success: false };
  }
  const user = await prisma.user.findUnique({
    where: { email: email },
  });

  if (user) {
    return { errors: ["User already exists"], success: false };
  }

  if (mobile?.length !== 10) {
    return { errors: ["Invalid mobile number"], success: false };
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ errors: [], success: true });
    }, 3000);
  });
}
