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

![protocols diagram](./assets/images/protocols-diagram.png)

Kiekviena tinklo paslauga naudoja tam tikrą protokolą.

**HTTP** (*HyperText Transfer Protocol*) yra naudojamas naršyti interneto puslapius. Kai atidaromas puslapis naršyklėje (*browser*), duomenys siunčiami naudojant šį protokolą.

**HTTPS** (*HyperText Transfer Protocol Secure*) yra saugi HTTP versija. Ji užšifruoja duomenis, todėl informacija tampa apsaugota nuo pašalinių stebėjimo.

![http vs https](./assets/images/http-vs-https.png)

**FTP** (*File Transfer Protocol*) naudojamas failų siuntimui ir atsisiuntimui tarp kompiuterių.

![ftp diagram](./assets/images/ftp-diagram.png)

**SMTP** (*Simple Mail Transfer Protocol*) naudojamas el. laiškų siuntimui.

![smtp diagram](./assets/images/smtp-diagram.png)

**POP3** (*Post Office Protocol version 3*) ir **IMAP** (*Internet Message Access Protocol*) naudojami el. laiškų gavimui.

![pop3 vs imap](./assets/images/pop3-imap-diagram.png)

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

![dns process](./assets/images/dns-process.png)

**URL adresas** (*URL*) yra pilnas kelias iki konkretaus resurso internete. Jis apima ne tik domeną, bet ir papildomą informaciją.

Pavyzdžiui, URL adresas gali atrodyti taip `https://www.example.com/index.html`

![url structure](./assets/images/url-structure.png)

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

![wifi connection](./assets/images/wifi-connection.png)

Tačiau įrenginiai gali būti sujungiami ir tiesiogiai, be interneto.

**Bluetooth** yra technologija, leidžianti sujungti įrenginius trumpu atstumu. Ji dažnai naudojama prijungti ausines, klaviatūras, peles ar kitus priedus.

![bluetooth connection](./assets/images/bluetooth-connection.png)

Bluetooth veikia nedideliu atstumu ir sunaudoja mažai energijos, todėl yra labai tinkamas nešiojamiems įrenginiams.

Kitas svarbus aspektas yra išmanieji įrenginiai, dar vadinami *IoT Internet of Things*. Tai įvairūs įrenginiai, kurie gali būti prijungti prie tinklo ir valdomi nuotoliniu būdu.

![iot devices](./assets/images/iot-devices.png)

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

![network diagnostics](./assets/images/network-diagnostics.png)

Tinklo diagnostika apima įvairius būdus ir įrankius, kurie padeda nustatyti problemos priežastį ir ją išspręsti.

Pirmiausia svarbu patikrinti pagrindinius dalykus. Ar įrenginys prijungtas prie tinklo, ar veikia *Wi-Fi*, ar tinkamai prijungti kabeliai. Dažnai problema būna labai paprasta.

Vienas dažniausiai naudojamų įrankių yra `ping`. Ši komanda leidžia patikrinti, ar įrenginys gali pasiekti kitą įrenginį tinkle.

Pavyzdžiui, naudojant komandą `ping 8.8.8.8` galima patikrinti, ar yra ryšys su išoriniu tinklu.

Šią komandą galima paleisti atsidarius `CMD` arba `PowerShell` ir įvedus

```powershell
ping 8.8.8.8
```

Komandos rezultatas

```powershell
Pinging google.com [142.251.38.110] with 32 bytes of data:
Reply from 142.251.38.110: bytes=32 time=75ms TTL=107
Reply from 142.251.38.110: bytes=32 time=80ms TTL=107
Reply from 142.251.38.110: bytes=32 time=85ms TTL=107
Reply from 142.251.38.110: bytes=32 time=101ms TTL=107

Ping statistics for 142.251.38.110:
    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),
Approximate round trip times in milli-seconds:
    Minimum = 75ms, Maximum = 101ms, Average = 85ms
```

Gauti rezultatai parodo, kaip vyksta ryšys su kitu įrenginiu. Kiekviena eilutė **Reply from reiškia**, kad paketas pasiekė tikslą ir buvo gautas atsakymas.

