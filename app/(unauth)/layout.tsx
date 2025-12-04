import UnauthNavBar from "./components/UnauthNavBar";
import "../globals.css";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export const metadata = {
  title: "KnitPocket",
  description: "Your personal budgeting app",
};

export default async function UnauthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const user = cookieStore.get("user");
  if (user) {
    redirect("/dashboard");
  }
  return (
    <div className="min-h-screen bg-darker">
      <UnauthNavBar />

      {/* Push content below the navbar */}
      <main>{children}</main>
    </div>
  );
}
