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
    <article className="group flex flex-col sm:flex-row items-stretch rounded-[24px] bg-white border border-slate-100 shadow-sm p-5 hover:shadow-lg hover:border-[#1A5D54]/20 transition-all duration-300">
      <div className="w-full sm:w-[45%] flex-shrink-0 flex items-center justify-center bg-[#F8FAF9] rounded-xl p-4 mb-4 sm:mb-0">
        <div className="relative w-full aspect-square">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      <div className="w-full sm:w-[55%] sm:pl-6 flex flex-col">
        <div className="mb-3">
          <span
            className={`inline-block px-2 py-1 text-[10px] font-bold text-white rounded uppercase tracking-wider ${tagColor}`}
          >
            {tag}
          </span>
        </div>

        <h3 className="mb-2 text-base font-bold text-slate-900 group-hover:text-[#064743] transition-colors leading-tight line-clamp-3">
          {title}
        </h3>

        <p className="mb-4 text-xs text-slate-500 leading-relaxed line-clamp-3">
          {description}
        </p>

        <div className="mt-auto">
          {slug ? (
            <Link
              href={`/baza-wiedzy/${slug}`}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#138A56] transition-all group-hover:gap-2 focus:outline-none"
              aria-label={`Czytaj więcej o ${title}`}
            >
              Czytaj więcej
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          ) : (
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#138A56] transition-all group-hover:gap-2 focus:outline-none"
              aria-label={`Czytaj więcej o ${title}`}
            >
              Czytaj więcej
              <ArrowRight size={14} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
