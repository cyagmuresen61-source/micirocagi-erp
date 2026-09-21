import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDateTR(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date;
  if (isNaN(d.getTime())) return "";
  const gun = String(d.getDate()).padStart(2, "0");
  const ay = String(d.getMonth() + 1).padStart(2, "0");
  const yil = d.getFullYear();
  return `${gun}.${ay}.${yil}`;
}

export function parseDateTR(str: string): Date | null {
  if (!str) return null;
  const parts = str.split(".");
  if (parts.length !== 3) return null;
  const [g, a, y] = parts.map(Number);
  const d = new Date(y, a - 1, g);
  return isNaN(d.getTime()) ? null : d;
}

export function bugunTR(): string {
  return formatDateTR(new Date());
}

export function formatTL(value: number): string {
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value || 0);
}

export function formatNumber(value: number, decimals = 2): string {
  return new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value || 0);
}

export function hesaplaKDV(tutar: number, kdvOrani = 20) {
  const kdvSiz = tutar;
  const kdv = (tutar * kdvOrani) / 100;
  const kdvLi = tutar + kdv;
  return { kdvSiz, kdv, kdvLi };
}

export async function exportToExcel(
  data: Record<string, unknown>[],
  filename: string,
  sheetName = "Veriler"
) {
  const XLSX = await import("xlsx");
  const ws = XLSX.utils.json_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, sheetName);
  XLSX.writeFile(wb, `${filename}.xlsx`);
}

export function isDateInRange(dateStr: string, start?: string, end?: string): boolean {
  const d = parseDateTR(dateStr);
  if (!d) return false;
  if (start) {
    const s = parseDateTR(start);
    if (s && d < s) return false;
  }
  if (end) {
    const e = parseDateTR(end);
    if (e && d > e) return false;
  }
  return true;
}
