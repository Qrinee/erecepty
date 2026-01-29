import { categoryPills } from "@/app/data/categoryPills";
import {
  Pill,
  Brain,
  Scale,
  AlertCircle,
  Video,
  FileText,
  Droplet,
  Thermometer,
  ScanFace,
  HeartPulse,
  Plus,
} from "lucide-react";
import Link from "next/link";



export default function CategoryPills() {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {categoryPills.map(({ label, icon: Icon, url }) => (
        <Link key={label} href={'/conditions/' + url}>
        <button
          className="
            flex items-center gap-2
            px-4 py-2
            bg-white
            cursor-pointer
            border border-slate-200
            rounded-full
            text-sm text-slate-700
            hover:border-blue-500
            hover:text-blue-600
            transition
          "
        >
          <Icon className="w-4 h-4 stroke-[1.5]" />
          {label}
        </button>
        </Link>
      ))}

      <button
        className="
          flex items-center gap-2
          px-4 py-2
          border border-slate-200
          rounded-full
          text-sm text-slate-500
        "
      >
        <Plus className="w-4 h-4 stroke-[1.5]" />
        Więcej
      </button>
    </div>
  );
}