`bytes=32` nurodo siunčiamo paketo dydį, `time=108ms` parodo, per kiek laiko paketas nukeliavo iki serverio ir atgal, o `TTL=107` rodo, kiek dar paketui leidžiama keliauti tinkle prieš jam būnant sustabdytam.

Apačioje pateikiama papildoma informacija apie ryšį. **Sent** rodo, kiek paketų buvo išsiųsta, **Received** kiek jų buvo gauta, o **Lost** parodo, kiek paketų buvo prarasta. Jei praradimas yra `0%`, ryšys veikia stabiliai.

Paketai (*packet*) yra mažos duomenų dalys, kuriomis informacija siunčiama tinkle. Kiekvienas paketas turi siuntėjo ir gavėjo IP adresą, todėl gali būti nukreiptas į teisingą įrenginį.

**Minimum**, **Maximum** ir **Average** nurodo mažiausią, didžiausią ir vidutinį atsako laiką.

Jeigu rodomas atsakymas (`Reply from...`), tai reiškia, kad ryšys veikia.

Jeigu nerodomas atsakymas ir vietoje to pateikiamas **Request timed out**, tai reiškia, kad atsakymas nebuvo gautas ir gali būti ryšio problema.

Taip pat galima patikrinti domeną

```powershell
ping google.com
```

Jeigu ši komanda neveikia, gali būti DNS problema. Jeigu `ping 8.8.8.8` veikia, bet `ping google.com` neveikia, tai reiškia, kad yra DNS problema.

Jeigu atsakymas gaunamas, tai reiškia, kad ryšys veikia. Jei ne, gali būti ryšio problema.

Kitas naudingas įrankis yra `ipconfig`. Jis leidžia pamatyti įrenginio IP adresą ir kitą tinklo informaciją.

Šią informaciją galima peržiūrėti `CMD` aplinkoje įvedus

```cmd
ipconfig
```

Rezultatas

```cmd
Windows IP Configuration


Unknown adapter Local Area Connection:

   Media State . . . . . . . . . . . : Media disconnected
   Connection-specific DNS Suffix  . :

Ethernet adapter Ethernet:

   Media State . . . . . . . . . . . : Media disconnected
   Connection-specific DNS Suffix  . :

Ethernet adapter Ethernet 2:

   Media State . . . . . . . . . . . : Media disconnected
   Connection-specific DNS Suffix  . :

Ethernet adapter vEthernet (Default Switch):

   Connection-specific DNS Suffix  . :
   Link-local IPv6 Address . . . . . : fe80::91b3:ea51:aa73:f893%38
   IPv4 Address. . . . . . . . . . . : 172.31.192.1
   Subnet Mask . . . . . . . . . . . : 255.255.240.0
   Default Gateway . . . . . . . . . :

Unknown adapter OpenVPN Connect DCO Adapter:

   Media State . . . . . . . . . . . : Media disconnected
   Connection-specific DNS Suffix  . :

Wireless LAN adapter Local Area Connection* 1:

   Media State . . . . . . . . . . . : Media disconnected
   Connection-specific DNS Suffix  . :

Wireless LAN adapter Local Area Connection* 2:

   Media State . . . . . . . . . . . : Media disconnected
   Connection-specific DNS Suffix  . :

Wireless LAN adapter Wi-Fi:

   Connection-specific DNS Suffix  . :
   Link-local IPv6 Address . . . . . : fe80::eac8:bf:f171:1f9b%17
   IPv4 Address. . . . . . . . . . . : 192.168.20.109
   Subnet Mask . . . . . . . . . . . : 255.255.255.0
   Default Gateway . . . . . . . . . : 192.168.20.75
```

Rezultatas gali atrodyti skirtingai, tačiau informacija visada pateikiama pagal tinklo adapterius.

Kiekvienas blokas, pavyzdžiui **Ethernet adapter**, **Wireless LAN adapter Wi-Fi** ar **vEthernet**, nurodo skirtingą tinklo jungtį. Jei prie jos parašyta **Media disconnected**, tai reiškia, kad ta jungtis šiuo metu nenaudojama.

Svarbiausia informacija pateikiama prie aktyvaus adapterio, pavyzdžiui Wi-Fi. Aktyvus adapteris yra tas, kuris turi IP adresą ir nėra pažymėtas kaip **Media disconnected**.

