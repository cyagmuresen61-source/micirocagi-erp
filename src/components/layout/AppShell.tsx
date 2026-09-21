"use client";

import { useAuth } from "@/contexts/AuthContext";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import Navbar from "./Navbar";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const pathname = usePathname();
  const router = useRouter();
  const isLogin = pathname === "/login";

  useEffect(() => {
    if (!loading && !user && !isLogin) router.replace("/login");
    if (!loading && user && isLogin) router.replace("/kantar-fisleri");
  }, [user, loading, isLogin, router]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-slate-300 border-t-slate-800" />
          <p className="mt-3 text-sm text-slate-600">Yükleniyor...</p>
        </div>
      </div>
    );
  }

  if (isLogin) return <>{children}</>;
  if (!user) return null;

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="mx-auto max-w-[1600px] px-4 py-4">{children}</main>
    </div>
  );
}
