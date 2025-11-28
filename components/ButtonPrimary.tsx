"use client";
import { JSX, ReactNode } from "react";
import { useRouter } from "next/navigation";
interface ButtonPrimaryProps {
  text: string;
  icon?: ReactNode;
  pathToNavigate?: string; // optional icon (left side)
}

export default function ButtonPrimary({
  text,
  icon,
  pathToNavigate,
}: ButtonPrimaryProps): JSX.Element {
  const router = useRouter();
  return (
    <button
      className="
        btn btn-glow btn-primary
        px-8 py-4 rounded-full
        text-white font-bold text-lg
        flex items-center justify-center gap-3
        transition-all duration-500 ease-out
        hover:scale-[1.05] active:scale-[0.96]
        relative z-10 select-none
      "
      onClick={() => {
        router.push(pathToNavigate || "/");
      }}
    >
      {icon && <span className="text-xl flex items-center">{icon}</span>}
      <span>{text}</span>
    </button>
  );
}
