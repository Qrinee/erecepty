import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, FileText } from "lucide-react";

export default function WarunkiUmowyPage() {
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

            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 text-center tracking-tight uppercase">
              Regulamin Platformy
            </h1>
            <h2 className="text-lg md:text-xl font-bold text-slate-600 mb-10 text-center">
              Internetowej lekarzeiterapeuci.pl
            </h2>
            
            <div className="bg-[#EAF3F0]/50 p-6 sm:p-8 rounded-2xl border border-[#D5EAE6] mb-12 text-sm shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                <div className="flex flex-col"><span className="text-slate-500 font-semibold mb-1 text-[11px] uppercase tracking-wider">Platforma</span> <a href="https://www.lekarzeiterapeuci.pl" className="text-[#147A60] hover:underline font-bold">www.lekarzeiterapeuci.pl</a></div>
                <div className="flex flex-col"><span className="text-slate-500 font-semibold mb-1 text-[11px] uppercase tracking-wider">Administrator / Usługodawca</span> <span className="text-slate-800 font-bold">Nowa Przyszłość sp. z o.o. z siedzibą w Olsztynie</span></div>
                <div className="flex flex-col"><span className="text-slate-500 font-semibold mb-1 text-[11px] uppercase tracking-wider">Adres</span> <span className="text-slate-800 font-bold">Michała Kajki 10-12, 10-547 Olsztyn</span></div>
                <div className="flex flex-col"><span className="text-slate-500 font-semibold mb-1 text-[11px] uppercase tracking-wider">Rejestr</span> <span className="text-slate-800 font-bold">KRS 0001235181, NIP 7412175965, REGON 544493932, RPWDL 000000305622</span></div>
                <div className="flex flex-col"><span className="text-slate-500 font-semibold mb-1 text-[11px] uppercase tracking-wider">Kontakt</span> <a href="mailto:kontakt@lekarzeiterapeuci.pl" className="text-[#147A60] hover:underline font-bold">kontakt@lekarzeiterapeuci.pl</a></div>
                <div className="flex flex-col"><span className="text-slate-500 font-semibold mb-1 text-[11px] uppercase tracking-wider">Zakres</span> <span className="text-slate-800 font-bold">konto pacjenta, rezerwacje, konsultacje online, teleporady lekarskie, konsultacje terapeutyczne, wizyty stacjonarne, płatności online</span></div>
              </div>
              <div className="mt-6 pt-5 border-t border-[#D5EAE6] text-slate-500 text-xs font-semibold flex items-center justify-center gap-2">
                <Shield className="w-4 h-4 text-[#147A60]" />
                Wersja 1.0 | Data wejścia w życie: dzień publikacji na Platformie
              </div>
            </div>

            <div className="mb-10 text-center text-slate-500 font-medium text-[15px]">
              Dokument jest przeznaczony do publikacji w serwisie lekarzeiterapeuci.pl i określa zasady korzystania z Platformy oraz usług dostępnych za jej pośrednictwem.
            </div>

            <div className="space-y-12 text-sm md:text-[15px] text-slate-600 leading-relaxed font-medium">
              
              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">1</span>
                  Definicje
                </h3>
                <ul className="list-none space-y-4 pl-0 md:pl-6">
                  <li><strong>Administrator / Usługodawca</strong> - Nowa Przyszłość spółka z ograniczoną odpowiedzialnością z siedzibą w Olsztynie, adres: Michała Kajki 10-12, 10-547 Olsztyn, wpisana do rejestru przedsiębiorców Krajowego Rejestru Sądowego pod numerem KRS 0001235181, NIP 7412175965, REGON 544493932, RPWDL 000000305622, będąca administratorem Platformy oraz usługodawcą usług świadczonych drogą elektroniczną w zakresie opisanym w Regulaminie.</li>
                  <li><strong>Platforma</strong> - serwis internetowy działający pod adresem www.lekarzeiterapeuci.pl wraz z jego funkcjonalnościami, za pośrednictwem którego Użytkownik może przeglądać treści, założyć Konto Pacjenta, umawiać konsultacje, przekazywać formularze, dokonywać płatności oraz korzystać z usług elektronicznych.</li>
                  <li><strong>Regulamin</strong> - niniejszy dokument określający zasady korzystania z Platformy, zawierania i wykonywania umów, organizacji konsultacji online i stacjonarnych, płatności, reklamacji, odstąpienia od umowy, odpowiedzialności oraz obowiązków Użytkowników.</li>
                  <li><strong>Użytkownik</strong> - każda osoba korzystająca z Platformy, niezależnie od tego, czy posiada Konto Pacjenta.</li>
                  <li><strong>Pacjent</strong> - Użytkownik korzystający lub zamierzający skorzystać z konsultacji lekarskiej, terapeutycznej, psychologicznej, diagnostycznej lub innej specjalistycznej dostępnej za pośrednictwem Platformy.</li>
                  <li><strong>Konto Pacjenta</strong> - indywidualny panel Użytkownika utworzony w Platformie, służący do obsługi rezerwacji, przekazywania danych, komunikacji z Usługodawcą oraz korzystania z funkcjonalności dostępnych dla zalogowanych Użytkowników.</li>
                  <li><strong>Lekarz</strong> - osoba posiadająca wymagane kwalifikacje oraz aktualne prawo wykonywania zawodu lekarza albo lekarza dentysty, wykonująca świadczenia zdrowotne dostępne za pośrednictwem Platformy.</li>
                  <li><strong>Terapeuta / Specjalista</strong> - osoba posiadająca kwalifikacje do prowadzenia konsultacji terapeutycznych, psychologicznych, psychoterapeutycznych, psychoedukacyjnych, dietetycznych, fizjoterapeutycznych lub innych konsultacji specjalistycznych dostępnych na Platformie.</li>
                  <li><strong>Konsultacja Online</strong> - usługa realizowana na odległość, w szczególności telefonicznie, za pośrednictwem wideorozmowy, czatu lub innego środka komunikacji elektronicznej udostępnionego przez Platformę.</li>
                  <li><strong>Teleporada Lekarska</strong> - świadczenie zdrowotne udzielane na odległość przez Lekarza przy użyciu systemów teleinformatycznych lub środków komunikacji na odległość, obejmujące ocenę stanu zdrowia, zalecenia, a w uzasadnionych przypadkach wystawienie dokumentów medycznych.</li>
                  <li><strong>Konsultacja Terapeutyczna</strong> - konsultacja prowadzona przez Terapeutę lub Specjalistę, której zakres wynika z opisu usługi na Platformie. Konsultacja Terapeutyczna nie jest Teleporadą Lekarską, chyba że jest udzielana przez osobę uprawnioną do świadczeń zdrowotnych w danym zakresie.</li>
                  <li><strong>Wizyta Stacjonarna</strong> - konsultacja odbywająca się w bezpośrednim kontakcie Pacjenta z Lekarzem, Terapeutą lub Specjalistą w lokalizacji wskazanej na Platformie.</li>
                  <li><strong>Formularz Danych Pacjenta</strong> - formularz służący do zebrania danych identyfikacyjnych, kontaktowych i rozliczeniowych, koniecznych do utworzenia Konta Pacjenta, zawarcia umowy oraz wykonania usługi.</li>
                  <li><strong>Formularz Medyczny / Formularz Wstępny</strong> - formularz służący do zebrania informacji o stanie zdrowia, objawach, przyjmowanych lekach, przebytych chorobach, dokumentacji medycznej lub celu konsultacji, w zakresie niezbędnym do wykonania usługi.</li>
                  <li><strong>Triage / kwalifikacja wstępna</strong> - wstępna ocena informacji przekazanych przez Pacjenta w celu ustalenia, czy dana sprawa może zostać obsłużona online, czy wymaga wizyty stacjonarnej, pilnej pomocy albo konsultacji innego rodzaju.</li>
                  <li><strong>Operator Płatności</strong> - zewnętrzny dostawca usług płatniczych obsługujący płatności realizowane za pośrednictwem Platformy.</li>
                  <li><strong>Cennik</strong> - wykaz cen usług dostępny na Platformie w chwili składania zamówienia.</li>
                  <li><strong>Treści Bezprawne</strong> - treści sprzeczne z prawem, dobrymi obyczajami, prawami osób trzecich, bezpieczeństwem Platformy lub Regulaminem.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">2</span>
                  Postanowienia ogólne
                </h3>
                <ol className="list-decimal pl-6 space-y-3 marker:text-slate-400 marker:font-bold">
                  <li>Platforma lekarzeiterapeuci.pl służy do organizacji i świadczenia usług elektronicznych, konsultacji online, teleporad lekarskich, konsultacji terapeutycznych oraz innych usług specjalistycznych opisanych na Platformie.</li>
                  <li>Usługodawcą w zakresie usług świadczonych drogą elektroniczną i organizacyjnej obsługi Platformy jest Nowa Przyszłość sp. z o.o. z siedzibą w Olsztynie.</li>
                  <li>Świadczenia zdrowotne, jeżeli są dostępne na Platformie, są wykonywane wyłącznie przez osoby posiadające wymagane kwalifikacje i uprawnienia zawodowe albo przez właściwe podmioty uprawnione do udzielania świadczeń zdrowotnych, zgodnie z przepisami prawa.</li>
                  <li>Regulamin jest nieodpłatnie udostępniany Użytkownikom na Platformie w sposób umożliwiający jego pozyskanie, odtworzenie i utrwalenie.</li>
                  <li>Korzystanie z Platformy oznacza akceptację Regulaminu w zakresie właściwym dla danej usługi.</li>
                  <li>Platforma nie jest przeznaczona do obsługi stanów nagłych. W przypadku bezpośredniego zagrożenia życia lub zdrowia Pacjent powinien niezwłocznie skontaktować się z numerem alarmowym 112 albo udać się do najbliższej placówki udzielającej pomocy w trybie nagłym.</li>
                  <li>Zakres każdej usługi wynika z jej opisu na Platformie, dostępności specjalistów, Cennika oraz kwalifikacji osoby wykonującej usługę.</li>
                  <li>Usługodawca może informować Użytkowników o komunikatach technicznych, prawnych, organizacyjnych i transakcyjnych dotyczących Platformy oraz zamówionych usług.</li>
                </ol>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">3</span>
                  Rodzaje i zakres usług dostępnych na Platformie
                </h3>
                <ol className="list-decimal pl-6 space-y-3 marker:text-slate-400 marker:font-bold">
                  <li>Za pośrednictwem Platformy mogą być dostępne w szczególności: dostęp do Platformy, Konto Pacjenta, rezerwacja konsultacji, Teleporady Lekarskie, Konsultacje Terapeutyczne, Wizyty Stacjonarne, obsługa formularzy, płatności online, komunikacja z Użytkownik oraz przekazywanie informacji po konsultacji.</li>
                  <li>Usługi mające charakter świadczeń zdrowotnych są wykonywane wyłącznie przez osoby posiadające wymagane kwalifikacje oraz uprawnienia zawodowe.</li>
                  <li>Usługi terapeutyczne, psychologiczne, psychoedukacyjne i specjalistyczne są świadczone zgodnie z opisem danej usługi i kwalifikacjami osoby wykonującej konsultację.</li>
                  <li>Usługodawca nie gwarantuje wystawienia e-recepty, e-skierowania, e-ZLA, zaświadczenia, opinii ani określonego rozpoznania. Decyzję w tym zakresie podejmuje wyłącznie osoba uprawniona, zgodnie z aktualną wiedzą medyczną, przepisami prawa i stanem faktycznym przedstawionym przez Pacjenta.</li>
                  <li>Zakup konsultacji oznacza zakup usługi konsultacyjnej, a nie zakup określonego dokumentu medycznego, leku, zwolnienia lekarskiego, skierowania, rozpoznania ani innego rezultatu medycznego.</li>
                  <li>Jeżeli w opisie usługi wskazano orientacyjny czas kontaktu, ma on charakter organizacyjny i może ulec zmianie z powodu liczby zgłoszeń, konieczności analizy dokumentacji, przerw technicznych, niedostępności lekarza lub innych okoliczności niezależnych od Usługodawcy.</li>
                </ol>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">4</span>
                  Warunki techniczne korzystania z Platformy
                </h3>
                <ol className="list-decimal pl-6 space-y-3 marker:text-slate-400 marker:font-bold">
                  <li>Do korzystania z Platformy wymagane jest urządzenie końcowe z dostępem do Internetu, aktualna przeglądarka internetowa, aktywny adres poczty elektronicznej, aktywny numer telefonu, włączona obsługa JavaScript i plików cookies niezbędnych do działania Platformy.</li>
                  <li>W przypadku konsultacji wideo Użytkownik powinien posiadać urządzenie z kamerą, mikrofonem oraz stabilnym połączeniem internetowym.</li>
                  <li>Użytkownik ponosi koszty transmisji danych i połączeń telekomunikacyjnych według stawek swojego operatora.</li>
                  <li>Usługodawca nie odpowiada za brak możliwości skorzystania z usługi wynikający z przyczyn leżących po stronie Użytkownika, w szczególności z braku dostępu do Internetu, niesprawnego urządzenia, podania błędnego numeru telefonu, nieodebrania połączenia lub braku możliwości uruchomienia komunikatora.</li>
                </ol>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">5</span>
                  Konto Pacjenta
                </h3>
                <ol className="list-decimal pl-6 space-y-3 marker:text-slate-400 marker:font-bold">
                  <li>Konto Pacjenta może zostać utworzone przez Użytkownika za pośrednictwem Platformy.</li>
                  <li>Założenie Konta Pacjenta wymaga podania danych wskazanych w Formularzu Danych Pacjenta, ustanowienia hasła oraz akceptacji Regulaminu i wymaganych oświadczeń.</li>
                  <li>Użytkownik zobowiązany jest podawać dane prawdziwe, kompletne i aktualne.</li>
                  <li>Użytkownik może korzystać wyłącznie z własnego Konta Pacjenta, chyba że działa jako przedstawiciel ustawowy dziecka albo osoby, którą zgodnie z prawem reprezentuje.</li>
                  <li>Zabronione jest udostępnianie Konta Pacjenta osobom trzecim, korzystanie z kont innych osób, podszywanie się pod inne osoby lub przekazywanie danych niezgodnych z prawdą.</li>
                  <li>Użytkownik jest odpowiedzialny za ochronę loginu, hasła i innych danych dostępowych.</li>
                  <li>W przypadku podejrzenia nieuprawnionego dostępu do Konta Pacjenta Użytkownik powinien niezwłocznie poinformować Usługodawcę.</li>
                  <li>Usługodawca może zawiesić, zablokować lub usunąć Konto Pacjenta w przypadku uzasadnionego podejrzenia naruszenia Regulaminu, naruszenia prawa, podania nieprawdziwych danych albo działań zagrażających bezpieczeństwu Platformy.</li>
                  <li>Użytkownik może złożyć dyspozycję usunięcia Konta Pacjenta poprzez wiadomość e-mail wysłaną na adres kontakt@lekarzeiterapeuci.pl. Usunięcie konta nie narusza obowiązków przechowywania dokumentacji medycznej, rozliczeniowej lub dowodowej, jeżeli obowiązek taki wynika z przepisów prawa.</li>
                </ol>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">6</span>
                  Weryfikacja tożsamości i uprawnienia do działania za Pacjenta
                </h3>
                <ol className="list-decimal pl-6 space-y-3 marker:text-slate-400 marker:font-bold">
                  <li>Usługodawca, Lekarz, Terapeuta lub Specjalista może zażądać weryfikacji tożsamości Pacjenta, jeżeli jest to konieczne do wykonania usługi, zapewnienia bezpieczeństwa, prowadzenia dokumentacji albo wyjaśnienia wątpliwości co do danych Pacjenta.</li>
                  <li>Weryfikacja może obejmować potwierdzenie numeru telefonu, potwierdzenie adresu e-mail, zadanie pytań identyfikacyjnych, okazanie dokumentu tożsamości lub wideoweryfikację, jeżeli taka funkcjonalność jest dostępna.</li>
                  <li>Zakres weryfikacji powinien być adekwatny do celu, charakteru usługi oraz wymogów prawnych.</li>
                  <li>Osoba działająca w imieniu dziecka albo innej osoby powinna posiadać podstawę prawną do reprezentacji tej osoby i może zostać poproszona o jej wykazanie.</li>
                  <li>Odmowa poddania się weryfikacji albo brak wykazania prawa do działania za Pacjenta może skutkować odmową wykonania usługi, anulowaniem konsultacji albo zwrotem płatności, jeżeli usługa nie została wykonana.</li>
                  <li>Dane pozyskane w ramach weryfikacji są przetwarzane zgodnie z Polityką Prywatności i wyłącznie w zakresie niezbędnym do realizacji celu weryfikacji oraz obowiązków prawnych Usługodawcy.</li>
                </ol>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">7</span>
                  Formularze, dokumentacja i kwalifikacja do konsultacji
                </h3>
                <ol className="list-decimal pl-6 space-y-3 marker:text-slate-400 marker:font-bold">
                  <li>Przed wykonaniem konsultacji Pacjent może zostać zobowiązany do wypełnienia Formularza Medycznego lub innego formularza właściwego dla danej usługi.</li>
                  <li>Formularz Medyczny służy do zebrania informacji niezbędnych do właściwego przygotowania konsultacji, wstępnej oceny przypadku oraz ustalenia, czy dana sprawa może zostać obsłużona w wybranej formie.</li>
                  <li>Pacjent ma obowiązek przekazać informacje prawdziwe, pełne i aktualne. Podanie informacji niepełnych lub nieprawdziwych może utrudnić albo uniemożliwić wykonanie usługi, prowadzić do błędnej oceny stanu zdrowia lub skutkować odmową wykonania usługi.</li>
                  <li>Lekarz, Terapeuta lub Specjalista może poprosić Pacjenta o przekazanie dokumentacji medycznej, wyników badań, zaleceń, listy leków, wypisów ze szpitala, dostępu do właściwych informacji w Internetowym Koncie Pacjenta lub innych informacji istotnych dla wykonania usługi.</li>
                  <li>Po analizie przekazanych informacji osoba wykonująca usługe może uznać, że konsultacja może zostać przeprowadzona online, wymaga wizyty stacjonarnej, wymaga pilnego kontaktu z inną placówką, wymaga konsultacji innego specjalisty albo nie może zostać wykonana w zamówionej formie.</li>
                  <li>Jeżeli z przyczyn medycznych lub prawnych konsultacja nie może zostać wykonana w zamówionej formie, Pacjent zostanie poinformowany o dalszych możliwych krokach, z zastrzeżeniem zasad zwrotów wskazanych w Regulaminie i na Platformie.</li>
                </ol>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">8</span>
                  Zasady Konsultacji Online
                </h3>
                <ol className="list-decimal pl-6 space-y-3 marker:text-slate-400 marker:font-bold">
                  <li>Konsultacja Online odbywa się w terminie wybranym przez Pacjenta albo przydzielonym zgodnie z dostępnością widoczną na Platformie.</li>
                  <li>Konsultacja Online może być prowadzona telefonicznie, przez wideorozmowę, czat lub inny kanał wskazany w opisie usługi.</li>
                  <li>Pacjent powinien pozostawać dostępny w ustalonym terminie oraz zapewnić warunki pozwalające na spokojną, poufną rozmowę.</li>
                  <li>Jeżeli konsultacja odbywa się telefonicznie, osoba wykonująca usługę kontaktuje się z Pacjentem na numer podany przez Pacjenta w procesie rezerwacji lub w Koncie Pacjenta.</li>
                  <li>Jeżeli pierwsza próba kontaktu jest nieskuteczna, osoba wykonująca usługę może podjąć kolejne próby kontaktu w ramach wybranego okna czasowego. Trzy bezskuteczne próby kontaktu mogą zostać uznane za wykonanie gotowości do świadczenia usługi, o ile Pacjent został poinformowany o tej zasadzie przed zakupem usługi.</li>
                  <li>Konsultacja Online nie zawsze zastępuje osobiste badanie, diagnostykę stacjonarną, badania dodatkowe ani interwencję w trybie nagłym.</li>
                  <li>Osoba wykonująca konsultację może odmówić wydania określonego zalecenia, dokumentu, recepty, zwolnienia, skierowania lub opinii, jeżeli nie ma do tego podstaw medycznych, zawodowych lub prawnych.</li>
                  <li>Pacjent nie może nagrywać, rozpowszechniać ani publikować przebiegu konsultacji bez uprzedniej zgody wszystkich osób uczestniczących w konsultacji, chyba że bezwzględnie obowiązujące przepisy prawa stanowią inaczej.</li>
                </ol>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">9</span>
                  Teleporada Lekarska
                </h3>
                <ol className="list-decimal pl-6 space-y-3 marker:text-slate-400 marker:font-bold">
                  <li>Teleporada Lekarska jest świadczeniem zdrowotnym udzielanym na odległość przez Lekarza.</li>
                  <li>Warunkiem skorzystania z Teleporady Lekarskiej jest podanie wymaganych danych, wypełnienie Formularza Medycznego, akceptacja Regulaminu, wyrażenie zgody na świadczenie zdrowotne na odległość, zapoznanie się z informacją o przetwarzaniu danych osobowych oraz dokonanie płatności, jeżeli usługa jest odpłatna.</li>
                  <li>Lekarz wykonuje Teleporadę Lekarską zgodnie z aktualną wiedzą medyczną, zasadami etyki zawodowej, przepisami prawa oraz należytą starannością.</li>
                  <li>W ramach Teleporady Lekarskiej Lekarz może przeprowadzić wywiad, ocenić przekazane informacje i dokumenty, udzielić zaleceń, zalecić badania, skierować Pacjenta do placówki stacjonarnej albo wystawić dokument medyczny, jeżeli jest to uzasadnione.</li>
                  <li>Zamówienie Teleporady Lekarskiej nie oznacza gwarancji otrzymania e-recepty, e-skierowania, e-ZLA, zaświadczenia ani określonego rozpoznania.</li>
                  <li>Lekarz może odmówić kontynuacji leczenia, wystawienia recepty albo innego dokumentu, jeżeli przekazane dane są niewystarczające, budzą wątpliwości, wskazują na potrzebę osobistego badania albo występują przeciwwskazania medyczne lub prawne.</li>
                  <li>W przypadku leków, dokumentów lub świadczeń wymagających szczególnej oceny medycznej Lekarz może wymagać dodatkowej dokumentacji, osobistego badania, konsultacji specjalistycznej albo odmówić wystawienia dokumentu.</li>
                  <li>W przypadku podejrzenia stanu nagłego Lekarz może zalecić Pacjentowi pilny kontakt z numerem alarmowym, szpitalnym oddziałem ratunkowym, izbą przyjęć lub inną właściwą placówką. W sytuacji bezpośredniego zagrożenia życia lub zdrowia Lekarz może podjąć działania przewidziane prawem, w tym wezwać pomoc medyczną, jeżeli posiada dane umożliwiające takie działanie.</li>
                </ol>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">10</span>
                  Konsultacje Terapeutyczne, psychologiczne i specjalistyczne
                </h3>
                <ol className="list-decimal pl-6 space-y-3 marker:text-slate-400 marker:font-bold">
                  <li>Konsultacje Terapeutyczne są świadczone przez Terapeutów lub Specjalistów zgodnie z ich kwalifikacjami, opisem usługi i zakresem wskazanym na Platformie.</li>
                  <li>Konsultacja Terapeutyczna może obejmować w szczególności rozmowę wspierającą, konsultację psychologiczną, konsultację psychoterapeutyczną, psychoedukację, omówienie trudności zgłaszanych przez Pacjenta lub rekomendację dalszej formy pomocy.</li>
                  <li>Konsultacja Terapeutyczna nie jest równoznaczna z konsultacją lekarską, konsultacją psychiatryczną ani interwencją kryzysową, chyba że jest wykonywana przez osobę posiadającą odpowiednie uprawnienia i w zakresie wynikającym z przepisów prawa.</li>
                  <li>Terapeuta lub Specjalista może odmówić wykonania usługi albo zalecić inną formę pomocy, jeżeli uzna, że stan Pacjenta wymaga wsparcia wykraczającego poza zakres danej konsultacji.</li>
                  <li>W przypadku ujawnienia ryzyka bezpośredniego zagrożenia życia lub zdrowia Pacjenta albo osób trzecich Terapeuta lub Specjalista może zalecić natychmiastowy kontakt z odpowiednimi służbami lub podjąć działania zgodne z prawem i zasadami wykonywania zawodu.</li>
                </ol>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">11</span>
                  Wizyty Stacjonarne
                </h3>
                <ol className="list-decimal pl-6 space-y-3 marker:text-slate-400 marker:font-bold">
                  <li>Jeżeli Platforma umożliwia rezerwację Wizyt Stacjonarnych, Pacjent może wybrać dostępny termin, lokalizację oraz osobę wykonującą usługę, o ile taka funkcjonalność jest dostępna.</li>
                  <li>Warunkiem rezerwacji Wizyty Stacjonarnej jest podanie wymaganych danych, akceptacja Regulaminu, wypełnienie formularzy wymaganych dla danej usługi oraz dokonanie płatności, jeżeli jest wymagana.</li>
                  <li>Pacjent powinien stawić się w miejscu wizyty punktualnie, z dokumentem tożsamości oraz dokumentacją istotną dla celu konsultacji.</li>
                  <li>Spóźnienie Pacjenta może skrócić czas wizyty albo uniemożliwić jej wykonanie.</li>
                  <li>Szczegółowe zasady odwoływania i zmiany terminu Wizyty Stacjonarnej są wskazywane na Platformie przy danej usłudze.</li>
                </ol>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">12</span>
                  Płatności
                </h3>
                <ol className="list-decimal pl-6 space-y-3 marker:text-slate-400 marker:font-bold">
                  <li>Ceny usług są podawane na Platformie w złotych polskich i są cenami brutto, chyba że wyraźnie wskazano inaczej.</li>
                  <li>Cena obowiązująca Pacjenta jest ceną widoczną w chwili składania zamówienia.</li>
                  <li>Płatności są realizowane za pośrednictwem Operatora Płatności dostępnego na Platformie.</li>
                  <li>Usługodawca może udostępniać różne metody płatności, w szczególności szybki przelew, BLIK, kartę płatniczą lub inne metody obsługiwane przez Operatora Płatności.</li>
                  <li>Usługodawca nie pobiera od Użytkownika dodatkowej opłaty za samo skorzystanie z płatności online, chyba że informacja o takiej opłacie zostanie wyraźnie wskazana przed dokonaniem płatności.</li>
                  <li>Usługodawca może zmieniać ceny usług. Zmiana ceny nie wpływa na usługi opłacone przed wejściem zmiany w życie.</li>
                  <li>Jeżeli usługa nie może zostać wykonana z przyczyn leżących po stronie Usługodawcy, Pacjentowi przysługuje zwrot płatności albo możliwość zmiany terminu, według zasad wskazanych na Platformie i w Regulaminie.</li>
                  <li>Jeżeli konsultacja została wykonana, brak wystawienia e-recepty, e-skierowania, e-ZLA, zaświadczenia, opinii albo innego dokumentu medycznego nie stanowi samodzielnej podstawy zwrotu płatności, jeżeli decyzja o niewystawieniu dokumentu była decyzją medyczną lub prawną osoby uprawnionej.</li>
                </ol>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">13</span>
                  Zmiana terminu, anulowanie usługi i zwroty
                </h3>
                <ol className="list-decimal pl-6 space-y-3 marker:text-slate-400 marker:font-bold">
                  <li>Pacjent może anulować lub zmienić termin usługi na zasadach wskazanych na Platformie przy danej usłudze.</li>
                  <li>Jeżeli Pacjent anuluje usługę przed rozpoczęciem jej wykonywania i w terminie wskazanym na Platformie, Usługodawca zwróci uiszczoną płatność albo umożliwi wykorzystanie jej na inny termin.</li>
                  <li>Jeżeli Pacjent nie stawi się na konsultację, nie odbierze połączenia, poda błędne dane kontaktowe albo uniemożliwi wykonanie usługi z przyczyn leżących po jego stronie, Usługodawca może uznać usługę za wykonaną albo zachować prawo do wynagrodzenia za gotowość do jej wykonania, o ile Pacjent został poinformowany o tej zasadzie przed zakupem usługi.</li>
                  <li>Jeżeli osoba wykonująca usługę uzna, że konsultacja nie może być wykonana online i nie została wykonana merytoryczna konsultacja, Usługodawca może zaproponować zwrot płatności albo zmianę terminu lub formy usługi, z uwzględnieniem okoliczności sprawy i informacji przekazanych Pacjentowi przed zakupem.</li>
                  <li>Zwrot płatności następuje co do zasady tą samą metodą, którą dokonano płatności, chyba że Strony uzgodnią inaczej lub Operator Płatności wymaga innej technicznej metody zwrotu.</li>
                  <li>Termin zwrotu płatności wynosi do 7 dni roboczych od dnia uznania zwrotu za zasadny, chyba że regulamin Operatora Płatności lub przepisy prawa przewidują inny termin.</li>
                </ol>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">14</span>
                  Prawo odstąpienia od umowy
                </h3>
                <ol className="list-decimal pl-6 space-y-3 marker:text-slate-400 marker:font-bold">
                  <li>Jeżeli Pacjent jest konsumentem, przysługuje mu prawo odstąpienia od umowy zawartej na odległość w terminie 14 dni, z zastrzeżeniem wyjątków przewidzianych przepisami prawa.</li>
                  <li>Pacjent przyjmuje do wiadomości, że jeżeli za jego wyraźną zgodą usługa zostanie w pełni wykonana przed upływem terminu do odstąpienia od umowy, po jej wykonaniu może utracić prawo odstąpienia od umowy.</li>
                  <li>Przed rozpoczęciem świadczenia usługi Pacjent może zostać poproszony o złożenie oświadczenia, że żąda wykonania usługi przed upływem terminu do odstąpienia oraz przyjmuje do wiadomości skutki wykonania usługi.</li>
                  <li>W celu odstąpienia od umowy Pacjent powinien wysłać oświadczenie na adres e-mail kontakt@lekarzeiterapeuci.pl albo na adres korespondencyjny: Nowa Przyszłość sp. z o.o., Michała Kajki 10-12, 10-547 Olsztyn.</li>
                  <li>Pacjent może skorzystać ze wzoru formularza odstąpienia stanowiącego załącznik do Regulaminu, jednak nie jest to obowiązkowe.</li>
                </ol>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">15</span>
                  Dokumentacja medyczna i dokumenty po konsultacji
                </h3>
                <ol className="list-decimal pl-6 space-y-3 marker:text-slate-400 marker:font-bold">
                  <li>Jeżeli dana usługa stanowi świadczenie zdrowotne, dokumentacja medyczna jest prowadzona zgodnie z obowiązującymi przepisami prawa.</li>
                  <li>Pacjent ma prawo dostępu do swojej dokumentacji medycznej na zasadach określonych w przepisach prawa oraz dokumentach wewnętrznych właściwego podmiotu leczniczego lub osoby wykonującej zawód medyczny.</li>
                  <li>Po konsultacji Pacjent może otrzymać informacje organizacyjne dotyczące realizacji e-recepty, e-skierowania, e-ZLA lub innych dokumentów, jeżeli zostały wystawione.</li>
                  <li>Wystawienie dokumentu medycznego zależy wyłącznie od decyzji osoby uprawnionej i nie jest gwarantowanym rezultatem zakupu konsultacji.</li>
                  <li>Pacjent powinien samodzielnie zweryfikować dokumenty otrzymane po konsultacji, w szczególności dane identyfikacyjne, dawkowanie, termin ważności, zalecenia i sposób dalszego postępowania, a w razie wątpliwości niezwłocznie skontaktować się z Usługodawcą lub osobą wykonującą usługę.</li>
                </ol>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">16</span>
                  Reklamacje
                </h3>
                <ol className="list-decimal pl-6 space-y-3 marker:text-slate-400 marker:font-bold">
                  <li>Użytkownik może złożyć reklamację dotyczącą działania Platformy, płatności, organizacji usługi lub innych aspektów usług świadczonych drogą elektroniczną.</li>
                  <li>Reklamację należy przesłać na adres e-mail kontakt@lekarzeiterapeuci.pl.</li>
                  <li>Reklamacja powinna zawierać imię i nazwisko Użytkownika, dane kontaktowe, opis zdarzenia, datę i godzinę zdarzenia, numer zamówienia lub płatności, jeżeli dotyczy, oraz żądanie Użytkownika.</li>
                  <li>Jeżeli reklamacja nie zawiera danych pozwalających na jej rozpatrzenie, Usługodawca może poprosić Użytkownika o uzupełnienie zgłoszenia.</li>
                  <li>Usługodawca rozpatruje reklamację w terminie do 14 dni od dnia jej otrzymania, chyba że przepisy prawa albo regulamin Operatora Płatności przewidują inny termin.</li>
                  <li>Odpowiedź na reklamację zostanie przesłana na adres e-mail podany przez Użytkownika.</li>
                  <li>Reklamacje dotyczące decyzji medycznej, w tym odmowy wystawienia dokumentu medycznego, mogą zostać przekazane do wyjaśnienia osobie wykonującej świadczenie, z zachowaniem tajemnicy zawodowej i przepisów o dokumentacji medycznej.</li>
                </ol>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">17</span>
                  Dane osobowe i poufność
                </h3>
                <ol className="list-decimal pl-6 space-y-3 marker:text-slate-400 marker:font-bold">
                  <li>Zasady przetwarzania danych osobowych Użytkowników określa Polityka Prywatności dostępna na Platformie.</li>
                  <li>Usługodawca przetwarza dane osobowe w szczególności w celu prowadzenia Konta Pacjenta, wykonania usługi, obsługi płatności, prowadzenia dokumentacji, obsługi reklamacji, realizacji obowiązków prawnych oraz zapewnienia bezpieczeństwa Platformy.</li>
                  <li>Dane dotyczące zdrowia są szczególną kategorią danych osobowych i są przetwarzane wyłącznie wtedy, gdy istnieje odpowiednia podstawa prawna oraz organizacyjna, w zakresie niezbędnym do realizacji usługi i obowiązków prawnych.</li>
                  <li>Informacje przekazywane w ramach konsultacji są objęte poufnością w zakresie wynikającym z przepisów prawa i zasad wykonywania danego zawodu.</li>
                  <li>Pacjent powinien korzystać z konsultacji w warunkach zapewniających prywatność i uniemożliwiających dostęp osób nieuprawnionych do przebiegu rozmowy.</li>
                  <li>Usługodawca może powierzać przetwarzanie danych podmiotom technologicznym, płatniczym, księgowym, hostingowym, komunikacyjnym i innym dostawcom wyłącznie w zakresie niezbędnym do działania Platformy i wykonania usług.</li>
                </ol>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">18</span>
                  Zakaz dostarczania treści bezprawnych i bezpieczeństwo Platformy
                </h3>
                <ol className="list-decimal pl-6 space-y-3 marker:text-slate-400 marker:font-bold">
                  <li>Użytkownik nie może dostarczać za pośrednictwem Platformy Treści Bezprawnych.</li>
                  <li>Zabronione jest w szczególności podszywanie się pod inne osoby, przekazywanie fałszywych danych, naruszanie praw osób trzecich, publikowanie treści obraźliwych, dyskryminujących lub grożących, podejmowanie prób nieuprawnionego dostępu do Platformy, zakłócanie działania Platformy oraz przesyłanie złośliwego oprogramowania.</li>
                  <li>Usługodawca może usunąć lub zablokować treści naruszające Regulamin oraz ograniczyć dostęp Użytkownika do Platformy, jeżeli jest to konieczne dla bezpieczeństwa Platformy, innych Użytkowników lub Usługodawcy.</li>
                  <li>Użytkownik odpowiada za szkody wyrządzone Usługodawcy lub osobom trzecim w związku z naruszeniem zakazów określonych w niniejszym rozdziale.</li>
                  <li>Zgłoszenia dotyczące treści lub działań mogących naruszać prawo albo Regulamin można kierować na adres kontakt@lekarzeiterapeuci.pl z opisem naruszenia i wskazaniem miejsca, którego zgłoszenie dotyczy.</li>
                </ol>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">19</span>
                  Odpowiedzialność
                </h3>
                <ol className="list-decimal pl-6 space-y-3 marker:text-slate-400 marker:font-bold">
                  <li>Usługodawca ponosi odpowiedzialność za należyte wykonanie usług na zasadach przewidzianych przepisami prawa.</li>
                  <li>Usługodawca nie ponosi odpowiedzialności za skutki wynikające z podania przez Pacjenta nieprawdziwych, niepełnych lub nieaktualnych informacji, zatajenia istotnych informacji o stanie zdrowia, braku dostępności Pacjenta w umówionym terminie, problemów technicznych po stronie Użytkownika, działań Operatora Płatności, operatorów telekomunikacyjnych lub innych podmiotów trzecich, działania siły wyższej albo korzystania z Platformy niezgodnie z Regulaminem.</li>
                  <li>Żadne postanowienie Regulaminu nie wyłącza ani nie ogranicza odpowiedzialności, której nie można wyłączyć lub ograniczyć na podstawie powszechnie obowiązujących przepisów prawa.</li>
                  <li>W przypadku usług medycznych odpowiedzialność osoby wykonującej świadczenie jest oceniana z uwzględnieniem aktualnej wiedzy medycznej, dostępnych danych, charakteru konsultacji zdalnej oraz informacji przekazanych przez Pacjenta.</li>
                </ol>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">20</span>
                  Informacja o zagrożeniach związanych z usługami elektronicznymi
                </h3>
                <ol className="list-decimal pl-6 space-y-3 marker:text-slate-400 marker:font-bold">
                  <li>Korzystanie z usług świadczonych drogą elektroniczną wiąże się z typowymi ryzykami środowiska internetowego, takimi jak złośliwe oprogramowanie, phishing, spam, próby przejęcia danych logowania, nieuprawniony dostęp do urządzenia Użytkownika oraz awarie połączenia internetowego.</li>
                  <li>Użytkownik powinien stosować aktualne oprogramowanie, chronić dane logowania, korzystać z legalnych systemów i aplikacji, nie otwierać podejrzanych załączników oraz weryfikować, czy korzysta z właściwego adresu Platformy.</li>
                  <li>Informacje o plikach cookies znajdują się w Polityce Prywatności lub Polityce Cookies dostępnej na Platformie.</li>
                </ol>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">21</span>
                  Kontakt z Usługodawcą
                </h3>
                <ol className="list-decimal pl-6 space-y-3 marker:text-slate-400 marker:font-bold">
                  <li>Kontakt z Usługodawcą jest możliwy za pośrednictwem poczty elektronicznej pod adresem kontakt@lekarzeiterapeuci.pl oraz przez formularz kontaktowy dostępny na Platformie, jeżeli został udostępniony.</li>
                  <li>Adres korespondencyjny Usługodawcy: Nowa Przyszłość sp. z o.o., Michała Kajki 10-12, 10-547 Olsztyn.</li>
                  <li>Obsługa Użytkownika nie udziela porad medycznych, nie interpretuje wyników badań i nie zastępuje konsultacji z Lekarzem, Terapeutą lub Specjalistą.</li>
                  <li>Komunikaty dotyczące zamówionych usług, płatności, zmian Regulaminu, bezpieczeństwa i działania Platformy mogą być kierowane na adres e-mail lub numer telefonu wskazany przez Użytkownika.</li>
                </ol>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">22</span>
                  Zmiany Regulaminu
                </h3>
                <ol className="list-decimal pl-6 space-y-3 marker:text-slate-400 marker:font-bold">
                  <li>Usługodawca może zmienić Regulamin w przypadku zmiany przepisów prawa, zmiany zakresu usług, zmiany funkcjonalności Platformy, zmiany danych Usługodawcy, konieczności doprecyzowania zasad bezpieczeństwa, płatności, reklamacji lub korzystania z Platformy albo zmiany operatorów technicznych lub płatniczych.</li>
                  <li>O zmianie Regulaminu Usługodawca poinformuje Użytkowników poprzez publikację nowej wersji na Platformie, a w przypadku Użytkowników posiadających Konto Pacjenta również przez komunikat elektroniczny, jeżeli będzie to wymagane lub zasadne.</li>
                  <li>Do usług zamówionych przed zmianą Regulaminu stosuje się Regulamin obowiązujący w chwili zawarcia umowy, chyba że przepisy prawa stanowią inaczej.</li>
                  <li>Jeżeli Użytkownik nie akceptuje zmienionego Regulaminu, powinien zaprzestać korzystania z Platformy i może złożyć dyspozycję usunięcia Konta Pacjenta.</li>
                </ol>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">23</span>
                  Postanowienia końcowe
                </h3>
                <ol className="list-decimal pl-6 space-y-3 marker:text-slate-400 marker:font-bold">
                  <li>Prawem właściwym dla Regulaminu jest prawo polskie.</li>
                  <li>W sprawach nieuregulowanych Regulaminem zastosowanie mają powszechnie obowiązujące przepisy prawa polskiego.</li>
                  <li>Jeżeli którekolwiek postanowienie Regulaminu okaże się nieważne lub bezskuteczne, nie wpływa to na ważność pozostałych postanowień.</li>
                  <li>Regulamin wchodzi w życie z dniem publikacji na Platformie.</li>
                  <li>Załącznikiem do Regulaminu jest wzór formularza odstąpienia od umowy.</li>
                </ol>
              </section>

              <section className="mt-16 pt-10 border-t border-slate-200">
                <h3 className="text-xl font-extrabold text-slate-800 mb-6 text-center">
                  ZAŁĄCZNIK NR 1 - WZÓR FORMULARZA ODSTĄPIENIA OD UMOWY
                </h3>
                
                <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200 text-sm font-mono text-slate-600 space-y-4">
                  <div className="mb-8">
                    <p>Adresat: Nowa Przyszłość sp. z o.o. z siedzibą w Olsztynie, Michała Kajki 10-12, 10-547 Olsztyn</p>
                    <p>Adres e-mail: kontakt@lekarzeiterapeuci.pl</p>
                  </div>

                  <p>Ja, niżej podpisany/a:</p>
                  <p>Imię i nazwisko: ....................................................................................</p>
                  <p>Adres: ................................................................................................</p>
                  <p>E-mail: ...............................................................................................</p>
                  <p>Numer telefonu: .......................................................................................</p>
                  <p>Numer zamówienia / płatności: .........................................................................</p>

                  <p className="mt-6 mb-4">niniejszym informuję o odstąpieniu od umowy dotyczącej następującej usługi:</p>
                  <p>.......................................................................................................</p>
                  <p>.......................................................................................................</p>

                  <p className="mt-6">Data zawarcia umowy: ....................................................................................</p>
                  <p>Data płatności: .........................................................................................</p>
                  
                  <p className="mt-6">Numer rachunku do zwrotu, jeżeli zwrot nie może zostać dokonany tą samą metodą płatności:</p>
                  <p>.......................................................................................................</p>

                  <div className="mt-12 flex justify-between items-end">
                    <p>Data: .........................</p>
                    <p>Podpis konsumenta: .........................</p>
                  </div>
                </div>
                
                <p className="text-xs text-slate-500 mt-4 italic text-center">
                  Pouczenie: skorzystanie z niniejszego formularza nie jest obowiązkowe. Oświadczenie o odstąpieniu można złożyć w dowolnej jednoznacznej formie, z zastrzeżeniem wyjątków wynikających z przepisów prawa oraz Regulaminu.
                </p>
              </section>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
