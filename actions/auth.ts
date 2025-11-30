"use server";
import prisma from "@/lib/prisma";
import { cookies } from "next/headers";
import bcrypt from "bcrypt";
import { revalidatePath } from "next/cache";
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
  const permittedKeys = ["emailId", "password"];

  try {
    for (const key of formData.keys()) {
      if (key.startsWith("$")) continue;
      if (!permittedKeys.includes(key)) {
        return { errors: [`Invalid key: ${key}`], success: false };
      }
    }
    const user = await prisma.user.findUnique({
      where: { email: email },
    });

    if (!user) {
      return { errors: ["Invalid login credentials"], success: false };
    }

    console.log(user);
    const isPasswordMatching = await bcrypt.compare(password, user.password);

    if (!isPasswordMatching) {
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
    console.log(err);
    return { errors: ["Something went wrong"], success: false };
  }

  cookieStore.set("notification_status", "success; Login successful", {
    path: "/",
    maxAge: 5,
  });
  revalidatePath("/");
  return { errors: [], success: true };
}

export async function signup(
  prevState: { errors: string[]; success: boolean },
  formData: FormData
): Promise<{ errors: string[]; success: boolean }> {
  console.log("Sign up");
  const errors: string[] = [];
  const permittedKeys = [
    "firstName",
    "lastName",
    "mobileNumber",
    "emailId",
    "password",
    "confirmPassword",
  ];
  const cookieStore = await cookies();
  try {
    for (const [key, value] of formData.entries()) {
      if (!permittedKeys.includes(key)) {
        if (key.startsWith("$")) continue;
        return { errors: [`Invalid field: ${key}`], success: false };
      }

      if (key.startsWith("$")) continue;
      if (!value || value.toString().length === 0) {
        const formattedData = key.charAt(0).toUpperCase() + key.slice(1);
        errors.push(`${formattedData} is required`);
      }
    }

    if (errors.length > 0) {
      return { errors, success: false };
    }

    const firstName = formData.get("firstName")?.toString() || "";
    const lastName = formData.get("lastName")?.toString() || "";
    const mobile = formData.get("mobileNumber")?.toString() || "";
    const email = formData.get("emailId")?.toString() || "";
    const password = formData.get("password")?.toString() || "";
    const confirm = formData.get("confirmPassword")?.toString() || "";
    console.log(formData);
    if (password !== confirm) {
      return { errors: ["Passwords do not match"], success: false };
    }
    const user = await prisma.user.findUnique({
      where: { email: email },
    });

    if (user) {
      return { errors: ["User already exists"], success: false };
    }

    if (mobile?.trim().length !== 10) {
      return { errors: ["Invalid mobile number"], success: false };
    }

    if (firstName?.length < 3 || lastName?.length < 3) {
      return {
        errors: [
          "First Name and Last Name should be atleast 3 characters long",
        ],
        success: false,
      };
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: {
        firstName: firstName,
        lastName: lastName,
        mobileNumber: mobile,
        email: email,
        password: hashedPassword,
      },
    });
    cookieStore.set("user", JSON.stringify(newUser), {
      httpOnly: true,
      path: "/",
      maxAge: 86400 * 7,
    });
  } catch (err) {
    console.log(err);
    return { errors: ["Something went wrong"], success: false };
  }

  cookieStore.set(
    "notification_status",
    "success; Your account has successfully been created",
    {
      path: "/",
      maxAge: 5,
    }
  );

  revalidatePath("/");
  //   Sign up
  // firstName Ashmit
  // lastName Pathak
  // mobile 9588955499
  // email ashmitrajpathak@123.com
  // password Ashmit@123
  // confirm Ashmit@123

  return { errors: [], success: true };
}
