import { getAuthUser } from "@/lib/auth";
import { redirect } from "next/navigation";
import AuthNavbar from "./components/AuthNavBar";
export const metadata = {
  title: "KnitPocket",
  description: "Your personal budgeting app",
};
export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getAuthUser();
  if (!user) {
    redirect("/sign-in");
  }
  return <div className="min-h-screen bg-darker">
        <AuthNavbar />
  
        {/* Push content below the navbar */}
        <main>{children}</main>
      </div>
}
