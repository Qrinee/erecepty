// app/data/conditions.ts
import { ConditionPageData } from "@/app/types/condition";

export const conditions: ConditionPageData[] = [
  {
    slug: "antykoncepcja",
    category: "Zdrowie reprodukcyjne",
    title: "Wszystko o",
    subtitle: "antykoncepcji",
    
    // Required properties from interface that are missing:
    ctaPrimary: "Dowiedz się więcej",  // Empty since you removed commercial elements
    ctaSecondary: "Kontakt", // Empty since you removed commercial elements
    
    heroImage: "/conditions/antykoncepcja.jpg",
    
    // Added missing researchCitations (was only in type, not in interface)
    researchCitations: [
      {
        text: "Systematyczny przegląd potwierdza, że połączenie etynyloestradiolu z lewonorgestrelem jest najczęściej badaną i stosowaną formą antykoncepcji hormonalnej.",
        source: "Journal of Clinical Endocrinology & Metabolism",
        year: "2021"
      },
      {
        text: "Metaanaliza 31 badań wykazała, że wkładki domaciczne z lewonorgestrelem są skuteczniejsze niż doustne środki antykoncepcyjne z mniejszą liczbą działań niepożądanych.",
        source: "Cochrane Database of Systematic Reviews",
        year: "2020"
      }
    ],
    
    metaDescription: "Kompleksowy przegląd metod zapobiegania ciąży. Informacje o skuteczności, mechanizmach działania, zaletach i ograniczeniach różnych form antykoncepcji.",
    keywords: ["metody antykoncepcji", "tabletki antykoncepcyjne", "antykoncepcja hormonalna", "zdrowie reprodukcyjne", "planowanie rodziny"],
    
    heroDescription: "Przegląd metod zapobiegania ciąży z uwzględnieniem ich skuteczności, mechanizmów działania oraz medycznych wskazań i przeciwwskazań.",
    heroStats: [
      { stat: "99%", label: "Skuteczność metod hormonalnych" },
      { stat: "60%", label: "Kobiet stosuje antykoncepcję w Polsce" },
      { stat: "1960", label: "Pierwsza pigułka antykoncepcyjna" },
      { stat: "20+", label: "Różnych metod dostępnych" }
    ],
    
    conditionDescription: "Antykoncepcja obejmuje wszystkie metody i środki służące zapobieganiu ciąży. Dzieli się na hormonalne, barierowe, chemiczne, mechaniczne oraz naturalne. Wybór odpowiedniej metody zależy od wielu czynników, w tym stanu zdrowia, stylu życia, preferencji osobistych oraz planów reprodukcyjnych.",
    
    symptoms: [
      "Potrzeba planowania rodziny",
      "Zaburzenia cyklu miesiączkowego",
      "Choroby endokrynologiczne",
      "Wskazania medyczne do regulacji hormonów",
      "Ochrona zdrowia reprodukcyjnego"
    ],
    
    causes: [
      "Ewolucja metod planowania rodziny",
      "Postęp w farmakologii hormonalnej",
      "Zmiany społeczno-kulturowe",
      "Wzrost świadomości zdrowotnej",
      "Rozwój medycyny prewencyjnej"
    ],
    
    riskFactors: [
      "Palenie tytoniu przy stosowaniu hormonów",
      "Historia zakrzepicy w rodzinie",
      "Choroby wątroby",
      "Nowotwory hormonozależne",
      "Nieustabilizowane nadciśnienie"
    ],
    
    treatmentOptions: [
      {
        name: "Tabletki jednofazowe",
        type: "Antykoncepcja hormonalna",
        description: "Doustna metoda antykoncepcji zawierająca stałą dawkę estrogenu i progestagenu w każdej tabletce. Stosowana przez 21 dni, po których następuje 7-dniowa przerwa.",
        pros: [
          "Skuteczność na poziomie 99,7%",
          "Regulacja cyklu miesiączkowego",
          "Zmniejszenie obfitości krwawień",
          "Działanie ochronne na endometrium",
          "Możliwość leczenia trądziku"
        ],
        cons: [
          "Wymaga codziennej dyscypliny",
          "Możliwe interakcje z innymi lekami",
          "Przeciwwskazania u części kobiet",
          "Nie chroni przed chorobami przenoszonymi drogą płciową",
          "Konieczność okresowych kontroli"
        ]
      },
      {
        name: "Systemy domaciczne",
        type: "Antykoncepcja długoterminowa",
        description: "Wkładki wewnątrzmaciczne uwalniające hormony lub zawierające miedź. Zakładane przez lekarza ginekologa na okres 3-10 lat.",
        pros: [
          "Długoterminowa skuteczność",
          "Wysoka odwracalność",
          "Niski wskaźnik niepowodzeń",
          "Możliwość stosowania u kobiet karmiących",
          "Brak konieczności codziennego pamiętania"
        ],
        cons: [
          "Wymaga procedury medycznej",
          "Możliwe nasilenie bólów miesiączkowych",
          "Ryzyko przemieszczenia wkładki",
          "Nie zalecane przy niektórych wadach macicy",
          "Koszt początkowy"
        ]
      }
    ],
    
    treatmentProcess: [
      {
        step: 1,
        title: "Pierwsze metody naturalne",
        description: "Stosowanie metod kalendarzykowych i obserwacji cyklu, opracowanych w latach 20. XX wieku.",
        duration: "lata 1920-1930"
      },
      {
        step: 2,
        title: "Rewolucja hormonalna",
        description: "Wprowadzenie pierwszej pigułki antykoncepcyjnej Enovid w Stanach Zjednoczonych.",
        duration: "1960 rok"
      },
      {
        step: 3,
        title: "Rozwój metod barierowych",
        description: "Poprawa jakości i skuteczności prezerwatyw oraz rozwój nowych metod barierowych.",
        duration: "lata 1970-1980"
      },
      {
        step: 4,
        title: "Era antykoncepcji długoterminowej",
        description: "Rozwój systemów domacicznych, implantów podskórnych i innych metod długodziałających.",
        duration: "lata 1990-obecnie"
      }
    ],
    
    // Required by interface but not in your data:
    costInfo: {
      consultationCost: "",
      prescriptionCost: "",
      insuranceCoverage: "",
      availability: ""
    },
    
indications: [
  "Planowanie rodziny i zapobieganie nieplanowanej ciąży",
  "Regulacja nieregularnych cykli miesiączkowych",
  "Zmniejszenie obfitości krwawień miesiączkowych i bólu",
  "Leczenie trądziku i innych objawów androgennych",
  "Leczenie endometriozy",
  "Zespół policystycznych jajników (PCOS)",
  "Terapia zastępcza w niedoborach hormonalnych"
],

contraindications: [
  "Ciąża lub podejrzenie ciąży",
  "Karmienie piersią (dla niektórych metod)",
  "Przebyta lub obecna zakrzepica żylna lub tętnicza",
  "Choroba niedokrwienna serca lub udar mózgu",
  "Niewydolność wątroby lub ostre choroby wątroby",
  "Nowotwory hormonozależne (np. rak piersi)",
  "Nieustabilizowane nadciśnienie tętnicze",
  "Migrena z aurą",
  "Ciężka cukrzyca z powikłaniami naczyniowymi"
],
    
    faqs: [
      {
        question: "Jak działa antykoncepcja hormonalna?",
        answer: "Antykoncepcja hormonalna działa na trzech głównych poziomach: hamuje owulację poprzez supresję hormonów przysadkowych, zagęszcza śluz szyjkowy utrudniając penetrację plemników, oraz zmienia endometrium uniemożliwiając implantację zapłodnionej komórki jajowej."
      },
      {
        question: "Czy antykoncepcja wpływa na płodność w przyszłości?",
        answer: "Większość badań wskazuje, że antykoncepcja hormonalna nie wpływa negatywnie na długoterminową płodność. Cykl miesiączkowy i owulacja zazwyczaj wracają do normy w ciągu 1-3 miesięcy po odstawieniu tabletek. Niektóre kobiety mogą doświadczyć krótkiego okresu braku miesiączki po antykoncepcji, co zwykle ustępuje samoistnie."
      },
      {
        question: "Jakie są różnice między generacjami tabletek antykoncepcyjnych?",
        answer: "Tabletki antykoncepcyjne dzieli się na generacje w zależności od typu progestagenu:\n\n• I generacja: noretysteron - wyższe dawki, więcej działań niepożądanych\n• II generacja: lewonorgestrel - lepszy profil bezpieczeństwa\n• III generacja: dezogestrel, gestoden - mniejsze działanie androgenne\n• IV generacja: drospirenon, dienogest - działanie antyandrogenne"
      }
    ],
    
    statistics: [
      { value: "99.7%", description: "skuteczność tabletek przy regularnym stosowaniu" },
      { value: "0.1-0.5%", description: "wskaźnik niepowodzeń wkładek domacicznych" },
      { value: "85%", description: "kobiet stosujących antykoncepcję w UE" },
      { value: "50+", description: "lat stosowania pigułki antykoncepcyjnej" }
    ],
    
    relatedConditions: ["zaburzenia hormonalne", "endometrioza", "pcos", "cykl miesiączkowy", "zdrowie reprodukcyjne"]
  },


{
  slug: "depresja-i-zaburzenia-lekowe",
  category: "Zdrowie psychiczne",
  title: "Wsparcie w",
  subtitle: "depresji i zaburzeniach lękowych",
  
  ctaPrimary: "Dowiedz się więcej",
  ctaSecondary: "Kontakt",
  
  heroImage: "/conditions/depresja-zaburzenia-lekowe.jpg",
  
  researchCitations: [
    {
      text: "Metaanaliza 64 badań wykazała, że połączenie psychoterapii z farmakoterapią daje lepsze efekty w leczeniu depresji niż każda z tych metod stosowana osobno.",
      source: "Journal of the American Medical Association",
      year: "2021"
    },
    {
      text: "Badania neuroobrazowe potwierdzają zmiany w funkcjonowaniu obszarów mózgu odpowiedzialnych za regulację emocji u osób z zaburzeniami lękowymi.",
      source: "Biological Psychiatry",
      year: "2022"
    }
  ],
  
  metaDescription: "Kompleksowe podejście do leczenia depresji i zaburzeń lękowych. Informacje o objawach, metodach terapeutycznych i wsparciu w procesie zdrowienia.",
  keywords: ["depresja", "zaburzenia lękowe", "zdrowie psychiczne", "psychoterapia", "leczenie depresji", "nerwica"],
  
  heroDescription: "Depresja i zaburzenia lękowe to powszechne problemy zdrowotne, które można skutecznie leczyć. Zrozumienie ich mechanizmów i dostępnych form pomocy jest pierwszym krokiem do poprawy jakości życia.",
  heroStats: [
    { stat: "280 mln", label: "Osób z depresją na świecie" },
    { stat: "40%", label: "Chorujących na depresję nie szuka pomocy" },
    { stat: "60%", label: "Skuteczność leczenia przy odpowiednim doborze terapii" },
    { stat: "2-3x", label: "Częstsze występowanie u kobiet" }
  ],
  
  conditionDescription: "Depresja to zaburzenie nastroju charakteryzujące się utrzymującym się smutkiem, utratą zainteresowań i brakiem energii. Zaburzenia lękowe obejmują nadmierny, niekontrolowany niepokój, który utrudnia codzienne funkcjonowanie. Obydwa problemy często współwystępują i wymagają zindywidualizowanego podejścia terapeutycznego.",
  
  symptoms: [
    "Utrzymujący się smutek lub przygnębienie",
    "Utrata zainteresowania aktywnościami",
    "Zmęczenie i brak energii",
    "Problemy ze snem (bezsenność lub nadmierna senność)",
    "Trudności z koncentracją",
    "Nadmierny, niekontrolowany niepokój",
    "Ataki paniki",
    "Unikanie sytuacji społecznych",
    "Objawy somatyczne (kołatanie serca, drżenie)"
  ],
  
  causes: [
    "Czynniki biologiczne (dysfunkcja neuroprzekaźników)",
    "Predyspozycje genetyczne",
    "Stresujące wydarzenia życiowe",
    "Przewlekły stres",
    "Choroby somatyczne",
    "Substancje psychoaktywne"
  ],
  
  riskFactors: [
    "Historia depresji w rodzinie",
    "Trauma dziecięca",
    "Przewlekłe choroby fizyczne",
    "Izolacja społeczna",
    "Problemy finansowe lub zawodowe",
    "Używanie substancji psychoaktywnych"
  ],
  
  treatmentOptions: [
    {
      name: "Psychoterapia poznawczo-behawioralna",
      type: "Psychoterapia",
      description: "Skuteczna metoda terapeutyczna koncentrująca się na zmianie negatywnych wzorców myślenia i zachowania. Pomaga identyfikować i modyfikować dysfunkcyjne przekonania.",
      pros: [
        "Efektywność potwierdzona badaniami",
        "Nauka praktycznych umiejętności radzenia sobie",
        "Brak działań niepożądanych lekowych",
        "Długoterminowe efekty",
        "Empowerment pacjenta"
      ],
      cons: [
        "Wymaga zaangażowania i regularności",
        "Proces wymaga czasu",
        "Dostępność terapeutów",
        "Koszt w przypadku braku refundacji",
        "Konfrontacja z trudnymi emocjami"
      ]
    },
    {
      name: "Farmakoterapia (SSRI, SNRI)",
      type: "Leczenie farmakologiczne",
      description: "Leki przeciwdepresyjne, głównie z grupy SSRI (selektywne inhibitory wychwytu zwrotnego serotoniny) i SNRI, które regulują poziom neuroprzekaźników w mózgu.",
      pros: [
        "Skuteczne w umiarkowanej i ciężkiej depresji",
        "Redukcja objawów lękowych",
        "Stosunkowo dobry profil bezpieczeństwa",
        "Dostępność w ramach refundacji",
        "Możliwość długoterminowego stosowania"
      ],
      cons: [
        "Działania niepożądane (nudności, senność)",
        "Opóźniony początek działania (2-4 tygodnie)",
        "Konieczność regularnego przyjmowania",
        "Objawy odstawienne",
        "Indywidualne różnice w odpowiedzi na leki"
      ]
    }
  ],
  
  treatmentProcess: [
    {
      step: 1,
      title: "Diagnoza i ocena",
      description: "Szczegółowa ocena objawów, historii choroby i czynników ryzyka. Ustalenie, czy występuje depresja, zaburzenia lękowe, czy oba problemy równocześnie.",
      duration: "1-2 sesje"
    },
    {
      step: 2,
      title: "Planowanie leczenia",
      description: "Dopasowanie formy terapii do indywidualnych potrzeb pacjenta. Decyzja o psychoterapii, farmakoterapii lub połączeniu obu metod.",
      duration: "1-2 tygodnie"
    },
    {
      step: 3,
      title: "Leczenie aktywne",
      description: "Regularne sesje terapeutyczne i/lub przyjmowanie leków. Monitorowanie postępów i ewentualna modyfikacja leczenia.",
      duration: "3-12 miesięcy"
    },
    {
      step: 4,
      title: "Utrzymanie efektów i profilaktyka",
      description: "Wzmocnienie nabytych umiejętności, stopniowe zmniejszanie częstotliwości sesji. Strategie zapobiegania nawrotom.",
      duration: "6 miesięcy+"
    }
  ],
  
  costInfo: {
    consultationCost: "",
    prescriptionCost: "",
    insuranceCoverage: "",
    availability: ""
  },
  
indications: [
  "Regularna psychoterapia (np. poznawczo-behawioralna, psychodynamiczna)",
  "Farmakoterapia (leki przeciwdepresyjne, przeciwlękowe) pod kontrolą lekarza",
  "Aktywność fizyczna dostosowana do możliwości",
  "Techniki relaksacyjne i redukcji stresu",
  "Utrzymanie regularnego rytmu dobowego (sen, posiłki)",
  "Unikanie alkoholu i substancji psychoaktywnych",
  "Budowanie sieci wsparcia społecznego"
],

contraindications: [
  "Samodzielne odstawianie leków przeciwdepresyjnych bez konsultacji z lekarzem",
  "Stosowanie niezatwierdzonych substancji lub leków bez recepty w celu leczenia objawów",
  "Izolacja społeczna i unikanie pomocy",
  "Brak regularności w przyjmowaniu leków lub uczestnictwie w terapii",
  "Nieleczenie współistniejących chorób somatycznych"
],
  
  faqs: [
    {
      question: "Czy depresja to po prostu smutek?",
      answer: "Nie, depresja to choroba, a nie zwykły smutek. Podczas gdy smutek jest naturalną, przejściową reakcją na trudne sytuacje, depresja jest stanem chorobowym charakteryzującym się utrzymującymi się objawami, które znacząco zakłócają codzienne funkcjonowanie. Wymaga profesjonalnego leczenia."
    },
    {
      question: "Jak długo trwa leczenie depresji?",
      answer: "Czas leczenia zależy od wielu czynników, w tym nasilenia objawów, indywidualnej odpowiedzi na terapię i występowania innych schorzeń. Zazwyczaj leczenie aktywne trwa 6-12 miesięcy, a po uzyskaniu poprawy zaleca się kontynuację leczenia przez kilka miesięcy w celu zapobiegania nawrotom."
    },
    {
      question: "Czy leki przeciwdepresyjne uzależniają?",
      answer: "Leki przeciwdepresyjne nie powodują uzależnienia w sensie psychicznym (nie dają euforii ani nie prowadzą do zachowań kompulsywnych). Mogą jednak powodować objawy odstawienne przy gwałtownym zaprzestaniu przyjmowania, dlatego ważne jest stopniowe zmniejszanie dawki pod kontrolą lekarza."
    }
  ],
  
  statistics: [
    { value: "10-15%", description: "ludzi doświadcza epizodu depresyjnego w ciągu życia" },
    { value: "50-60%", description: "skuteczność leczenia przy odpowiednim doborze terapii" },
    { value: "3.8%", description: "populacji światowej cierpi na zaburzenia depresyjne" },
    { value: "40-60%", description: "pacjentów z depresją ma współwystępujące zaburzenia lękowe" }
  ],
  
  relatedConditions: ["zaburzenia snu", "stres", "wypalenie zawodowe", "zaburzenia adaptacyjne", "zaburzenia osobowości"]
},


{
  slug: "otylosc",
  category: "Metaboliczne",
  title: "Kompleksowe podejście do",
  subtitle: "otyłości",
  
  ctaPrimary: "Dowiedz się więcej",
  ctaSecondary: "Kontakt",
  
  heroImage: "/conditions/otylosc.jpg",
  
  researchCitations: [
    {
      text: "Metaanaliza 28 randomizowanych badań klinicznych potwierdza, że połączenie interwencji behawioralnych z farmakoterapią daje lepsze i trwalsze efekty w redukcji masy ciała niż sama dieta.",
      source: "The New England Journal of Medicine",
      year: "2023"
    },
    {
      text: "Badania z użyciem neuroobrazowania wykazały zmiany w aktywności obszarów mózgu odpowiedzialnych za nagrodę i kontrolę impulsów u osób z otyłością.",
      source: "Nature Reviews Endocrinology",
      year: "2022"
    }
  ],
  
  metaDescription: "Kompleksowe podejście do leczenia otyłości jako choroby przewlekłej. Informacje o przyczynach, metodach leczenia i długoterminowym zarządzaniu masą ciała.",
  keywords: ["otyłość", "nadwaga", "BMI", "redukcja masy ciała", "leczenie otyłości", "zdrowie metaboliczne", "dieta"],
  
  heroDescription: "Otyłość to przewlekła choroba metaboliczna charakteryzująca się nadmiernym nagromadzeniem tkanki tłuszczowej. Wymaga wielodyscyplinarnego podejścia łączącego interwencje żywieniowe, aktywność fizyczną, terapię behawioralną i w wybranych przypadkach farmakoterapię lub leczenie chirurgiczne.",
  heroStats: [
    { stat: "650 mln", label: "Osób z otyłością na świecie" },
    { stat: "25%", label: "Polaków ma otyłość" },
    { stat: "200+", label: "powikłań zdrowotnych związanych z otyłością" },
    { stat: "2-10 lat", label: "skrócenie życia przy BMI > 35" }
  ],
  
  conditionDescription: "Otyłość definiowana jest jako nadmierne nagromadzenie tkanki tłuszczowej, które negatywnie wpływa na zdrowie. Diagnozuje się ją przy wskaźniku BMI ≥ 30 kg/m². Jest chorobą przewlekłą o złożonej etiologii, obejmującą czynniki genetyczne, środowiskowe, psychologiczne i metaboliczne. Otyłość zwiększa ryzyko wielu chorób, w tym cukrzycy typu 2, nadciśnienia, chorób sercowo-naczyniowych i niektórych nowotworów.",
  
  symptoms: [
    "Nadmierna masa ciała (BMI ≥ 30)",
    "Zwiększony obwód talii (≥80 cm u kobiet, ≥94 cm u mężczyzn)",
    "Duszność przy niewielkim wysiłku",
    "Problemy ze stawami (bóle kolan, bioder)",
    "Zaburzenia snu (bezdech senny)",
    "Nadmierna potliwość",
    "Zmęczenie i brak energii",
    "Trudności w codziennych czynnościach"
  ],
  
  causes: [
    "Nadmierna podaż kalorii w stosunku do zapotrzebowania",
    "Czynniki genetyczne i epigenetyczne",
    "Zaburzenia hormonalne (leptynooporność, insulinooporność)",
    "Czynniki psychologiczne (jedzenie emocjonalne)",
    "Brak aktywności fizycznej",
    "Niektóre leki (psychotropowe, steroidy)",
    "Czynniki środowiskowe i społeczne"
  ],
  
  riskFactors: [
    "Otyłość w rodzinie",
    "Niski status socjoekonomiczny",
    "Choroby endokrynologiczne (PCOS, niedoczynność tarczycy)",
    "Stosowanie niektórych leków",
    "Depresja i zaburzenia odżywiania",
    "Ciąża (ryzyko otyłości poporodowej)",
    "Zaprzestanie palenia tytoniu"
  ],
  
  treatmentOptions: [
    {
      name: "Kompleksowa terapia behawioralna",
      type: "Leczenie zachowawcze",
      description: "Wielowymiarowe podejście łączące modyfikację diety, zwiększenie aktywności fizycznej i terapię behawioralną ukierunkowaną na zmianę nawyków i postaw wobec jedzenia.",
      pros: [
        "Złoty standard leczenia otyłości",
        "Brak działań niepożądanych",
        "Trwała zmiana nawyków",
        "Poprawa zdrowia psychicznego",
        "Możliwość personalizacji"
      ],
      cons: [
        "Wymaga dużego zaangażowania",
        "Proces długoterminowy",
        "Ryzyko efektu jo-jo",
        "Wymaga wsparcia specjalistów",
        "Koszty w przypadku prywatnej opieki"
      ]
    },
    {
      name: "Farmakoterapia (leki przeciweight)",
      type: "Leczenie farmakologiczne",
      description: "Leki wspomagające redukcję masy ciała poprzez różne mechanizmy: zmniejszenie apetytu, ograniczenie wchłaniania tłuszczów lub wpływ na ośrodki sytości w mózgu.",
      pros: [
        "Skuteczne wsparcie przy BMI ≥ 30",
        "Ułatwia przestrzeganie diety",
        "Poprawa parametrów metabolicznych",
        "Leki nowej generacji z dobrym profilem bezpieczeństwa",
        "Możliwość długoterminowego stosowania"
      ],
      cons: [
        "Działania niepożądane (gastrointestinalne)",
        "Konieczność ciągłego stosowania",
        "Koszty (często brak refundacji)",
        "Nie zastępuje zmiany stylu życia",
        "Przeciwwskazania w niektórych chorobach"
      ]
    },
    {
      name: "Chirurgia bariatryczna",
      type: "Leczenie chirurgiczne",
      description: "Zabiegi chirurgiczne mające na celu redukcję pojemności żołądka i/lub zmianę anatomii przewodu pokarmowego. Rezerwowane dla otyłości olbrzymiej (BMI ≥ 40) lub ≥ 35 z powikłaniami.",
      pros: [
        "Najskuteczniejsza metoda długoterminowa",
        "Znacząca redukcja masy ciała (60-80% nadmiaru)",
        "Remisja chorób towarzyszących (cukrzyca, nadciśnienie)",
        "Poprawa jakości życia",
        "Zmniejszone ryzyko przedwczesnego zgonu"
      ],
      cons: [
        "Ryzyko powikłań chirurgicznych",
        "Konieczność suplementacji witaminowej dożywotnio",
        "Możliwe powikłania pooperacyjne",
        "Konieczność stałej opieki medycznej",
        "Koszty i dostępność"
      ]
    }
  ],
  
  treatmentProcess: [
    {
      step: 1,
      title: "Kompleksowa diagnostyka",
      description: "Szczegółowa ocena: wywiad, pomiary antropometryczne, analiza składu ciała, badania laboratoryjne, ocena psychologiczna i określenie przyczyn otyłości.",
      duration: "1-2 wizyty"
    },
    {
      step: 2,
      title: "Ustalenie celów i planu leczenia",
      description: "Realistyczne wyznaczenie celów (5-10% redukcji masy), dobór odpowiednich metod leczenia, edukacja żywieniowa i opracowanie planu aktywności.",
      duration: "2-4 tygodnie"
    },
    {
      step: 3,
      title: "Faza aktywnej redukcji",
      description: "Regularne monitorowanie, modyfikacje planu w zależności od postępów, wsparcie psychologiczne, ewentualne włączenie farmakoterapii.",
      duration: "6-12 miesięcy"
    },
    {
      step: 4,
      title: "Faza utrzymania masy ciała",
      description: "Strategie zapobiegania efektowi jo-jo, kontynuacja zdrowych nawyków, długoterminowe wsparcie i regularne kontrole.",
      duration: "Dożywotnio"
    }
  ],
  
  costInfo: {
    consultationCost: "",
    prescriptionCost: "",
    insuranceCoverage: "",
    availability: ""
  },
  
indications: [
  "Indywidualnie dobrana dieta redukcyjna pod okiem dietetyka",
  "Regularna aktywność fizyczna (co najmniej 150 minut umiarkowanej aktywności tygodniowo)",
  "Terapia behawioralna mająca na celu zmianę nawyków żywieniowych",
  "Leczenie chorób współistniejących (np. nadciśnienia, cukrzycy)",
  "W przypadkach kwalifikujących - farmakoterapia lekami przeciwotyłościowymi",
  "W otyłości olbrzymiej - rozważenie chirurgii bariatrycznej",
  "Regularne kontrole lekarskie i monitorowanie parametrów zdrowotnych"
],

contraindications: [
  "Stosowanie restrykcyjnych, niezbilansowanych diet bez nadzoru",
  "Intensywne, niedostosowane do stanu zdrowia ćwiczenia fizyczne",
  "Stosowanie niezatwierdzonych tabletek odchudzających lub suplementów",
  "Opuszczanie posiłków i głodówki",
  "Bagatelizowanie objawów i unikanie leczenia powikłań otyłości"
],
  
  faqs: [
    {
      question: "Czy otyłość to tylko problem estetyczny?",
      answer: "Absolutnie nie. Otyłość jest uznawana przez WHO za chorobę przewlekłą, która prowadzi do poważnych powikłań zdrowotnych. Zwiększa ryzyko: cukrzycy typu 2 (7-krotnie), nadciśnienia, chorób serca, udaru, niektórych nowotworów, bezdechu sennego i problemów stawowych. Wpływa również na zdrowie psychiczne i jakość życia."
    },
    {
      question: "Dlaczego tak trudno utrzymać wagę po odchudzaniu?",
      answer: "Organizm posiada mechanizmy obronne przeciwko utracie masy ciała. Po redukcji wagi spoczynkowa przemiana materii zmniejsza się, wzrasta apetyt, a hormony głodu (grelina) zwiększają się. Dlatego otyłość wymaga długoterminowego leczenia i wsparcia, podobnie jak inne choroby przewlekłe."
    },
    {
      question: "Kiedy rozważa się operację bariatryczną?",
      answer: "Chirurgię bariatryczną rozważa się przy: BMI ≥ 40 lub BMI ≥ 35 z powikłaniami (cukrzyca, nadciśnienie, bezdech senny), wieku 18-65 lat, niepowodzeniu leczenia zachowawczego (co najmniej 6 miesięcy), braku przeciwwskazań psychologicznych i gotowości do długoterminowej opieki pooperacyjnej."
    }
  ],
  
  statistics: [
    { value: "13%", description: "światowej populacji dorosłych ma otyłość" },
    { value: "5-15%", description: "redukcja masy ciała znacząco zmniejsza ryzyko powikłań" },
    { value: "50-70%", description: "pacjentów po operacji bariatrycznej osiąga trwałą redukcję" },
    { value: "3x", description: "większe ryzyko hospitalizacji u osób z otyłością" }
  ],
  
  relatedConditions: ["cukrzyca typu 2", "nadciśnienie", "insulinooporność", "PCOS", "bezdech senny", "dna moczanowa"]
},

{
  slug: "cukrzyca",
  category: "Metaboliczne",
  title: "Parę słów o",
  subtitle: "cukrzycy",
  
  ctaPrimary: "Dowiedz się więcej",
  ctaSecondary: "Kontakt",
  
  heroImage: "/conditions/cukrzyca.jpg",
  
  researchCitations: [
    {
      text: "Badanie DCCT/EDIC wykazało, że intensywna kontrola glikemii u chorych na cukrzycę typu 1 redukuje ryzyko powikłań naczyniowych o 50-75% nawet po 30 latach od zakończenia badania.",
      source: "New England Journal of Medicine",
      year: "2023"
    },
    {
      text: "Metaanaliza 40 badań z udziałem 2,5 mln osób potwierdziła, że utrzymanie HbA1c < 7% zmniejsza ryzyko mikro- i makroangiopatii o 35-40%.",
      source: "The Lancet Diabetes & Endocrinology",
      year: "2022"
    }
  ],
  
  metaDescription: "Kompleksowe podejście do diagnozy, leczenia i monitorowania cukrzycy. Informacje o typach cukrzycy, nowoczesnych metodach leczenia i profilaktyce powikłań.",
  keywords: ["cukrzyca", "cukrzyca typu 1", "cukrzyca typu 2", "insulina", "glikemia", "HbA1c", "leczenie cukrzycy"],
  
  heroDescription: "Cukrzyca to grupa przewlekłych chorób metabolicznych charakteryzujących się hiperglikemią wynikającą z defektu wydzielania lub działania insuliny. Wymaga kompleksowego, wielodyscyplinarnego podejścia i stałej samokontroli.",
  heroStats: [
    { stat: "537 mln", label: "Osób z cukrzycą na świecie (2021)" },
    { stat: "6.7 mln", label: "Zgonów rocznie z powodu cukrzycy" },
    { stat: "3x", label: "większe ryzyko zawału serca" },
    { stat: "40%", label: "chorych ma powikłania nerkowe" }
  ],
  
  conditionDescription: "Cukrzyca jest przewlekłą chorobą metaboliczną charakteryzującą się podwyższonym poziomem glukozy we krwi (hiperglikemią). Dzieli się na kilka typów: cukrzyca typu 1 (autoimmunologiczna), typu 2 (insulinooporność), cukrzyca ciążowa i inne specyficzne typy. Nieleczona prowadzi do poważnych powikłań mikro- i makronaczyniowych.",
  
  symptoms: [
    "Wzmożone pragnienie (polidypsja)",
    "Częste oddawanie moczu (wielomocz)",
    "Nieuzasadniona utrata masy ciała",
    "Zmęczenie i osłabienie",
    "Zaburzenia widzenia",
    "Wolne gojenie się ran",
    "Nawracające infekcje",
    "Mrowienie lub drętwienie kończyn"
  ],
  
  causes: [
    "Cukrzyca typu 1: autoimmunologiczne niszczenie komórek beta trzustki",
    "Cukrzyca typu 2: insulinooporność i względny niedobór insuliny",
    "Czynniki genetyczne i rodzinne",
    "Otyłość i brak aktywności fizycznej",
    "Choroby trzustki",
    "Zaburzenia hormonalne",
    "Niektóre leki"
  ],
  
  riskFactors: [
    "Otyłość (szczególnie brzuszna)",
    "Wiek powyżej 45 lat",
    "Cukrzyca w rodzinie",
    "Stan przedcukrzycowy",
    "Nadciśnienie tętnicze",
    "Dyslipidemia",
    "Cukrzyca ciążowa w wywiadzie",
    "Zespół policystycznych jajników (PCOS)"
  ],
  
  treatmentOptions: [
    {
      name: "Terapia insulinowa",
      type: "Leczenie farmakologiczne",
      description: "Podstawowa metoda leczenia cukrzycy typu 1 i zaawansowanej typu 2. Obejmuje różne schematy insulinoterapii: bazalno-bolusowa, pompowa, z użyciem nowoczesnych analogów insuliny.",
      pros: [
        "Skuteczna kontrola glikemii",
        "Elastyczność w dostosowaniu dawek",
        "Nowoczesne systemy monitorowania",
        "Możliwość intensywnej insulinoterapii",
        "Zapobieganie ostrym powikłaniom"
      ],
      cons: [
        "Ryzyko hipoglikemii",
        "Konieczność wielokrotnych wstrzyknięć",
        "Przyrost masy ciała",
        "Koszty leczenia",
        "Wymaga edukacji i samokontroli"
      ]
    },
    {
      name: "Leki doustne i nowe terapie",
      type: "Leczenie farmakologiczne",
      description: "Szeroka gama leków o różnych mechanizmach działania: zwiększające wrażliwość na insulinę, stymulujące jej wydzielanie, zmniejszające wchłanianie glukozy, inkretyny i flozyny.",
      pros: [
        "Różne mechanizmy działania",
        "Dobre profile bezpieczeństwa",
        "Dodatkowe korzyści (ochrona nerek, serca)",
        "Łatwość stosowania",
        "Refundacja wielu preparatów"
      ],
      cons: [
        "Możliwe działania niepożądane",
        "Ew. konieczność łączenia z insuliną",
        "Ograniczenia w niewydolności narządów",
        "Koszty nowszych terapii",
        "Interakcje z innymi lekami"
      ]
    },
    {
      name: "Edukacja i samokontrola",
      type: "Leczenie niefarmakologiczne",
      description: "Podstawa leczenia cukrzycy obejmująca edukację żywieniową, naukę samokontroli glikemii, modyfikację stylu życia i umiejętność podejmowania decyzji terapeutycznych.",
      pros: [
        "Umożliwia samodzielne zarządzanie chorobą",
        "Zmniejsza ryzyko powikłań",
        "Poprawia jakość życia",
        "Efektywne kosztowo",
        "Empowerment pacjenta"
      ],
      cons: [
        "Wymaga zaangażowania i czasu",
        "Trudności w utrzymaniu motywacji",
        "Konieczność ciągłego uczenia się",
        "Dostępność programów edukacyjnych",
        "Różnice w kompetencjach pacjentów"
      ]
    }
  ],
  
  treatmentProcess: [
    {
      step: 1,
      title: "Diagnostyka i klasyfikacja",
      description: "Określenie typu cukrzycy na podstawie badań: glikemia na czczo, OGTT, HbA1c, przeciwciała, ocena powikłań i chorób współistniejących.",
      duration: "1-2 tygodnie"
    },
    {
      step: 2,
      title: "Ustalenie celów terapeutycznych",
      description: "Indywidualne wyznaczenie celów glikemicznych (HbA1c), ciśnienia tętniczego, lipidogramu oraz opracowanie planu leczenia.",
      duration: "2-4 tygodnie"
    },
    {
      step: 3,
      title: "Inicjacja i optymalizacja leczenia",
      description: "Wdrożenie odpowiedniej terapii farmakologicznej, edukacja, ustalenie planu żywieniowego i aktywności fizycznej.",
      duration: "3-6 miesięcy"
    },
    {
      step: 4,
      title: "Monitorowanie i zapobieganie powikłaniom",
      description: "Regularne kontrole, ocena skuteczności leczenia, badania przesiewowe w kierunku powikłań, modyfikacje terapii.",
      duration: "Dożywotnio"
    }
  ],
  
  costInfo: {
    consultationCost: "",
    prescriptionCost: "",
    insuranceCoverage: "",
    availability: ""
  },
  
indications: [
  "Regularna samokontrola glikemii",
  "Przestrzeganie zaleceń żywieniowych (dieta z kontrolą węglowodanów)",
  "Regularna aktywność fizyczna dostosowana do typu cukrzycy i stanu zdrowia",
  "Systematyczne przyjmowanie leków (doustnych lub insuliny) według zaleceń",
  "Regularne kontrole u lekarza (diabetologa) i badania przesiewowe w kierunku powikłań",
  "Utrzymanie prawidłowej masy ciała",
  "Edukacja diabetologiczna i udział w szkołach dla chorych na cukrzycę"
],

contraindications: [
  "Spożywanie dużych ilości cukrów prostych i tłuszczów nasyconych",
  "Palenie tytoniu i nadużywanie alkoholu",
  "Nieregularne przyjmowanie leków lub modyfikowanie dawek bez konsultacji",
  "Zaniedbywanie samokontroli i opuszczanie wizyt kontrolnych",
  "Stosowanie niezatwierdzonych metod leczenia (tzw. cudownych leków)"
],
  
  faqs: [
    {
      question: "Jaka jest różnica między cukrzycą typu 1 a typu 2?",
      answer: "Cukrzyca typu 1 jest chorobą autoimmunologiczną, w której układ odpornościowy niszczy komórki beta trzustki produkujące insulinę. Wymaga leczenia insuliną od początku. Cukrzyca typu 2 wynika z insulinooporności i względnego niedoboru insuliny. Często związana z otyłością, początkowo może być leczona dietą, lekami doustnymi, a insulinę wprowadza się w późniejszym etapie."
    },
    {
      question: "Czy cukrzycę można wyleczyć?",
      answer: "Cukrzyca typu 1 jest obecnie nieuleczalna, ale można ją skutecznie kontrolować. W cukrzycy typu 2 w niektórych przypadkach (szczególnie przy wczesnym wykryciu i intensywnym leczeniu) możliwe jest osiągnięcie remisji, czyli normalizacji glikemii bez leków. Jednak nawet wtedy choroba wymaga stałej czujności i kontroli stylu życia."
    },
    {
      question: "Czym jest HbA1c i dlaczego jest ważny?",
      answer: "HbA1c (hemoglobina glikowana) odzwierciedla średnie stężenie glukozy we krwi z ostatnich 2-3 miesięcy. Jest kluczowym wskaźnikiem kontroli cukrzycy. Cel terapeutyczny zwykle wynosi <7%, ale może być indywidualizowany. Każde 1% redukcji HbA1c zmniejsza ryzyko powikłań mikronaczyniowych o 35%."
    }
  ],
  
  statistics: [
    { value: "1 na 10", description: "dorosłych ma cukrzycę" },
    { value: "50%", description: "chorych na cukrzycę typu 2 nie wie o swojej chorobie" },
    { value: "80%", description: "przedwczesnych zgonów z powodu cukrzycy można zapobiec" },
    { value: "3-4x", description: "większe ryzyko chorób sercowo-naczyniowych" }
  ],
  
  relatedConditions: ["otyłość", "nadciśnienie", "dyslipidemia", "retinopatia", "neuropatia", "nefropatia"]
}




];