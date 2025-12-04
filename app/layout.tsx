import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@/lib/fontawesome"; // the config file
import { cookies } from "next/headers";
import Notification from "@/components/Notification";
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
    const loginStatus = cookieStore.get("notification_status");
  
    const [status, message] = loginStatus?.value?.split(";") || [];
    console.log(status, message);
  return (
    <html lang="en">
      <body>
        {loginStatus && (
          <Notification
            type={status as "success" | "error"}
            message={message}
          />
        )}
        {children}
      </body>
    </html>
  );
}
