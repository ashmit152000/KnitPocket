import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@/lib/fontawesome"; // the config file
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
          {children}
      </body>
    </html>
  );
}
