import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type KnowledgeCardProps = {
  tag: string;
  tagColor: string;
  title: string;
  description: string;
  image: string;
  slug?: string;
};

export default function KnowledgeCard({
  tag,
  tagColor,
  title,
  description,
  image,
  slug,
}: KnowledgeCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-white border-2 border-slate-100 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-xl">
      <div className="relative h-48 w-full">
        <span
          className={`absolute left-4 top-4 z-10 rounded-full px-3 py-1 text-xs font-semibold text-white ${tagColor}`}
        >
          {tag}
        </span>

        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition group-hover:scale-105"
        />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <div className="p-6">
        <h3 className="mb-3 text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>

        <p className="mb-6 text-sm text-slate-600 leading-relaxed">
          {description}
        </p>

        {slug ? (
          <Link
            href={`/baza-wiedzy/${slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-all group-hover:gap-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-1"
            aria-label={`Czytaj więcej o ${title}`}
          >
            Czytaj więcej
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        ) : (
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-all group-hover:gap-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-1"
            aria-label={`Czytaj więcej o ${title}`}
          >
            Czytaj więcej
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  );
}
