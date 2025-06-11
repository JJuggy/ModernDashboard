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
} from "lucide-react";
import Image from "next/image";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname();

  const navItems = [
    { name: "Profile", href: "/profile", icon: User },
    { name: "Billings", href: "/", icon: CreditCard },
    { name: "Invoices", href: "/invoices", icon: FileText },
    { name: "Settings", href: "/settings", icon: Settings },
    { name: "Help", href: "/help", icon: HelpCircle },
  ];

  // Get the current active item based on the pathname
  const activeItem = navItems.find(item => pathname === item.href) || navItems[0]; // Default to Profile if no match

  return (
    <div className="flex min-h-screen bg-[#f8f9fc]">
      <div className="fixed left-0 top-0 w-64 h-full bg-white border-[#ececee] p-6 flex flex-col z-10">
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
      <div className="flex-1 ml-64 p-8 overflow-auto">
        <div className="max-w-7xl mx-auto">{children}</div>
      </div>
    </div>
  );
}
