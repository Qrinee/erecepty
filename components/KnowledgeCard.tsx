import Image from "next/image";
import { ArrowRight } from "lucide-react";

type KnowledgeCardProps = {
  tag: string;
  tagColor: string;
  title: string;
  description: string;
  image: string;
};

export default function KnowledgeCard({
  tag,
  tagColor,
  title,
  description,
  image,
}: KnowledgeCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-lg">
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
      </div>

      <div className="p-6">
        <h3 className="mb-3 text-lg font-semibold text-slate-900">
          {title}
        </h3>

        <p className="mb-6 text-sm text-slate-500">
          {description}
        </p>

        <a
          href="#"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-all group-hover:gap-3"
        >
          Czytaj więcej
          <ArrowRight size={16} />
        </a>
      </div>
    </article>
  );
}
