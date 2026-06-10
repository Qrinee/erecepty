"use client";

import React, { useState, useEffect } from "react";
import { Info, Lock, ArrowRight } from "lucide-react";
import Link from "next/link";

export const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export const getServicePriceAndType = (serviceParam: string | null, fallbackType: string) => {
  if (!serviceParam) return { amount: 7900, type: fallbackType };
  const lower = serviceParam.toLowerCase();

  if (lower.includes("e-recepta")) return { amount: 5900, type: serviceParam };
  if (lower.includes("l4") || lower.includes("zwolnienie")) return { amount: 7900, type: serviceParam };
  if (lower.includes("kontynuacja")) return { amount: 5900, type: serviceParam };
  if (lower.includes("psychiatr")) return { amount: 24900, type: serviceParam };
  if (lower.includes("otyłoś")) return { amount: 9900, type: serviceParam };
  if (lower.includes("dzień po") || lower.includes("antykoncepcja")) return { amount: 4500, type: serviceParam };
  if (lower.includes("konsultacja")) return { amount: 7900, type: serviceParam };

  return { amount: 7900, type: serviceParam };
};

/* ─── Shared helpers ──────────────────────────────────────────── */
export const inputCls =
  "w-full bg-[#F5F7FA] border border-transparent hover:border-slate-200 focus:border-slate-300 focus:bg-white rounded-lg px-3 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none transition-all";
export const textareaCls =
  "w-full bg-[#F5F7FA] border border-transparent hover:border-slate-200 focus:border-slate-300 focus:bg-white rounded-lg px-3 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none transition-all resize-none";
export const inputErrorCls =
  "w-full bg-red-50/50 border border-red-300 focus:border-red-500 focus:bg-white rounded-lg px-3 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none transition-all";
export const textareaErrorCls =
  "w-full bg-red-50/50 border border-red-300 focus:border-red-500 focus:bg-white rounded-lg px-3 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none transition-all resize-none";
export const labelCls = "block text-[11px] font-bold text-slate-500 mb-1";