Laukas **IPv4 Address** nurodo įrenginio adresą vietiniame tinkle, šiuo atveju `192.168.20.109`. Šis adresas leidžia kitiems įrenginiams tame pačiame tinkle rasti tavo kompiuterį.

**Subnet Mask** nurodo tinklo dydį ir padeda nustatyti, kurie įrenginiai priklauso tam pačiam tinklui.

**Default Gateway** nurodo maršrutizatorių, per kurį vyksta ryšys su internetu, šiuo atveju `192.168.20.75`.

Taip pat gali būti rodomas IPv6 adresas, kuris yra ilgesnis ir naudojamas naujesniuose tinkluose.

Ši informacija leidžia nustatyti, ar įrenginys turi teisingą IP adresą, ar yra prisijungęs prie tinklo ir ar gali pasiekti internetą.

arba `PowerShell` aplinkoje įvedus

```powershell
Get-NetIPAddress
```

Rezultatas

```powershell
IPAddress         : fe80::1f08:95cb:1dc4:96e4%38
InterfaceIndex    : 38
InterfaceAlias    : vEthernet (Default Switch)
AddressFamily     : IPv6
Type              : Unicast
PrefixLength      : 64
PrefixOrigin      : WellKnown
SuffixOrigin      : Link
AddressState      : Preferred
ValidLifetime     :
PreferredLifetime :
SkipAsSource      : False
PolicyStore       : ActiveStore
```

Gauti rezultatai parodo įrenginio tinklo informaciją. Laukas **IPAddress** nurodo įrenginio adresą tinkle, šiuo atveju tai yra `IPv6` adresas. Šis adresas naudojamas tam, kad kiti įrenginiai galėtų rasti tavo kompiuterį tinkle.

**InterfaceAlias** parodo, per kurią tinklo sąsają vyksta ryšys, pavyzdžiui, per **Wi-Fi**, **Ethernet** ar **virtualų tinklą**. Tai leidžia suprasti, kuri jungtis šiuo metu naudojama.

**AddressFamily** nurodo, ar naudojamas `IPv4` ar `IPv6`. `IPv4` yra senesnis ir dažniausiai trumpesnis, o `IPv6` yra naujesnis ir ilgesnis adresų tipas.

Laukas **Type** parodo adreso tipą. `Unicast` reiškia, kad adresas priklauso vienam konkrečiam įrenginiui.

**PrefixLength=64** nurodo, kuri adreso dalis priklauso tinklui, o kuri konkrečiam įrenginiui. Tai padeda tinklui teisingai nukreipti duomenis.

**AddressState** parodo, ar adresas yra aktyvus ir gali būti naudojamas. `Preferred` reiškia, kad adresas yra galiojantis ir naudojamas ryšiui.

`192.168.x.x` yra privatus IP adresas, naudojamas vietiniame tinkle ir nėra matomas internete.

Ši informacija leidžia nustatyti, ar įrenginys turi galiojantį IP adresą ir ar yra tinkamai prijungtas prie tinklo.

Rezultatai gali skirtis, nes skirtingi įrankiai pateikia informaciją skirtingu formatu. `ipconfig` dažniausiai rodo paprastesnę informaciją apie aktyvų tinklo adapterį, o `PowerShell` komanda `Get-NetIPAddress` pateikia detalesnę informaciją, įskaitant visus adresus ir papildomus laukus.

Taip pat gali būti rodomi keli tinklo adapteriai, todėl vienoje vietoje gali būti matomas `IPv4` adresas, o kitoje `IPv6`. Tai yra normalu, nes įrenginys gali turėti kelis adresus skirtingiems tinklams ar jungtims.

Norint pamatyti, kaip duomenys keliauja iki serverio, galima naudoti komandą.

```powershell
tracert google.com
```

Komandos išvestis

