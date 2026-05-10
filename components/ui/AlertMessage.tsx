"use client";

import { AlertCircle, CheckCircle, Info, XCircle } from "lucide-react";

export type AlertType = "error" | "success" | "warning" | "info";

interface AlertMessageProps {
  type: AlertType;
  title?: string;
  message: string;
  className?: string;
}

const alertConfig = {
  error: {
    icon: XCircle,
    bgClass: "bg-red-50",
    borderClass: "border-red-200",
    iconClass: "text-red-500",
    titleClass: "text-red-800",
    messageClass: "text-red-700",
  },
  success: {
    icon: CheckCircle,
    bgClass: "bg-green-50",
    borderClass: "border-green-200",
    iconClass: "text-green-500",
    titleClass: "text-green-800",
    messageClass: "text-green-700",
  },
  warning: {
    icon: AlertCircle,
    bgClass: "bg-amber-50",
    borderClass: "border-amber-200",
    iconClass: "text-amber-500",
    titleClass: "text-amber-800",
    messageClass: "text-amber-700",
  },
  info: {
    icon: Info,
    bgClass: "bg-blue-50",
    borderClass: "border-blue-200",
    iconClass: "text-blue-500",
    titleClass: "text-blue-800",
    messageClass: "text-blue-700",
  },
};

export default function AlertMessage({ 
  type, 
  title, 
  message, 
  className = "" 
}: AlertMessageProps) {
  const config = alertConfig[type];
  const Icon = config.icon;

  return (
    <div 
      className={`flex gap-3 p-4 rounded-lg border ${config.bgClass} ${config.borderClass} ${className}`}
      role="alert"
      aria-live="polite"
    >
      <Icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${config.iconClass}`} />
      <div className="flex-1">
        {title && (
          <p className={`font-medium ${config.titleClass}`}>
            {title}
          </p>
        )}
        <p className={`text-sm ${title ? "mt-1" : ""} ${config.messageClass}`}>
          {message}
        </p>
      </div>
    </div>
  );
}
