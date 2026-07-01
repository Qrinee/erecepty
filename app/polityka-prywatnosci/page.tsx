import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, FileText, Lock } from "lucide-react";

export default function PolitykaPrywatnosciPage() {
  return (
    <>
      <Header />
      <main className="bg-[#FCFDFD] min-h-screen pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white p-8 md:p-12 lg:p-16 rounded-[32px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-slate-100 mb-8">
            
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-[#EAF3F0] rounded-2xl flex items-center justify-center text-[#147A60]">
                <Lock className="w-8 h-8" />
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-10 text-center tracking-tight uppercase">
              Polityka Prywatności
            </h1>
            <h2 className="text-lg md:text-xl font-bold text-slate-600 mb-10 text-center">
              Serwisu lekarzeiterapeuci.pl
            </h2>

            <div className="space-y-12 text-sm md:text-[15px] text-slate-600 leading-relaxed font-medium">
              
              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3 uppercase">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">I</span>
                  Administrator danych i kontakt
                </h3>
                <div className="pl-6 space-y-4">
                  <p>Administratorem danych osobowych użytkowników serwisu internetowego lekarzeiterapeuci.pl, pacjentów oraz osób korzystających z usług telemedycznych jest <strong>Nowa Przyszłość spółka z ograniczoną odpowiedzialnością</strong> z siedzibą w Olsztynie, adres: Michała Kajki 10-12, 10-547 Olsztyn, wpisana do rejestru przedsiębiorców Krajowego Rejestru Sądowego pod numerem KRS 0001235181, NIP 7412175965, REGON 544493932, RPWDL 000000305622, zwana dalej „Administratorem” lub „Lekarze i Terapeuci”.</p>
                  <p>Kontakt z Administratorem jest możliwy:</p>
                  <ul className="list-disc pl-5 space-y-2 marker:text-[#147A60]">
                    <li><strong>e-mail:</strong> <a href="mailto:kontakt@lekarzeiterapeuci.pl" className="text-[#147A60] hover:underline font-bold">kontakt@lekarzeiterapeuci.pl</a></li>
                    <li><strong>adres korespondencyjny:</strong> Nowa Przyszłość sp. z o.o., Michała Kajki 10-12, 10-547 Olsztyn</li>
                  </ul>
                  <p>Jeżeli Administrator wyznaczy Inspektora Ochrony Danych, informacja o tym oraz adres kontaktowy IOD zostaną opublikowane w Serwisie. Do czasu potwierdzenia wyznaczenia IOD w sprawach ochrony danych należy kontaktować się z Administratorem na adres kontakt@lekarzeiterapeuci.pl.</p>
                  <p>Numer księgi rejestrowej RPWDL: 000000305622</p>
                  <p>Administrator jest właścicielem domeny lekarzeiterapeuci.pl i będzie świadczyć za jej pośrednictwem usługi telemedyczne, w szczególności konsultacje online, obsługę recept elektronicznych, e-skierowań, e-ZLA oraz inne usługi zdrowotne realizowane zdalnie przez lekarzy, terapeutów i inne osoby wykonujące zawody medyczne, w zakresie dopuszczalnym przez obowiązujące przepisy prawa.</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3 uppercase">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">II</span>
                  Zakres stosowania polityki
                </h3>
                <div className="pl-6 space-y-4">
                  <p>Polityka opisuje zasady przetwarzania danych osobowych w związku z korzystaniem z serwisu lekarzeiterapeuci.pl, zakładaniem i obsługą konta użytkownika, umawianiem konsultacji, świadczeniem usług zdrowotnych online, komunikacją z Administratorem, obsługą płatności, reklamacjami, marketingiem oraz wykorzystywaniem plików cookies i podobnych technologii.</p>
                  <p>Polityka nie obejmuje zasad przetwarzania danych przez zewnętrzne serwisy, do których mogą prowadzić linki z Serwisu, ani przez niezależnych administratorów danych, w tym operatorów systemów płatności, dostawców mediów społecznościowych lub podmioty publiczne, chyba że w konkretnym procesie działają oni jako podmioty przetwarzające dane na zlecenie Administratora.</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3 uppercase">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">III</span>
                  Definicje
                </h3>
                <ul className="list-disc pl-11 space-y-3 marker:text-[#147A60]">
                  <li><strong>Serwis</strong> - serwis internetowy dostępny pod adresem lekarzeiterapeuci.pl oraz jego funkcjonalności.</li>
                  <li><strong>Użytkownik</strong> - osoba odwiedzająca Serwis, zakładająca konto, kontaktująca się z Administratorem albo korzystająca z usług dostępnych w Serwisie.</li>
                  <li><strong>Pacjent</strong> - osoba korzystająca z usług zdrowotnych świadczonych za pośrednictwem Serwisu.</li>
                  <li><strong>Usługi telemedyczne</strong> - konsultacje online, teleporady, wystawianie e-recept, e-ZLA, e-skierowań, zaświadczeń, zaleceń lub innych dokumentów medycznych, jeżeli są medycznie uzasadnione i dopuszczalne prawem.</li>
                  <li><strong>RODO</strong> - rozporządzenie Parlamentu Europejskiego i Rady (UE) 2016/679 z 27 kwietnia 2016 r.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3 uppercase">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">IV</span>
                  Sposób pozyskiwania danych
                </h3>
                <div className="pl-6 space-y-4">
                  <p>Dane pozyskujemy przede wszystkim bezpośrednio od Użytkownika lub Pacjenta: przez formularze w Serwisie, konto użytkownika, formularze medyczne, czat, e-mail, telefon, system rezerwacji, system płatności oraz w toku konsultacji online.</p>
                  <p>Dane mogą być także pozyskiwane automatycznie w związku z korzystaniem z Serwisu, w szczególności przez pliki cookies, logi serwera, identyfikatory urządzeń, adres IP, informacje o przeglądarce, systemie operacyjnym, źródle wejścia do Serwisu i aktywności w Serwisie.</p>
                  <p>Jeżeli usługa jest realizowana we współpracy z partnerem, np. innym podmiotem leczniczym, ubezpieczycielem, pracodawcą, platformą rezerwacyjną lub dostawcą infrastruktury medycznej, dane mogą być pozyskane od takiego partnera wyłącznie w zakresie niezbędnym do realizacji usługi i przy zachowaniu właściwej podstawy prawnej.</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3 uppercase">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">V</span>
                  Cele, podstawy prawne i okresy przechowywania danych
                </h3>
                <div className="pl-6 space-y-4">
                  <p>Poniżej wskazujemy główne procesy przetwarzania danych. W praktyce jeden proces może mieć więcej niż jedną podstawę prawną, np. dane zwykłe przetwarzamy na podstawie art. 6 RODO, a dane dotyczące zdrowia dodatkowo na podstawie art. 9 ust. 2 lit. h RODO oraz art. 9 ust. 3 RODO.</p>
                  
                  <div className="overflow-x-auto mt-6">
                    <table className="w-full text-left border-collapse min-w-[800px] shadow-sm rounded-xl overflow-hidden text-[13px] border border-slate-200">
                      <thead>
                        <tr className="bg-[#EAF3F0] text-slate-800">
                          <th className="p-4 border-b border-slate-200 font-extrabold w-1/4">Cel / proces</th>
                          <th className="p-4 border-b border-slate-200 font-extrabold w-1/4">Zakres danych</th>
                          <th className="p-4 border-b border-slate-200 font-extrabold w-1/4">Podstawa prawna</th>
                          <th className="p-4 border-b border-slate-200 font-extrabold w-1/4">Okres przechowywania / uwagi</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white align-top">
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                          <td className="p-4 font-bold text-slate-700">Rejestracja i prowadzenie konta w Serwisie</td>
                          <td className="p-4">imię, nazwisko, e-mail, telefon, hasło lub dane logowania, historia aktywności konta, ustawienia konta</td>
                          <td className="p-4">art. 6 ust. 1 lit. b RODO; art. 6 ust. 1 lit. f RODO</td>
                          <td className="p-4">przez okres posiadania konta, a następnie do upływu okresu przedawnienia roszczeń lub obowiązków archiwizacyjnych</td>
                        </tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                          <td className="p-4 font-bold text-slate-700">Umawianie konsultacji i obsługa zamówienia</td>
                          <td className="p-4">imię, nazwisko, PESEL lub data urodzenia, dane kontaktowe, wybrana usługa, termin, status płatności, dane rozliczeniowe</td>
                          <td className="p-4">art. 6 ust. 1 lit. b RODO; art. 6 ust. 1 lit. c RODO; art. 6 ust. 1 lit. f RODO</td>
                          <td className="p-4">przez czas realizacji usługi, a następnie przez okres wymagany przepisami rachunkowymi lub do przedawnienia roszczeń</td>
                        </tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                          <td className="p-4 font-bold text-slate-700">Świadczenie usług zdrowotnych online</td>
                          <td className="p-4">dane identyfikacyjne, dane kontaktowe, PESEL, dane dotyczące zdrowia, objawy, wywiad medyczny, leki, alergie, wyniki badań, historia leczenia, dokumenty medyczne</td>
                          <td className="p-4">art. 6 ust. 1 lit. c RODO; art. 9 ust. 2 lit. h RODO; art. 9 ust. 3 RODO</td>
                          <td className="p-4">w zakresie dokumentacji medycznej co do zasady 20 lat; pozostałe dane przez okres niezbędny do realizacji celu i obrony roszczeń</td>
                        </tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                          <td className="p-4 font-bold text-slate-700">Prowadzenie dokumentacji medycznej</td>
                          <td className="p-4">dane wymagane przepisami o dokumentacji medycznej, w tym identyfikacja pacjenta, opis stanu zdrowia, rozpoznanie, ordynacje, zalecenia</td>
                          <td className="p-4">art. 6 ust. 1 lit. c RODO; art. 9 ust. 2 lit. h RODO; art. 9 ust. 3 RODO</td>
                          <td className="p-4">co do zasady 20 lat od końca roku kalendarzowego ostatniego wpisu</td>
                        </tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                          <td className="p-4 font-bold text-slate-700">Weryfikacja tożsamości pacjenta</td>
                          <td className="p-4">imię, nazwisko, PESEL, data urodzenia, dokument tożsamości lub jego wybrane dane, wizerunek</td>
                          <td className="p-4">art. 6 ust. 1 lit. c RODO; art. 9 ust. 2 lit. h RODO</td>
                          <td className="p-4">przechowywane tylko przez czas niezbędny do weryfikacji</td>
                        </tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                          <td className="p-4 font-bold text-slate-700">Obsługa płatności i rozliczeń</td>
                          <td className="p-4">dane identyfikacyjne, dane transakcji, kwota, status płatności, identyfikator płatności, dane fakturowe</td>
                          <td className="p-4">art. 6 ust. 1 lit. b RODO; art. 6 ust. 1 lit. c RODO; art. 6 ust. 1 lit. f RODO</td>
                          <td className="p-4">dokumenty księgowe przez okres wymagany przepisami; pozostałe do przedawnienia roszczeń</td>
                        </tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                          <td className="p-4 font-bold text-slate-700">Kontakt e-mail, telefon, formularz, czat</td>
                          <td className="p-4">imię, nazwisko, e-mail, telefon, treść wiadomości</td>
                          <td className="p-4">art. 6 ust. 1 lit. f RODO; art. 6 ust. 1 lit. b RODO; art. 9 ust. 2 lit. h RODO</td>
                          <td className="p-4">przez czas obsługi sprawy, a następnie do przedawnienia roszczeń</td>
                        </tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                          <td className="p-4 font-bold text-slate-700">Reklamacje, odstąpienia, zwroty, skargi</td>
                          <td className="p-4">dane identyfikacyjne, kontaktowe, opis sprawy, dane usługi, dane płatności</td>
                          <td className="p-4">art. 6 ust. 1 lit. c RODO; art. 6 ust. 1 lit. f RODO; art. 9 ust. 2 lit. h RODO</td>
                          <td className="p-4">przez czas rozpatrzenia sprawy, a następnie do przedawnienia roszczeń</td>
                        </tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                          <td className="p-4 font-bold text-slate-700">Marketing własny usług Administratora</td>
                          <td className="p-4">e-mail, telefon, imię, historia korzystania z Serwisu, preferencje, zgody marketingowe</td>
                          <td className="p-4">art. 6 ust. 1 lit. f RODO; art. 6 ust. 1 lit. a RODO</td>
                          <td className="p-4">do czasu wniesienia sprzeciwu lub cofnięcia zgody</td>
                        </tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                          <td className="p-4 font-bold text-slate-700">Newsletter i komunikacja edukacyjna</td>
                          <td className="p-4">e-mail, imię, status subskrypcji, aktywność</td>
                          <td className="p-4">art. 6 ust. 1 lit. a RODO; art. 6 ust. 1 lit. f RODO</td>
                          <td className="p-4">do czasu wycofania zgody lub rezygnacji</td>
                        </tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                          <td className="p-4 font-bold text-slate-700">Analityka i rozwój Serwisu</td>
                          <td className="p-4">identyfikatory cookies, adres IP, dane urządzenia, aktywność w Serwisie</td>
                          <td className="p-4">art. 6 ust. 1 lit. f RODO; art. 6 ust. 1 lit. a RODO (zgoda na cookies)</td>
                          <td className="p-4">zgodnie z okresem życia cookies</td>
                        </tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                          <td className="p-4 font-bold text-slate-700">Cookies reklamowe i remarketing</td>
                          <td className="p-4">identyfikatory cookies, dane o aktywności, informacje o kampaniach</td>
                          <td className="p-4">art. 6 ust. 1 lit. a RODO (zgoda na cookies)</td>
                          <td className="p-4">do czasu cofnięcia zgody lub wygaśnięcia cookies</td>
                        </tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                          <td className="p-4 font-bold text-slate-700">Bezpieczeństwo Serwisu i przeciwdziałanie nadużyciom</td>
                          <td className="p-4">adres IP, logi serwera, identyfikatory sesji, dane techniczne urządzenia</td>
                          <td className="p-4">art. 6 ust. 1 lit. f RODO</td>
                          <td className="p-4">przez okres niezbędny do analizy bezpieczeństwa, zwykle do 12 miesięcy</td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="p-4 font-bold text-slate-700">Profile w mediach społecznościowych</td>
                          <td className="p-4">nazwa profilu, imię, nazwisko, komentarze, reakcje, wiadomości</td>
                          <td className="p-4">art. 6 ust. 1 lit. f RODO</td>
                          <td className="p-4">przez okres istnienia interakcji</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3 uppercase">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">VI</span>
                  Dane dotyczące zdrowia i tajemnica zawodowa
                </h3>
                <div className="pl-6 space-y-4">
                  <p>Dane dotyczące zdrowia są szczególną kategorią danych osobowych. Administrator przetwarza je wyłącznie wtedy, gdy jest to niezbędne do celów profilaktyki zdrowotnej, diagnozy medycznej, zapewnienia opieki zdrowotnej, leczenia, zarządzania usługami opieki zdrowotnej lub prowadzenia dokumentacji medycznej.</p>
                  <p>Dane medyczne są przetwarzane przez osoby wykonujące zawody medyczne lub pod ich odpowiedzialnością oraz przez osoby zobowiązane do zachowania tajemnicy zawodowej albo umownej, zgodnie z art. 9 ust. 3 RODO. Dostęp personelu technicznego, IT, księgowego lub administracyjnego jest ograniczony do zakresu niezbędnego do wykonania powierzonych czynności.</p>
                  <p>Samo złożenie formularza medycznego, zamówienie konsultacji lub wniosek o e-receptę, e-ZLA albo inny dokument nie gwarantuje jego wystawienia. Decyzję medyczną podejmuje osoba uprawniona po analizie danych i zgodnie z aktualną wiedzą medyczną oraz przepisami prawa.</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3 uppercase">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">VII</span>
                  Odbiorcy danych i podmioty przetwarzające
                </h3>
                <div className="pl-6 space-y-4">
                  <p>Dane mogą być przekazywane wyłącznie podmiotom, które muszą mieć do nich dostęp w związku z realizacją usług lub obowiązków prawnych. Mogą to być w szczególności:</p>
                  <ul className="list-disc pl-5 space-y-2 marker:text-[#147A60]">
                    <li>lekarze, terapeuci i inne osoby wykonujące zawody medyczne współpracujące z Administratorem;</li>
                    <li>dostawcy systemów IT, hostingu, chmury, cyberbezpieczeństwa, EDM, wideokonsultacji, czatu i obsługi zgłoszeń;</li>
                    <li>operatorzy płatności, banki i podmioty obsługujące rozliczenia;</li>
                    <li>biuro rachunkowe, kancelarie prawne, audytorzy i doradcy;</li>
                    <li>dostawcy narzędzi analitycznych, marketingowych i komunikacyjnych - wyłącznie zgodnie z konfiguracją zgód cookies i zawartymi umowami;</li>
                    <li>organy publiczne, NFZ, ZUS, organy ścigania, sądy lub inne podmioty uprawnione na podstawie przepisów prawa;</li>
                    <li>podmioty uprawnione do dostępu do dokumentacji medycznej na podstawie ustawy o prawach pacjenta i Rzeczniku Praw Pacjenta.</li>
                  </ul>
                  <p>Lista kluczowych kategorii dostawców, którym mogą być powierzane lub ujawniane dane osobowe, obejmuje w szczególności: dostawców hostingu i infrastruktury IT, dostawców systemów EDM, operatorów płatności, dostawców narzędzi analitycznych i marketingowych, dostawców narzędzi do komunikacji, w tym czatu, e-mail/SMS oraz wideokonsultacji.</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3 uppercase">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">VIII</span>
                  Przekazywanie danych poza EOG
                </h3>
                <div className="pl-6 space-y-4">
                  <p>Co do zasady Administrator dąży do korzystania z dostawców przetwarzających dane w Europejskim Obszarze Gospodarczym. Jeżeli w związku z korzystaniem z narzędzi IT, analitycznych, komunikacyjnych lub marketingowych dojdzie do przekazania danych poza EOG, Administrator zapewni odpowiednie mechanizmy zgodności, w szczególności decyzję stwierdzającą odpowiedni stopień ochrony, standardowe klauzule umowne Komisji Europejskiej lub inne zabezpieczenia wymagane przepisami RODO.</p>
                  <p>Informacja o konkretnych transferach poza EOG powinna być zgodna z faktycznie używanymi narzędziami, w szczególności Google, Meta, dostawcami chmury, narzędziami mailingowymi lub systemami wideokonsultacji.</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3 uppercase">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">IX</span>
                  Prawa osób, których dane dotyczą
                </h3>
                <div className="pl-6 space-y-4">
                  <p>Użytkownikowi lub Pacjentowi przysługują prawa wynikające z RODO, w zakresie i z ograniczeniami przewidzianymi przepisami:</p>
                  <ul className="list-disc pl-5 space-y-2 marker:text-[#147A60]">
                    <li>prawo dostępu do danych i uzyskania kopii danych;</li>
                    <li>prawo sprostowania danych;</li>
                    <li>prawo usunięcia danych, jeżeli nie istnieje obowiązek ich dalszego przechowywania;</li>
                    <li>prawo ograniczenia przetwarzania;</li>
                    <li>prawo przenoszenia danych, jeżeli przetwarzanie odbywa się na podstawie zgody lub umowy i w sposób zautomatyzowany;</li>
                    <li>prawo sprzeciwu wobec przetwarzania opartego na prawnie uzasadnionym interesie;</li>
                    <li>prawo wycofania zgody w dowolnym momencie, bez wpływu na zgodność z prawem przetwarzania dokonanego przed jej wycofaniem;</li>
                    <li>prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.</li>
                  </ul>
                  <p>W przypadku dokumentacji medycznej prawo do usunięcia danych jest ograniczone ustawowym obowiązkiem jej przechowywania. Po upływie ustawowych okresów przechowywania dokumentacja podlega zniszczeniu lub innemu postępowaniu przewidzianemu przepisami.</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3 uppercase">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">X</span>
                  Zautomatyzowane podejmowanie decyzji i profilowanie
                </h3>
                <div className="pl-6 space-y-4">
                  <p>Administrator nie podejmuje wobec Użytkowników decyzji opierających się wyłącznie na zautomatyzowanym przetwarzaniu, które wywoływałyby wobec nich skutki prawne lub w podobny sposób istotnie na nich wpływały, w rozumieniu art. 22 RODO.</p>
                  <p>Narzędzia analityczne i marketingowe mogą być wykorzystywane do profilowania marketingowego wyłącznie w zakresie dopuszczalnym prawem i zgodnie z udzielonymi zgodami cookies lub marketingowymi. Profilowanie marketingowe nie zastępuje decyzji medycznej.</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3 uppercase">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">XI</span>
                  Pliki cookies i podobne technologie
                </h3>
                <div className="pl-6 space-y-4">
                  <p>Serwis wykorzystuje pliki cookies oraz podobne technologie w celu zapewnienia prawidłowego działania Serwisu, bezpieczeństwa, utrzymania sesji, zapamiętywania ustawień, prowadzenia statystyk, analityki oraz - po uzyskaniu zgody - działań marketingowych i remarketingowych.</p>
                  <p>Cookies niezbędne mogą być stosowane bez dodatkowej zgody, ponieważ są konieczne do świadczenia usługi drogą elektroniczną lub zapewnienia bezpieczeństwa Serwisu. Cookies analityczne, funkcjonalne niewymagane technicznie oraz reklamowe powinny być uruchamiane dopiero po wyrażeniu odpowiedniej zgody przez użytkownika w banerze zgód cookies.</p>
                  <p>Użytkownik powinien mieć możliwość łatwego zaakceptowania, odmowy oraz zmiany zgód cookies. Odmowa zgody na cookies inne niż niezbędne nie powinna blokować dostępu do podstawowych funkcji Serwisu.</p>
                  
                  <div className="overflow-x-auto mt-6">
                    <table className="w-full text-left border-collapse min-w-[600px] shadow-sm rounded-xl overflow-hidden text-[13px] border border-slate-200">
                      <thead>
                        <tr className="bg-[#EAF3F0] text-slate-800">
                          <th className="p-4 border-b border-slate-200 font-extrabold w-1/4">Rodzaj cookies</th>
                          <th className="p-4 border-b border-slate-200 font-extrabold w-1/4">Cel</th>
                          <th className="p-4 border-b border-slate-200 font-extrabold w-1/4">Podstawa</th>
                          <th className="p-4 border-b border-slate-200 font-extrabold w-1/4">Uwagi</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white align-top">
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                          <td className="p-4 font-bold text-slate-700">Niezbędne</td>
                          <td className="p-4">działanie Serwisu, logowanie, bezpieczeństwo, obsługa formularzy</td>
                          <td className="p-4">art. 6 ust. 1 lit. f RODO lub art. 6 ust. 1 lit. b RODO</td>
                          <td className="p-4">aktywne domyślnie</td>
                        </tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                          <td className="p-4 font-bold text-slate-700">Analityczne</td>
                          <td className="p-4">statystyki, mierzenie ruchu, poprawa Serwisu</td>
                          <td className="p-4">art. 6 ust. 1 lit. a RODO - zgoda</td>
                          <td className="p-4">uruchamiane po zgodzie</td>
                        </tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                          <td className="p-4 font-bold text-slate-700">Funkcjonalne</td>
                          <td className="p-4">zapamiętywanie preferencji i ustawień</td>
                          <td className="p-4">art. 6 ust. 1 lit. a RODO</td>
                          <td className="p-4">zgoda zależnie od funkcji</td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="p-4 font-bold text-slate-700">Reklamowe / remarketingowe</td>
                          <td className="p-4">personalizacja reklam, kampanie, mierzenie skuteczności reklam</td>
                          <td className="p-4">art. 6 ust. 1 lit. a RODO - zgoda</td>
                          <td className="p-4">uruchamiane wyłącznie po zgodzie</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3 uppercase">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">XII</span>
                  Bezpieczeństwo danych
                </h3>
                <div className="pl-6 space-y-4">
                  <p>Administrator stosuje środki techniczne i organizacyjne adekwatne do ryzyka, w szczególności kontrolę dostępu, szyfrowanie transmisji, uwierzytelnianie użytkowników, rejestrowanie zdarzeń bezpieczeństwa, kopie zapasowe, ograniczenie dostępu personelu, umowy powierzenia przetwarzania danych oraz procedury reagowania na incydenty.</p>
                  <p>Ze względu na przetwarzanie danych dotyczących zdrowia Serwis powinien być projektowany z uwzględnieniem zasady privacy by design i privacy by default, minimalizacji danych, rozliczalności oraz podwyższonego poziomu ochrony systemów medycznych i teleinformatycznych.</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-extrabold text-slate-800 mb-5 flex items-center gap-3 uppercase">
                  <span className="w-8 h-8 rounded-lg bg-[#EAF3F0] text-[#147A60] flex items-center justify-center text-sm">XIII</span>
                  Zmiany polityki
                </h3>
                <div className="pl-6 space-y-4">
                  <p>Polityka może być aktualizowana w razie zmiany przepisów, zakresu usług, narzędzi technologicznych, dostawców, modelu świadczenia usług lub struktury organizacyjnej Administratora. Aktualna wersja Polityki będzie publikowana w Serwisie.</p>
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
