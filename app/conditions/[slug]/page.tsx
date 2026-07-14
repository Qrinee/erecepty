import { conditions } from "@/app/data/conditions";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ConditionPageClient from "./ConditionPageClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const condition = conditions.find(c => c.slug === decodedSlug);

  if (!condition) {
    return {
      title: "Nie znaleziono strony | Platforma",
      description: "Strona o danym schorzeniu nie została znaleziona.",
    };
  }

  const title = `${condition.title} ${condition.subtitle} – konsultacja online | Platforma`;
  const description = condition.metaDescription || `Dowiedz się wszystkiego o ${condition.subtitle}. szybki dostęp do profesjonalnych konsultacji.`;

  return {
    title,
    description,
    keywords: condition.keywords,
    alternates: {
      canonical: `https://platforma.pl/conditions/${condition.slug}`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      url: `https://platforma.pl/conditions/${condition.slug}`,
      images: [
        {
          url: condition.heroImage.startsWith('http') 
            ? condition.heroImage 
            : `https://platforma.pl${condition.heroImage}`,
          width: 1200,
          height: 630,
          alt: `${condition.title} ${condition.subtitle}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [condition.heroImage.startsWith('http') 
        ? condition.heroImage 
        : `https://platforma.pl${condition.heroImage}`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export async function generateStaticParams() {
  return conditions.map((condition) => ({
    slug: condition.slug,
  }));
}

export default async function ConditionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const condition = conditions.find(c => c.slug === decodedSlug);

  if (!condition) {
    notFound();
  }

  return <ConditionPageClient condition={condition} />;
}