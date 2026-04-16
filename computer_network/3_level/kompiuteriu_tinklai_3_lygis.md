# Kompiuterių tinklai 3 lygis - turinys

- [Tinklo paslaugos ir protokolai](#tinklo-paslaugos-ir-protokolai)
- [Domenai ir URL](#domenai-ir-url)
- [Įrenginių sujungimas](#įrenginių-sujungimas)
- [Tinklo diagnostika](#tinklo-diagnostika)

Antrame lygyje buvo nagrinėjama, kaip tinklai veikia iš techninės pusės. Buvo aptarta tinklo įranga, interneto prieiga, TCP IP veikimo principai ir IP adresai. Tai leidžia suprasti, kaip įrenginiai susijungia ir kaip duomenys keliauja tinkle.

Tačiau vien suprasti duomenų perdavimą neužtenka. Svarbu suvokti, kokios paslaugos veikia tinkle ir kaip jos yra realizuojamos praktikoje.

Trečiame lygyje dėmesys skiriamas tam, kaip tinklai naudojami realiose situacijose. Čia nagrinėjama, kaip veikia interneto paslaugos, kaip susiejami domenai su adresais, kaip įrenginiai bendrauja tarpusavyje ir kaip galima diagnozuoti tinklo problemas.

Galima sakyti, kad šiame etape pereinama nuo techninio veikimo prie praktinio pritaikymo.

Pirmiausia svarbu suprasti tinklo paslaugas ir protokolus, nes būtent jie apibrėžia, kaip vyksta bendravimas tarp įrenginių ir kokios funkcijos yra prieinamos internete.

## Tinklo paslaugos ir protokolai

Kompiuterių tinklai naudojami ne tik duomenų perdavimui, bet ir įvairioms paslaugoms teikti. Šios paslaugos leidžia vartotojams naršyti internete, siųsti laiškus, atsisiųsti failus ar bendrauti realiu laiku.

Angliškai tinklo paslaugos vadinamos *network services*, o jų veikimą apibrėžia protokolai (*protocols*).

Protokolas yra taisyklių rinkinys, kuris nusako, kaip įrenginiai turi bendrauti tarpusavyje. Be protokolų skirtingi įrenginiai negalėtų suprasti vienas kito.

Kiekviena tinklo paslauga naudoja tam tikrą protokolą.

**HTTP** (*HyperText Transfer Protocol*) yra naudojamas naršyti interneto puslapius. Kai atidaromas puslapis naršyklėje (*browser*), duomenys siunčiami naudojant šį protokolą.

**HTTPS** (*HyperText Transfer Protocol Secure*) yra saugi HTTP versija. Ji užšifruoja duomenis, todėl informacija tampa apsaugota nuo pašalinių stebėjimo.

**FTP** (*File Transfer Protocol*) naudojamas failų siuntimui ir atsisiuntimui tarp kompiuterių.

**SMTP** (*Simple Mail Transfer Protocol*) naudojamas el. laiškų siuntimui.

**POP3** (*Post Office Protocol version 3*) ir **IMAP** (*Internet Message Access Protocol*) naudojami el. laiškų gavimui.

POP3 dažniausiai atsisiunčia laiškus į įrenginį, o IMAP leidžia juos peržiūrėti serveryje ir sinchronizuoti tarp kelių įrenginių.

Šie protokolai veikia kartu su TCP IP (*TCP/IP protocol suite*) ir užtikrina, kad skirtingos paslaugos galėtų veikti internete.

Svarbu suprasti, kad kiekvienas protokolas turi savo paskirtį ir naudojamas skirtingose situacijose.

Trumpai galima įsiminti taip

- **HTTP** ir **HTTPS** naudojami svetainėms  
- **FTP** naudojamas failams  
- **SMTP** naudojamas laiškų siuntimui  
- **POP3** ir **IMAP** naudojami laiškų gavimui  

Šie protokolai leidžia įgyvendinti įvairias tinklo paslaugas ir užtikrina sklandų informacijos perdavimą.

Kai jau aišku, kaip veikia tinklo paslaugos, svarbu suprasti, kaip vartotojai pasiekia konkrečius interneto puslapius. Todėl toliau nagrinėjama domenų ir URL sąvoka.

## Domenai ir URL

Kad vartotojai galėtų lengvai pasiekti interneto svetaines, naudojami domenai ir URL adresai. Jie leidžia surasti reikiamą informaciją internete nenaudojant sudėtingų IP adresų.

Angliškai domenas vadinamas *domain*, o URL adresas vadinamas *Uniform Resource Locator*.

**Domenas** yra žmogui suprantamas svetainės pavadinimas. Pavyzdžiui, `google.com` yra domenas.

Iš tikrųjų kiekviena svetainė turi IP adresą, tačiau jį įsiminti būtų sudėtinga. Todėl vietoje skaičių naudojami domenai.

Kai vartotojas įveda domeną naršyklėje (*browser*), vyksta procesas, kurio metu domenas paverčiamas į IP adresą. Tai atlieka sistema, vadinama *DNS Domain Name System*.

DNS veikia kaip „interneto telefonų knyga“. Ji suranda, koks IP adresas atitinka įvestą domeną, ir leidžia naršyklei susisiekti su serveriu (*server*).

**URL adresas** (*URL*) yra pilnas kelias iki konkretaus resurso internete. Jis apima ne tik domeną, bet ir papildomą informaciją.

Pavyzdžiui, URL adresas gali atrodyti taip `https://www.example.com/index.html`

Šį adresą sudaro kelios dalys

- `https` tai protokolas (*protocol*), kuris nusako, kaip bus perduodami duomenys  
- `www.example.com` tai domenas  
- `/index.html` tai kelias iki konkretaus puslapio ar failo  

URL leidžia tiksliai nurodyti, kur yra konkretus turinys internete.

Svarbu suprasti skirtumą

- **domenas** yra svetainės pavadinimas  
- **URL** yra pilnas adresas iki konkretaus resurso  

Domenai ir URL leidžia patogiai naudotis internetu, nes vartotojui nereikia žinoti IP adresų.

Kai jau aišku, kaip pasiekiamos svetainės internete, galima pereiti prie to, kaip įrenginiai gali būti sujungiami ne tik per internetą, bet ir tiesiogiai tarpusavyje naudojant įvairias technologijas.

## Įrenginių sujungimas

Įrenginiai gali būti sujungiami ne tik per internetą, bet ir tiesiogiai tarpusavyje. Tai leidžia jiems keistis duomenimis, valdyti vienas kitą arba veikti kaip viena sistema.

Angliškai įrenginių sujungimas dažnai vadinamas *device connectivity*.

Vienas dažniausių būdų yra *Wi-Fi*, kuris leidžia įrenginiams prisijungti prie to paties tinklo ir bendrauti per maršrutizatorių (*router*).

Tačiau įrenginiai gali būti sujungiami ir tiesiogiai, be interneto.

**Bluetooth** yra technologija, leidžianti sujungti įrenginius trumpu atstumu. Ji dažnai naudojama prijungti ausines, klaviatūras, peles ar kitus priedus.

Bluetooth veikia nedideliu atstumu ir sunaudoja mažai energijos, todėl yra labai tinkamas nešiojamiems įrenginiams.

Kitas svarbus aspektas yra išmanieji įrenginiai, dar vadinami *IoT Internet of Things*. Tai įvairūs įrenginiai, kurie gali būti prijungti prie tinklo ir valdomi nuotoliniu būdu.

Pavyzdžiui, išmanūs televizoriai, lemputės ar apsaugos sistemos gali būti valdomos per telefoną ar kompiuterį.

Įrenginiai gali būti sujungiami keliais būdais

- per *Wi-Fi* naudojant bendrą tinklą  
- per *Bluetooth* tiesioginiam ryšiui  
- per internetą naudojant *IoT* sprendimus  

Svarbu suprasti, kad skirtingi sujungimo būdai naudojami skirtingose situacijose. Wi-Fi tinkamas platesniam ryšiui, Bluetooth trumpiems atstumams, o IoT leidžia valdyti įrenginius per internetą.

Įrenginių sujungimas leidžia kurti išmanias sistemas, kuriose įrenginiai veikia kartu ir automatizuoja kasdienes užduotis.

Kai jau aišku, kaip įrenginiai gali būti sujungiami, svarbu mokėti nustatyti ir spręsti tinklo problemas. Todėl toliau nagrinėjama tinklo diagnostika.

## Tinklo diagnostika

Net ir tinkamai sukonfigūruoti tinklai kartais susiduria su problemomis. Gali dingti interneto ryšys, sulėtėti duomenų perdavimas arba įrenginiai negali pasiekti vienas kito. Tokiais atvejais naudojama tinklo diagnostika.

Angliškai tai vadinama *network diagnostics*.

Tinklo diagnostika apima įvairius būdus ir įrankius, kurie padeda nustatyti problemos priežastį ir ją išspręsti.

Pirmiausia svarbu patikrinti pagrindinius dalykus. Ar įrenginys prijungtas prie tinklo, ar veikia *Wi-Fi*, ar tinkamai prijungti kabeliai. Dažnai problema būna labai paprasta.

Vienas dažniausiai naudojamų įrankių yra `ping`. Ši komanda leidžia patikrinti, ar įrenginys gali pasiekti kitą įrenginį tinkle.

Pavyzdžiui, naudojant komandą `ping 8.8.8.8` galima patikrinti, ar yra ryšys su išoriniu tinklu.

Jeigu atsakymas gaunamas, tai reiškia, kad ryšys veikia. Jei ne, gali būti ryšio problema.

Kitas naudingas įrankis yra `ipconfig` arba `ifconfig`. Jis leidžia pamatyti įrenginio IP adresą ir kitą tinklo informaciją.

Tai padeda nustatyti, ar įrenginys turi teisingą IP adresą ir ar yra prijungtas prie tinklo.

Taip pat galima naudoti svetaines, kurios parodo išorinį IP adresą. Pavyzdžiui, galima apsilankyti svetainėje :contentReference[oaicite:0]{index=0} ir patikrinti savo viešą IP adresą.

Tinklo problemos gali būti įvairios

- nėra interneto ryšio  
- neteisingas IP adresas  
- neveikia maršrutizatorius (*router*)  
- silpnas *Wi-Fi* signalas  

Diagnostikos tikslas yra žingsnis po žingsnio patikrinti visus šiuos aspektus ir rasti problemos vietą.

Svarbu veikti nuosekliai. Pirmiausia tikrinamas įrenginys, tada tinklas, o galiausiai išorinis ryšys.

Trumpai galima įsiminti taip

- tikrink fizinį ryšį  
- naudok `ping` ryšiui patikrinti  
- naudok `ipconfig` IP informacijai  
- tikrink išorinį IP per specialias svetaines  

Tinklo diagnostika leidžia greitai nustatyti ir išspręsti problemas, todėl yra svarbi kiekvieno tinklo naudotojo ir administratoriaus dalis.
