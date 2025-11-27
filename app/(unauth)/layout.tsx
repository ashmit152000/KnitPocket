import UnauthNavBar from "./components/UnauthNavBar";
import "../globals.css";

export const metadata = {
  title: "CashFactor",
  description: "Your personal budgeting app",
};

export default function UnauthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
       <div className="min-h-screen bg-darker">
      <UnauthNavBar />

      {/* Push content below the navbar */}
      <main className="pt-10">
        {children}
      </main>
    </div>
    </>
  );
}
