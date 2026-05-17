// app/baza-wiedzy/[slug]/ArticlePageClient.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Clock,
  Calendar,
  User,
  Share2,
  Bookmark,
  ChevronRight,
  CheckCircle,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface ArticleSection {
  title: string;
  content: string[];
}

interface ArticleData {
  tag: string;
  tagColor: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  slug: string;
  author?: string;
  publishedDate?: string;
  readTime?: string;
  sections?: ArticleSection[];
  relatedArticles?: string[];
}

interface RelatedArticle {
  tag: string;
  tagColor: string;
  title: string;
  description: string;
  image: string;
  slug: string;
}

interface ArticlePageClientProps {
  article: ArticleData;
  relatedArticles: RelatedArticle[];
}

// Floating background elements
function FloatingBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#DAE9E6]/30 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/3 -left-20 w-60 h-60 bg-gradient-to-tr from-emerald-100/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-1/4 w-40 h-40 bg-gradient-to-r from-orange-100/20 to-transparent rounded-full blur-3xl" />
    </div>
  );
}

// Breadcrumb navigation
function Breadcrumb({ slug }: { slug: string }) {
  return (
    <nav className="mb-6" aria-label="Breadcrumb">
      <ol className="flex items-center gap-2 text-sm">
        <li>
          <Link
            href="/baza-wiedzy"
            className="text-slate-500 hover:text-[#064743] transition-colors flex items-center gap-1"
          >
            <ArrowLeft size={14} />
            Baza wiedzy
          </Link>
        </li>
        <li className="text-slate-300">
          <ChevronRight size={14} />
        </li>
        <li className="text-slate-900 font-medium truncate">{slug.replace(/-/g, " ")}</li>
      </ol>
    </nav>
  );
}

// Article Hero Section
function ArticleHero({ article }: { article: ArticleData }) {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-[#DAE9E6] pt-8 pb-12">
      <FloatingBackground />
      <div className="max-w-4xl mx-auto px-6 relative">
        <Breadcrumb slug={article.slug} />

        {/* Tag */}
        <span
          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white ${article.tagColor} mb-4`}
        >
          {article.tag}
        </span>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
          {article.title}
        </h1>

        {/* Subtitle if exists */}
        {article.subtitle && (
          <p className="text-xl text-slate-600 mb-6">{article.subtitle}</p>
        )}

        {/* Description */}
        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
          {article.description}
        </p>


      </div>
    </section>
  );
}

// Article Image
function ArticleImage({ image, title }: { image: string; title: string }) {
  return (
    <section className="max-w-5xl mx-auto px-6 -mt-8 relative z-10">
      <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}

// Article Content
function ArticleContent({ sections }: { sections?: ArticleSection[] }) {
  if (!sections || sections.length === 0) {
    return null;
  }

  return (
    <section className="py-12">
      <div className="max-w-3xl mx-auto px-6">
        <div className="prose prose-lg max-w-none">
          {sections.map((section, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                {section.title}
              </h2>
              {section.content.map((paragraph, pIndex) => (
                <p
                  key={pIndex}
                  className="text-slate-600 mb-4 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Key takeaways section
function KeyTakeaways({ sections }: { sections?: ArticleSection[] }) {
  if (!sections || sections.length === 0) {
    return null;
  }

  // Extract key points from sections (first sentence of each paragraph)
  const keyPoints: string[] = [];
  sections.forEach((section) => {
    section.content.forEach((paragraph) => {
      const sentences = paragraph.split(". ");
      if (sentences[0]) {
        keyPoints.push(sentences[0].replace(/^"/, "").replace(/"$/, "") + ".");
      }
    });
  });

  if (keyPoints.length === 0) {
    return null;
  }

  return (
    <section className="py-12 bg-gradient-to-br from-[#DAE9E6] to-emerald-50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <CheckCircle className="text-emerald-500" size={24} />
            Najważniejsze informacje
          </h3>
          <ul className="space-y-4">
            {keyPoints.slice(0, 5).map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-emerald-600 text-sm font-bold">
                    {index + 1}
                  </span>
                </div>
                <p className="text-slate-700">{point}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

// Related Articles
function RelatedArticlesSection({
  articles,
}: {
  articles: RelatedArticle[];
}) {
  if (articles.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">
          Powiązane artykuły
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <Link
              key={index}
              href={`/baza-wiedzy/${article.slug}`}
              className="group block bg-white rounded-2xl border-2 border-slate-100 overflow-hidden hover:border-[#1A5D54] hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-40">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span
                  className={`absolute left-3 top-3 px-2 py-1 rounded-full text-xs font-semibold text-white ${article.tagColor}`}
                >
                  {article.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-[#064743] transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm text-slate-500 line-clamp-2">
                  {article.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#064743] to-[#1A5D54]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Potrzebujesz konsultacji lekarskiej?
        </h2>
        <p className="text-[#DAE9E6] mb-8 text-lg">
          Skorzystaj z telekonsultacji i otrzymaj e-receptę bez wychodzenia z
          domu. Szybko, bezpiecznie, online.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/add-medicine"
            className="px-8 py-4 bg-white text-[#064743] rounded-full font-semibold hover:bg-[#DAE9E6] transition-colors"
          >
            Rozpocznij konsultację
          </Link>
          <Link
            href="/jak-to-dziala"
            className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
          >
            Dowiedz się jak to działa
          </Link>
        </div>
      </div>
    </section>
  );
}

// Main Client Component
export default function ArticlePageClient({
  article,
  relatedArticles,
}: ArticlePageClientProps) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <ArticleHero article={article} />
        <ArticleImage image={article.image} title={article.title} />
        <ArticleContent sections={article.sections} />
        <KeyTakeaways sections={article.sections} />
        <RelatedArticlesSection articles={relatedArticles} />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
