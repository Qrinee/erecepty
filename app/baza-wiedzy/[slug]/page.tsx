// app/baza-wiedzy/[slug]/page.tsx
import { knowledgeCards } from "@/app/data/knowledgeCards";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticlePageClient from "./ArticlePageClient";

export interface ArticlePageData {
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
  sections?: {
    title: string;
    content: string[];
  }[];
  relatedArticles?: string[];
}

// Named export for metadata - MUSI być Server Component
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const article = knowledgeCards.find((a) => a.slug === decodedSlug);

  if (!article) {
    return {
      title: "Nie znaleziono artykułu | Platforma",
      description: "Artykuł nie został znaleziony w bazie wiedzy.",
    };
  }

  const title = `${article.title} | Platforma`;
  const description = article.description;

  return {
    title,
    description,
    keywords: [
      "konsultacja online",
      "telekonsultacja",
      "porada medyczna",
      "zdrowie",
      article.tag.toLowerCase(),
    ],
    alternates: {
      canonical: `https://platforma.pl/baza-wiedzy/${article.slug}`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      url: `https://platforma.pl/baza-wiedzy/${article.slug}`,
      publishedTime: article.publishedDate,
      authors: article.author ? [article.author] : undefined,
      images: [
        {
          url: article.image.startsWith("http")
            ? article.image
            : `https://platforma.pl${article.image}`,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        article.image.startsWith("http")
          ? article.image
          : `https://platforma.pl${article.image}`,
      ],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

// Generate static paths - MUSI być Server Component
export async function generateStaticParams() {
  return knowledgeCards.map((article) => ({
    slug: article.slug,
  }));
}

// Main page component - Server Component
export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const article = knowledgeCards.find((a) => a.slug === decodedSlug);

  if (!article) {
    notFound();
  }

  // Pobierz powiązane artykuły
  const relatedArticles = article.relatedArticles
    ? knowledgeCards.filter((a) => article.relatedArticles?.includes(a.slug))
    : [];

  // Renderujemy Client Component z danymi
  return (
    <ArticlePageClient
      article={article}
      relatedArticles={relatedArticles}
    />
  );
}