export function FormErrorAlert({ errors }: { errors: Record<string, string> }) {
  const errorList = Object.entries(errors).filter(([key]) => key !== "submit");
  const submitError = errors.submit;

  if (errorList.length === 0 && !submitError) return null;

  return (
    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex gap-3 text-red-800">
      <Info className="w-5.5 h-5.5 text-red-500 flex-shrink-0 mt-0.5" />
      <div>
        <h4 className="text-sm font-extrabold text-red-900">
          Formularz zawiera błędy walidacji:
        </h4>
        <ul className="list-disc list-inside text-xs mt-1.5 space-y-1 font-medium">
          {submitError && <li className="text-red-700 font-bold">{submitError}</li>}
          {errorList.map(([key, value]) => (
            <li key={key}>{value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function SectionHeader({ icon: Icon, title, color }: { icon: any; title: string; color: string }) {
  return (
    <div className={`flex items-center gap-2 mb-3 pb-2 border-b border-slate-100`}>
      <div className={`w-6 h-6 rounded-full ${color} flex items-center justify-center flex-shrink-0`}>
        <Icon className="w-3 h-3 text-white" />
      </div>
      <span className="text-[11px] font-extrabold text-slate-600 uppercase tracking-wider">{title}</span>
    </div>
  );
}

export function RadioGroup({ name, options, value, onChange }: { name: string; options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex gap-4 mt-1">
      {options.map((opt) => (
        <label key={opt} className="flex items-center gap-1.5 cursor-pointer text-sm text-slate-700">
          <input
            type="radio"
            name={name}
            value={opt}
            checked={value === opt}
            onChange={() => onChange(opt)}
            className="accent-current"
          />
          {opt}
        </label>
      ))}
    </div>
  );
}

export function ConsentCheckbox({ id, children, checked, onChange }: { id: string; children: React.ReactNode; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <label htmlFor={id} className="flex items-start gap-2 cursor-pointer group">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-0.5 w-3.5 h-3.5 flex-shrink-0 accent-current cursor-pointer"
      />
      <span className="text-xs text-slate-600 leading-snug group-hover:text-slate-800 transition-colors">{children}</span>
    </label>
  );
}

export function SubmitBtn({ label, color, loading }: { label: string; color: string; loading: boolean }) {
  return (
    <button
      type="submit"
      disabled={loading}
      className={`w-full ${color} text-white font-extrabold py-3.5 rounded-xl flex items-center justify-center gap-2 text-sm tracking-wide transition-all hover:opacity-90 active:scale-[0.99] disabled:opacity-60 cursor-pointer mt-6 shadow-lg`}
    >
      <Lock className="w-4 h-4" />
      <span>{loading ? "Przetwarzanie..." : label}</span>
      {!loading && <ArrowRight className="w-4 h-4" />}
    </button>
  );
}

export function FormNote() {
  return (
    <p className="text-center text-[11px] text-slate-400 mt-3 leading-snug">
      Po dokonaniu płatności formularz zostanie przekazany do lekarza.<br />
      W razie potrzeby lekarz skontaktuje się z Tobą telefonicznie lub online.
    </p>
  );
}

export function useAuthPrefill(setters: {
  setFullName?: (v: string) => void;
  setEmail?: (v: string) => void;
  setPhone?: (v: string) => void;
  setPesel?: (v: string) => void;
}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    fetch(`${API_URL}/api/auth/me`, { credentials: "include" })
      .then(res => res.json())
      .then(data => {
        if (data?.success && data?.data?.user) {
          setIsLoggedIn(true);
          const u = data.data.user;
          if (u.firstName && u.lastName && setters.setFullName) setters.setFullName(`${u.firstName} ${u.lastName}`);
          if (u.email && setters.setEmail) setters.setEmail(u.email);
          if (u.phone && setters.setPhone) setters.setPhone(u.phone);
          if (u.pesel && setters.setPesel) setters.setPesel(u.pesel);
        }
      })
      .catch(() => { });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return isLoggedIn;
}

export function DiscountSection({
  baseAmount,
  onDiscountApplied
}: {
  baseAmount: number,
  onDiscountApplied: (code: string, newAmount: number) => void
}) {
  const [code, setCode] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState<{ type: "percentage" | "amount", value: number } | null>(null);

  const handleApply = async () => {
    if (!code.trim()) return;
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch(`${API_URL}/api/discounts/validate/${code.trim()}`);
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setMessage("Kod rabatowy został zastosowany!");
        setAppliedDiscount({ type: data.data.type, value: data.data.value });

        let newAmount = baseAmount;
        if (data.data.type === "percentage") {
          const discountAmt = Math.round(baseAmount * (data.data.value / 100));
          newAmount = Math.max(0, baseAmount - discountAmt);
        } else if (data.data.type === "amount") {
          newAmount = Math.max(0, baseAmount - (data.data.value * 100));
        }
        onDiscountApplied(code.trim(), newAmount);
      } else {
        setStatus("error");
        setMessage(data.message || "Nieprawidłowy kod");
        setAppliedDiscount(null);
        onDiscountApplied("", baseAmount);
      }
    } catch (err) {
      setStatus("error");
      setMessage("Błąd podczas sprawdzania kodu");
      setAppliedDiscount(null);
      onDiscountApplied("", baseAmount);
    }
  };

  const handleClear = () => {
    setCode("");
    setStatus("idle");
    setMessage("");
    setAppliedDiscount(null);
    onDiscountApplied("", baseAmount);
  };

  let displayAmount = baseAmount;
  if (appliedDiscount) {
    if (appliedDiscount.type === "percentage") {
      const discountAmt = Math.round(baseAmount * (appliedDiscount.value / 100));
      displayAmount = Math.max(0, baseAmount - discountAmt);
    } else if (appliedDiscount.type === "amount") {
      displayAmount = Math.max(0, baseAmount - (appliedDiscount.value * 100));
    }
  }

  return (
    <div className="mt-5 pt-4 border-t border-slate-100">
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center mb-4">
        <div className="w-full sm:w-1/2">
          <label className={labelCls}>Masz kod rabatowy?</label>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Wpisz kod"
              className={inputCls}
              value={code}
              onChange={e => {
                setCode(e.target.value.toUpperCase());
                if (status !== "idle") {
                  setStatus("idle");
                  setMessage("");
                  setAppliedDiscount(null);
                  onDiscountApplied("", baseAmount);
                }
              }}
              disabled={status === "success"}
            />
            {status === "success" ? (
              <button type="button" onClick={handleClear} className="text-center bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg text-sm font-bold transition-colors">
                Usuń
              </button>
            ) : (
              <button type="button" onClick={handleApply} disabled={!code.trim() || status === "loading"} className="px-6 w-50 text-center bg-[#147A60] hover:bg-[#064743] text-white rounded-lg text-sm font-bold transition-colors disabled:opacity-50">
                {status === "loading" ? "..." : "Zastosuj"}
              </button>
            )}
          </div>
          {message && (
            <p className={`text-xs font-bold mt-1.5 ${status === "success" ? "text-green-600" : "text-red-500"}`}>
              {message}
            </p>
          )}
        </div>

        <div className="text-right">
          <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Do zapłaty</p>
          <div className="flex items-baseline gap-2 justify-end">
            {appliedDiscount && (
              <span className="text-sm text-slate-400 line-through">{(baseAmount / 100).toFixed(2)} zł</span>
            )}
            <span className="text-2xl font-black text-[#064743]">{(displayAmount / 100).toFixed(2)} zł</span>
          </div>
        </div>
      </div>
    </div>
  );
}
