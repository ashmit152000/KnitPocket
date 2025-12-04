"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faBars,
  faUser,
  faChevronDown,
  faCog,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { logout } from "@/actions/auth";

export default function AuthNavbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [avatarOpen, setAvatarOpen] = useState(false);

  return (
    <nav
      className="
        fixed top-0 left-0 right-0 z-50 
        bg-[#060A18]/70 backdrop-blur-xl
        border-b border-white/10
        shadow-[0_8px_30px_rgba(0,0,0,0.3)]
      "
    >
      <div className="max-w-7xl mx-auto h-16 px-4 flex items-center justify-between">
        {/* LOGO */}
        <Link
          href="/dashboard"
          className="flex items-center gap-2 group select-none"
        >
          <div className="h-3 w-3 rounded-full bg-[#00D9FF] shadow-[0_0_12px_#00D9FF] animate-pulse"></div>
          <span className="font-semibold text-white text-lg tracking-tight group-hover:text-[#00D9FF] transition-all">
            Knit<span className="text-[#FF6B9D]">Pocket</span>
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8">
          <NavItem
            href="/dashboard"
            label="Overview"
            active={pathname === "/dashboard"}
          />
          <NavItem
            href="/transactions"
            label="Transactions"
            active={pathname === "/transactions"}
          />
          <NavItem
            href="/analytics"
            label="Analytics"
            active={pathname === "/analytics"}
          />
          <NavItem href="/goals" label="Goals" active={pathname === "/goals"} />

          {/* NOTIFICATIONS */}
          <button
            className="
              relative h-10 w-10 rounded-xl bg-white/10 border border-white/10 
              flex items-center justify-center
              text-gray-300 hover:text-white
              hover:bg-white/20 transition-all
              shadow-lg hover:shadow-[#00D9FF]/30
              cursor-pointer
            "
          >
            <div className="absolute top-1 right-1 h-2 w-2 rounded-full bg-[#FF6B9D] animate-ping"></div>
            <FontAwesomeIcon icon={faBell} className="text-base" />
          </button>

          {/* AVATAR */}
          <div className="relative">
            <button
              onClick={() => setAvatarOpen(!avatarOpen)}
              className="
                flex items-center gap-2 
                bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl
                hover:bg-white/10 transition-all
                cursor-pointer
              "
            >
              <FontAwesomeIcon icon={faUser} className="text-gray-300" />
              <FontAwesomeIcon
                icon={faChevronDown}
                className="text-xs text-gray-400"
              />
            </button>

            {/* DROPDOWN */}
            {avatarOpen && (
              <div
                className="
                  absolute right-0 mt-3 w-48 bg-[#0A0F1F] p-3 rounded-xl 
                  border border-white/10 shadow-xl animate-fade-in
                "
              >
                <DropItem icon={faUser} text="Profile" />
                <DropItem icon={faCog} text="Settings" />
                <DropItem icon={faRightFromBracket} text="Logout" danger onClickFunction={logout}/>
              </div>
            )}
          </div>
        </div>

        {/* MOBILE MENU BTN */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-xl"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-[#060A18]/95 backdrop-blur-xl border-t border-white/10 px-4 pb-4 space-y-3">
          <MobileItem href="/dashboard" label="Overview" />
          <MobileItem href="/transactions" label="Transactions" />
          <MobileItem href="/analytics" label="Analytics" />
          <MobileItem href="/goals" label="Goals" />
        </div>
      )}
    </nav>
  );
}

/* NAV ITEM — DESKTOP */
function NavItem({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className="
        relative text-gray-300 hover:text-white transition-colors
        font-medium select-none cursor-pointer
      "
    >
      {label}
      {active && (
        <span
          className="
          absolute -bottom-1 left-0 right-0 mx-auto h-[2px] w-full
          bg-gradient-to-r from-[#00D9FF] via-[#C77DFF] to-[#FF6B9D]
          rounded-full shadow-[0_0_12px_rgba(0,217,255,0.5)]
          animate-pulse-slow
        "
        ></span>
      )}
    </Link>
  );
}

/* MOBILE NAV ITEM */
function MobileItem({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="block py-2 text-gray-300 text-sm hover:text-white transition"
    >
      {label}
    </Link>
  );
}

/* DROPDOWN ITEM */
function DropItem({
  icon,
  text,
  danger,
  onClickFunction,
}: {
  icon: any;
  text: string;
  danger?: boolean;
  onClickFunction?: () => void;
}) {
  return (
    <button
      className={`
        w-full flex items-center gap-3 px-2 py-2 rounded-lg text-sm cursor-pointer
        ${
          danger
            ? "text-red-400 hover:bg-red-400/10"
            : "text-gray-300 hover:bg-white/10"
        }
        transition
      `}
      onClick={onClickFunction}
    >
      <FontAwesomeIcon icon={icon} className="text-sm" />
      {text}
    </button>
  );
}
