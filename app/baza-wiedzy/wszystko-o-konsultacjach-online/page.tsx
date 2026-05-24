import type { Metadata } from "next";
import OnlineConsultationsClient from "./OnlineConsultationsClient";

export const metadata: Metadata = {
  title: "Wszystko o konsultacjach online | Platforma",
  description: "Dowiedz się jak działają e-wizyty, recepty online i konsultacje ze specjalistami. Poznaj kompletny poradnik dla pacjenta.",
  keywords: ["e-wizyta", "konsultacje lekarskie", "e-recepta online", "recepta przez internet"],
};

export default function OnlineConsultationsPage() {
  return <OnlineConsultationsClient />;
}
