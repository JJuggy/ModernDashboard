"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import {
  User,
  CreditCard,
  FileText,
  Settings,
  HelpCircle,
  LogOut,
  Menu,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Profile", href: "/profile", icon: User },
    { name: "Billings", href: "/", icon: CreditCard },
    { name: "Invoices", href: "/invoices", icon: FileText },
    { name: "Settings", href: "/settings", icon: Settings },
    { name: "Help", href: "/help", icon: HelpCircle },
  ];

  // Get the current active item based on the pathname
  const activeItem =
    navItems.find((item) => pathname === item.href) || navItems[0]; // Default to Profile if no match

  return (
    <div className=" min-h-screen  bg-[#f8f9fc]">
      {/* Mobile menu button */}
      <div className="fixed top-4 right-4  z-50 md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-lg hover:bg-[#f9f9fa]"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Desktop sidebar */}
      <div className="fixed left-0 top-0 w-64 h-full bg-white border-[#ececee] p-6 flex flex-col z-10 md:block hidden">
        <div className="mb-10 mt-8 ml-8">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Logo" width={32} height={32} />
            <span className="font-bold text-xl text-[#551FFF]">Nucleus</span>
          </Link>
        </div>
        <nav className="space-y-1 flex-1 overflow-y-auto">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center rounded-full gap-3 px-4 py-6 pl-6 text-sm font-medium",
                activeItem.href === item.href
                  ? "bg-[#f3f0ff] text-[#7549ff]"
                  : "text-[#D0D2DA] hover:bg-[#f9f9fa]"
              )}
            >
              <item.icon size={20} />
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="pt-6 mt-6 border-t border-[#ececee]">
          <Link
            href="/logout"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-[#92959e] hover:bg-[#f9f9fa]"
          >
            <LogOut size={20} />
            Log out
          </Link>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-200 z-40 md:hidden",
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <div
        className={cn(
          "fixed inset-y-0 left-0 w-full bg-white border-r border-[#ececee] transform transition-transform duration-200 md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-6 h-full flex flex-col">
          <div className="mb-10 mt-8">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="Logo" width={32} height={32} />
              <span className="font-bold text-xl text-[#551FFF]">Nucleus</span>
            </Link>
          </div>
          <nav className="space-y-1 flex-1 overflow-y-auto">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center rounded-full gap-3 px-4 py-6 pl-6 text-sm font-medium",
                  activeItem.href === item.href
                    ? "bg-[#f3f0ff] text-[#7549ff]"
                    : "text-[#D0D2DA] hover:bg-[#f9f9fa]"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <item.icon size={20} />
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="pt-6 mt-6">
            <Link
              href="/logout"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-[#92959e] hover:bg-[#f9f9fa]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <LogOut size={20} />
              Log out
            </Link>
          </div>
        </div>
      </div>

      <div className={`flex-1w-full   p-8 overflow-auto md:ml-64 md:w-auto`}>
        <div className="max-w-7xl mx-auto w-full">{children}</div>
      </div>
    </div>
  );
}