```powershell
Tracing route to google.com [142.251.38.110]
over a maximum of 30 hops:

  1     4 ms     3 ms     4 ms  192.168.20.75
  2     *        *        *     Request timed out.
  3    67 ms    48 ms    62 ms  10.115.184.1
  4    40 ms    46 ms    54 ms  tel444-fgw-1.ae1-213.tele2.net [213.100.43.38]
  5     *       39 ms    27 ms  212.151.29.20
  6   153 ms   101 ms   101 ms  212.151.29.21
  7     *       51 ms     *     vlna00-fgw-1.ae1-193.tele2.net [213.100.43.6]
  8    69 ms    51 ms    37 ms  c213-100-43-5.cust.tele2.se [213.100.43.5]
  9    69 ms    65 ms    44 ms  vlna00-bcore-1.bundle-ether5.tele2.net [130.244.130.62]
 10    79 ms    65 ms    47 ms  ada345-bcore-1.bundle-ether2.tele2.net [130.244.130.2]
 11    52 ms    48 ms    43 ms  ada345-agg-1.bundle-ether1.tele2.net [91.129.14.84]
 12    52 ms    57 ms    39 ms  hgd-cagg-1.bundle-ether11.tele2.net [91.129.14.224]
 13    82 ms    44 ms    55 ms  avk-core-2.bundle-ether3.tele2.net [91.129.12.24]
 14    69 ms    40 ms    40 ms  inx-peer-1.ae1-unit0.tele2.net [91.129.14.128]
 15    62 ms   102 ms    63 ms  72.14.214.82
 16    93 ms    61 ms    58 ms  216.239.42.15
 17    62 ms    77 ms    65 ms  142.251.65.83
 18    75 ms    68 ms    68 ms  lcarna-ac-in-f14.1e100.net [142.251.38.110]

Trace complete.
```

Gauti rezultatai parodo, kaip duomenys keliauja iki serverio. Kiekviena eilutė su numeriu rodo vieną tarpinių įrenginių etapą, per kurį keliauja duomenys. Tarpiniai įrenginiai yra **maršrutizatoriai**, kurie perduoda duomenis iš vieno tinklo į kitą, kol jie pasiekia galutinį serverį.

Kiekvienoje eilutėje pateikiami keli laikai, pavyzdžiui `4 ms`, `3 ms`, `4 ms`. Tai rodo, per kiek laiko signalas pasiekia tą įrenginį. Kuo šis laikas mažesnis, tuo ryšys greitesnis.

Pirmas įrašas dažniausiai yra tavo vietinis maršrutizatorius, pavyzdžiui `192.168.20.75`. Toliau rodomi interneto tiekėjo ir kitų tinklų įrenginiai, kol pasiekiamas galutinis serveris.

Jeigu vietoje laiko rodomas `*` ir pranešimas **Request timed out**, tai reiškia, kad tas įrenginys neatsakė. Tai nebūtinai yra klaida, nes kai kurie maršrutizatoriai neatsako į tokius užklausimus.

Paskutinė eilutė rodo galutinį serverį, šiuo atveju `google.com`, o užrašas **Trace complete** reiškia, kad kelias iki serverio buvo sėkmingai nustatytas.

Taip pat galima naudoti svetaines, kurios parodo išorinį IP adresą. Pavyzdžiui, galima apsilankyti svetainėje `https://whatismyipaddress.com` ir patikrinti savo viešą IP adresą.

Tinklo problemos gali būti įvairios

- nėra interneto ryšio  
- neteisingas IP adresas  
- neveikia maršrutizatorius (*router*)  
- silpnas *Wi-Fi* signalas  

Diagnostikos tikslas yra žingsnis po žingsnio patikrinti visus šiuos aspektus ir rasti problemos vietą.

Svarbu veikti nuosekliai. Pirmiausia tikrinamas įrenginys, tada tinklas, o galiausiai išorinis ryšys.

Diagnozuojant tinklą svarbu veikti nuosekliai. Pirmiausia tikrinamas ryšys su `ping 8.8.8.8`. Jei jis neveikia, problema gali būti interneto ryšyje. Jei veikia, bet neveikia `ping google.com`, problema gali būti DNS. Jei IP adresas nerodomas arba neteisingas, problema gali būti tinklo nustatymuose.

Trumpai galima įsiminti taip

- tikrink fizinį ryšį  
- naudok `ping` ryšiui patikrinti  
- naudok `ipconfig` IP informacijai  
- tikrink tinklo kelią su `tracert`  

Tinklo diagnostika leidžia greitai nustatyti ir išspręsti problemas, todėl yra svarbi kiekvieno tinklo naudotojo ir administratoriaus dalis.
