import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, FileText } from "lucide-react";

export default function RegulaminPage() {
  return (
    <>
      <Header />
      <main className="bg-[#FCFDFD] min-h-screen pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white p-8 md:p-12 lg:p-16 rounded-[32px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-slate-100 mb-8">
            
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-[#EAF3F0] rounded-2xl flex items-center justify-center text-[#147A60]">
                <FileText className="w-8 h-8" />
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 text-center tracking-tight">
              Regulamin Organizacyjny
            </h1>
            <h2 className="text-lg md:text-xl font-bold text-slate-600 mb-10 text-center">
              Podmiotu Leczniczego Lekarze i Terapeuci<br />
              <span className="text-sm font-medium text-slate-400">prowadzonego przez Nowa Przyszłość sp. z o.o.</span>
            </h2>
            
            <div className="bg-[#EAF3F0]/50 p-6 sm:p-8 rounded-2xl border border-[#D5EAE6] mb-12 text-sm shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                <div className="flex flex-col"><span className="text-slate-500 font-semibold mb-1 text-[11px] uppercase tracking-wider">Podmiot</span> <span className="text-slate-800 font-bold">Nowa Przyszłość sp. z o.o.</span></div>
                <div className="flex flex-col"><span className="text-slate-500 font-semibold mb-1 text-[11px] uppercase tracking-wider">Siedziba i adres</span> <span className="text-slate-800 font-bold">Michała Kajki 10-12, 10-547 Olsztyn</span></div>
                <div className="flex flex-col"><span className="text-slate-500 font-semibold mb-1 text-[11px] uppercase tracking-wider">KRS</span> <span className="text-slate-800 font-bold">0001235181</span></div>
                <div className="flex flex-col"><span className="text-slate-500 font-semibold mb-1 text-[11px] uppercase tracking-wider">NIP</span> <span className="text-slate-800 font-bold">7412175965</span></div>
                <div className="flex flex-col"><span className="text-slate-500 font-semibold mb-1 text-[11px] uppercase tracking-wider">REGON</span> <span className="text-slate-800 font-bold">544493932</span></div>
                <div className="flex flex-col"><span className="text-slate-500 font-semibold mb-1 text-[11px] uppercase tracking-wider">Kontakt elektroniczny</span> <a href="mailto:kontakt@lekarzeiterapeuci.pl" className="text-[#147A60] hover:underline font-bold">kontakt@lekarzeiterapeuci.pl</a></div>
                <div className="flex flex-col"><span className="text-slate-500 font-semibold mb-1 text-[11px] uppercase tracking-wider">Platforma</span> <a href="https://www.lekarzeiterapeuci.pl" className="text-[#147A60] hover:underline font-bold">www.lekarzeiterapeuci.pl</a></div>
                <div className="flex flex-col"><span className="text-slate-500 font-semibold mb-1 text-[11px] uppercase tracking-wider">Numer księgi rejestrowej RPWDL</span> <span className="text-slate-800 font-bold">000000305622</span></div>
              </div>
              <div className="mt-6 pt-5 border-t border-[#D5EAE6] text-slate-500 text-xs font-semibold flex items-center justify-center gap-2">
                <Shield className="w-4 h-4 text-[#147A60]" />
                Wersja: 1.0 | Data wejścia w życie: dzień przyjęcia przez Zarząd i publikacji na Platformie
              </div>
            </div>

            <div className="space-y-12 text-sm md:text-[15px] text-slate-600 leading-relaxed font-medium">
              
              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">§ 1</span>
                  Postanowienia ogólne
                </h3>
                <ol className="list-decimal pl-6 space-y-3 marker:text-slate-400 marker:font-bold">
                  <li>Niniejszy Regulamin Organizacyjny określa organizację, sposób i warunki udzielania świadczeń zdrowotnych przez podmiot leczniczy działający pod nazwą operacyjną Lekarze i Terapeuci, prowadzony przez Nowa Przyszłość sp. z o.o. z siedzibą w Olsztynie.</li>
                  <li>Podmiot Leczniczy wykonuje działalność leczniczą w modelu ambulatoryjnym, w szczególności w formie świadczeń udzielanych na odległość przy użyciu systemów teleinformatycznych lub systemów łączności, za pośrednictwem Platformy lekarzeiterapeuci.pl.</li>
                  <li>Regulamin ma zastosowanie do Pacjentów, osób wykonujących zawody medyczne, personelu administracyjnego, współpracowników, podwykonawców oraz innych osób uczestniczących w organizacji lub udzielaniu świadczeń zdrowotnych w ramach Podmiotu Leczniczego.</li>
                  <li>Regulamin nie zastępuje Regulaminu Platformy, Polityki Prywatności, Polityki plików cookies, dokumentów RODO, procedur medycznych, procedur bezpieczeństwa informacji ani indywidualnej dokumentacji medycznej Pacjenta.</li>
                  <li>W zakresie nieuregulowanym Regulaminem stosuje się powszechnie obowiązujące przepisy prawa, w szczególności przepisy dotyczące działalności leczniczej, praw pacjenta, zawodów medycznych, dokumentacji medycznej, ochrony danych osobowych, świadczenia usług drogą elektroniczną oraz praw konsumenta.</li>
                </ol>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">§ 2</span>
                  Dane identyfikacyjne Podmiotu Leczniczego
                </h3>
                <ol className="list-decimal pl-6 space-y-3 marker:text-slate-400 marker:font-bold">
                  <li>Firma podmiotu: Nowa Przyszłość sp. z o.o.</li>
                  <li>Nazwa operacyjna podmiotu leczniczego: Lekarze i Terapeuci.</li>
                  <li>Siedziba i adres: Michała Kajki 10-12, 10-547 Olsztyn.</li>
                  <li>KRS: 0001235181. NIP: 7412175965. REGON: 544493932.</li>
                  <li>Adres e-mail: kontakt@lekarzeiterapeuci.pl. Platforma internetowa: www.lekarzeiterapeuci.pl.</li>
                  <li>Numer księgi rejestrowej RPWDL: 000000305622.</li>
                  <li>Dane rejestrowe, nazwy jednostek i komórek organizacyjnych, adresy oraz zakres świadczeń są utrzymywane zgodnie z wpisem w Rejestrze Podmiotów Wykonujących Działalność Leczniczą.</li>
                </ol>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">§ 3</span>
                  Podstawy działania
                </h3>
                <ol className="list-decimal pl-6 space-y-3 marker:text-slate-400 marker:font-bold">
                  <li>Podmiot Leczniczy działa na podstawie powszechnie obowiązujących przepisów prawa, w szczególności ustawy o działalności leczniczej, ustawy o prawach pacjenta i Rzeczniku Praw Pacjenta, przepisów dotyczących zawodów medycznych, przepisów o ochronie danych osobowych oraz przepisów dotyczących świadczenia usług drogą elektroniczną.</li>
                  <li>Podmiot Leczniczy działa również na podstawie wpisu do Rejestru Podmiotów Wykonujących Działalność Leczniczą, umowy spółki Nowa Przyszłość sp. z o.o., niniejszego Regulaminu Organizacyjnego oraz procedur wewnętrznych obowiązujących w Podmiocie Leczniczym.</li>
                  <li>Korzystanie z Platformy, zawieranie umów drogą elektroniczną, płatności, reklamacje, odstąpienie od umowy, funkcjonalności konta oraz zasady komunikacji z Użytkownikiem określa odrębny Regulamin Platformy.</li>
                </ol>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">§ 4</span>
                  Cele Podmiotu Leczniczego
                </h3>
                <ol className="list-decimal pl-6 space-y-3 marker:text-slate-400 marker:font-bold">
                  <li>Celem Podmiotu Leczniczego jest organizowanie i udzielanie świadczeń zdrowotnych w modelu ambulatoryjnym, w szczególności w formie telemedycznej, z zachowaniem bezpieczeństwa Pacjenta, aktualnej wiedzy medycznej, zasad etyki zawodowej, praw pacjenta i wymagań prawnych.</li>
                  <li>Cele obejmują w szczególności: udzielanie konsultacji lekarskich, terapeutycznych i innych świadczeń zgodnych z kwalifikacjami personelu oraz wpisem rejestrowym; ułatwienie Pacjentom dostępu do konsultacji online; prowadzenie kwalifikacji wstępnej; prowadzenie dokumentacji medycznej; informowanie Pacjentów o zasadach korzystania ze świadczeń; promocję zdrowia i profilaktykę; doskonalenie jakości oraz bezpieczeństwa teleinformatycznego.</li>
                </ol>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">§ 5</span>
                  Zadania Podmiotu Leczniczego
                </h3>
                <ol className="list-decimal pl-6 space-y-3 marker:text-slate-400 marker:font-bold">
                  <li>Do zadań Podmiotu Leczniczego należy w szczególności: udzielanie świadczeń zdrowotnych przez osoby uprawnione; organizowanie teleporad, konsultacji online i wizyt stacjonarnych, jeżeli są dostępne w ofercie; przyjmowanie formularzy medycznych i dokumentów; prowadzenie kwalifikacji do świadczeń zdalnych; wystawianie dokumentów medycznych wyłącznie, gdy istnieją podstawy medyczne i prawne; zapewnienie właściwego obiegu informacji; ochrona danych i tajemnicy zawodowej; obsługa rejestracji, płatności, reklamacji i dokumentacji; monitorowanie jakości świadczeń oraz zdarzeń niepożądanych.</li>
                  <li>Podmiot Leczniczy rozwija katalog świadczeń, specjalności, formularzy i kanałów komunikacji w zakresie zgodnym z wpisem RPWDL, kwalifikacjami personelu, Regulaminem Platformy i obowiązującym prawem.</li>
                </ol>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">§ 6</span>
                  Rodzaj działalności leczniczej i zakres świadczeń
                </h3>
                <ol className="list-decimal pl-6 space-y-3 marker:text-slate-400 marker:font-bold">
                  <li>Podmiot Leczniczy wykonuje działalność leczniczą w rodzaju ambulatoryjne świadczenia zdrowotne, w zakresie wynikającym z wpisu do RPWDL, dostępności personelu oraz opisów usług opublikowanych na Platformie.</li>
                  <li>Świadczenia mogą być udzielane w szczególności jako: teleporada lekarska, konsultacja online, konsultacja terapeutyczna lub psychologiczna, analiza dokumentacji medycznej, wydanie zaleceń medycznych, edukacyjnych lub terapeutycznych, wystawienie dokumentów medycznych oraz wizyta stacjonarna, jeżeli dana forma świadczenia jest dostępna w ofercie.</li>
                  <li>Katalog świadczeń nie oznacza obowiązku udzielenia każdego świadczenia każdemu Pacjentowi. O kwalifikacji do konsultacji, zakresie porady, konieczności badania osobistego oraz ewentualnym wystawieniu dokumentu decyduje osoba wykonująca zawód medyczny, zgodnie z aktualną wiedzą medyczną i przepisami prawa.</li>
                  <li>Zakup konsultacji nie jest zakupem e-recepty, e-ZLA, e-skierowania, zaświadczenia, opinii, rozpoznania ani innego rezultatu medycznego. Opłata dotyczy organizacji i udzielenia świadczenia albo gotowości do jego udzielenia zgodnie z Regulaminem Platformy.</li>
                </ol>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">§ 7</span>
                  Struktura organizacyjna
                </h3>
                <ol className="list-decimal pl-6 space-y-3 marker:text-slate-400 marker:font-bold">
                  <li>Struktura organizacyjna obejmuje: Zarząd Nowa Przyszłość sp. z o.o.; Kierownika Podmiotu Leczniczego; Koordynatora medycznego, jeżeli został powołany; personel medyczny; personel administracyjny; wsparcie techniczne i bezpieczeństwa; podwykonawców lub partnerów uczestniczących w realizacji świadczeń.</li>
                  <li>Zarząd zatwierdza Regulamin Organizacyjny, cennik, procedury i organizację pracy. Kierownik Podmiotu Leczniczego odpowiada za organizację udzielania świadczeń i nadzór nad zgodnością działalności z prawem. Koordynator medyczny, jeżeli został powołany, nadzoruje standardy teleporad, kwalifikację przypadków i kwestie jakościowe.</li>
                  <li>Podmiot Leczniczy tworzy, łączy, przekształca albo likwiduje jednostki i komórki organizacyjne w zakresie uzasadnionym rodzajem i zakresem świadczeń, wpisem rejestrowym, organizacją pracy albo wymogami prawnymi.</li>
                </ol>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">§ 8</span>
                  Jednostki i komórki organizacyjne
                </h3>
                <ol className="list-decimal pl-6 space-y-3 marker:text-slate-400 marker:font-bold">
                  <li>W modelu telemedycznym podstawową jednostką organizacyjną jest Centrum Telemedyczne Lekarze i Terapeuci, odpowiedzialne za organizację i udzielanie świadczeń zdrowotnych na odległość za pośrednictwem Platformy.</li>
                  <li>W ramach Podmiotu Leczniczego funkcjonują w szczególności: Rejestracja i Obsługa Pacjenta, Zespół Lekarski, Zespół Terapeutyczny i Psychologiczny, Zespół Dokumentacji Medycznej, Wsparcie Techniczne i Bezpieczeństwo, Obsługa Płatności i Reklamacji oraz Dział Współpracy z Personelem Medycznym, w zakresie w jakim są wymagane dla realizacji świadczeń.</li>
                  <li>Personel administracyjny wspiera obsługę organizacyjną, ale nie udziela porad medycznych, nie interpretuje wyników badań, nie przesądza o wystawieniu dokumentów medycznych i nie zastępuje osoby wykonującej zawód medyczny.</li>
                  <li>Szczegółowe nazwy poradni, profile komórek, kody resortowe, adresy oraz zakresy świadczeń odpowiadają wpisowi w RPWDL.</li>
                </ol>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">§ 9</span>
                  Miejsce i czas udzielania świadczeń
                </h3>
                <ol className="list-decimal pl-6 space-y-3 marker:text-slate-400 marker:font-bold">
                  <li>Świadczenia telemedyczne są udzielane na odległość za pośrednictwem Platformy oraz systemów teleinformatycznych lub systemów łączności.</li>
                  <li>Miejscem organizacji działalności Podmiotu Leczniczego jest siedziba Nowa Przyszłość sp. z o.o.: Michała Kajki 10-12, 10-547 Olsztyn.</li>
                  <li>W przypadku świadczeń udzielanych na odległość miejscem udzielania świadczenia może być miejsce przebywania osoby wykonującej zawód medyczny, o ile zapewnia ono poufność, bezpieczeństwo danych, stabilny dostęp do zatwierdzonych narzędzi oraz warunki wymagane do należytego wykonania świadczenia.</li>
                  <li>Godziny dostępności świadczeń, okna kontaktu, dyżury personelu oraz przewidywany czas obsługi są określane w harmonogramie, cenniku, opisie usługi albo komunikatach na Platformie. Podmiot Leczniczy może obsługiwać zamówienia złożone poza godzinami pracy w pierwszej kolejności w następnym dostępnym oknie obsługi.</li>
                  <li>Podmiot Leczniczy nie prowadzi działalności szpitalnej, całodobowej opieki stacjonarnej, oddziałów łóżkowych ani szpitalnego oddziału ratunkowego, chyba że taki zakres świadczeń wynika z wpisu RPWDL i jest opisany w Regulaminie.</li>
                </ol>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">§ 10</span>
                  Przebieg udzielania świadczeń telemedycznych
                </h3>
                <ol className="list-decimal pl-6 space-y-3 marker:text-slate-400 marker:font-bold">
                  <li>Standardowy przebieg świadczenia telemedycznego obejmuje: wybór usługi na Platformie; podanie danych lub założenie Konta Pacjenta; akceptację wymaganych regulaminów, zgód i oświadczeń; wypełnienie formularza medycznego, jeżeli jest wymagany; dokonanie płatności; kwalifikację wstępną; kontakt z osobą udzielającą świadczenia; udzielenie świadczenia; sporządzenie dokumentacji medycznej; przekazanie zaleceń lub informacji organizacyjnych.</li>
                  <li>Konsultacja może zostać zrealizowana telefonicznie, wideo, przez czat, formularz medyczny, analizę dokumentacji albo inny zatwierdzony kanał komunikacji, odpowiedni do charakteru usługi i wymogów prawa.</li>
                  <li>Jeżeli Pacjent nie odbierze połączenia, nie połączy się w wyznaczonym terminie, poda błędne dane kontaktowe albo nie zapewni warunków technicznych, Podmiot Leczniczy może podjąć określoną w Regulaminie Platformy liczbę prób kontaktu. Po bezskutecznych próbach świadczenie może zostać uznane za wykonane albo gotowe do wykonania, jeżeli personel pozostawał w gotowości i brak realizacji wynikał z przyczyn leżących po stronie Pacjenta.</li>
                  <li>Podmiot Leczniczy może zmienić termin świadczenia, zastosować kanał awaryjny albo zwrócić płatność, jeżeli świadczenie nie może zostać wykonane z przyczyn technicznych lub organizacyjnych leżących po stronie Podmiotu Leczniczego.</li>
                </ol>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">§ 11</span>
                  Kwalifikacja do świadczeń i ograniczenia telemedycyny
                </h3>
                <ol className="list-decimal pl-6 space-y-3 marker:text-slate-400 marker:font-bold">
                  <li>Nie każdy problem zdrowotny może być bezpiecznie oceniony zdalnie. Osoba udzielająca świadczenia może odmówić dalszej konsultacji online i zalecić wizytę osobistą, kontakt z innym specjalistą, diagnostykę stacjonarną albo pilną pomoc.</li>
                  <li>Podmiot Leczniczy nie gwarantuje wystawienia e-recepty, e-skierowania, e-ZLA, zaświadczenia ani opinii. Decyzja w tym zakresie należy do osoby uprawnionej i musi mieć podstawę medyczną oraz prawną.</li>
                  <li>W przypadku leków, substancji, świadczeń albo dokumentów, dla których przepisy prawa, standardy bezpieczeństwa albo stan kliniczny Pacjenta wymagają osobistego badania, dodatkowej dokumentacji, weryfikacji tożsamości lub konsultacji określoną metodą komunikacji, świadczenie zdalne może zostać ograniczone albo odmówione.</li>
                  <li>W przypadku objawów mogących wskazywać na stan nagły Pacjent powinien niezwłocznie skontaktować się z numerem alarmowym 112 albo zgłosić się do najbliższej placówki udzielającej pomocy w trybie nagłym.</li>
                  <li>Podanie nieprawdziwych, niepełnych lub cudzych danych może skutkować odmową świadczenia, rozwiązaniem umowy, blokadą Konta Pacjenta, odmową wystawienia dokumentu medycznego oraz odpowiedzialnością Pacjenta na zasadach ogólnych.</li>
                </ol>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">§ 12</span>
                  Zasady pracy osób wykonujących zawody medyczne
                </h3>
                <ol className="list-decimal pl-6 space-y-3 marker:text-slate-400 marker:font-bold">
                  <li>Osoby wykonujące zawody medyczne są zobowiązane do posiadania aktualnych uprawnień zawodowych i kwalifikacji, udzielania świadczeń zgodnie z aktualną wiedzą medyczną, prowadzenia dokumentacji medycznej, zachowania tajemnicy zawodowej, korzystania z zatwierdzonych kanałów komunikacji, odmowy wystawienia dokumentów przy braku podstaw oraz kierowania Pacjenta do właściwej formy pomocy, jeżeli konsultacja zdalna jest niewystarczająca.</li>
                  <li>Osoby wykonujące zawody medyczne zgłaszają zdarzenia niepożądane, incydenty bezpieczeństwa, błędy techniczne, podejrzenie nadużycia, próby wyłudzenia dokumentów medycznych oraz sytuacje wymagające interwencji organizacyjnej.</li>
                  <li>Personel medyczny wykonujący świadczenia w modelu B2B ponosi odpowiedzialność zawodową w zakresie wynikającym z przepisów prawa i zawartej umowy oraz utrzymuje wymagane ubezpieczenie OC, jeżeli obowiązek taki wynika z prawa lub umowy.</li>
                </ol>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">§ 13</span>
                  Rejestracja, identyfikacja i kontakt z Pacjentem
                </h3>
                <ol className="list-decimal pl-6 space-y-3 marker:text-slate-400 marker:font-bold">
                  <li>Rejestracja odbywa się za pośrednictwem Platformy albo innego kanału wskazanego przez Podmiot Leczniczy. Pacjent podaje dane identyfikacyjne, kontaktowe, rozliczeniowe i medyczne w zakresie niezbędnym do wykonania świadczenia.</li>
                  <li>Podmiot Leczniczy może wymagać potwierdzenia tożsamości Pacjenta, w szczególności w razie wątpliwości co do danych, potrzeby wystawienia dokumentu medycznego, działania przez przedstawiciela ustawowego, ryzyka podszywania się pod inną osobę albo wymogów wynikających z przepisów.</li>
                  <li>Weryfikacja może obejmować potwierdzenie numeru telefonu, adresu e-mail, danych identyfikacyjnych, pytań weryfikacyjnych, okazanie dokumentu tożsamości, wideoweryfikację albo inną metodę adekwatną do ryzyka i celu.</li>
                  <li>Kontakt z Pacjentem odbywa się na numer telefonu, adres e-mail lub przez Konto Pacjenta wskazane przez Pacjenta. Pacjent odpowiada za aktualność danych kontaktowych i dostępność w uzgodnionym terminie.</li>
                </ol>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">§ 14</span>
                  Dokumentacja medyczna
                </h3>
                <ol className="list-decimal pl-6 space-y-3 marker:text-slate-400 marker:font-bold">
                  <li>Dla świadczeń zdrowotnych Podmiot Leczniczy prowadzi dokumentację medyczną zgodnie z przepisami prawa.</li>
                  <li>Dokumentacja medyczna może być prowadzona w postaci elektronicznej, w systemach teleinformatycznych spełniających wymagania bezpieczeństwa, integralności, dostępności i rozliczalności danych.</li>
                  <li>W dokumentacji odnotowuje się w szczególności istotne informacje przekazane przez Pacjenta, przebieg konsultacji, rozpoznanie lub ocenę, zalecenia, wystawione dokumenty, odmowę wystawienia dokumentu, decyzję o skierowaniu Pacjenta do innej formy pomocy oraz istotne problemy techniczne lub organizacyjne wpływające na świadczenie.</li>
                  <li>Dokumentacja medyczna jest przechowywana przez okres wymagany przepisami prawa, z zachowaniem zasad poufności, integralności i dostępności.</li>
                </ol>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">§ 15</span>
                  Udostępnianie dokumentacji medycznej
                </h3>
                <ol className="list-decimal pl-6 space-y-3 marker:text-slate-400 marker:font-bold">
                  <li>Dokumentacja medyczna jest udostępniana Pacjentowi, jego przedstawicielowi ustawowemu albo osobie upoważnionej przez Pacjenta, zgodnie z przepisami prawa.</li>
                  <li>Wniosek o udostępnienie dokumentacji może zostać złożony elektronicznie na adres e-mail Podmiotu Leczniczego, przez Konto Pacjenta albo w inny sposób wskazany przez Podmiot Leczniczy.</li>
                  <li>Podmiot Leczniczy może wymagać potwierdzenia tożsamości osoby składającej wniosek lub weryfikacji uprawnienia do uzyskania dokumentacji.</li>
                  <li>Dokumentacja może być udostępniana w postaci elektronicznej, kopii, odpisu, wyciągu, wydruku albo przez wgląd, jeżeli taka forma jest możliwa i zgodna z przepisami.</li>
                </ol>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">§ 16</span>
                  Prawa i obowiązki Pacjenta
                </h3>
                <ol className="list-decimal pl-6 space-y-3 marker:text-slate-400 marker:font-bold">
                  <li>Pacjent ma w szczególności prawo do świadczeń odpowiadających wymaganiom aktualnej wiedzy medycznej, informacji o swoim stanie zdrowia, wyrażenia zgody albo odmowy zgody na świadczenie, poszanowania intymności i godności, poufności informacji, dostępu do dokumentacji medycznej oraz złożenia reklamacji, skargi lub wniosku.</li>
                  <li>Pacjent jest zobowiązany w szczególności do podawania prawdziwych i kompletnych informacji, przekazania dokumentów medycznych potrzebnych do oceny sprawy, przestrzegania Regulaminu Platformy i niniejszego Regulaminu, zapewnienia warunków umożliwiających poufną konsultację online, odbierania korespondencji i połączeń, korzystania z zaleceń zgodnie z instrukcjami oraz niezwłocznego kontaktu z pomocą doraźną w stanach nagłych.</li>
                  <li>Pacjent nie może nadużywać Platformy, podejmować prób uzyskania dokumentów medycznych bez podstaw, podawać cudzych danych, posługiwać się dokumentacją innej osoby ani zakłócać pracy personelu.</li>
                </ol>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">§ 17</span>
                  Odpłatność za świadczenia
                </h3>
                <ol className="list-decimal pl-6 space-y-3 marker:text-slate-400 marker:font-bold">
                  <li>Podmiot Leczniczy udziela świadczeń odpłatnie, chyba że przy danej usłudze wyraźnie wskazano inaczej.</li>
                  <li>Aktualny Cennik jest udostępniany Pacjentom na Platformie przed zawarciem umowy i dokonaniem płatności. Cena wskazana przy składaniu zamówienia jest ceną wiążącą dla wybranego świadczenia.</li>
                  <li>Płatności są obsługiwane przez zewnętrznego operatora płatności wskazanego na Platformie.</li>
                  <li>Zasady zwrotów, anulowania konsultacji, reklamacji i odstąpienia od umowy określa Regulamin Platformy oraz przepisy prawa.</li>
                  <li>Opłata za konsultację nie jest opłatą za wystawienie recepty, zwolnienia, skierowania, zaświadczenia lub innego dokumentu. Brak podstaw medycznych lub prawnych do wystawienia dokumentu nie oznacza automatycznie niewykonania konsultacji.</li>
                </ol>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">§ 18</span>
                  Jakość, bezpieczeństwo i ciągłość działania
                </h3>
                <ol className="list-decimal pl-6 space-y-3 marker:text-slate-400 marker:font-bold">
                  <li>Podmiot Leczniczy prowadzi działania służące zapewnieniu jakości świadczeń, bezpieczeństwa Pacjentów i poprawności działania Platformy.</li>
                  <li>Jakość świadczeń monitorowana jest w szczególności przez analizę reklamacji, zgłoszeń technicznych, zdarzeń niepożądanych, dostępności personelu, kompletności dokumentacji, zgodności formularzy z zakresem usług oraz zgodności działań z Regulaminem Platformy.</li>
                  <li>Dostęp do danych Pacjentów jest nadawany według zasady minimalnych uprawnień i wyłącznie osobom, którym dostęp jest niezbędny do wykonania zadań.</li>
                  <li>W przypadku awarii Platformy Podmiot Leczniczy może czasowo wstrzymać rejestrację, zmienić termin świadczenia, zastosować kanał awaryjny albo zwrócić płatność, jeżeli świadczenie nie może zostać wykonane.</li>
                </ol>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">§ 19</span>
                  Polityka prywatności, cookies i systemy teleinformatyczne
                </h3>
                <ol className="list-decimal pl-6 space-y-3 marker:text-slate-400 marker:font-bold">
                  <li>Zasady przetwarzania danych osobowych określa Polityka Prywatności dostępna na Platformie. Zasady wykorzystywania plików cookies i podobnych technologii określa Polityka plików cookies dostępna na Platformie.</li>
                  <li>Systemy teleinformatyczne używane przez Podmiot Leczniczy umożliwiają identyfikację użytkowników, kontrolę dostępu, ochronę transmisji danych, zachowanie integralności dokumentacji oraz ograniczenie dostępu osobom nieuprawnionym.</li>
                  <li>Dane dotyczące zdrowia, treść formularzy medycznych, dokumentacja medyczna i informacje o przebiegu konsultacji nie są przekazywane do narzędzi marketingowych ani analitycznych, chyba że istnieje wyraźna, zgodna z prawem i udokumentowana podstawa takiego działania.</li>
                </ol>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">§ 20</span>
                  Skargi, reklamacje i wnioski
                </h3>
                <ol className="list-decimal pl-6 space-y-3 marker:text-slate-400 marker:font-bold">
                  <li>Reklamacje i wnioski organizacyjne Pacjent może zgłaszać na adres e-mail: kontakt@lekarzeiterapeuci.pl.</li>
                  <li>Zgłoszenie powinno zawierać imię i nazwisko Pacjenta, dane kontaktowe, opis sprawy, datę zdarzenia, numer zamówienia lub płatności, jeżeli dotyczy, oraz oczekiwanie Pacjenta, jeżeli jest sprecyzowane.</li>
                  <li>Reklamacje dotyczące działania Platformy, płatności i organizacji świadczeń są rozpatrywane zgodnie z Regulaminem Platformy. Skargi dotyczące sposobu udzielenia świadczenia zdrowotnego, dokumentacji medycznej albo praw pacjenta są analizowane z udziałem osoby upoważnionej przez Podmiot Leczniczy.</li>
                  <li>Podmiot Leczniczy udziela odpowiedzi bez zbędnej zwłoki, co do zasady w terminie 14 dni, chyba że charakter sprawy, przepisy prawa albo konieczność uzyskania dodatkowych informacji uzasadniają dłuższy termin.</li>
                </ol>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">§ 21</span>
                  Współpraca z innymi podmiotami
                </h3>
                <ol className="list-decimal pl-6 space-y-3 marker:text-slate-400 marker:font-bold">
                  <li>Podmiot Leczniczy może współpracować z innymi podmiotami wykonującymi działalność leczniczą, laboratoriami, dostawcami systemów teleinformatycznych, operatorami płatności, konsultantami, podwykonawcami oraz osobami prowadzącymi działalność zawodową.</li>
                  <li>Współpraca nie może naruszać praw Pacjenta, tajemnicy zawodowej, ochrony danych osobowych ani zasad bezpieczeństwa dokumentacji medycznej.</li>
                  <li>Jeżeli świadczenie jest udzielane przez zewnętrzny podmiot leczniczy albo niezależnego świadczeniodawcę, Pacjent otrzymuje informację, kto jest podmiotem odpowiedzialnym za udzielenie danego świadczenia.</li>
                  <li>Podmiot Leczniczy może kierować Pacjentów do innych form pomocy, jeżeli wymaga tego stan zdrowia, zakres kompetencji personelu albo ograniczenia telemedycyny.</li>
                </ol>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">§ 22</span>
                  Postępowanie w sytuacjach nagłych i kryzysowych
                </h3>
                <ol className="list-decimal pl-6 space-y-3 marker:text-slate-400 marker:font-bold">
                  <li>Platforma nie służy do obsługi stanów bezpośredniego zagrożenia życia lub zdrowia.</li>
                  <li>Pacjent jest informowany, że w sytuacjach nagłych powinien skorzystać z numeru alarmowego 112, szpitalnego oddziału ratunkowego, izby przyjęć albo najbliższej właściwej placówki.</li>
                  <li>Jeżeli w trakcie konsultacji osoba wykonująca zawód medyczny uzna, że występuje bezpośrednie zagrożenie życia lub zdrowia Pacjenta, może podjąć działania przewidziane prawem i procedurami, w tym zalecić albo zainicjować wezwanie pomocy medycznej.</li>
                  <li>W przypadku konsultacji psychiatrycznych, psychologicznych lub terapeutycznych, jeżeli Pacjent ujawnia bezpośrednie ryzyko samobójcze, ryzyko przemocy albo zagrożenie dla innych osób, osoba udzielająca konsultacji może podjąć działania przewidziane prawem i procedurami bezpieczeństwa.</li>
                </ol>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">§ 23</span>
                  Postanowienia dotyczące personelu administracyjnego
                </h3>
                <ol className="list-decimal pl-6 space-y-3 marker:text-slate-400 marker:font-bold">
                  <li>Personel administracyjny obsługuje sprawy organizacyjne, techniczne, płatnicze i informacyjne.</li>
                  <li>Personel administracyjny nie udziela świadczeń zdrowotnych, nie interpretuje dokumentacji medycznej, nie wydaje zaleceń medycznych i nie obiecuje wystawienia dokumentów medycznych.</li>
                  <li>Personel administracyjny może przekazywać Pacjentowi informacje o dostępnych terminach, cenach, zasadach rejestracji, statusie płatności, procedurze reklamacyjnej, sposobie uzyskania dokumentacji oraz technicznej obsłudze Platformy.</li>
                  <li>Osoby administracyjne przetwarzają dane Pacjentów wyłącznie w zakresie swoich obowiązków i na podstawie nadanych upoważnień.</li>
                </ol>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">§ 24</span>
                  Przyjmowanie i zmiana Regulaminu Organizacyjnego
                </h3>
                <ol className="list-decimal pl-6 space-y-3 marker:text-slate-400 marker:font-bold">
                  <li>Regulamin Organizacyjny jest przyjmowany przez Zarząd Nowa Przyszłość sp. z o.o. albo przez osobę uprawnioną do reprezentacji Podmiotu Leczniczego.</li>
                  <li>Zmiana Regulaminu Organizacyjnego może nastąpić w szczególności w razie zmiany przepisów prawa, wpisu RPWDL, zakresu świadczeń, struktury organizacyjnej, sposobu działania Platformy, cennika, procedur bezpieczeństwa, danych Podmiotu Leczniczego albo modelu współpracy z personelem lub partnerami.</li>
                  <li>Aktualna wersja Regulaminu jest udostępniana Pacjentom na Platformie albo w inny sposób przyjęty przez Podmiot Leczniczy.</li>
                  <li>Zmiana Regulaminu nie narusza praw Pacjentów wynikających z przepisów bezwzględnie obowiązujących ani czynności dokonanych przed wejściem zmiany w życie, chyba że przepisy prawa stanowią inaczej.</li>
                </ol>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">§ 25</span>
                  Postanowienia końcowe
                </h3>
                <ol className="list-decimal pl-6 space-y-3 marker:text-slate-400 marker:font-bold">
                  <li>Regulamin wchodzi w życie z dniem jego przyjęcia i publikacji na Platformie, chyba że uchwała albo zarządzenie wprowadzające wskazuje inną datę.</li>
                  <li>W przypadku rozbieżności pomiędzy Regulaminem Organizacyjnym a bezwzględnie obowiązującymi przepisami prawa pierwszeństwo mają przepisy prawa.</li>
                  <li>W przypadku rozbieżności pomiędzy niniejszym Regulaminem a wpisem RPWDL w zakresie danych rejestrowych, komórek organizacyjnych albo zakresu świadczeń, Podmiot Leczniczy aktualizuje Regulamin.</li>
                  <li>Integralnymi dokumentami uzupełniającymi organizację działania Podmiotu Leczniczego są w szczególności Regulamin Platformy, Polityka Prywatności, Polityka plików cookies, procedura udostępniania dokumentacji medycznej, procedura teleporady, procedura interwencji kryzysowej, procedura weryfikacji tożsamości, procedura ochrony danych osobowych oraz procedury bezpieczeństwa teleinformatycznego.</li>
                </ol>
              </section>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
