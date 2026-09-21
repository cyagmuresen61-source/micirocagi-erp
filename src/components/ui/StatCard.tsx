"use client";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  className?: string;
  accent?: "default" | "green" | "blue" | "amber" | "red";
}

export default function StatCard({ title, value, className, accent = "default" }: StatCardProps) {
  const accents = {
    default: "border-slate-200 bg-white",
    green: "border-emerald-200 bg-emerald-50",
    blue: "border-blue-200 bg-blue-50",
    amber: "border-amber-200 bg-amber-50",
    red: "border-red-200 bg-red-50",
  };
  return (
    <div className={cn("rounded-lg border px-4 py-3 shadow-sm", accents[accent], className)}>
      <p className="text-xs font-medium uppercase tracking-wide text-slate-500">{title}</p>
      <p className="mt-1 text-lg font-semibold text-slate-900">{value}</p>
    </div>
  );
}
