import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Cookie } from "lucide-react";

export default function PolitykaCookiesPage() {
  return (
    <>
      <Header />
      <main className="bg-[#FCFDFD] min-h-screen pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white p-8 md:p-12 lg:p-16 rounded-[32px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-slate-100 mb-8">
            
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-[#EAF3F0] rounded-2xl flex items-center justify-center text-[#147A60]">
                <Cookie className="w-8 h-8" />
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 text-center tracking-tight uppercase">
              Polityka Plików Cookies
            </h1>
            <h2 className="text-lg md:text-xl font-bold text-slate-600 mb-10 text-center">
              Platformy internetowej lekarzeiterapeuci.pl
            </h2>
            
            <div className="bg-[#EAF3F0]/50 p-6 sm:p-8 rounded-2xl border border-[#D5EAE6] mb-12 text-sm shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                <div className="flex flex-col"><span className="text-slate-500 font-semibold mb-1 text-[11px] uppercase tracking-wider">Administrator</span> <span className="text-slate-800 font-bold">Nowa Przyszłość sp. z o.o. z siedzibą w Olsztynie</span></div>
                <div className="flex flex-col"><span className="text-slate-500 font-semibold mb-1 text-[11px] uppercase tracking-wider">Adres siedziby</span> <span className="text-slate-800 font-bold">ul. Michała Kajki 10-12, 10-547 Olsztyn</span></div>
                <div className="flex flex-col"><span className="text-slate-500 font-semibold mb-1 text-[11px] uppercase tracking-wider">KRS</span> <span className="text-slate-800 font-bold">0001235181</span></div>
                <div className="flex flex-col"><span className="text-slate-500 font-semibold mb-1 text-[11px] uppercase tracking-wider">NIP</span> <span className="text-slate-800 font-bold">7412175965</span></div>
                <div className="flex flex-col"><span className="text-slate-500 font-semibold mb-1 text-[11px] uppercase tracking-wider">REGON</span> <span className="text-slate-800 font-bold">544493932</span></div>
                <div className="flex flex-col"><span className="text-slate-500 font-semibold mb-1 text-[11px] uppercase tracking-wider">Kontakt</span> <a href="mailto:kontakt@lekarzeiterapeuci.pl" className="text-[#147A60] hover:underline font-bold">kontakt@lekarzeiterapeuci.pl</a></div>
                <div className="flex flex-col"><span className="text-slate-500 font-semibold mb-1 text-[11px] uppercase tracking-wider">Platforma</span> <a href="https://www.lekarzeiterapeuci.pl" className="text-[#147A60] hover:underline font-bold">lekarzeiterapeuci.pl</a></div>
              </div>
            </div>

            <div className="space-y-12 text-sm md:text-[15px] text-slate-600 leading-relaxed font-medium">
              
              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">1</span>
                  Cel dokumentu
                </h3>
                <div className="pl-6 space-y-4">
                  <p>Niniejsza Polityka plików cookies określa zasady stosowania plików cookies oraz podobnych technologii w ramach platformy internetowej lekarzeiterapeuci.pl, dalej jako „Platforma”.</p>
                  <p>Polityka przekazuje Użytkownikowi informacje o kategoriach technologii wykorzystywanych na Platformie, celach ich stosowania, dostępie podmiotów trzecich oraz sposobach zarządzania zgodami i ustawieniami prywatności.</p>
                  <p>Polityka stanowi uzupełnienie Regulaminu Platformy oraz Polityki Prywatności. W zakresie, w jakim informacje pozyskiwane z plików cookies lub podobnych technologii stanowią dane osobowe, zastosowanie mają również zasady opisane w Polityce Prywatności.</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">2</span>
                  Administrator Platformy
                </h3>
                <div className="pl-6 space-y-4">
                  <p>Administratorem Platformy oraz podmiotem decydującym o wykorzystywaniu plików cookies w ramach Platformy jest Nowa Przyszłość sp. z o.o. z siedzibą w Olsztynie, adres: ul. Michała Kajki 10-12, 10-547 Olsztyn, KRS: 0001235181, NIP: 7412175965, REGON: 544493932, dalej jako „Administrator”.</p>
                  <p>Kontakt w sprawach związanych z plikami cookies, podobnymi technologiami oraz ochroną danych osobowych jest możliwy pod adresem e-mail: <a href="mailto:kontakt@lekarzeiterapeuci.pl" className="text-[#147A60] hover:underline font-bold">kontakt@lekarzeiterapeuci.pl</a>.</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">3</span>
                  Czym są pliki cookies i podobne technologie
                </h3>
                <div className="pl-6 space-y-4">
                  <p>Pliki cookies, zwane również ciasteczkami, są niewielkimi plikami tekstowymi lub informacjami zapisywanymi na urządzeniu końcowym Użytkownika, takim jak komputer, smartfon, tablet albo inne urządzenie wykorzystywane do korzystania z Platformy.</p>
                  <p>Pliki cookies mogą zawierać między innymi nazwę strony internetowej, z której pochodzą, czas przechowywania na urządzeniu, identyfikator przeglądarki, identyfikator sesji, wybrane ustawienia Użytkownika albo inne informacje techniczne konieczne do realizacji określonych funkcji Platformy.</p>
                  <p>Na potrzeby niniejszej Polityki pojęcie plików cookies obejmuje również podobne technologie, w tym local storage, session storage, piksele, tagi, identyfikatory urządzeń, skrypty analityczne oraz inne narzędzia umożliwiające przechowywanie informacji na urządzeniu Użytkownika albo uzyskiwanie dostępu do takich informacji.</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">4</span>
                  Podstawowe zasady wykorzystywania cookies
                </h3>
                <div className="pl-6 space-y-4">
                  <p>Platforma wykorzystuje pliki cookies niezbędne do prawidłowego działania serwisu, bezpieczeństwa, utrzymania sesji, obsługi logowania, realizacji rezerwacji, obsługi płatności, zapewnienia ciągłości procesu korzystania z Platformy oraz zapamiętywania decyzji Użytkownika dotyczących zgód.</p>
                  <p>Pliki cookies inne niż niezbędne, w szczególności analityczne, funkcjonalne, marketingowe lub remarketingowe, są stosowane po uzyskaniu zgody Użytkownika, wyrażonej w banerze lub panelu zarządzania zgodami, chyba że przepisy prawa dopuszczają inny model ich stosowania.</p>
                  <p>Użytkownik może w każdej chwili zmienić albo wycofać zgodę na stosowanie plików cookies innych niż niezbędne, korzystając z ustawień cookies dostępnych na Platformie albo ustawień swojej przeglądarki.</p>
                  <p>Brak zgody na cookies inne niż niezbędne nie blokuje dostępu do podstawowych informacji na Platformie, ale może ograniczyć dostępność wybranych udogodnień, personalizacji, statystyk, funkcji zewnętrznych, elementów osadzonych, płynności rezerwacji lub wyświetlania treści dostarczanych przez zewnętrznych dostawców.</p>
                  <p>Administrator nie wykorzystuje plików cookies w celu prowadzenia diagnostyki medycznej, podejmowania automatycznych decyzji medycznych ani zastępowania konsultacji z Lekarzem, Terapeutą lub Specjalistą.</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">5</span>
                  Kategorie plików cookies stosowanych na Platformie
                </h3>
                <div className="pl-6 space-y-4">
                  <div className="overflow-x-auto mt-6">
                    <table className="w-full text-left border-collapse min-w-[800px] shadow-sm rounded-xl overflow-hidden text-[13px] border border-slate-200">
                      <thead>
                        <tr className="bg-[#EAF3F0] text-slate-800">
                          <th className="p-4 border-b border-slate-200 font-extrabold w-1/4">Kategoria</th>
                          <th className="p-4 border-b border-slate-200 font-extrabold w-1/4">Cel stosowania</th>
                          <th className="p-4 border-b border-slate-200 font-extrabold w-1/4">Czy wymaga zgody</th>
                          <th className="p-4 border-b border-slate-200 font-extrabold w-1/4">Typowy czas działania</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white align-top">
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                          <td className="p-4 font-bold text-slate-700">Niezbędne</td>
                          <td className="p-4">Zapewnienie działania Platformy, logowania, sesji, bezpieczeństwa, rezerwacji, płatności oraz zapamiętania ustawień zgody.</td>
                          <td className="p-4">Nie</td>
                          <td className="p-4">Sesja lub okres technicznie wymagany.</td>
                        </tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                          <td className="p-4 font-bold text-slate-700">Bezpieczeństwa</td>
                          <td className="p-4">Ochrona przed nadużyciami, botami, nieautoryzowanym dostępem, atakami i zakłóceniami działania Platformy.</td>
                          <td className="p-4">Co do zasady nie, jeżeli są konieczne</td>
                          <td className="p-4">Sesja lub okres wskazany przez dostawcę zabezpieczeń.</td>
                        </tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                          <td className="p-4 font-bold text-slate-700">Analityczne</td>
                          <td className="p-4">Pomiar liczby odwiedzin, źródeł ruchu, błędów, popularności treści i sposobu korzystania z Platformy.</td>
                          <td className="p-4">Tak, o ile nie są stosowane wyłącznie w modelu niezbędnym i anonimowym</td>
                          <td className="p-4">Do czasu wycofania zgody albo upływu okresu wskazanego w panelu zgód.</td>
                        </tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                          <td className="p-4 font-bold text-slate-700">Funkcjonalne</td>
                          <td className="p-4">Zapamiętywanie preferencji, ustawień interfejsu, języka, wyborów Użytkownika i ułatwień w korzystaniu z Platformy.</td>
                          <td className="p-4">Tak, jeżeli nie są konieczne do wykonania żądanej usługi</td>
                          <td className="p-4">Zależnie od funkcji i ustawień Użytkownika.</td>
                        </tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                          <td className="p-4 font-bold text-slate-700">Marketingowe</td>
                          <td className="p-4">Pomiar skuteczności kampanii, remarketing, prezentowanie dopasowanych komunikatów oraz ograniczanie częstotliwości reklam.</td>
                          <td className="p-4">Tak</td>
                          <td className="p-4">Zgodnie z ustawieniami panelu zgód i dostawcy narzędzia.</td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="p-4 font-bold text-slate-700">Integracyjne / zewnętrzne</td>
                          <td className="p-4">Obsługa map, wideo, czatu, płatności, narzędzi rezerwacyjnych lub innych zewnętrznych elementów osadzonych w Platformie.</td>
                          <td className="p-4">Zależnie od charakteru narzędzia</td>
                          <td className="p-4">Zgodnie z ustawieniami dostawcy.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">6</span>
                  Szczególna ostrożność w związku z charakterem Platformy
                </h3>
                <div className="pl-6 space-y-4">
                  <p>Platforma dotyczy usług lekarskich, terapeutycznych, psychologicznych i innych usług specjalistycznych, dlatego Administrator stosuje zasadę minimalizacji informacji wykorzystywanych przez cookies oraz podobne technologie.</p>
                  <p>Technologie inne niż niezbędne powinny być konfigurowane w sposób ograniczony do celów organizacyjnych, statystycznych, technicznych i marketingowych, bez celowego przekazywania zewnętrznym narzędziom treści konsultacji, dokumentacji medycznej, informacji o diagnozie, leczeniu, wystawionych receptach lub innych danych objętych szczególną ochroną.</p>
                  <p>Administrator nie konfiguruje świadomie narzędzi analitycznych ani marketingowych w celu pozyskiwania treści Formularzy Medycznych, danych o stanie zdrowia, treści rozmów, dokumentacji medycznej ani informacji pozwalających na wywnioskowanie konkretnego problemu zdrowotnego Użytkownika, chyba że istnieje wyraźna i zgodna z prawem podstawa takiego działania.</p>
                  <p>Zastrzeżenie powyższe nie wyłącza możliwości przetwarzania informacji technicznych koniecznych do zapewnienia bezpieczeństwa, integralności Platformy, wykonania usługi żądanej przez Użytkownika, obsługi płatności, komunikacji lub spełnienia obowiązków prawnych Administratora.</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">7</span>
                  Cele stosowania cookies
                </h3>
                <ul className="list-disc pl-11 space-y-3 marker:text-[#147A60]">
                  <li>zapewnienie prawidłowego działania Platformy i jej podstawowych funkcji;</li>
                  <li>utrzymanie sesji Użytkownika po zalogowaniu;</li>
                  <li>obsługa rezerwacji konsultacji, formularzy, zamówień i płatności;</li>
                  <li>zapamiętanie ustawień prywatności i wyborów dotyczących cookies;</li>
                  <li>ochrona Platformy przed nadużyciami, błędami technicznymi i próbami nieuprawnionego dostępu;</li>
                  <li>prowadzenie statystyk korzystania z Platformy, jeżeli Użytkownik wyrazi zgodę na cookies analityczne;</li>
                  <li>ulepszanie funkcjonalności Platformy, poprawa jej szybkości i stabilności;</li>
                  <li>personalizacja wybranych funkcji, jeżeli Użytkownik wyrazi zgodę na cookies funkcjonalne;</li>
                  <li>prowadzenie działań marketingowych lub remarketingowych, jeżeli Użytkownik wyrazi zgodę na cookies marketingowe;</li>
                  <li>zapewnienie zgodności działania Platformy z preferencjami prywatności wybranymi przez Użytkownika.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">8</span>
                  Pliki cookies własne i zewnętrzne
                </h3>
                <div className="pl-6 space-y-4">
                  <p>Platforma wykorzystuje pliki cookies własne, zapisywane bezpośrednio przez domenę lekarzeiterapeuci.pl, oraz pliki cookies podmiotów zewnętrznych, jeżeli określone funkcje Platformy są dostarczane przez zewnętrznych dostawców technologii.</p>
                  <p>Podmioty zewnętrzne mogą obejmować w szczególności dostawców hostingu, zabezpieczeń, analityki, komunikacji, czatu, wideokonsultacji, płatności, narzędzi rezerwacyjnych, map, formularzy, systemów mailingowych albo narzędzi marketingowych.</p>
                  <p>Aktualny wykaz konkretnych dostawców oraz aktywnych plików cookies jest prezentowany Użytkownikowi w panelu zarządzania zgodami dostępnym na Platformie, o ile dane narzędzia są aktualnie wykorzystywane. Panel zgód może zawierać informacje bardziej szczegółowe niż niniejsza Polityka, w szczególności nazwy plików, dostawców, cele oraz okresy działania.</p>
                  <p>Administrator może zmieniać dostawców technologicznych i konfigurację narzędzi wykorzystywanych na Platformie, jeżeli jest to uzasadnione względami technicznymi, bezpieczeństwa, rozwoju Platformy, jakości świadczenia usług, zgodności z prawem albo zmianami organizacyjnymi. Zmiany dotyczące cookies wymagających zgody są odzwierciedlane w panelu zarządzania zgodami.</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">9</span>
                  Przykładowy wykaz technologii według funkcji
                </h3>
                <div className="pl-6 space-y-4">
                  <p>Poniższy wykaz ma charakter funkcjonalny i opisuje typy technologii, które mogą być stosowane na Platformie. Szczegółowe nazwy plików cookies, ich dostawcy oraz czas przechowywania są widoczne w technicznym panelu zarządzania zgodami, jeżeli dane narzędzie jest aktywne.</p>
                  
                  <div className="overflow-x-auto mt-6">
                    <table className="w-full text-left border-collapse min-w-[800px] shadow-sm rounded-xl overflow-hidden text-[13px] border border-slate-200">
                      <thead>
                        <tr className="bg-[#EAF3F0] text-slate-800">
                          <th className="p-4 border-b border-slate-200 font-extrabold">Funkcja</th>
                          <th className="p-4 border-b border-slate-200 font-extrabold">Przykładowa technologia</th>
                          <th className="p-4 border-b border-slate-200 font-extrabold">Cel</th>
                          <th className="p-4 border-b border-slate-200 font-extrabold">Podstawa</th>
                          <th className="p-4 border-b border-slate-200 font-extrabold">Uwagi</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white align-top">
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                          <td className="p-4 font-bold text-slate-700">Sesja użytkownika</td>
                          <td className="p-4">cookies sesyjne / session storage</td>
                          <td className="p-4">utrzymanie logowania i ciągłości procesu rezerwacji</td>
                          <td className="p-4">konieczność techniczna</td>
                          <td className="p-4">brak zgody, jeżeli niezbędne</td>
                        </tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                          <td className="p-4 font-bold text-slate-700">Panel zgód</td>
                          <td className="p-4">cookie zgody / consent status</td>
                          <td className="p-4">zapamiętanie wyboru dotyczącego cookies</td>
                          <td className="p-4">konieczność techniczna</td>
                          <td className="p-4">zapobiega ponownemu wyświetlaniu banera</td>
                        </tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                          <td className="p-4 font-bold text-slate-700">Płatności</td>
                          <td className="p-4">cookies operatora płatności</td>
                          <td className="p-4">bezpieczna realizacja transakcji</td>
                          <td className="p-4">konieczność wykonania usługi albo zgoda, zależnie od funkcji</td>
                          <td className="p-4">szczegóły u operatora płatności</td>
                        </tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                          <td className="p-4 font-bold text-slate-700">Analityka</td>
                          <td className="p-4">narzędzia statystyczne, np. analityka ruchu</td>
                          <td className="p-4">pomiar odwiedzin i użyteczności Platformy</td>
                          <td className="p-4">zgoda, chyba że zastosowanie ma wyjątek przewidziany prawem</td>
                          <td className="p-4">skrypty uruchamiane zgodnie z konfiguracją zgód</td>
                        </tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                          <td className="p-4 font-bold text-slate-700">Marketing</td>
                          <td className="p-4">piksele reklamowe / tagi kampanii</td>
                          <td className="p-4">pomiar kampanii i remarketing</td>
                          <td className="p-4">zgoda</td>
                          <td className="p-4">nie powinny obejmować danych medycznych</td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="p-4 font-bold text-slate-700">Komunikacja</td>
                          <td className="p-4">czat, formularz kontaktowy, wideokonsultacja</td>
                          <td className="p-4">obsługa kontaktu i konsultacji</td>
                          <td className="p-4">zależnie od usługi</td>
                          <td className="p-4">wymaga weryfikacji dostawcy i zakresu danych</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">10</span>
                  Okres przechowywania cookies
                </h3>
                <div className="pl-6 space-y-4">
                  <p>Czas przechowywania plików cookies zależy od ich rodzaju, celu oraz ustawień danego narzędzia.</p>
                  <p>Cookies sesyjne są co do zasady przechowywane do czasu zakończenia sesji, wylogowania, zamknięcia przeglądarki albo opuszczenia Platformy. Cookies trwałe mogą być przechowywane przez czas określony w parametrach danego pliku albo do czasu ich usunięcia przez Użytkownika.</p>
                  <p>Cookies zapisujące zgodę Użytkownika są przechowywane przez okres potrzebny do wykazania i respektowania wyboru Użytkownika, nie dłużej niż jest to uzasadnione celem ich stosowania. Administrator okresowo weryfikuje adekwatność okresów przechowywania cookies do celów ich użycia.</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">11</span>
                  Zgoda na cookies i jej wycofanie
                </h3>
                <div className="pl-6 space-y-4">
                  <p>Przy pierwszej wizycie na Platformie Użytkownik otrzymuje komunikat umożliwiający zaakceptowanie wszystkich cookies, odrzucenie cookies innych niż niezbędne albo dostosowanie zgód według kategorii.</p>
                  <p>Zgoda na cookies inne niż niezbędne jest dobrowolna. Użytkownik może korzystać z podstawowych funkcji Platformy bez wyrażania zgody na cookies analityczne, funkcjonalne lub marketingowe, o ile nie są one konieczne do wykonania żądanej funkcji.</p>
                  <p>Użytkownik może w każdej chwili wycofać zgodę lub zmienić ustawienia cookies, korzystając z linku „Ustawienia cookies”, „Zarządzaj zgodami”, „Centrum preferencji prywatności” albo podobnego mechanizmu dostępnego na Platformie.</p>
                  <p>Wycofanie zgody nie wpływa na zgodność z prawem działań dokonanych przed jej wycofaniem. Jeżeli Użytkownik usunie cookies zapisane w przeglądarce, Platforma może ponownie wyświetlić baner lub panel zgód.</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">12</span>
                  Zarządzanie cookies w przeglądarce
                </h3>
                <div className="pl-6 space-y-4">
                  <p>Użytkownik może zarządzać cookies również z poziomu ustawień swojej przeglądarki internetowej. W zależności od przeglądarki możliwe jest między innymi blokowanie cookies, usuwanie cookies, ustawienie powiadomień o ich zapisie, ograniczanie cookies stron trzecich albo korzystanie z trybu prywatnego.</p>
                  <p>Ograniczenie lub wyłączenie cookies niezbędnych może spowodować nieprawidłowe działanie Platformy, w tym brak możliwości zalogowania, złożenia zamówienia, dokonania rezerwacji, przejścia przez płatność, skorzystania z wybranych funkcji bezpieczeństwa albo zapamiętania ustawień prywatności.</p>
                  <p>Administrator nie odpowiada za ograniczenia w korzystaniu z Platformy wynikające z ustawień przeglądarki, urządzenia, oprogramowania zabezpieczającego, blokad reklamowych, sieci Użytkownika albo decyzji Użytkownika o zablokowaniu cookies niezbędnych do działania określonych funkcji.</p>
                  <p>Użytkownik powinien zapoznać się z instrukcją właściwej przeglądarki, ponieważ sposób zarządzania cookies różni się w zależności od używanego oprogramowania i jego wersji.</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">13</span>
                  Dane osobowe a cookies
                </h3>
                <div className="pl-6 space-y-4">
                  <p>Nie wszystkie pliki cookies zawierają dane osobowe. Jeżeli jednak informacje pozyskiwane za pomocą cookies pozwalają zidentyfikować Użytkownika bezpośrednio albo pośrednio, są traktowane jako dane osobowe i przetwarzane zgodnie z RODO oraz Polityką Prywatności.</p>
                  <p>W zależności od kategorii cookies podstawą przetwarzania danych może być wykonanie umowy lub świadczenie usługi żądanej przez Użytkownika, prawnie uzasadniony interes Administratora, obowiązek prawny albo zgoda Użytkownika. W przypadku cookies analitycznych, funkcjonalnych i marketingowych podstawą jest co do zasady zgoda Użytkownika.</p>
                  <p>Użytkownik ma prawa wynikające z przepisów o ochronie danych osobowych, w tym prawo dostępu do danych, sprostowania, usunięcia, ograniczenia przetwarzania, sprzeciwu, przenoszenia danych oraz wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych, w zakresie i na zasadach określonych w przepisach.</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">14</span>
                  Dostawcy zewnętrzni i transfer danych
                </h3>
                <div className="pl-6 space-y-4">
                  <p>Jeżeli Platforma korzysta z narzędzi dostawców zewnętrznych, dostawcy ci mogą uzyskiwać dostęp do określonych informacji technicznych, takich jak adres IP, identyfikator przeglądarki, informacje o urządzeniu, czas wizyty, źródło wejścia na Platformę albo zdarzenia wykonywane przez Użytkownika.</p>
                  <p>Administrator dobiera dostawców zewnętrznych z uwzględnieniem bezpieczeństwa, poufności, zakresu powierzanych danych oraz charakteru Platformy. W przypadku dostawców spoza Europejskiego Obszaru Gospodarczego transfer danych odbywa się zgodnie z mechanizmami przewidzianymi przez RODO.</p>
                  <p>W przypadku narzędzi marketingowych i analitycznych Administrator nie konfiguruje ich w celu przekazywania danych o stanie zdrowia, treści formularzy medycznych, szczegółów konsultacji, dokumentacji medycznej oraz innych danych szczególnie chronionych.</p>
                  <p>Niektórzy dostawcy zewnętrzni mogą działać jako odrębni administratorzy danych w zakresie określonym ich własnymi dokumentami. W takim przypadku Użytkownik powinien zapoznać się również z dokumentami prywatności danego dostawcy, jeżeli korzysta z funkcji dostarczanej przez ten podmiot.</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">15</span>
                  Bezpieczeństwo
                </h3>
                <div className="pl-6 space-y-4">
                  <p>Administrator stosuje odpowiednie środki techniczne i organizacyjne w celu ochrony Platformy oraz ograniczenia ryzyka nieuprawnionego dostępu do informacji przetwarzanych za pomocą cookies i podobnych technologii.</p>
                  <p>Użytkownik powinien dbać o bezpieczeństwo swojego urządzenia, korzystać z aktualnego oprogramowania, nie udostępniać danych logowania osobom trzecim oraz upewniać się, że korzysta z prawidłowego adresu Platformy: www.lekarzeiterapeuci.pl.</p>
                  <p>Korzystanie z Platformy przez sieć Internet wiąże się z typowymi ryzykami środowiska teleinformatycznego, w tym z ryzykiem działania złośliwego oprogramowania, prób phishingu, nieuprawnionego przejęcia sesji lub ingerencji w konfigurację urządzenia Użytkownika. Administrator ogranicza te ryzyka w zakresie pozostającym pod jego kontrolą.</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">16</span>
                  Panel zarządzania zgodami
                </h3>
                <div className="pl-6 space-y-4">
                  <p>Panel zarządzania zgodami umożliwia co najmniej zaakceptowanie wszystkich cookies, odrzucenie cookies innych niż niezbędne oraz dostosowanie ustawień według kategorii.</p>
                  <p>Cookies inne niż niezbędne nie są domyślnie zaznaczone. Skrypty analityczne i marketingowe uruchamiają się zgodnie z decyzją Użytkownika oraz aktualną konfiguracją Platformy.</p>
                  <p>Panel zgód rejestruje zakres, datę i źródło udzielonej zgody w zakresie niezbędnym do wykazania prawidłowości jej pozyskania oraz umożliwia zmianę albo wycofanie zgody.</p>
                  <p>Jeżeli informacje techniczne w panelu zgód są bardziej szczegółowe niż niniejsza Polityka, w szczególności w zakresie nazw dostawców, nazw plików cookies i okresów ich działania, należy traktować je jako aktualne uzupełnienie niniejszej Polityki.</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">17</span>
                  Zmiany Polityki plików cookies
                </h3>
                <div className="pl-6 space-y-4">
                  <p>Administrator może zmienić niniejszą Politykę w przypadku zmiany przepisów prawa, zmiany zakresu lub sposobu wykorzystywania cookies, wdrożenia nowych narzędzi technologicznych, zmiany dostawców zewnętrznych, rozwoju Platformy albo potrzeby doprecyzowania informacji przekazywanych Użytkownikom.</p>
                  <p>Aktualna treść Polityki jest dostępna w serwisie. Jeżeli zmiana dotyczy cookies wymagających zgody, Użytkownik może zostać poproszony o ponowne dokonanie wyboru w panelu zgód.</p>
                  <p>Zmiany o charakterze technicznym, redakcyjnym albo organizacyjnym, które nie wpływają istotnie na prawa Użytkownika, mogą być wprowadzane przez udostępnienie zaktualizowanego dokumentu w serwisie.</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">18</span>
                  Postanowienia końcowe
                </h3>
                <div className="pl-6 space-y-4">
                  <p>Polityka obowiązuje od dnia jej udostępnienia w serwisie.</p>
                  <p>W sprawach nieuregulowanych niniejszą Polityką zastosowanie mają Regulamin Platformy, Polityka Prywatności oraz powszechnie obowiązujące przepisy prawa, w szczególności RODO oraz ustawa z dnia 12 lipca 2024 r. - Prawo komunikacji elektronicznej.</p>
                  <p>W przypadku rozbieżności między informacjami technicznymi w panelu zarządzania zgodami a niniejszą Polityką Administrator podejmuje działania zmierzające do zapewnienia spójności dokumentów z rzeczywistym działaniem Platformy.</p>
                  <p>Polityka jest udostępniona Użytkownikowi w sposób umożliwiający jej pobranie, utrwalenie i odtworzenie.</p>
                </div>
              </section>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
