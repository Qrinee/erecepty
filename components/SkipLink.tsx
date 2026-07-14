"use client";

import { useState } from "react";
import Link from "next/link";


export default function SkipLink() {
  const [isVisible, setIsVisible] = useState(false);

  const handleFocus = () => setIsVisible(true);
  const handleBlur = () => setIsVisible(false);

  return (
    <Link
      href="#main-content"
      onFocus={handleFocus}
      onBlur={handleBlur}
      className={`
        fixed top-0 left-0 z-[9999]
        bg-blue-600 text-white
        px-4 py-2
        font-medium text-sm
        rounded-b-lg
        transition-transform duration-200
        focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
      `}
      style={{
        transform: isVisible ? "translateY(0)" : "translateY(-100%)",
      }}
    >
      Przejdź do głównej treści
    </Link>
  );
}
