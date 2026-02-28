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
    <div className="flex flex-wrap justify-center gap-3" role="listbox" aria-label="Kategorie chorób i dolegliwości">
      {categoryPills.map(({ label, icon: Icon, url }) => (
        <Link 
          key={label} 
          href={'/conditions/' + url}
          role="option"
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
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
          "
        >
          <Icon className="w-4 h-4 stroke-[1.5]" aria-hidden="true" />
          {label}
        </Link>
      ))}

      <button
        className="
          flex items-center gap-2
          px-4 py-2
          border border-slate-200
          rounded-full
          text-sm text-slate-500
          hover:border-blue-500
          hover:text-blue-600
          transition
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        "
        aria-label="Zobacz więcej kategorii"
      >
        <Plus className="w-4 h-4 stroke-[1.5]" aria-hidden="true" />
        Więcej
      </button>
    </div>
  );
}
