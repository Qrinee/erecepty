export interface ArticleSection {
  title: string;
  content: string[];
}

export interface KnowledgeCardData {
  tag: string;
  tagColor: string;
  title: string;
  description: string;
  image: string;
  slug: string;
  subtitle?: string;
  author?: string;
  publishedDate?: string;
  readTime?: string;
  sections?: ArticleSection[];
  relatedArticles?: string[];
}

export const knowledgeCards: KnowledgeCardData[] = [
  {
    tag: "PORADNIK",
    tagColor: "bg-[#3B82F6]",
    title: "Jak przygotować się do telekonsultacji?",
    subtitle: "Kilka prostych kroków",
    description:
      "Kilka prostych kroków, dzięki którym konsultacja online przebiegnie szybko, komfortowo i skutecznie.",
    image: "/nxt.jpeg",
    slug: "jak-sie-przygotowac-do-telekonsultacji",
    author: "Dr Anna Kowalska",
    publishedDate: "15 stycznia 2025",
    readTime: "5 min czytania",
    relatedArticles: ["wszystko-o-konsultacjach-online", "kontynuacja-terapii-online"],
    sections: [
      {
        title: "Przygotuj najważniejsze informacje",
        content: [
          "Zanotuj swoje objawy, aktualnie przyjmowane leki, wyniki badań oraz pytania do lekarza. Im więcej informacji przekażesz, tym trafniejsza będzie konsultacja.",
        ],
      },
      {
        title: "Zadbaj o spokojne miejsce",
        content: [
          "Wybierz ciche, dobrze oświetlone miejsce z dostępem do stabilnego internetu. To zapewni komfort i jakość rozmowy z lekarzem.",
        ],
      },
      {
        title: "Przygotuj dokumenty",
        content: [
          "Miej pod ręką dowód osobisty, numer PESEL, wcześniejsze recepty, wyniki badań lub inną dokumentację medyczną.",
        ],
      },
      {
        title: "Sprawdź sprzęt",
        content: [
          "Upewnij się, że mikrofon, kamera i połączenie internetowe działają poprawnie. Naładuj urządzenie, aby uniknąć przerwania konsultacji.",
        ],
      },
      {
        title: "Po konsultacji",
        content: [
          "Po zakończonej konsultacji otrzymasz dokumenty online: e-receptę, e-zwolnienie lub zalecenia lekarskie.",
        ],
      },
    ],
  },
  {
    tag: "KOMPENDIUM",
    tagColor: "bg-[#22C55E]",
    title: "Wszystko o konsultacjach online",
    subtitle: "Kompletny przewodnik",
    description:
      "Dowiedz się jak działają e-wizyty, recepty online i konsultacje ze specjalistami.",
    image: "/wszystkookonsultacjach.png",
    slug: "wszystko-o-konsultacjach-online",
    author: "Mgr Piotr Nowak",
    publishedDate: "10 stycznia 2025",
    readTime: "12 min czytania",
    relatedArticles: ["jak-sie-przygotowac-do-telekonsultacji", "kontynuacja-terapii-online"],
    sections: [
      {
        title: "Jak działa konsultacja online?",
        content: [
          "Wybierasz usługę, wypełniasz formularz medyczny i kontaktujesz się z lekarzem bez wychodzenia z domu. Lekarz analizuje informacje i udziela konsultacji online.",
        ],
      },
      {
        title: "Czy konsultacja jest legalna?",
        content: [
          "Tak, wszystkie e-wizyty i e-recepty w Polsce są w pełni legalne i regulowane odpowiednimi przepisami Ministerstwa Zdrowia.",
        ],
      },
      {
        title: "Czy lekarz może wystawić receptę?",
        content: [
          "Tak, na podstawie wywiadu lekarskiego specjalista ma prawo wystawić e-receptę na potrzebne leki stałe lub doraźne.",
        ],
      },
      {
        title: "Ile trwa konsultacja?",
        content: [
          "Średni czas weryfikacji i wdrożenia decyzji przez lekarza wynosi około 15 minut od momentu przesłania formularza medycznego.",
        ],
      },
      {
        title: "Jak wygląda płatność?",
        content: [
          "Płatność odbywa się bezpiecznie online przy użyciu systemów BLIK, karty płatniczej lub szybkiego przelewu internetowego bezpośrednio po wypełnieniu wywiadu.",
        ],
      },
      {
        title: "Czy moje dane są bezpieczne?",
        content: [
          "Tak, całe połączenie i przesył danych są szyfrowane certyfikatem SSL. Twoje dane medyczne są ściśle chronione zgodnie z wytycznymi RODO.",
        ],
      },
    ],
  },
  {
    tag: "BEZPIECZEŃSTWO",
    tagColor: "bg-[#EF4444]",
    title: "Kontynuacja terapii bez wychodzenia z domu",
    subtitle: "Bezpiecznie i wygodnie",
    description:
      "Bezpieczne przedłużenie leczenia dla osób przewlekle chorych.",
    image: "/kontynuacjaleczenia.jpeg",
    slug: "kontynuacja-terapii-online",
    author: "Dr Marta Wiśniewska",
    publishedDate: "5 stycznia 2025",
    readTime: "10 min czytania",
    relatedArticles: ["wszystko-o-konsultacjach-online", "jak-sie-przygotowac-do-telekonsultacji"],
    sections: [
      {
        title: "Kiedy warto skorzystać?",
        content: [
          "Przedłużenia recepty na przyjmowane leki stałe.",
          "Konsultacji kontrolnej dotyczącej postępu terapii.",
          "Omówienia wyników okresowych badań kontrolnych.",
        ],
      },
      {
        title: "Dla kogo?",
        content: [
          "Usługa skierowana do pacjentów z chorobami przewlekłymi, takimi jak nadciśnienie, cukrzyca, astma, choroby tarczycy czy inne schorzenia stałe.",
        ],
      },
      {
        title: "Jak wygląda proces?",
        content: [
          "1. Wypełnij formularz (Krótki wywiad medyczny online. Opisz swój stan i aktualnie stosowane leczenie.)",
          "2. Lekarz analizuje zgłoszenie (Weryfikacja historii leczenia, dokumentacji oraz analiza przesłanych informacji.)",
          "3. Otrzymujesz dokumenty (Kod e-recepty w wiadomości SMS oraz dokumentacja medyczna na wskazany adres e-mail.)",
        ],
      },
      {
        title: "Bezpieczeństwo terapii",
        content: [
          "Każda konsultacja realizowana jest indywidualnie przez lekarza, zgodnie z aktualną dokumentacją medyczną pacjenta i obowiązującymi w Polsce standardami etyki lekarskiej.",
        ],
      },
    ],
  },
  {
    tag: "E-RECEPTY",
    tagColor: "bg-[#147A60]",
    title: "Czy lekarz online może wystawić receptę?",
    subtitle: "Pytania i odpowiedzi",
    description:
      "Tak. Jeśli stan zdrowia pacjenta na to pozwala, lekarz może wystawić e-receptę podczas konsultacji online.",
    image: "/recepta.png",
    slug: "czy-lekarz-online-moze-wystawic-recepte",
    author: "Zespół Medyczny",
    publishedDate: "22 maja 2024",
    readTime: "4 min czytania",
    relatedArticles: ["wszystko-o-konsultacjach-online"],
    sections: []
  },
  {
    tag: "ANTYKONCEPCJA ONLINE",
    tagColor: "bg-[#147A60]",
    title: "Jak uzyskać antykoncepcję online?",
    subtitle: "Krok po kroku",
    description:
      "Konsultacja z lekarzem ginekologiem online to wygodny i bezpieczny sposób na uzyskanie e-recepty na antykoncepcję dopasowaną do Twoich potrzeb.",
    image: "/bazawiedzy/1.png",
    slug: "jak-uzyskac-antykoncepcje-online",
    author: "Zespół Medyczny",
    publishedDate: "22 maja 2024",
    readTime: "4 min czytania",
    relatedArticles: ["czy-lekarz-online-moze-wystawic-recepte"],
    sections: []
  },
  {
    tag: "BEZPIECZEŃSTWO",
    tagColor: "bg-[#147A60]",
    title: "Czy konsultacje online są legalne i bezpieczne?",
    subtitle: "Dowiedz się więcej",
    description:
      "Tak. Konsultacje online w naszej platformie są w pełni legalne i realizowane zgodnie z obowiązującymi przepisami prawa oraz najwyższymi standardami bezpieczeństwa.",
    image: "/bazawiedzy/6.png",
    slug: "czy-konsultacje-online-sa-legalne-i-bezpieczne",
    author: "Zespół Medyczny",
    publishedDate: "22 maja 2024",
    readTime: "5 min czytania",
    relatedArticles: ["jak-uzyskac-antykoncepcje-online", "czy-lekarz-online-moze-wystawic-recepte"],
    sections: []
  },
  {
    tag: "PŁATNOŚCI",
    tagColor: "bg-[#147A60]",
    title: "Jak wygląda płatność za konsultację?",
    subtitle: "Dostępne metody płatności",
    description:
      "Płatność za konsultację online jest szybka, wygodna i w pełni bezpieczna. Zawsze dokonujesz jej przed konsultacją - bez ukrytych opłat.",
    image: "/bazawiedzy/2.png",
    slug: "jak-wyglada-platnosc-za-konsultacje",
    author: "Zespół Medyczny",
    publishedDate: "22 maja 2024",
    readTime: "3 min czytania",
    relatedArticles: ["czy-konsultacje-online-sa-legalne-i-bezpieczne", "czy-lekarz-online-moze-wystawic-recepte"],
    sections: []
  },
  {
    tag: "WYNIKI BADAŃ",
    tagColor: "bg-[#147A60]",
    title: "Jak skonsultować wynik badań?",
    subtitle: "Konsultacja wyników",
    description:
      "Konsultacja wyniku badań online to szybki i wygodny sposób na uzyskanie profesjonalnej interpretacji bez wychodzenia z domu.",
    image: "/bazawiedzy/7.jpeg",
    slug: "jak-skonsultowac-wynik-badan",
    author: "Zespół Medyczny",
    publishedDate: "22 maja 2024",
    readTime: "4 min czytania",
    relatedArticles: ["czy-lekarz-online-moze-wystawic-recepte", "jak-wyglada-platnosc-za-konsultacje"],
    sections: []
  },
  {
    tag: "RECEPTY I LEKI",
    tagColor: "bg-[#147A60]",
    title: "Czy mogę przedłużyć stałe leki bez wizyty stacjonarnej?",
    subtitle: "E-recepta na stałe leki",
    description:
      "Tak. W wielu przypadkach lekarz online może wystawić e-receptę na Twoje stałe leki podczas konsultacji online – bez konieczności wizyty stacjonarnej.",
    image: "/bazawiedzy/5.png",
    slug: "czy-moge-przedluzyc-stale-leki",
    author: "Zespół Medyczny",
    publishedDate: "22 maja 2024",
    readTime: "4 min czytania",
    relatedArticles: ["czy-lekarz-online-moze-wystawic-recepte", "jak-uzyskac-antykoncepcje-online"],
    sections: []
  }
];