"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { X, User, LogOut } from "lucide-react";

const MENU = [
  { href: "/kantar-fisleri", label: "Kantar Fişleri" },
  { href: "/cariler", label: "Cariler" },
  { href: "/gelir-gider", label: "Gelir-Gider" },
  { href: "/kasa", label: "Kasa" },
  { href: "/yakit", label: "Yakıt" },
  { href: "/personel", label: "Personel" },
  { href: "/faturalar", label: "Faturalar" },
  { href: "/irsaliyeler", label: "İrsaliyeler" },
  { href: "/sevk-fisleri", label: "Sevk Fişleri" },
  { href: "/sanayi-giderleri", label: "Sanayi Giderleri" },
  { href: "/tesis-calisma", label: "Tesis Çalışma" },
  { href: "/firma-bilgileri", label: "Firma Bilgileri" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
      <div className="flex h-12 items-center justify-between px-4">
        <div className="flex items-center gap-1 overflow-x-auto">
          <Link
            href="/firma-bilgileri"
            className={cn(
              "whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-semibold text-slate-800 hover:bg-slate-100",
              pathname === "/firma-bilgileri" && "bg-slate-100"
            )}
          >
            Firma Bilgileri
          </Link>
          <span className="mx-1 h-5 w-px bg-slate-300" />
          {MENU.filter((m) => m.href !== "/firma-bilgileri").map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
                pathname.startsWith(item.href)
                  ? "bg-slate-800 text-white"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex shrink-0 items-center gap-2 pl-4">
          <div className="flex items-center gap-1.5 rounded-md bg-slate-50 px-2.5 py-1 text-sm text-slate-700">
            <User className="h-4 w-4" />
            <span className="max-w-[140px] truncate">{user?.email ?? "Kullanıcı"}</span>
          </div>
          <Button variant="outline" size="sm" onClick={() => router.push("/kantar-fisleri")}>
            <X className="h-4 w-4" />
            <span className="hidden sm:inline">Tüm Sekmeleri Kapat</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => logout().then(() => router.push("/login"))}
          >
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
