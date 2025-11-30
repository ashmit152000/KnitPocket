import UnauthNavBar from "./components/UnauthNavBar";
import "../globals.css";
import { cookies } from "next/headers";
import Notification from "@/components/Notification";
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
  const loginStatus = cookieStore.get("notification_status");

  const [status, message] = loginStatus?.value?.split(";") || [];
  console.log(status, message);
  return (
    <>
      <div className="min-h-screen bg-darker">
        <UnauthNavBar />

        {/* Push content below the navbar */}
        <main>
          {loginStatus && (
            <Notification
              type={status as "success" | "error"}
              message={message}
            />
          )}
          {children}
        </main>
      </div>
    </>
  );
}
