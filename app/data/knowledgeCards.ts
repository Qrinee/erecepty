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
  // Rozszerzone pola dla strony artykułu
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
    tagColor: "bg-blue-600",
    title: "Jak przygotować się do telekonsultacji?",
    subtitle: "Przewodnik krok po kroku",
    description:
      "Kilka prostych kroków, które pomogą Ci maksymalnie wykorzystać czas ze specjalistą online i uniknąć stresu.",
    image: "/doctor.jpg",
    slug: "jak-sie-przygotowac-do-telekonsultacji",
    author: "Dr Anna Kowalska",
    publishedDate: "15 stycznia 2025",
    readTime: "8 min czytania",
    relatedArticles: ["wszystko-o-konsultacjach-online", "kontynuacja-terapii-online"],
    sections: [
      {
        title: "Dlaczego warto się przygotować?",
        content: [
          "Telekonsultacja to wygodny sposób na uzyskanie porady zdrowotnej bez wychodzenia z domu. Jednak, aby spotkanie ze specjalistą było maksymalnie efektywne, warto odpowiednio się do niego przygotować.",
          "Dobra przygotowanie pozwala specjaliście szybciej postawić diagnozę i zaproponować odpowiednie postępowanie. To oszczędza czas obu stron i minimalizuje ryzyko nieporozumień.",
        ],
      },
      {
        title: "Przygotuj dokumentację",
        content: [
          "Zbierz wszystkie istotne dokumenty: wyniki badań, historię chorób, listę aktualnie stosowanych zaleceń oraz wcześniejsze zalecenia.",
          "Jeśli masz alergie na substancje lub nietolerancje, koniecznie zanotuj je przed konsultacją. Te informacje są kluczowe dla bezpiecznego zaplanowania terapii.",
          "Warto mieć pod ręką też informacje o chorobach przewlekłych w rodzinie - mogą one wpływać na decyzje diagnostyczne i terapeutyczne.",
        ],
      },
      {
        title: "Przygotuj listę pytań",
        content: [
          "Zanim połączysz się ze specjalistą, spisz wszystkie pytania, które chcesz mu zadać. W tr emocji łatwo o czymś zapomnieć.",
          "Pamiętaj, żeby zapytać o: możliwe skutki uboczne terapii, czas działania zaleconego postępowania, sposób przyjmowania preparatów oraz ewentualne przeciwwskazania.",
        ],
      },
      {
        title: "Zadbaj o odpowiednie warunki",
        content: [
          "Wybierz ciche, dobrze oświetlone miejsce, gdzie będziesz mógł swobodnie rozmawiać. Upewnij się, że masz stabilne połączenie internetowe.",
          "Miej pod ręką telefon na wypadek, gdyby połączenie wideo się przerwało. Specjalista będzie mógł do Ciebie zadzwonić.",
          "Warto mieć też przy sobie wodę - podczas konsultacji możesz poczuć suchość w ustach.",
        ],
      },
      {
        title: "Co zrobić w trakcie konsultacji?",
        content: [
          "Bądź szczery ze specjalistą - ukrywanie objawów lub przyjmowanych preparatów może być niebezpieczne dla Twojego zdrowia.",
          "Nie wahaj się prosić o wyjaśnienie niezrozumiałych terminów. Masz prawo w pełni rozumieć swoje postępowanie terapeutyczne.",
          "Zapisz wszystkie zalecenia specjalisty - możesz poprosić o przesłanie ich drogą elektroniczną.",
        ],
      },
      {
        title: "Po konsultacji",
        content: [
          "Jeśli specjalista zalecił Ci terapię, otrzymasz dokumenty w ciągu 24 godzin. Kod PIN otrzymasz SMS-em.",
          "W razie wątpliwości co do dawkowania lub skutków ubocznych, skontaktuj się ponownie z placówką lub zadzwoń na infolinię.",
          "Pamiętaj o kontroli - jeśli specjalista zalecił wizytę kontrolną, nie odkładaj jej na później.",
        ],
      },
    ],
  },
  {
    tag: "KOMPENDIUM",
    tagColor: "bg-emerald-500",
    title: "Wszystko o konsultacjach online. Jak zrealizować dokumenty?",
    subtitle: "Kompletny przewodnik",
    description:
      "Przewodnik po systemie e-zdrowia. Dowiedz się jak działa kod PIN i jak sprawdzić historię swoich konsultacji.",
    image: "/consultation.jpg",
    slug: "wszystko-o-konsultacjach-online",
    author: "Mgr Piotr Nowak",
    publishedDate: "10 stycznia 2025",
    readTime: "12 min czytania",
    relatedArticles: ["jak-sie-przygotowac-do-telekonsultacji", "kontynuacja-terapii-online"],
    sections: [
      {
        title: "Czym są konsultacje online?",
        content: [
          "Konsultacje online to elektroniczna forma wizyty u specjalisty. Wprowadzone w Polsce w 2018 roku, całkowicie zmodernizowały proces uzyskiwania porad i zaleceń.",
          "Dzięki konsultacjom online nie musisz martwić się o zgubienie dokumentów - wszystkie dane są przechowywane w systemie i dostępne dla Ciebie oraz realizującego zalecenia.",
          "System e-zdrowia (P1) integruje wszystkie placówki, co oznacza, że każdy specjalista może zobaczyć Twoją historię leczenia.",
        ],
      },
      {
        title: "Jak uzyskać konsultację online?",
        content: [
          "Konsultację online możesz otrzymać podczas wizyty stacjonarnej lub telekonsultacji. Specjalista wystawia dokumenty elektronicznie w systemie P1.",
          "Po zakończeniu konsultacji otrzymasz SMS z 4-cyfrowym kodem PIN. To Twój unikalny identyfikator, który podajesz w punkcie realizacji.",
          "Opcjonalnie możesz otrzymać dokumenty w formie PDF na adres email lub przez IKP (Internetowe Konto Pacjenta).",
        ],
      },
      {
        title: "Kod PIN - jak go używać?",
        content: [
          "Kod PIN to 4-cyfrowa liczba, którą otrzymujesz SMS-em po konsultacji. Jest ważny przez 7 dni (chyba że specjalista wskazał inaczej).",
          "W punkcie realizacji podajesz kod PIN oraz swój numer PESEL. Realizator wprowadza dane do systemu i wydaje zalecone preparaty.",
          "Jeśli nie masz dostępu do SMS, możesz zrealizować dokumenty podając jedynie PESEL - realizator wyszuka je na Twoje dane.",
        ],
      },
      {
        title: "Realizacja dokumentów",
        content: [
          "Wybierz dowolny punkt w Polsce - system jest zintegrowany, więc możesz zrealizować dokumenty w każdej placówce.",
          "W przypadku pozycji refundowanych, realizator może zapytać o dokument potwierdzający prawo do refundacji (np. legitymację osoby niepełnosprawnej).",
          "Jeśli na dokumencie jest kilka pozycji, możesz zrealizować je w różnych placówkach - wystarczy podawać ten sam kod PIN.",
        ],
      },
      {
        title: "Jak sprawdzić historię konsultacji?",
        content: [
          "Zaloguj się na Internetowe Konto Pacjenta (ikp.gov.pl) - znajdziesz tam wszystkie wystawione i zrealizowane dokumenty.",
          "W zakładce dokumentów możesz sprawdzić szczegóły każdego z nich: datę wystawienia, zalecenia, status realizacji.",
          "Masz też dostęp do historii leczenia, wyników badań i skierowań - wszystko w jednym miejscu.",
        ],
      },
      {
        title: "Najczęstsze problemy i rozwiązania",
        content: [
          "Nie otrzymałem SMS z kodem PIN - sprawdź czy numer telefonu w systemie jest aktualny. Skontaktuj się z placówką, która prowadziła konsultację.",
          "Pozycja z dokumentu nie jest dostępna w punkcie realizacji - realizator może zaproponować zamiennik lub skontaktować się ze specjalistą w sprawie zmiany terapii.",
          "Mam pytania o dawkowanie - realizator może udzielić informacji o sposobie stosowania. Wątpliwości zdrowotne konsultuj ze specjalistą.",
        ],
      },
    ],
  },
  {
    tag: "BEZPIECZEŃSTWO",
    tagColor: "bg-orange-500",
    title: "Kontynuacja terapii chorób przewlekłych online",
    subtitle: "Bezpiecznie i wygodnie",
    description:
      "Czy wiesz, że możesz przedłużyć terapię bez wychodzenia z domu? Sprawdź, jakie dokumenty są potrzebne.",
    image: "/security.jpg",
    slug: "kontynuacja-terapii-online",
    author: "Dr Marta Wiśniewska",
    publishedDate: "5 stycznia 2025",
    readTime: "10 min czytania",
    relatedArticles: ["wszystko-o-konsultacjach-online", "jak-sie-przygotowac-do-telekonsultacji"],
    sections: [
      {
        title: "Terapia chorób przewlekłych - zasady ogólne",
        content: [
          "Choroby przewlekłe, takie jak nadciśnienie tętnicze, cukrzyca, astma czy choroby tarczycy, wymagają regularnego przyjmowania preparatów i okresowej kontroli u specjalisty.",
          "Wielu pacjentów z chorobami przewlekłymi może kontynuować terapię online, bez konieczności osobistej wizyty w gabinecie.",
          "Telekonsultacje są szczególnie wygodne dla osób mieszkających daleko od placówek, pracujących w nieregularnych godzinach lub mających trudności z poruszaniem się.",
        ],
      },
      {
        title: "Jakie choroby można konsultować online?",
        content: [
          "Praktycznie wszystkie choroby przewlekłe, które są już zdiagnozowane i leczone, mogą być kontynuowane przez telekonsultację.",
          "Najczęściej konsultowane online to: nadciśnienie, cukrzyca typu 2, astma, POChP, niedoczynność i nadczynność tarczycy, depresja i lęki, choroby dermatologiczne.",
          "Specjalista oceni, czy Twój przypadek kwalifikuje się do konsultacji online. Niektóre sytuacje wymagają wizyty stacjonarnej.",
        ],
      },
      {
        title: "Dokumenty potrzebne do kontynuacji terapii",
        content: [
          "Podstawą jest dokumentacja potwierdzająca rozpoznanie choroby - może to być kopia wypisu ze szpitala, diagnoza od specjalisty lub wcześniejsze zalecenia.",
          "Jeśli ostatnia wizyta była dawno temu, specjalista może poprosić o aktualne wyniki badań. Wyślij je przed konsultacją przez formularz na stronie.",
          "Lista aktualnie stosowanych zaleceń (z dawkowaniem) jest niezbędna - specjalista musi wiedzieć, co bierzesz, aby uniknąć interakcji.",
        ],
      },
      {
        title: "Proces uzyskania dokumentów na terapię stałą",
        content: [
          "Zarejestruj się na platformie i wypełnij formularz, podając informacje o swojej chorobie i stosowanych preparatach.",
          "Specjalista przejrzy Twoją dokumentację i w ciągu kilku godzin (lub w następnym dniu roboczym) wystawi odpowiednie dokumenty.",
          "Otrzymasz SMS z kodem PIN - możesz od razu udać się do punktu realizacji.",
        ],
      },
      {
        title: "Bezpieczeństwo i ograniczenia",
        content: [
          "Telekonsultacja nie zastąpi wizyty kontrolnej - co jakiś czas specjalista zaleci osobiste badanie fizykalne lub rozszerzoną diagnostykę.",
          "W przypadku nagłego pogorszenia stanu zdrowia, nie czekaj na dokumenty online - zgłoś się na SOR lub wezwij pogotowie.",
          "Pamiętaj, że niektóre rodzaje terapii wymagają szczególnej ostrożności i nie zawsze mogą być przepisane przez telekonsultację.",
        ],
      },
      {
        title: "Zalety konsultacji online",
        content: [
          "Oszczędność czasu - nie musisz brać urlopu, czekać w kolejce ani dojeżdżać do przychodni.",
          "Dostępność 24/7 - możesz złożyć zapytanie o każdej porze, nawet w weekendy i święta.",
          "Ciągłość terapii - nawet gdy wyjeżdżasz lub zmieniasz miejsce zamieszkania, możesz kontynuować leczenie.",
          "Dyskrecja - wrażliwe tematy omawiasz w komfortowych warunkach własnego domu.",
        ],
      },
    ],
  },
];