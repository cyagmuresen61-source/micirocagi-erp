"use client";

import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function LoginPage() {
  const { login, resetPassword } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");
  const [loading, setLoading] = useState(false);
  const [showReset, setShowReset] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setInfo("");
    setLoading(true);
    try {
      await login(email, password);
      router.push("/kantar-fisleri");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Giriş başarısız";
      if (msg.includes("user-not-found") || msg.includes("wrong-password") || msg.includes("invalid-credential")) {
        setError("E-posta veya şifre hatalı.");
      } else {
        setError("Giriş yapılamadı. Lütfen tekrar deneyin.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setInfo("");
    if (!email) {
      setError("Lütfen e-posta adresinizi girin.");
      return;
    }
    setLoading(true);
    try {
      await resetPassword(email);
      setInfo("Şifre sıfırlama bağlantısı e-posta adresinize gönderildi.");
      setShowReset(false);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "";
      if (msg.includes("user-not-found") || msg.includes("invalid-email")) {
        setError("Bu e-posta adresi sistemde kayıtlı değil veya geçersiz.");
      } else {
        setError("Şifre sıfırlama isteği gönderilemedi. Lütfen tekrar deneyin.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-8 shadow-lg">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-slate-900">Mıcır Ocağı ERP</h1>
          <p className="mt-1 text-sm text-slate-500">Yönetim Sistemine Giriş</p>
        </div>

        {!showReset ? (
          <form onSubmit={handleLogin} className="space-y-4">
            <Input
              id="email"
              label="E-posta"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ornek@firma.com"
              required
              autoComplete="email"
            />
            <Input
              id="password"
              label="Şifre"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              autoComplete="current-password"
            />
            {error && (
              <div className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">{error}</div>
            )}
            {info && (
              <div className="rounded-md bg-emerald-50 px-3 py-2 text-sm text-emerald-700">{info}</div>
            )}
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Giriş yapılıyor..." : "Giriş Yap"}
            </Button>
            <button
              type="button"
              onClick={() => {
                setShowReset(true);
                setError("");
                setInfo("");
              }}
              className="w-full text-center text-sm text-slate-600 hover:text-slate-900 underline"
            >
              Şifremi Unuttum
            </button>
          </form>
        ) : (
          <form onSubmit={handleReset} className="space-y-4">
            <p className="text-sm text-slate-600">
              Şifre sıfırlama bağlantısı göndermek için e-posta adresinizi girin.
            </p>
            <Input
              id="reset-email"
              label="E-posta"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ornek@firma.com"
              required
            />
            {error && (
              <div className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">{error}</div>
            )}
            {info && (
              <div className="rounded-md bg-emerald-50 px-3 py-2 text-sm text-emerald-700">{info}</div>
            )}
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Gönderiliyor..." : "Sıfırlama Bağlantısı Gönder"}
            </Button>
            <button
              type="button"
              onClick={() => {
                setShowReset(false);
                setError("");
                setInfo("");
              }}
              className="w-full text-center text-sm text-slate-600 hover:text-slate-900 underline"
            >
              Giriş ekranına dön
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
